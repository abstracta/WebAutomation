const Financial = require('../../pages/industries_financial.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Industries - Financial', function() {

   before(function() {
     Financial.open();
     utils.waitUntilDisplayed(Financial.siteLocator,{timeout:Financial.timeout,timeoutMsg:Financial.timeoutMsg});
   });

   it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",()=> {
      modules.checkHomeSection(Financial.home,{
         homeTitle: 'Financial Software Testing Services',
         homeSubheader: 'Ensure fail-safe digital transactions without slowing down development'
      });
   }),

   it('should scroll to and display in viewport the logos section with 6 logos', ()=>{
      modules.logos_static(Financial.logos,{
         logos: 6
      })
   }),

   it("should scroll to and display in viewport 'Recommended Testing Services for Financial Companies' section with the correct title and 4 blocks with their titles",function(){
      modules.checkGenericSection(Financial.services,{
         title:'Recommended Testing Services for Financial Companies',
         blocksNum: 4,
         blocksTitles: ['Test Automation','Performance Testing','Functional Testing','Security Testing']
      });
   }),

   it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 4 blocks",function(){
      modules.checkGenericSection(Financial.whyAbstracta,{
         title:'Why Abstracta?',
         blocksNum: 4
      });
   }),

   it("should scroll to and display in viewport 'Our Toolbelt' section with the correct title and 15 images",function(){
      modules.checkGenericSection(Financial.ourToolbelt,{
         title:'Our Toolbelt',
         blocksNum: 15
      });
   }),

   it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
      modules.checkGenericSection(Financial.featuredInsights,{
         title: 'Featured Insights',
         blocksNum: 3
      });
   }),

   it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
      modules.checkGenericSection(Financial.whatOthersSay,{
         title: 'What Others Say'
      });
   }),

   it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
      modules.checkContactUsSection(Financial.contactForm,{
         title: 'Contact Us',
         formTitle: 'Get in Touch'
      });
   })

})
