import { $ } from './utils';

describe('Github', () => {
  beforeEach(async () => {
    await driver.get('https://github.com');
  });

  it('check', async () => {
    expect(await driver.getTitle()).toMatch(
      'leading software development platform'
    );
    expect(await $('.js-signup-form button').getText()).toBe(
      'Sign up for GitHub'
    );
  });
});
