#!/bin/bash
for filename in src/scss/groups/*.scss; do
  [ -e "$filename" ] || continue
  echo "Compiling $filename to $(basename "$filename" .scss).css"
  npx sass --style=compressed "$filename" "public/css/$(basename "$filename" .scss).css"
done
npm run build
