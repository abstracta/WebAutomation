const Industries = require('./industries.po');
const url = require('../resources/pageUrls').industries.ecommerce;

const Ecommerce = Object.assign(Object.create(Industries),{
   url: url,
   timeoutMsg: Industries.timeoutMsg + "Industries - Ecommerce after " + Industries.timeout + "ms",

   logos: {
      get logos() { return $('#logos')},
      get images() { return $$('#logos img')}
   },

   services: {
      get section() { return $('#services') },
      get title() { return $('#services h2') },
      get blocks() { return $$('#services .block-areas') },
      get blocksTitles() { return $$('#services .block-areas h4') },
   },

   whyAbstracta: {
      get section() { return $('#why-abstracta') },
      get title() { return $('#why-abstracta h2') },
      get blocks() { return $$('#why-abstracta .block-why') }
   },

   ourToolbelt: {
      get section() { return $('#tools') },
      get title() { return $('#tools h2') },
      get blocks() { return $$('#tools img') }
   },

   featuredInsights: {
      get section() { return $('#featured-insights') },
      get title() { return $('#featured-insights h2') },
      get blocks() { return $$('#featured-insights .resource') }
   },

   whatOthersSay: {
      get section() { return $('#what-others-say') },
      get title() { return $('#what-others-say h2') },
      get blocks() { return $('#what-others-say .block-data') }
   }

})

delete Ecommerce.industries;
Object.defineProperty(Ecommerce.home, 'homeIcon', {
   enumerable: true,
   get: function(){ return $('#home .iconSolutions'); }
});

module.exports = Ecommerce;
