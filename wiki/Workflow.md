# Workflow

## The build → challenge → revise loop (per workstream)

Every workstream runs the same cycle. A deliverable is only accepted on `PASS`, or after a
capped number of revision rounds with a logged rebuttal.

```mermaid
flowchart LR
    S(["/build-ws or /run-wave"]) --> B["Builder writes wsN.md"]
    B --> C["red-team writes<br/>wsN.challenge.md"]
    C --> V{"VERDICT?"}
    V -->|FAIL| RV["Builder revises in place<br/>(≤ 3 rounds)"]
    RV --> C
    V -->|PASS| U["Update STATUS.md<br/>+ RUN-LOG.md"]
    V -->|"3 rounds & still FAIL"| E["Escalate to founder<br/>(logged rebuttal)"]
    U --> Z(["done"])
    E --> Z
```

## Dependency waves

Workstreams are grouped into four waves. **A wave starts only when the prior wave is
PASS/rebutted; within a wave, builders run concurrently.** The arrows are the real data reads —
e.g. ws5 carries ws1/ws2 inputs, ws8 reconciles against ws5 + ws6, and ws11 synthesizes only
from artifacts that passed the red team.

```mermaid
flowchart TD
    subgraph WAVE1["Wave 1 — base"]
        ws1["ws1 market"]
        ws2["ws2 icp / jtbd"]
    end
    subgraph WAVE2["Wave 2"]
        ws3["ws3 product / moat"]
        ws4["ws4 competition"]
        ws5["ws5 unit-econ"]
    end
    subgraph WAVE3["Wave 3"]
        ws6["ws6 gtm"]
        ws7["ws7 compliance / legal"]
        ws9["ws9 team / fmf"]
    end
    subgraph WAVE4["Wave 4 — last"]
        ws8["ws8 financials"]
        ws11["ws11 narrative — reads all PASSed"]
    end
    ws1 --> ws5
    ws2 --> ws5
    ws5 --> ws8
    ws6 --> ws8
    ws8 --> ws11
```

> **red-team-partner is continuous** — it challenges *every* workstream in every wave (it is the
> implicit "ws10"). It is omitted from the arrows above only to keep the dependency picture
> readable.

## Capstone

After all waves pass, `/redteam` writes the consolidated `BEAR-CASE.md` (the strongest memo
*against* funding), then `/publish` runs `publication-writer` to produce `WHITE-PAPER.md` and
`SUBSTACK-POST.md` from the **measured** token ledger — `[NO DATA]` wherever a figure is missing,
never an estimate.
