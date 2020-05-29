const Home = require('./homepage.po');
const url = require('../resources/pageUrls').industries_;

const Industries = Object.assign(Object.create(Home),{
   url: url,

   industries: {
      get section() { return $('#industries')},
      get title() { return $('#industries h3')},
      get blocks() { return $$('#industries .block')}
   }
})

delete Industries.home.homeButton;
delete Industries.solutions;
Object.defineProperty(Industries.home, 'homeSubheader', {
  get: function(){ return $('#home h5'); }
});

module.exports = Industries;
