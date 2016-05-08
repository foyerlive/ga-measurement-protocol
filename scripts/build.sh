#!/bin/sh

# build ES5 modules to lib
NODE_ENV=production babel src --out-dir lib
