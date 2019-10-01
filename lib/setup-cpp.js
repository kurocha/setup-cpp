'use strict';

const {spawn} = require('child_process');

spawn('sudo', ['apt-add-repository -y "ppa:ubuntu-toolchain-r/test"'])
spawn('sudo', ['apt-get -yq --no-install-suggests --no-install-recommends install clang libc++-dev libc++abi-dev nasm'])
