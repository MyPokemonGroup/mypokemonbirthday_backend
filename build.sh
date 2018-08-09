#!/usr/bin/env bash
rm -rf build

if [ ! -d "$build" ]; then
  mkdir build
fi

./node_modules/.bin/babel src --out-dir build
