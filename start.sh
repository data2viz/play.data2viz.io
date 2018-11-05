#!/bin/bash

SERVER=$(basename `pwd`)

docker run -d -m512M --cpus 2 \
  --name $SERVER \
  --net front \
  -P \
  -e "VIRTUAL_HOST=$SERVER" \
  -e "VIRTUAL_PORT=8080" \
  -e "LETSENCRYPT_HOST=$SERVER" \
  -e "LETSENCRYPT_EMAIL=gaetan@data2viz.io" \
  $SERVER
