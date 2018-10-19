#!/bin/bash

SERVER=$(basename `pwd`)

docker run -d \
  --name $SERVER \
  -P \
  -e "VIRTUAL_HOST=$SERVER" \
  -e "VIRTUAL_PORT=8080" \
  -e "LETSENCRYPT_HOST=$SERVER" \
  -e "LETSENCRYPT_EMAIL=gaetan@data2viz.io" \
  $SERVER
