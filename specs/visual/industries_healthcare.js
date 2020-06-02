const Healthcare = require('../../pages/industries_healthcare.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Industries - Healthcare', function() {

   before(function() {
     Healthcare.open();
     utils.waitUntilDisplayed(Healthcare.siteLocator,{timeout:Healthcare.timeout,timeoutMsg:Healthcare.timeoutMsg});
   });

   it("should display in viewport 'Home' section with its columns, icon, illustration, correct title and subheader",()=> {
      modules.checkHomeSection(Healthcare.home,{
         homeTitle: 'Healthcare Software Testing Services',
         homeSubheader: 'Improve the health and security of your systems for quality patient care'
      });
   }),

   it('should scroll to and display in viewport the logos section with 4 logos', ()=>{
      modules.logos_static(Healthcare.logos,{
         logos: 4
      })
   }),
   
   it("should scroll to and display in viewport 'Recommended Testing Services for Healthcare Companies' section with the correct title and 4 blocks with their titles",function(){
      modules.checkGenericSection(Healthcare.services,{
         title:'Recommended Testing Services for Healthcare Companies',
         blocksNum: 4,
         blocksTitles: ['Functional Testing','Test Automation','Performance Testing','Security Testing']
      });
   }),

   it("should scroll to and display in viewport 'Why Abstracta?' section with the correct title and 4 blocks",function(){
      modules.checkGenericSection(Healthcare.whyAbstracta,{
         title:'Why Abstracta?',
         blocksNum: 4
      });
   }),

   it("should scroll to and display in viewport 'Our Toolbelt' section with the correct title and 15 images",function(){
      modules.checkGenericSection(Healthcare.ourToolbelt,{
         title:'Our Toolbelt',
         blocksNum: 15
      });
   }),

   it("should scroll to and display in viewport 'Featured Insights' section with its correct title and 3 columns",function(){
      modules.checkGenericSection(Healthcare.featuredInsights,{
         title: 'Featured Insights',
         blocksNum: 3
      });
   }),

   it("should scroll to and display in viewport 'What Others Say' section with its correct title and main block",function(){
      modules.checkGenericSection(Healthcare.whatOthersSay,{
         title: 'What Others Say'
      });
   }),

   it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
      modules.checkContactUsSection(Healthcare.contactForm,{
         title: 'Contact Us',
         formTitle: 'Get in Touch'
      });
   })

})
