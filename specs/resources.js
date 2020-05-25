const ResourcesPage = require('../pages/resources');
const UtilsWrapper = require('../utils/driver.wrapper');
const assert = require('assert');

describe('Abstracta US resources page', () => {
    before(() => {
        ResourcesPage.open();
        UtilsWrapper.closeCovidModal();
        UtilsWrapper.closeCookiesBanner();
    })

    it('should have the right title', () => {
        assert.strictEqual(ResourcesPage.title.get(), 'Software Testing Resources and Guides - Abstracta');
    }),
    it('brochure type filter should work properly', () =>{
        let types = ['BROCHURE','CASE-STUDY','EBOOK','INFOGRAPHIC','QUIZZES','WEBINAR','WHITE-PAPER'];
        types.forEach(type => {
            assert.strictEqual(ResourcesPage.checkTypeFilter(`${type}`), true)    
        });
    })
})