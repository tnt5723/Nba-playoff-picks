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
    { name: "Taylor", west: ["SA","OKC","DEN","HOU","MIN","LAL","POR","DAL"], east: ["BOS","DET","NY","IND","PHI","TOR","CLE","MIA"], worst: { team: "SAC",  wins: 22 } },
    { name: "Adam",   west: ["OKC","SA","MIN","DEN","HOU","LAL","UTAH","DAL"], east: ["PHI","BOS","NY","MIA","TOR","CLE","DET","IND"], worst: { team: "LAC",  wins: 24 } },
    { name: "Gen",    west: ["OKC","SA","DEN","HOU","MIN","PHX","POR","UTAH"], east: ["DET","NY","CLE","BOS","PHI","TOR","IND","MIA"], worst: { team: "BKN",  wins: 22 } },
    { name: "Luis",   west: ["OKC","SA","HOU","MIN","DEN","LAL","UTAH","DAL"], east: ["NY","CLE","DET","TOR","PHI","IND","MIA","ATL"], worst: { team: "BKN",  wins: 25 } },
    { name: "Kyle",   west: ["OKC","SA","DEN","HOU","MIN","LAL","POR","PHX"],  east: ["NY","BOS","DET","PHI","CLE","TOR","IND","ORL"], worst: { team: "BKN",  wins: 22 } }
  ]
};
