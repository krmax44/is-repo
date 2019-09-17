import { expect } from 'chai';
import isRepo from '..';
import 'mocha';

describe('basic file stats', () => {
	it('should return the correct status', async () => {
		const yes = await isRepo();
		const no = await isRepo('/home');

		expect(yes).to.equal(true);
		expect(no).to.equal(false);
	});
});
