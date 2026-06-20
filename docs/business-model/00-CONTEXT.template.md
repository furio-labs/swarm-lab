# 00 — Shared Context (ground truth for all agents)

> **This is the ONE file you complete.** Every agent reads it first and takes its
> domain from the slots below. Fill every `<FILL: …>` slot, then delete this quote block.
> Two ways to fill it: (a) edit by hand, or (b) run `/new-case`, which interviews you,
> web-researches the facts, and drafts this file for you to confirm.
> Rename this file to `00-CONTEXT.md` once you start (agents read `00-CONTEXT.md`).

## The business (committed decisions)
- **What it is:** <FILL: one or two sentences — the company/product in plain language.>
- **The wedge:** <FILL: the specific thing you do that is NOT a commodity. State what the
  commodity in this space is, and why your wedge is not that.>
- **Committed decisions:** <FILL: things you have already decided and will defend — business
  model shape, what you will and won't build, entity choices. Bullet them.>

## Domain frame (the slots every agent interpolates)
> Keep these tight and concrete — they are injected into every workstream's reasoning.

- **Product category:** <FILL: e.g. "compliance infrastructure", "vertical SaaS", "marketplace".>
- **Customer unit (the countable buyer):** <FILL: the thing you count for a bottom-up market
  model — e.g. "regulated banks in country X", "SMB retailers", "independent clinics". NOT "everyone".>
- **Segments / geographies + staging order:** <FILL: which markets/segments, in what order you
  attack them. e.g. "Country A first (urgency now) → Country B (pipeline) → Country C (expansion)".>
- **Why-now driver:** <FILL: pick the dominant one and say why it is live NOW —
  regulatory | technological | behavioral | economic.>
- **Commodity layer:** <FILL: the part of this space that is already commoditized / owned by
  incumbents — the thing your moat must NOT be.>
- **Jurisdiction:** <FILL: the legal jurisdiction(s) that govern entity, contracts, compliance.>
- **Entity structure:** <FILL: standalone? spin-out? studio-minority? cap-table shape if decided.
  Write `[NONE DECIDED]` if open.>
- **Candidate risks (seeds the red team's kill-shots):** <FILL: the 3–6 strongest reasons an
  investor would pass. Be honest — the red team will find these anyway; naming them sharpens it.>

## Verified facts (sourced — do not let agents invent these)
> Each fact: the claim, a source URL, the as-of date, and your confidence. These are the
> ground truth agents must not contradict without a newer source. `/new-case` drafts these
> with citations for you to confirm.

- <FILL: claim> — source: <URL> — as of: <YYYY-MM> — confidence: <high|med|low>
- <FILL: claim> — source: <URL> — as of: <YYYY-MM> — confidence: <high|med|low>
- <FILL: add as many as matter; market size, regulatory dates, competitor facts, cost benchmarks.>

## Non-negotiable rules (constant — do not edit)
1. No invented evidence (sourced with URL, or tagged `[ASSUMPTION]` / `[NEEDS HUMAN INPUT]`).
2. Flag unknowns; never fill a Human Gate with a guess.
3. Commit to decisions, not option menus.
4. Nothing is done until the red team fails to kill it or a rebuttal is logged.

## HUMAN GATES — only the founder answers. Agents MUST NOT invent these.
> Canonical venture-diligence questions. Fill each ANSWER. Leave `TODO` if genuinely unknown —
> a well-flagged `TODO` is acceptable; a confident guess is not. `/new-case` may append
> case-specific gates below the canonical six.

1. **Traction** — Any customer/user in production, piloting, or in active conversation? What stage?
   ANSWER: <FILL or TODO>
2. **Reach** — Which specific prospects / partners / channels can you actually get a meeting with?
   ANSWER: <FILL or TODO>
3. **Posture / credentials** — What trust, compliance, security, or track-record posture do you
   have today (certs, prior wins), or none?
   ANSWER: <FILL or TODO>
4. **Buyer / user side** — Who exactly is the buyer/user, and who holds the budget / makes the call?
   ANSWER: <FILL or TODO>
5. **Product reality** — What does the product actually do TODAY vs. roadmap?
   ANSWER: <FILL or TODO>
6. **Geography / segment** — Which market or segment first, then which next?
   ANSWER: <FILL or TODO>
