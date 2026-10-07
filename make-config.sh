#!/bin/sh
# Genera config.js dal .env (URL base + chiave publishable, pubblica per natura). Uso: sh make-config.sh
cd "$(dirname "$0")"
URL=$(grep '^SUPABASE_URL=' .env | cut -d= -f2- | tr -d ' "\r' | sed -E 's#(\.supabase\.co).*#\1#')
KEY=$(grep '^SUPABASE_ANON_KEY=' .env | cut -d= -f2- | tr -d ' "\r')
printf 'export const SUPABASE_URL = "%s";\nexport const SUPABASE_KEY = "%s";\n' "$URL" "$KEY" > config.js
echo "config.js ok"
