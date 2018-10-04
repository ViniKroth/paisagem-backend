#!/usr/bin/env bash

# build web
cd /opt/docker/paisagem/web
nvm use 8.9.3
npm install
npm build
cp /opt/docker/paisage/web/build /opt/docker/paisage/api

#build api
cd /opt/docker/paisage/api
