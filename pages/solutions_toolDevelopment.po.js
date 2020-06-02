const SoftwareTesting = require('./solutions_softwareTesting.po')
const url = require('../resources/pageUrls').solutions.toolDevelopment

const ToolDevelopment = Object.assign(Object.create(SoftwareTesting),{
   url:url,
   timeoutMsg: SoftwareTesting.timeoutMsg + "Solutions - Tool Development after " + SoftwareTesting.timeout + "ms",

   solutions: {
      get section() { return $('#core') },
      get title() { return $('#core h2') },
      get blocks() { return $$('#core .block-areas') }
   },

   background: {
      get section() { return $("(//section[@id='our-work']/preceding-sibling::div)[2]") },
      get blocks() { return $$("(//section[@id='our-work']/preceding-sibling::div)[2]//img") }
   },

   ourWork: {
      get section() { return $('#our-work') },
      get title() { return $('#our-work h2') },
      get blocks() { return $$('#our-work .app .item') },
      get apptimLogo() { return $("#our-work img[alt*='Apptim']") },
      get jmeterLogo() { return $("#our-work img[alt*='Jmeter']") },
      get gxtestLogo() { return $("#our-work img[alt*='GXtest']") },
      get taurusLogo() { return $("#our-work img[alt*='Taurus']") }
   },

   featuredCaseStudies: {
      get section() { return $('#featured-case') },
      get title() { return $('#featured-case h2') },
      get blocks() { return $$('#featured-case .col-lg-6') },
      get blocksTitles() { return $$('#featured-case .col-lg-6 h4') },
      get images() { return $$('#featured-case .col-lg-6 img') }
   }

})

module.exports = ToolDevelopment;
