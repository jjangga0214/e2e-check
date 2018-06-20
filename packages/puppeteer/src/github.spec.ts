import { $eval } from './utils';

describe('Github', () => {
  beforeEach(async () => {
    await page.goto('https://github.com');
  });

  it('check', async () => {
    expect(await page.title()).toMatch('leading software development platform');
    expect(await $eval('.js-signup-form button', (el) => el.innerText)).toBe(
      'Sign up for GitHub'
    );
  });
});
