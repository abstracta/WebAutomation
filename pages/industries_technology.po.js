const Industries_Ecommerce = require('./industries_ecommerce.po');
const url = require('../resources/pageUrls').industries.technology;

const Technology = Object.assign(Object.create(Industries_Ecommerce),{
   url: url

})

module.exports = Technology;
