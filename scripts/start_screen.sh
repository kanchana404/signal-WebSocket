#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./scripts/start_screen.sh tg-signal
# Requires env vars to be set or a .env file present in project root.

SESSION_NAME=${1:-tg-signal}

if [ -f .env ]; then
  # shellcheck disable=SC2046
  export $(grep -v '^#' .env | xargs -d '\n')
fi

if [ -z "${TELEGRAM_BOT_TOKEN:-}" ]; then
  echo "ERROR: TELEGRAM_BOT_TOKEN is not set. Export it or create a .env file."
  exit 1
fi

export WS_PORT=${WS_PORT:-9001}
export HTTP_PORT=${HTTP_PORT:-9002}
export PUBLIC_BASE_URL=${PUBLIC_BASE_URL:-http://localhost:${HTTP_PORT}}

echo "Starting screen session: ${SESSION_NAME} (WS=${WS_PORT}, HTTP=${HTTP_PORT})"

screen -dmS "${SESSION_NAME}" bash -lc 'npm start'

echo "Use: screen -r ${SESSION_NAME} to attach; Ctrl+A then D to detach."


