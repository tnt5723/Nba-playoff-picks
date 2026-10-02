// ===================== THE ONLY FILE YOU EDIT EACH SEASON =====================
// Picks are seed 1 -> 8, using ESPN abbreviations:
//   East: ATL BKN BOS CHA CHI CLE DET IND MIA MIL NY ORL PHI TOR WSH
//   West: DAL DEN GS HOU LAC LAL MEM MIN NO OKC PHX POR SA SAC UTAH
// worst: { team: "WSH", wins: 19 }  -> basement bet (worst team + its win total)
// head: optional photo in heads/ for the big-head cards (top 2 only).
window.CONTEST = {
  title: "Standings Picks",
  season: 2027,                 // 2026-27 season
  pointsPerSlot: 8,
  outsideTop8: "full",          // "full" = 9th-15th still scores by distance; "top8" = scores 0
  history: [
    { season: "2025-26", name: "Adam", score: 83 },
    { season: "2024-25", name: "Gen",  score: 91 },
    { season: "2023-24", name: "Kyle", score: 86 },
    { season: "2022-23", name: "Luis", score: 99 }
  ],
  players: [
    // { name: "Taylor", head: "heads/taylor.jpg",
    //   west: ["OKC","DEN","SA","HOU","MIN","LAL","GS","LAC"],
    //   east: ["CLE","NY","BOS","DET","ORL","IND","MIL","ATL"],
    //   worst: { team: "WSH", wins: 19 } },
  ]
};
