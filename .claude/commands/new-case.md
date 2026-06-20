---
description: Intake — interview the founder, web-research the domain, and draft 00-CONTEXT.md with sources for confirmation.
---
Bootstrap `docs/business-model/00-CONTEXT.md` for a new business case. You do this yourself
(orchestrator), not via a subagent, because it is interactive.

If `docs/business-model/00-CONTEXT.md` already exists and has real content (no `<FILL>` slots),
STOP and ask before overwriting.

Steps:
1. **Interview the founder** for the domain frame. Ask in a few compact batches, not one slot at
   a time. Collect: the business in one line; the wedge and what the commodity in this space is;
   committed decisions; product category; customer unit (the countable buyer); segments /
   geographies + staging order; why-now driver (regulatory | technological | behavioral |
   economic); jurisdiction; entity structure; and the founder's own sense of the biggest risks.
   Use what `docs/business-model/00-CONTEXT.template.md` lists as the field guide.
2. **Web-research the verified facts.** Use WebSearch/WebFetch to find and cite: market sizing
   inputs for the customer unit, the why-now evidence (regulatory dates, tech/behavioral shifts),
   real competitor facts, and any cost benchmarks. Every fact gets a source URL, an as-of date,
   and a confidence. **No invented evidence** — if you cannot source a claim, tag it
   `[ASSUMPTION]` or `[NEEDS HUMAN INPUT]`, do not state it as fact.
3. **Draft `docs/business-model/00-CONTEXT.md`** from the template: fill the domain frame and the
   verified-facts section; keep the four non-negotiable rules verbatim; seed the six canonical
   Human Gates with the founder's answers where given and `TODO` otherwise. You MAY append
   case-specific gates below the canonical six, but you author only the QUESTIONS — never the
   answers.
4. **Present the draft for confirmation.** Show the founder the filled frame and the sourced
   facts, and explicitly ask them to correct anything before any workstream runs. Do not start a
   wave from `/new-case`.

Hard rule: the founder owns the Human Gate answers and the committed decisions. You draft facts
(with sources) and questions; you never guess an answer only the founder can give.
