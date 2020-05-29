const Industries = require('../../pages/industries.po');
const modules = require('../../utils/templates/modules');
const utils = require('../../utils/driver.wrapper');

describe('Abstracta US: Visual/Industries', function() {

   before(function() {
     Industries.open();
     utils.waitUntilDisplayed(Industries.siteLocator,{timeout:Industries.timeout,timeoutMsg:Industries.timeoutMsg});
   });

   it("should display in viewport 'Home' section with its columns, illustration, correct title and subheader",()=> {
      modules.checkHomeSection(Industries.home,{
         homeTitle: 'Software Testing and Solutions by Industry',
         homeSubheader: 'Count on a Quality Engineer who understands your industry and business domain'
      });
   }),

   it('should scroll to and display in viewport the logos slider', ()=>{
      modules.logos_slider(Industries.logos)
   }),

   it("should scroll to and display in viewport 'Industries' section with the correct title and 6 blocks",function(){
      modules.checkGenericSection(Industries.industries,{
         title:'Industries',
         blocksNum:4
      });
   }),

   it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
      modules.checkContactUsSection(Industries.contactForm,{
         title: 'Contact Us',
         formTitle: 'Get in Touch'
      });
   })

})
