---
description: Run one workstream end to end — build, challenge, revise — until PASS or logged rebuttal.
argument-hint: <ws-id>  e.g. ws3
---
Run the full build cycle for workstream **$ARGUMENTS**.

1. Map `$ARGUMENTS` to its builder subagent (e.g. ws3 -> ws3-product-architect) and invoke it.
   It writes `docs/business-model/$ARGUMENTS.md`. (The SubagentStop hook auto-logs its tokens.)
2. Invoke `red-team-partner` on `$ARGUMENTS`; it writes `$ARGUMENTS.challenge.md` ending in
   `VERDICT: PASS|FAIL`.
3. If FAIL: re-invoke the builder with the challenge file; it revises in place. Re-challenge.
   Max 3 rounds, then escalate unresolved disputes to me.
4. Append a semantic entry to `docs/business-model/RUN-LOG.md`:
   `- <ts> WS $ARGUMENTS: round <n>, VERDICT <pass/fail>, notes ...`
   and update `STATUS.md`.

Token lines in RUN-LOG/TOKENS are written by hooks — do not write token numbers yourself.
Never let a builder invent a Human Gate answer.
