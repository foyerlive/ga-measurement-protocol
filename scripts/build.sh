#!/bin/sh

# build ES5 modules to lib
node_modules/.bin/rimraf lib
NODE_ENV=production babel src --out-dir lib
