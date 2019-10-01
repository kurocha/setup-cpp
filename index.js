
const {system} = require('./shell');

async function main() {
	console.log("Adding repositories...")
	await system('sudo', ['apt-add-repository -y "ppa:ubuntu-toolchain-r/test"'])
	
	console.log("Fetching packages...")
	await system('sudo', ['apt-get -yq --no-install-suggests --no-install-recommends install clang libc++-dev libc++abi-dev nasm'])
}

main()
