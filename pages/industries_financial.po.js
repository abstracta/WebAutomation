const Industries_Ecommerce = require('./industries_ecommerce.po');
const url = require('../resources/pageUrls').industries.financial;

const Financial = Object.assign(Object.create(Industries_Ecommerce),{
   url: url,
   timeoutMsg: Industries_Ecommerce.timeoutMsg + "Industries - Financial after " + Industries_Ecommerce.timeout + "ms"

})

module.exports = Financial;
