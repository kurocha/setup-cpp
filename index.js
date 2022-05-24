
const os = require('os');
const core = require('@actions/core');
const {exec} = require('@actions/exec');

const Install = {
	linux: async function() {
		try {
			core.debug("Adding repositories...");
			await exec('sudo', ['apt-add-repository', '-y', 'ppa:ubuntu-toolchain-r/test']);
			
			core.debug("Fetching packages...");
			await exec('sudo', ['apt-get', '-yq', '--no-install-suggests', '--no-install-recommends', 'install', 'clang', 'libc++-dev', 'libc++abi-dev', 'nasm']);
		} catch (error) {
			core.setFailed(error.message);
		}
	}
};

async function main() {
	let platform = os.platform();
	let install = Install[platform];
	
	if (install) {
		await install();
	} else {
		core.debug(`Nothing to do for ${platform}!`);
	}
}

main();
