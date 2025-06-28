import { Selector } from 'testcafe';


export class ResultPage {
    private t: TestController;

    constructor(t: TestController) {
        this.t = t;
    }

    resultSearchBar = Selector('textarea[id=APjFqb]');
    resultSearchPage = Selector('#search');

    async resultSearch(searchedText: string) {
        await this.t
            .expect(this.resultSearchPage.exists).ok('Search page was not loaded as expected')
            .expect(this.resultSearchBar.textContent).eql(searchedText, 'There is a mismatch!');
    }

}
