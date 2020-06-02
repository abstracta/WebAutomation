const Industries_Ecommerce = require('./industries_ecommerce.po');
const url = require('../resources/pageUrls').industries.financial;

const Financial = Object.assign(Object.create(Industries_Ecommerce),{
   url: url,
   timeoutMsg: Page.timeoutMsg + "Industries - Financial after " + Page.timeout + "ms"

})

module.exports = Financial;
