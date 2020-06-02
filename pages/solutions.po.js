const Home = require('./homepage.po');
const url = require('../resources/pageUrls').solutions_;

const Solutions = Object.assign(Object.create(Home),{
   url: url,
   timeoutMsg: Home.timeoutMsg + "Solutions after " + Home.timeout + "ms"
})

delete Solutions.home.homeButton;
delete Solutions.solutions.subheader;
Object.defineProperty(Solutions.home, 'homeSubheader', {
   enumerable: true,
   get: function(){ return $('#home h5'); }
});

module.exports = Solutions;
