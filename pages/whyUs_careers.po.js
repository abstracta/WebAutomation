const Homepage = require('./homepage.po');
const url = require('../resources/pageUrls.js').whyUs.careers

const Careers = Object.assign(Object.create(Homepage),{

   url: url,
   timeoutMsg: Homepage.timeoutMsg + "Why Us - Careers after " + Homepage.timeout + "ms",

   figures: {
      get icons() { return $$('#iconOne,#iconTwo,#iconThree,#iconPlanta,.headerIconOne,.headerIconTwo '); }
   },
   // icons: function() { return $$('#iconOne,#iconTwo,#iconThree,#iconPlanta,.headerIconOne,.headerIconTwo '); },

   whyWorkWithUs: {
      get section() { return $('#whyWorkWithUs')},
      get title() { return $('#whyWorkWithUs h2')},
      get blocks() { return $$('#whyWorkWithUs p')},
      get blocksTitles() { return $$('#whyWorkWithUs h4') },
      get images() { return $$('#whyWorkWithUs .col-lg-6 img:not(.hidden-lg)')}
   },

   lifeAtAbstracta: {
      get section() { return $('#life-at-abstracta')},
      get title() { return $('#life-at-abstracta h2')},
      get blocks() { return $$('#life-at-abstracta .block-life')}
   },

   weAreAbstracta: {
      get section() { return $('#we_are_abstracta')},
      get blocks() { return $('#we_are_abstracta .active.center')}
   },

   didYouKnow: {
      get section() { return $('#did-you-know')},
      get title() { return $('#did-you-know h2')},
      get blocks() { return $$('#did-you-know .did-data')},
      get blocksIcon() { return $$('#did-you-know .did-img')},
      get illustration() { return $('#did-you-know #iconFour')}
   },

   currentOpenings: {
      get section() { return $('#current-openings')},
      get title() { return $('#current-openings h2')},
      get blocks() { return $('#current-openings .block-current-openings')},
      get illustration() { return $('#current-openings #iconCurrentOpening')}
   },

   roadmap: {
      get section() { return $('.roadmap')},
      get title() { return $('.roadmap h2')},
      get subheader() { return $('.roadmap .p-roadmap')},
      get blocks() { return $$(".roadmap img:not([style*='none'])")}
   }

})

delete Careers.home.homeButton;
delete Careers.home.homeIllustration;
// Object.defineProperty(Solutions.home, 'homeSubheader', {
//    enumerable: true,
//    get: function(){ return $('#home h5'); }
// });
Object.defineProperties(Careers.home,{
   "homeSubheader": {
      enumerable: true,
      get: function(){ return $('#home h5'); }
   },
   "homeSpanish": {
      enumerable: true,
      get: function(){ return $('#home #spanish'); }
   },
   "homeEnglish": {
      enumerable: true,
      get: function(){ return $('#home #english'); }
   }
});

module.exports = Careers;
