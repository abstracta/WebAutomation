const ResourcesPage = require('../../pages/resources');
const UtilsWrapper = require('../../utils/driver.wrapper');
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
    it('selected type filter should be highlighted', () => {
        let types = ['BROCHURE','CASE-STUDY','EBOOK','INFOGRAPHIC','QUIZZES','WEBINAR','WHITE-PAPER'];
        let typeTags = ['Brochures','Case Studies','Ebooks','Infographics','Quizzes','Webinars','White Papers'];

        for (let index = 0; index < types.length; index++) {
            ResourcesPage.selectTypeFilter(types[index]);
            assert.strictEqual(ResourcesPage.activeTypeFilter.get().getText(), typeTags[index]);
        }
    }),
    it('type filters should work properly', () =>{
        let types = ['BROCHURE','CASE-STUDY','EBOOK','INFOGRAPHIC','QUIZZES','WEBINAR','WHITE-PAPER'];
        types.forEach(type => {
            assert.strictEqual(ResourcesPage.checkTypeFilterWorking(type), true);
        });
    }),
    it('selected topic filter should be highlighted', () => {
        let topics = ["AGILE-TESTING","CULTURE","MOBILE-TESTING","PERFORMANCE-ENGINEERING","SOFTWARE-TESTING","TEST-AUTOMATION","TOOLS"];
        let topicTags = ['Agile Testing','Culture','Mobile Testing','Performance Engineering','Software Testing','Test Automation','Tools'];

        for (let index = 0; index < topics.length; index++) {
            ResourcesPage.selectTopicFilter(topics[index]);
            assert.strictEqual(ResourcesPage.activeTopicFilter.get().getText(), topicTags[index]);
        }
    }),
    it('topic filters should work properly', () =>{
        ResourcesPage.open();
        //esta queda fallando por inconsistencia en las tarjetas.
        let topics = ["AGILE-TESTING","CULTURE","MOBILE-TESTING","PERFORMANCE-ENGINEERING","SOFTWARE-TESTING","TEST-AUTOMATION","TOOLS"];

        topics.forEach(topic => {
            assert.strictEqual(ResourcesPage.checkTopicFilterWorking(topic), true);
        });
    }),
    it('pagination should work properly', () => {
        ResourcesPage.selectTopicFilter('ALL');
        assert.strictEqual(ResourcesPage.cards.get().length < 13, true);
    })
})
