const Solutions = require('../pages/solutions.po');
const modules = require('../utils/templates/modules');
const utils = require('../utils/driver.wrapper');

describe('Abstracta US: Visual/Solutions', function() {

   before(function() {
     Solutions.open;
     utils.waitUntilDisplayed(Solutions.siteLocator,{timeout:Solutions.timeout,timeoutMsg:Solutions.timeoutMsg});
   });

   it("should display in viewport 'Home' section with its columns, illustration, correct title and subheader",()=> {
      modules.checkHomeSection(Solutions.home,{
         homeTitle: 'Software Testing Solutions Overview',
         homeSubheader: 'Achieve end-to-end testing by applying proven methodologies to reduce risks and increase user satisfaction.'
      });
   }),

   it("should scroll to and display in viewport 'Solutions' section with the correct title and 6 blocks",function(){
      modules.checkGenericSection(Solutions.solutions,{
         title:'Solutions',
         blocksNum:6
      });
   }),

   it('should scroll to and display in viewport the logos slider', ()=>{
      modules.logos_slider(Solutions.logos)
   }),

   it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
      modules.checkContactUsSection(Solutions.contactForm,{
         title: 'Contact Us',
         formTitle: 'Get in Touch'
      });
   })

})
