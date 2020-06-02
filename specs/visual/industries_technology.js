const Technology = require('../../pages/industries_technology.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Industries - Technology', function() {

   before(function() {
     Technology.open();
     utils.waitUntilDisplayed(Technology.siteLocator,{timeout:Technology.timeout,timeoutMsg:Technology.timeoutMsg});
   });

   it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",()=> {
      modules.checkHomeSection(Technology.home,{
         homeTitle: 'Software Testing Services for the Tech Industry',
         homeSubheader: 'Create reliable and robust software to bring to market and minimize risk'
      });
   }),

   it('should scroll to and display in viewport the logos section with 4 logos', ()=>{
      modules.logos_static(Technology.logos,{
         logos: 6
      })
   }),

   it("should scroll to and display in viewport 'Recommended Testing Services for Technology Companies' section with the correct title and 4 blocks with their titles",function(){
      modules.checkGenericSection(Technology.services,{
         title:'Recommended Testing Services for Technology Companies',
         blocksNum: 4,
         blocksTitles: ['Functional Testing','Test Automation','Performance Engineering','Security Testing']
      });
   }),

   it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 4 blocks",function(){
      modules.checkGenericSection(Technology.whyAbstracta,{
         title:'Why Abstracta?',
         blocksNum: 4
      });
   }),

   it("should scroll to and display in viewport 'Our Toolbelt' section with the correct title and 15 images",function(){
      modules.checkGenericSection(Technology.ourToolbelt,{
         title:'Our Toolbelt',
         blocksNum: 15
      });
   }),

   it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
      modules.checkGenericSection(Technology.featuredInsights,{
         title: 'Featured Insights',
         blocksNum: 3
      });
   }),

   it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
      modules.checkGenericSection(Technology.whatOthersSay,{
         title: 'What Others Say'
      });
   }),

   it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
      modules.checkContactUsSection(Technology.contactForm,{
         title: 'Contact Us',
         formTitle: 'Get in Touch'
      });
   })

})
