#!/usr/bin/env bash
rm -rf build
mkdir -p build/{lib,bin}
cp -R -f lib/ build/lib/
cp -R -f bin/ build/bin/

for i in build/bin/server/*.js; do mv "$i" "${i/server\//travultr-server-}" ; done
rm -rf build/bin/server/

chmod +x build/bin/travultr.js
