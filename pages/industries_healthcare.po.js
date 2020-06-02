const Industries_Ecommerce = require('./industries_ecommerce.po');
const url = require('../resources/pageUrls').industries.healthcare;

const Healthcare = Object.assign(Object.create(Industries_Ecommerce),{
   url: url

})

module.exports = Healthcare;
