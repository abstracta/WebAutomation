const PerformanceTesting = require('../../pages/solutions_performanceTesting.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Solutions - Performance Testing', function() {

   before(function() {
     PerformanceTesting.open();
     utils.waitUntilDisplayed(PerformanceTesting.siteLocator,{timeout:PerformanceTesting.timeout,timeoutMsg:PerformanceTesting.timeoutMsg});
  });

  it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",()=> {
     modules.checkHomeSection(PerformanceTesting.home,{
        homeTitle: 'Performance Testing Services',
        homeSubheader: 'Ensure your system is robust and reliable enough to handle peak loads'
     });
  }),

  it('should scroll to and display in viewport the logos slider', ()=>{
     modules.logos_slider(PerformanceTesting.logos)
  }),

  it("should scroll to and display in viewport 'Key Service Areas' section with the correct title and 4 blocks",function(){
     modules.checkGenericSection(PerformanceTesting.solutions,{
        title:'Key Service Areas',
        blocksNum: 4
     });
  }),

  it("should scroll to and display in viewport 'Why Test System Performance and How?' section with the correct title, a description, 4 blocks and correct title for each block",function(){
      modules.checkGenericSection(PerformanceTesting.performanceTesting,{
        title:'Why Test System Performance and How?',
        blocksNum: 4,
        blocksTitles: ['Load Testing','Stress Testing','Endurance Testing','Peak Testing']
      });
  }),

  it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 6 blocks",function(){
     modules.checkGenericSection(PerformanceTesting.whyAbstracta,{
        title:'Why Abstracta?',
        blocksNum: 6
     });
  }),

  it("should scroll to and display in viewport 'Our Toolbelt' section with the correct title and 15 images",function(){
     modules.checkGenericSection(PerformanceTesting.ourToolbelt,{
        title:'Our Toolbelt',
        blocksNum:15
     });
  }),

  it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
     modules.checkGenericSection(PerformanceTesting.featuredInsights,{
        title: 'Featured Insights',
        blocksNum: 3
     });
  }),

  it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
     modules.checkGenericSection(PerformanceTesting.whatOthersSay,{
        title: 'What Others Say'
     });
  }),

  it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
     modules.checkContactUsSection(PerformanceTesting.contactForm,{
        title: 'Contact Us',
        formTitle: 'Get in Touch'
     });
  })


})
