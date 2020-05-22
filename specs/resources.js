const ResourcesPage = require('../pages/resources');
const assert = require('assert');

describe('Abstracta US resources page', () => {
    before(() => {
        ResourcesPage.open();
    })

    it('Should have the right title', () => {
        assert.strictEqual(ResourcesPage.title.get(), 'Software Testing Resources and Guides - Abstracta');
    })
})