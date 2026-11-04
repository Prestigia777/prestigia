#!/usr/bin/env bash
# Copie le site dans _site/ en retirant les fichiers internes.
# Ces fichiers restent dans le dépôt GitHub, mais ne sont jamais publiés en ligne.
set -euo pipefail

rm -rf _site
mkdir _site

tar -cf - \
  --exclude='./.git' \
  --exclude='./_site' \
  --exclude='./netlify.toml' \
  --exclude='./netlify-build.sh' \
  --exclude='./CLAUDE.md' \
  --exclude='./prestigia-brief-claude-code.md' \
  --exclude='./Prestigia.vip_code_soucre.html' \
  --exclude='./_templates' \
  --exclude='./_archive' \
  --exclude='*.py' \
  . | tar -xf - -C _site

echo "Fichiers publiés : $(find _site -type f | wc -l)"
