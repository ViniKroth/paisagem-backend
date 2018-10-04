#!/usr/bin/env bash

set -x
dir=/opt/docker/paisagem

# build web
cd $dir/web
pwd
nvm use 8.9.3
npm install
npm build
rm -rf $dir/api/build/
cp -r $dir/web/build/ $dir/api/
cd $dir/api
ls -la




