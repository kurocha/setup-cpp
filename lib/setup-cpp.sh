#!/usr/bin/env bash

sudo -E apt-add-repository -y "ppa:ubuntu-toolchain-r/test"
sudo -E apt-get -yq --no-install-suggests --no-install-recommends install clang libc++-dev libc++abi-dev nasm
