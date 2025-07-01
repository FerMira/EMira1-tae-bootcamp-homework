import { Selector } from 'testcafe';

fixture('Manual Timeout fixed')
    .page('https://the-internet.herokuapp.com/dynamic_loading/1');

test('Adding custom timeout to "finish" text assertion', async t => {
    await t.click(Selector('button'));

    const loadedText = Selector('#finish h4');
    await t.expect(loadedText.exists).ok({ timeout: 5000 });
})
