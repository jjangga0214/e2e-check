import { $eval } from './utils';

describe('Google', () => {
  beforeEach(async () => {
    await page.goto('https://www.google.com/ncr');
  });

  it('check', async () => {
    expect(await page.title()).toBe('Google');
    expect(
      await $eval<HTMLInputElement>('input[name="btnK"]', (el) => el.value)
    ).toBe('Google Search');
  });

  it('search', async () => {
    await page.type('input[name="q"]', 'e2e-check');
    await page.click('input[name="btnK"]');
    // this will be executed in browser context
    await page.waitForFunction(
      'document.title === "e2e-check - Google Search"'
    );
    // for the node context you'd need a helper like this:
    // `await require('async-wait-until')(async () => await page.title() === 'e2e-check - Google Search)`
  });
});
