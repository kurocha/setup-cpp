
const {debug} = require('@actions/core');
const {exec} = require('@actions/exec');

async function main() {
	try {
		debug("Adding repositories...");
		await exec('sudo', ['apt-add-repository', '-y', 'ppa:ubuntu-toolchain-r/test']);
		
		debug("Fetching packages...");
		await exec('sudo', ['apt-get', '-yq', '--no-install-suggests', '--no-install-recommends', 'install', 'clang', 'libc++-dev', 'libc++abi-dev', 'nasm']);
	} catch (error) {
		core.setFailed(error.message);
	}
}

main()
