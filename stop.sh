#!/bin/bash

SERVER=$(basename `pwd`)

docker rm -f $SERVER
