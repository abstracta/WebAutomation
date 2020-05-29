const SoftwareTesting = require('../../pages/solutions_softwareTesting.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Solutions - Software Testing', function() {

   before(function() {
     SoftwareTesting.open();
     utils.waitUntilDisplayed(SoftwareTesting.siteLocator,{timeout:SoftwareTesting.timeout,timeoutMsg:SoftwareTesting.timeoutMsg});
  });

  it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",()=> {
     modules.checkHomeSection(SoftwareTesting.home,{
        homeTitle: 'End-to-End Software Testing Services',
        homeSubheader: 'Deliver high quality software at the speed of Agile'
     });
  }),

  it('should scroll to and display in viewport the logos slider', ()=>{
     modules.logos_slider(SoftwareTesting.logos)
  }),

  it("should scroll to and display in viewport 'Key Service Areas' section with the correct title and 6 blocks",function(){
     modules.checkGenericSection(SoftwareTesting.solutions,{
        title:'Key Service Areas',
        blocksNum:6
     });
  }),

  it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 4 blocks",function(){
     modules.checkGenericSection(SoftwareTesting.whyAbstracta,{
        title:'Why Abstracta?',
        blocksNum:4
     });
  }),

  it("should scroll to and display in viewport 'Our Toolbelt' section with the correct title and 15 images",function(){
     modules.checkGenericSection(SoftwareTesting.ourToolbelt,{
        title:'Our Toolbelt',
        blocksNum:15
     });
  }),

  it("should scroll to and display in viewport the phrase section with the correct content",function(){
     modules.checkGenericSection(SoftwareTesting.phrase,{
        title:'Our software quality engineers will decrease the time it takes for your devs to get feedback and find the most critical errors early on, working side by side with you.'
     });
  }),

  it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
     modules.checkGenericSection(SoftwareTesting.featuredInsights,{
        title: 'Featured Insights',
        blocksNum: 3
     });
  }),

  it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
     modules.checkGenericSection(SoftwareTesting.whatOthersSay,{
        title: 'What Others Say'
     });
  }),

  it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
     modules.checkContactUsSection(SoftwareTesting.contactForm,{
        title: 'Contact Us',
        formTitle: 'Get in Touch'
     });
  })


})
