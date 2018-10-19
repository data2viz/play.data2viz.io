#!/bin/bash

SERVER=$(basename `pwd`)

docker run -u root --rm \
    -v ~/.gradle:/home/gradle/.gradle \
    -v "$PWD":/home/gradle/project \
    -w /home/gradle/project \
    gradle:4.7-jdk8 gradle build

docker build -t $SERVER back

