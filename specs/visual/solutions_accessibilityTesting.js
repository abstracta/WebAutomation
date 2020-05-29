const AccessibilityTesting = require('../../pages/solutions_accessibilityTesting.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Solutions - Accessibility Testing', function() {

   before(function() {
     AccessibilityTesting.open();
     utils.waitUntilDisplayed(AccessibilityTesting.siteLocator,{timeout:AccessibilityTesting.timeout,timeoutMsg:AccessibilityTesting.timeoutMsg});
  });

  it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",function() {
     modules.checkHomeSection(AccessibilityTesting.home,{
        homeTitle: 'Accessibility Testing Services',
        homeSubheader: 'Take a proactive approach to make sure your website is accessible for those with disabilities and meet your compliance goals.'
     });
  }),

  it('should scroll to and display in viewport the logos slider', function(){
     modules.logos_slider(AccessibilityTesting.logos)
  }),

  it("should scroll to and display in viewport 'Key Service Areas' section with the correct title and 4 blocks",function(){
     modules.checkGenericSection(AccessibilityTesting.solutions,{
        title: 'Key Service Areas',
        blocksNum: 4
     });
  }),

  it("should scroll to and display in viewport the backgrounds section with 2 images",function(){
     modules.checkGenericSection(AccessibilityTesting.background,{
        blocksNum: 2
     });
  }),

  it("should scroll to and display in viewport 'Why is Accessibility Testing Important?' section with the correct title and 4 blocks", function(){
     modules.checkGenericSection(AccessibilityTesting.whyAccessibility,{
        title: "Why is Accessibility\nTesting Important?",
        blocksNum:4
     });
  }),

  it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 4 blocks",function(){
     modules.checkGenericSection(AccessibilityTesting.whyAbstracta,{
        title:'Why Abstracta?',
        blocksNum: 4
     });
  }),

  it("should scroll to and display in viewport 'Tools We Utilize' section with the correct title and 8 images",function(){
     modules.checkGenericSection(AccessibilityTesting.ourToolbelt,{
        title:'Tools We Utilize',
        blocksNum: 8
     });
  }),

  it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
     modules.checkGenericSection(AccessibilityTesting.featuredInsights,{
        title: 'Featured Insights',
        blocksNum: 3
     });
  }),

  it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
     modules.checkGenericSection(AccessibilityTesting.whatOthersSay,{
        title: 'What Others Say'
     });
  }),

  it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
     modules.checkContactUsSection(AccessibilityTesting.contactForm,{
        title: 'Contact Us',
        formTitle: 'Get in Touch'
     });
  })


})
