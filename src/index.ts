import { spawn } from 'child_process';

/**
 * @param cwd Current working directory.
 * @default cwd process.cwd()
 */
export default async function isRepo(cwd?: string): Promise<boolean> {
	return new Promise(resolve => {
		if (!cwd) {
			cwd = process.cwd();
		}

		const gitProcess = spawn('git', ['rev-parse', '--is-inside-work-tree'], {
			cwd
		});

		gitProcess.stdout.on('data', (data: Buffer) => {
			if (data.toString().includes('true')) {
				resolve(true);
			}

			resolve(false);
		});

		gitProcess.on('error', () => {
			resolve(false);
		});

		gitProcess.stderr.on('data', () => {
			resolve(false);
		});
	});
}

if (typeof module !== 'undefined') {
	module.exports = isRepo;
	module.exports.default = isRepo;
	module.exports.isRepo = isRepo;
}
