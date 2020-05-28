const Home = require('./homepage.po');
const url = require('../resources/pageUrls').solutions_;

const Solutions = Object.assign(Object.create(Home),{
   open: Home.open(url),
})

delete Solutions.home.homeButton;
delete Solutions.solutions.subheader;
Object.defineProperty(Solutions.home, 'homeSubheader', {
  get: function(){ return $('#home h5'); }
});

module.exports = Solutions;
