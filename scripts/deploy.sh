#!/usr/bin/env bash
# One-shot production deploy for liang-yue-portfolio (Vercel)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Building locally..."
npm run build

echo "→ Checking Vercel login..."
if ! npx vercel whoami >/dev/null 2>&1; then
  echo "Not logged in. Opening browser — use designer.liangyue@gmail.com"
  npx vercel login
fi

echo "→ Deploying to production..."
npx vercel deploy --prod --yes

echo ""
echo "Done. Copy the Production URL from the output above."
echo "Optional: connect GitHub in Vercel dashboard for auto-deploy on push."
