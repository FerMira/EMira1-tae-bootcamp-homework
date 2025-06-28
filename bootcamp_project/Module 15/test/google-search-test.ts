import { SearchPage } from '../page-objects/Google_Search_Page';
import { ResultPage } from '../page-objects/Google_Result_Page';


fixture('Google Search')
.page('https://www.google.com/');


test
.meta({ preserveUrl: true })
    ('User can search something in Google', async t=> {

    const resultPage = new ResultPage(t);
    const searchPage = new SearchPage(t);

    await searchPage.searchTerm('red car');
    await resultPage.resultSearch('red car');
});
