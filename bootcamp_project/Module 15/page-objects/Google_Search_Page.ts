import { Selector } from 'testcafe';

export class SearchPage {
    private t: TestController;

    constructor(t: TestController) {
        this.t = t;
    }

    searchInputField = Selector('textarea[id=APjFqb]');
    enterKey = 'ENTER';

    async searchTerm (textToSearch: string){
        await this.t
            .typeText(this.searchInputField, textToSearch, { speed: 0.2 }) // Had to put delays as Google prompted a CAPTCHA after hitting enter.
            .wait(1500)
            .pressKey(this.enterKey);
    }

}
