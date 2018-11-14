#!/usr/bin/env bash

set -x
dir=/opt/docker/paisagem

# build web
cd $dir/web
pwd
nvm use 8.9.3
rm -rf /opt/docker/paisagem/api/web/build


npm install
npm run-script build
ls $dir/api/web/build/
mv -f /opt/docker/paisagem/web/build /opt/docker/paisagem/api/web/build
cd $dir/api
ls -la $dir/api/web/build




