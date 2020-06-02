const SoftwareTesting = require('./solutions_softwareTesting.po')
const url = require('../resources/pageUrls').solutions.mobileTesting

const MobileTesting = Object.assign(Object.create(SoftwareTesting),{
   url:url,
   timeoutMsg: Page.timeoutMsg + "Solutions - Mobile Testing after " + Page.timeout + "ms",

   apptim: {
      get section() { return $('#monkop') },
      get title() { return $('#monkop h2') },
      get blocks() { return $$("#monkop .col-lg-6 .pMonkop")},
      get video() { return $("#monkop iframe[src*='youtube.com']")}
   }

})

module.exports = MobileTesting;
