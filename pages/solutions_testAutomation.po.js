const SoftwareTesting = require('./solutions_softwareTesting.po')
const url = require('../resources/pageUrls').solutions.testAutomation

const TestAutomation = Object.assign(Object.create(SoftwareTesting),{
   url:url,

   testAutomation: {
      get section() { return $('#our-test') },
      get title() { return $('#our-test h2') },
      get blocks() { return $('#our-test .col-lg-10') },
      get image() { return $("#our-test img[src*='shift_left']")},
      get description() { return $("#our-test p")}
   }

})

module.exports = TestAutomation;
