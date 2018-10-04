#!/usr/bin/env bash

# build web
cd /opt/docker/paisagem/web
nvm use 8.9.3
npm install
npm build
cp /opt/docker/paisagem/web/build /opt/docker/paisagem/api

#build api
cd /opt/docker/paisagem/api
