const HomePage = require('../../pages/homepage.po');
const utils = require('../../utils/driver.wrapper');
const modules = require('../../utils/templates/modules')
// const Oculow = require('oculow')
// const oculow = new Oculow.Oculow()

describe('Abstracta US: Visual/HomePage', function() {

   before(function() {
      // oculow.setKeys("SwdxW7voPpOYA53hAVSE+MI6TPvFWS0h", "6sEVMLnp1JnqZ3k5/NmcLi6N+6v+ZPJE")
      // oculow.setAppId("abstracta-us")
      // oculow.setBaselineManagement(oculow.ASSISTED)
      // oculow.setComparisonLogic(oculow.PIXEL_DIFF)
      HomePage.open();
      utils.waitUntilDisplayed(HomePage.siteLocator,{timeout:HomePage.timeout,timeoutMsg:HomePage.timeoutMsg});
   });

   it('should wait for the COVID19 modal to appear and close it',function(){
      utils.waitForModal_waitUntilDisappears(HomePage.siteLocator)}),

   it("should display in viewport 'Home' section with its columns, illustration, correct title, subtitle and botton button text",()=> {
      // oculow.captureScreen(browser,"homepage")
      // oculow.dispose()
      modules.checkHomeSection(HomePage.home,{
         homeTitle: 'Enhance your software quality without losing momentum',
         homeSubheader: 'We provide holistic, end-to-end testing solutions that reduce costs & increase efficiency to uphold business continuity',
         homeButton: 'LEARN MORE'
      });
   }),

   it('should scroll to and display in viewport the logos slider', ()=>{
      modules.logos_slider(HomePage.logos)
   }),

   it("should scroll to and display in viewport 'Solutions' section with the correct title and 6 blocks",function(){
      modules.checkGenericSection(HomePage.solutions,{
         title:'Solutions',
         blocksNum:6
      });
   }),

   it("should scroll to and display in viewport the backgrounds section and its images, that is along 'Why Abstracta'", function(){
      modules.checkGenericSection(HomePage.background,{
         blocksNum:2
      });
   }),

   it("should scroll to and display in viewport 'Why Abstracta' section with the correct title and 4 blocks", function(){
      modules.checkGenericSection(HomePage.whyAbstracta,{
         title: 'Why Abstracta?',
         blocksNum:4
      });
   }),

   it("should scroll to and display in viewport 'Awards' section with 4 images", function() {
      modules.checkGenericSection(HomePage.awards,{
         blocksNum: 4
      });
   }),

   it("should scroll to and display in viewport 'What Others Say' section with its correct title, main block and 7 slider items",function(){
      modules.checkGenericSection(HomePage.whatOthersSay,{
         title: 'What Others Say'
      });
      utils.assertElementsToBe(HomePage.whatOthersSay.sliderItems,7);
   }),

   it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
      modules.checkGenericSection(HomePage.featuredInsights,{
         title: 'Featured Insights',
         blocksNum: 3
      });
   }),

   it("should scroll to and display in viewport 'Featured Case Studies' section with its correct title, 3 columns, and",function(){
      modules.checkGenericSection(HomePage.featuredCaseStudies,{
         title: 'Featured Case Studies',
         blocksNum: 3
      });
      utils.centerView(HomePage.featuredCaseStudies.button);
      utils.assertDisplayedInViewport(HomePage.featuredCaseStudies.button);
   }),

   it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
      modules.checkContactUsSection(HomePage.contactForm,{
         title: 'Contact Us',
         formTitle: 'Get in Touch'
      });
   })

})
