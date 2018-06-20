describe('Github', () => {
  beforeEach(async () => {
    await page.goto('https://github.com');
  });

  it('check', async () => {
    // expect(await driver.getTitle()).toMatch(
    //   'leading software development platform'
    // );
    // expect(await $('.js-signup-form button').getText()).toMatch(
    //   'Sign up for GitHub'
    // );
  });
});
