const TestAutomation = require('../../pages/solutions_testAutomation.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Solutions - Test Automation', function() {

   before(function() {
     TestAutomation.open();
     utils.waitUntilDisplayed(TestAutomation.siteLocator,{timeout:TestAutomation.timeout,timeoutMsg:TestAutomation.timeoutMsg});
  });

  it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",()=> {
     modules.checkHomeSection(TestAutomation.home,{
        homeTitle: 'Test Automation Services',
        homeSubheader: 'Increase testing ROI while improving test effectiveness and maintainability'
     });
  }),

  it('should scroll to and display in viewport the logos slider', ()=>{
     modules.logos_slider(TestAutomation.logos)
  }),

  it("should scroll to and display in viewport 'Key Service Areas' section with the correct title and 4 blocks",function(){
     modules.checkGenericSection(TestAutomation.solutions,{
        title:'Key Service Areas',
        blocksNum: 4
     });
  }),

  it("should scroll to and display in viewport 'Our Test Automation Approach' section with the correct title, 2 blocks, a particular image and a description",function(){
      modules.checkGenericSection(TestAutomation.testAutomation,{
        title:'Our Test Automation Approach',
        blocksNum: 2
      });
      utils.assertDisplayedInViewportList([TestAutomation.testAutomation.image,TestAutomation.testAutomation.description]);
  }),

  it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 4 blocks",function(){
     modules.checkGenericSection(TestAutomation.whyAbstracta,{
        title:'Why Abstracta?',
        blocksNum: 4
     });
  }),

  it("should scroll to and display in viewport 'Our Toolbelt' section with the correct title and 15 images",function(){
     modules.checkGenericSection(TestAutomation.ourToolbelt,{
        title:'Our Toolbelt',
        blocksNum:15
     });
  }),

  it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
     modules.checkGenericSection(TestAutomation.featuredInsights,{
        title: 'Featured Insights',
        blocksNum: 3
     });
  }),

  it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
     modules.checkGenericSection(TestAutomation.whatOthersSay,{
        title: 'What Others Say'
     });
  }),

  it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
     modules.checkContactUsSection(TestAutomation.contactForm,{
        title: 'Contact Us',
        formTitle: 'Get in Touch'
     });
  })


})
