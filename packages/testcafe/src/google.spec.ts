import { Selector } from 'testcafe';

fixture('Google').page('https://www.google.com/ncr');

test('check', async (t) => {
  await t
    .expect(Selector('title').innerText)
    .eql('Google')
    .expect(Selector('input[name="btnK"]').value)
    .eql('Google Search');
});

test('search', async (t) => {
  await t
    .typeText(Selector('input[name="q"]'), 'e2e-check')
    .pressKey('esc')
    .click(Selector('input[name="btnK"]'))
    .expect(Selector('title').innerText)
    .eql('e2e-check - Google Search');
});
