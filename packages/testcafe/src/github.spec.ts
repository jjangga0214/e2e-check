import { Selector } from 'testcafe';

fixture('Github').page('https://github.com');

test('check', async (t) => {
  await t
    .expect(Selector('title').innerText)
    .contains('leading software development platform')
    .debug()
    .expect(Selector('.js-signup-form button').innerText)
    .eql('Sign up for GitHub');
});
