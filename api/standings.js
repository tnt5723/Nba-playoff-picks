// Vercel serverless function: fetches ESPN standings server-side (no CORS issues)
// and caches at Vercel's edge for 5 minutes.
const pct = t => (t.w + t.l ? t.w / (t.w + t.l) : 0);

export default async function handler(req, res) {
  const season = req.query.season || "2027";
  try {
    const r = await fetch(`https://site.api.espn.com/apis/v2/sports/basketball/nba/standings?season=${season}&seasontype=2`);
    if (!r.ok) throw new Error(`ESPN ${r.status}`);
    const d = await r.json();
    const out = { updated: new Date().toISOString() };
    for (const c of d.children) {
      out[c.abbreviation.toLowerCase()] = c.standings.entries.map(e => {
        const s = Object.fromEntries(e.stats.map(x => [x.name, x.displayValue ?? x.value]));
        return { abbr: e.team.abbreviation, name: e.team.displayName, short: e.team.shortDisplayName,
                 color: e.team.color ? '#' + e.team.color : null,
                 seed: +s.playoffSeed, w: +s.wins, l: +s.losses, gb: s.gamesBehind, streak: s.streak };
      }).sort((a, b) => (a.seed || 99) - (b.seed || 99) || pct(b) - pct(a))
        .map((t, i) => ({ ...t, seed: i + 1 })); // ESPN playoff seeds (play-in decides 7/8); record only used before seeds exist
    }
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    res.status(200).json(out);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
}
