
const {spawn} = require('child_process');

async function system(command, arguments) {
	const child = spawn(command, arguments, {stdio: 'inherit'});
	
	const promise = new Promise((resolve, reject) => {
		child.on('error', reject);
		child.on('exit', status => {
			if (status === 0) {
				resolve(status)
			} else {
				const error = new Error(`child failed with status ${status}`)
				error.status = status
				reject(error)
			}
		})
	});
	
	await promise;
}

module.exports = {
	system: system
}
