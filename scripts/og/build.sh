#!/usr/bin/env bash
# Renders the social preview images (public/og-en.png, public/og-es.png) from template.html
# with headless Chrome, using the site's own fonts and portrait.
#
#   npm run og
set -euo pipefail

root="$(cd "$(dirname "$0")/../.." && pwd)"
template="$root/scripts/og/template.html"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

[ -x "$chrome" ] || { echo "Chrome not found; set CHROME to its binary" >&2; exit 1; }

for lang in en es; do
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --window-size=1200,630 --virtual-time-budget=3000 \
    --screenshot="$root/public/og-$lang.png" "file://$template?lang=$lang" 2>/dev/null
  echo "wrote public/og-$lang.png"
done
