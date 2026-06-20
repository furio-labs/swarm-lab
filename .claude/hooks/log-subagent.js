#!/usr/bin/env node
// SubagentStop hook. Measures token usage for the finished subagent by parsing its OWN
// transcript (agent_transcript_path). No self-reporting. Depends only on Node (required by Claude Code).
const fs = require('fs'), os = require('os'), path = require('path');
let raw = ''; try { raw = fs.readFileSync(0, 'utf8'); } catch (e) {}
const proj = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const L = path.join(proj, 'docs', 'business-model');
try { fs.mkdirSync(L, { recursive: true }); } catch (e) {}
const ts = new Date().toISOString();
let input = {}; try { input = JSON.parse(raw || '{}'); } catch (e) {}
const agent = input.agent_type || 'unknown';
const agentId = input.agent_id || 'unknown';
let tp = input.agent_transcript_path || '';
if (tp.startsWith('~')) tp = path.join(os.homedir(), tp.slice(1));
let i=0,o=0,cr=0,cw=0,model='unknown';
try {
  if (tp && fs.existsSync(tp)) {
    for (const ln of fs.readFileSync(tp,'utf8').split('\n')) {
      if (!ln.trim()) continue;
      let m; try { m = JSON.parse(ln); } catch (e) { continue; }
      const u = m && m.message && m.message.usage; if (!u) continue;
      i += u.input_tokens||0; o += u.output_tokens||0;
      cr += u.cache_read_input_tokens||0; cw += u.cache_creation_input_tokens||0;
      if (m.message.model) model = m.message.model;
    }
  }
} catch (e) {}
let ip=3, op=15;
if (/opus/.test(model)) { ip=5; op=25; } else if (/haiku/.test(model)) { ip=1; op=5; }
const cost = (i/1e6*ip)+(o/1e6*op)+(cr/1e6*ip*0.1)+(cw/1e6*ip*1.25);
const c = cost.toFixed(4);
try {
  fs.appendFileSync(path.join(L,'TOKENS.jsonl'), JSON.stringify({ts,agent,agent_id:agentId,model,input:i,output:o,cache_read:cr,cache_write:cw,cost_usd:Number(c)})+'\n');
  fs.appendFileSync(path.join(L,'TOKENS.md'), `| ${ts} | ${agent} | ${model} | ${i} | ${o} | ${cr+cw} | $${c} |\n`);
  fs.appendFileSync(path.join(L,'RUN-LOG.md'), `- ${ts} — subagent **${agent}** (${model}): ${i} in / ${o} out tok, ~$${c}\n`);
} catch (e) {}
process.exit(0);
