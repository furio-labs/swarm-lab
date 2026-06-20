---
description: Run the capstone publication agent to write the white paper and post from MEASURED data.
---
Preconditions: confirm all waves are PASS/rebutted in `STATUS.md` and that `BEAR-CASE.md`
exists (run `/redteam` first if not), and that `docs/business-model/TOKENS-SUMMARY.md` has
real numbers (run `/cost` to sanity-check against Claude Code's own total).

Then invoke the `publication-writer` subagent. It must use ONLY the measured numbers in
`TOKENS.md` / `TOKENS-SUMMARY.md`. After it returns:
- Append a final entry to `RUN-LOG.md` marking publication complete.
- Remind me that `publication-writer`'s OWN token cost was just logged by the SubagentStop hook
  as the latest row in `TOKENS.md`, and can be added to the white paper economics as a footnote.
