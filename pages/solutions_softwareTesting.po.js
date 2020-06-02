const Solutions = require('./solutions.po')
const url = require('../resources/pageUrls').solutions.softwareTesting

const SoftwareTesting = Object.assign(Object.create(Solutions),{
   url:url,
   timeoutMsg: Solutions.timeoutMsg + "Solutions - Software Testing after " + Solutions.timeout + "ms",

   solutions: {
      get section() { return $('#areas') },
      get title() { return $('#areas h2') },
      get blocks() { return $$('#areas .block-areas') }
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

   phrase: {
      get section() { return $('#frase') },
      get title() { return $('#frase h4') }
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
   },

})
Object.defineProperty(Solutions.home, 'homeIcon', {
   enumerable: true,
   get: function(){ return $('#home .iconSolutions'); }
});

module.exports = SoftwareTesting;
