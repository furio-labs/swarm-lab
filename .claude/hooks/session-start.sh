#!/usr/bin/env bash
PROJ="${CLAUDE_PROJECT_DIR:-$(pwd)}"
mkdir -p "$PROJ/docs/business-model"
printf '\n--- session start %s ---\n' "$(date -u +%FT%TZ)" >> "$PROJ/docs/business-model/RUN-LOG.md"
exit 0
