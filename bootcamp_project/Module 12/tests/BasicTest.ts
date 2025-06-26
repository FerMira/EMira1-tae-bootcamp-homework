import { Selector } from 'testcafe';

fixture('Basic Tests')
    .page('https://the-internet.herokuapp.com/add_remove_elements/')
    .beforeEach(async t => {
        console.log('Test is starting...');
        await t.wait(500);
    })
    .afterEach(async t => {
        console.log('Test is finishing...');
    });

    test('User can add and delete elements', async t => {

        const addElemButton = Selector('button[onclick="addElement()"]');
        const deleteElemButton = Selector('button[class="added-manually"]');


        await t
            .expect(addElemButton.exists).ok('Add Element button is not present.')
            .click(addElemButton)
            .expect(deleteElemButton.visible).ok('Delete button is not present.')
            .click(deleteElemButton)
            .expect(deleteElemButton.visible).notOk('Delete button is still present')
            .doubleClick(addElemButton)
            .expect(deleteElemButton.count).eql(2);

    });
