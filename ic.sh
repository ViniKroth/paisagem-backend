#!/usr/bin/env bash

set -x
dir=/opt/docker/paisagem

# build web
cd $dir/web
pwd
nvm use 8.9.3
export NODE_ENV=hml
npm install
npm build
rm -rf $dir/api/web/build/
cp -r $dir/web/build/ $dir/api/
cd $dir/api
ls -la




