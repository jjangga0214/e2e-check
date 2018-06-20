describe('Google', () => {
  beforeEach(async () => {
    await page.goto('https://www.google.com/ncr');
  });

  it('check', async () => {
    // expect(await driver.getTitle()).toBe('Google');
    // expect(await $('input[name="btnK"]').getAttribute('value')).toBe(
    //   'Google Search'
    // );
  });

  it('search', async () => {
    // await $('input[name="q"]').sendKeys('e2e-check');
    // await $('input[name="btnK"]').click;
    // await until.titleIs('e2e-check - Google Search');
  });
});
