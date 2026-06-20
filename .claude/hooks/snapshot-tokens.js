#!/usr/bin/env node
const fs = require('fs'), path = require('path');
const proj = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const L = path.join(proj, 'docs', 'business-model');
const f = path.join(L, 'TOKENS.jsonl');
if (!fs.existsSync(f)) process.exit(0);
const rows = fs.readFileSync(f,'utf8').split('\n').filter(Boolean)
  .map(l => { try { return JSON.parse(l); } catch (e) { return null; } })
  .filter(r => r && r.input != null);
const sum = k => rows.reduce((a,r)=>a+(r[k]||0),0);
const cost = rows.reduce((a,r)=>a+(r.cost_usd||0),0);
const out = `# Token Summary (auto-generated — MEASURED, not estimated)

Runs logged: ${rows.length}

| Metric | Value |
|---|---|
| Input tokens | ${sum('input')} |
| Output tokens | ${sum('output')} |
| Cache read | ${sum('cache_read')} |
| Cache write | ${sum('cache_write')} |
| Est. cost (USD) | $${cost.toFixed(2)} |

_Per-message usage x standard rates. Excludes the publication step if still running. Cross-check with /cost._
`;
try { fs.writeFileSync(path.join(L,'TOKENS-SUMMARY.md'), out); } catch (e) {}
process.exit(0);
