---
description: Run an entire dependency wave — builders in parallel, then challenge+revise each.
argument-hint: <wave number 1-4>
---
Run Wave **$ARGUMENTS**. Read `docs/business-model/00-CONTEXT.md` and confirm the prior wave is
PASS/rebutted in `STATUS.md`; if not, stop and say so. If the context still has `<FILL>` slots or
unanswered gates that block this wave, stop and point to `/new-case` or `/gate-check`.

Wave membership:
- 1 -> ws1, ws2
- 2 -> ws3, ws4, ws5
- 3 -> ws6, ws7, ws9
- 4 -> ws8, ws11   (ws11 only after ws8 and all prior waves pass)

Steps:
1. Invoke the wave's builder subagents IN PARALLEL (one message, multiple Task calls); each
   writes its `docs/business-model/<ws-id>.md`. The SubagentStop hook logs each one's measured
   tokens automatically.
2. Invoke `red-team-partner` on each; each gets a `.challenge.md`.
3. For each FAIL, re-invoke that builder to revise, then re-challenge (max 3 rounds), then
   escalate.
4. Append a wave summary to `RUN-LOG.md` (per-WS verdict, rounds, open `[NEEDS HUMAN INPUT]`)
   and update `STATUS.md`.

Do not write token numbers yourself — hooks own those. Do not advance to the next wave
automatically; stop and report.
