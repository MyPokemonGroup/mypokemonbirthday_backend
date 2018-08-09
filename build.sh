#!/usr/bin/env bash
rm -rf build

if [ ! -d "$build" ]; then
  mkdir build
fi

./node_modules/babel-cli/bin/babel.js src --out-dir build
