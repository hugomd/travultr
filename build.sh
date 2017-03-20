#!/usr/bin/env bash
rm -rf build
mkdir -p build/{lib,bin}
cp -R -f lib/ build/lib/
cp -R -f bin/ build/bin/
chmod +x build/bin/travultr.js
