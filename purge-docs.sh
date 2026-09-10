#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

# Guard: make sure it runs from the project root
if [ ! -f "src/components/index.ts" ] || [ ! -f "src/router/index.ts" ]; then
  echo "error: run purge-docs.sh from the project root (src/components/index.ts / src/router/index.ts not found)" >&2
  exit 1
fi

rm -rf README.md src/components/docs src/layouts/documentation src/views/documentation src/router/documentation

# Portable sed -i (GNU + BSD/macOS): use a .bak backup then remove it
sed -i.bak "/useDoc/d" src/components/index.ts
rm -f src/components/index.ts.bak

sed -i.bak "/documentationRoutes/d" src/router/index.ts
rm -f src/router/index.ts.bak

# Remove the "View Documentation" button linking to /documentation (avoid 404)
if [ -f "src/views/home/page-home.vue" ]; then
  sed -i.bak '/<router-link/,/<\/router-link>/d' src/views/home/page-home.vue
  rm -f src/views/home/page-home.vue.bak
fi

echo "Docs purged. Run: bun run type-check && bun run build-only to verify."
