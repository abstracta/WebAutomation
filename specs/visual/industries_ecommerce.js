const Ecommerce = require('../../pages/industries_ecommerce.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Industries - Ecommerce', function() {

   before(function() {
     Ecommerce.open();
     utils.waitUntilDisplayed(Ecommerce.siteLocator,{timeout:Ecommerce.timeout,timeoutMsg:Ecommerce.timeoutMsg});
   });

   it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",()=> {
      modules.checkHomeSection(Ecommerce.home,{
         homeTitle: 'E-commerce Testing Services',
         homeSubheader: 'Uphold quality online shopping experiences and increase site conversions'
      });
   }),

   it('should scroll to and display in viewport the logos section with 5 logos', ()=>{
      modules.logos_static(Ecommerce.logos,{
         logos: 5
      })
   }),

   it("should scroll to and display in viewport 'Recommended Testing Services for E-commerce Companies' section with the correct title and 4 blocks with their titles",function(){
      modules.checkGenericSection(Ecommerce.services,{
         title:'Recommended Testing Services for E-commerce Companies',
         blocksNum: 4,
         blocksTitles: ['Performance Engineering','Mobile Testing','Test Automation','Functional Testing']
      });
   }),

   it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 4 blocks",function(){
      modules.checkGenericSection(Ecommerce.whyAbstracta,{
         title:'Why Abstracta?',
         blocksNum: 4
      });
   }),

   it("should scroll to and display in viewport 'Our Toolbelt' section with the correct title and 15 images",function(){
      modules.checkGenericSection(Ecommerce.ourToolbelt,{
         title:'Our Toolbelt',
         blocksNum: 15
      });
   }),

   it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
      modules.checkGenericSection(Ecommerce.featuredInsights,{
         title: 'Featured Insights',
         blocksNum: 3
      });
   }),

   it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
      modules.checkGenericSection(Ecommerce.whatOthersSay,{
         title: 'What Others Say'
      });
   }),

   it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
      modules.checkContactUsSection(Ecommerce.contactForm,{
         title: 'Contact Us',
         formTitle: 'Get in Touch'
      });
   })

})
