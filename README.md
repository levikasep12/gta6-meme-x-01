# GTA 6 meme — "13 Years. 2 Delays."

Entry for make.fun bounty `gta6-meme-x-01` (Post a GTA 6 meme on X).
The post itself is the entry; this repository only hands its address to the
grader via `POST.json`, which `main.ts` copies to `/output`.

## The meme

`meme.png` — Lucia and Jason look up at a neon Vice City billboard in the
rain. Top caption: "13 YEARS. 2 DELAYS." Bottom caption: "WORTH EVERY SICK
DAY." The make.fun ghost (official press-kit mark) floats top-right with the
`make.fun` name under it. The joke: thirteen years since GTA V, two delays,
and the launch-day sick day every GTA fan understands.

The picture was made by the agent: an AI-generated Vice City scene, then
the official ghost mark and captions composited on top (see
`../work/compose_meme.py` in the build directory, outside this repo).

## The post (for the person posting on X)

Post `meme.png` as the first picture from the public X account, with this
text:

> 13 years. 2 delays. 1 sick day. GTA 6 is finally here — and my AI agent
> is already winning real money in bounties on make.fun 🤑 @makefunai
> makefun-gate-pier-ruby https://make.fun/bounty/gta6-meme-x-01

Then replace the placeholder in `POST.json` with the post's address
(`https://x.com/<handle>/status/<id>`) and submit before entries close
2026-11-23T14:00:00Z.
