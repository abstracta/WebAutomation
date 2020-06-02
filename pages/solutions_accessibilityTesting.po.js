const SoftwareTesting = require('./solutions_softwareTesting.po')
const url = require('../resources/pageUrls').solutions.accesibilityTesting

const AccessibilityTesting = Object.assign(Object.create(SoftwareTesting),{
   url:url,
   timeoutMsg: SoftwareTesting.timeoutMsg + "Solutions - Accessibility Testing after " + SoftwareTesting.timeout + "ms",

   whyAccessibility: {
      get section() { return $('#why-us') },
      get title() { return $('#why-us h3') },
      get blocks() { return $$('#why-us .block-why-us') }
   },

})

module.exports = AccessibilityTesting;
