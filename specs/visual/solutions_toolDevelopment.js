const ToolDevelopment = require('../../pages/solutions_toolDevelopment.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Solutions - Tool Development', function() {

   before(function() {
     ToolDevelopment.open();
     utils.waitUntilDisplayed(ToolDevelopment.siteLocator,{timeout:ToolDevelopment.timeout,timeoutMsg:ToolDevelopment.timeoutMsg});
  });

  it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",function() {
     modules.checkHomeSection(ToolDevelopment.home,{
        homeTitle: 'Testing Tool Development',
        homeSubheader: 'We can create a custom software testing tool for your needs'
     });
  }),

  it('should scroll to and display in viewport the logos slider', function(){
     modules.logos_slider(ToolDevelopment.logos)
  }),

  it("should scroll to and display in viewport 'Core Capabilities' section with the correct title and 4 blocks",function(){
     modules.checkGenericSection(ToolDevelopment.solutions,{
        title: 'Core Capabilities',
        blocksNum: 4
     });
  }),

  it("should scroll to and display in viewport the background section with 2 images",function(){
     modules.checkGenericSection(ToolDevelopment.background,{
        blocksNum: 2
     });
  }),

   it("should scroll to and display in viewport 'Our Work' section with the correct title, 4 blocks and the correct logos", function(){
      modules.checkGenericSection(ToolDevelopment.ourWork,{
        title: "Our Work",
        blocksNum: 4
      });
      utils.assertDisplayedInViewportList([ToolDevelopment.ourWork.apptimLogo,
         ToolDevelopment.ourWork.jmeterLogo,
         ToolDevelopment.ourWork.gxtestLogo,
         ToolDevelopment.ourWork.taurusLogo]);
  }),

  it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 4 blocks",function(){
     modules.checkGenericSection(ToolDevelopment.whyAbstracta,{
        title:'Why Abstracta?',
        blocksNum: 4
     });
  }),

  it("should scroll to and display in viewport 'Featured Case Studies' section with its correct title, 4 blocks, correct subtitles and 2 images",function(){
     modules.checkGenericSection(ToolDevelopment.featuredCaseStudies,{
        title: 'Featured Case Studies',
        blocksNum: 4,
        blocksTitles: ['Mobile Testing Tool for Native Apps','GXtest']
     });
     utils.assertDisplayedInViewportList(ToolDevelopment.featuredCaseStudies.images);
     utils.assertElementsToBe(ToolDevelopment.featuredCaseStudies.images,2);
  }),

  it("should scroll to and display in viewport the phrase section with the correct content",function(){
     modules.checkGenericSection(ToolDevelopment.phrase,{
        title:'Abstracta’s proprietary, ready-to-deploy testing tools and testing frameworks accelerate testing, reduce overhead costs and speed up time to market.'
     });
  }),

  it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
     modules.checkGenericSection(ToolDevelopment.whatOthersSay,{
        title: 'What Others Say'
     });
  }),

  it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
     modules.checkContactUsSection(ToolDevelopment.contactForm,{
        title: 'Contact Us',
        formTitle: 'Get in Touch'
     });
  })


})
