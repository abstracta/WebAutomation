const SoftwareTesting = require('./solutions_softwareTesting.po')
const url = require('../resources/pageUrls').solutions.performanceTesting

const PerformanceTesting = Object.assign(Object.create(SoftwareTesting),{
   url:url,

   performanceTesting: {
      get section() { return $('#test-system') },
      get title() { return $('#test-system h2') },
      get subheader() { return $('#test-system .block-data-test p') },
      get blocks() { return $$("#test-system .block-test")},
      get blocksTitles() { return $$("#test-system .block-test h5")}
   }

})

module.exports = PerformanceTesting;
