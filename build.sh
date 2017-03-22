#!/usr/bin/env bash
rm -rf build
mkdir -p build/{lib,bin}
cp -R -f lib/ build/
cp -R -f bin/ build/
chmod +x build/bin/travultr.js
