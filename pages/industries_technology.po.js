const Industries_Ecommerce = require('./industries_ecommerce.po');
const url = require('../resources/pageUrls').industries.technology;

const Technology = Object.assign(Object.create(Industries_Ecommerce),{
   url: url,
   timeoutMsg: Industries_Ecommerce.timeoutMsg + "Industries - Technology after " + Industries_Ecommerce.timeout + "ms"

})

module.exports = Technology;
