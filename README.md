# Standings Picks — deploy to Vercel (one time, ~10 minutes)

1. Make a free GitHub account (github.com) if you don't have one.
2. New repository -> name it `standings-picks` -> Create.
3. On the repo page: "uploading an existing file" -> drag in EVERYTHING in this folder
   (index.html, picks.js, vercel.json, package.json, README.md, and the api + heads folders) -> Commit.
4. Go to vercel.com -> "Sign up / Continue with GitHub".
5. "Add New... -> Project" -> Import `standings-picks` -> leave all settings default -> Deploy.
6. You get a link like `standings-picks.vercel.app`. Send it to the group.
   (Project Settings -> Domains lets you rename it, e.g. `dad-picks-2027.vercel.app`.)

## Each season / when picks come in
Edit `picks.js` on GitHub (pencil icon) -> Commit. Vercel redeploys automatically in ~30 seconds.

## Big heads
Upload a square-ish photo to `heads/` (e.g. `heads/kyle.jpg`) and set `head: "heads/kyle.jpg"` on that person in picks.js.

## Preview with fake picks
Add `?demo` to the end of the URL.
