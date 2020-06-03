const modules = require('../../utils/templates/modules')
const Careers = require('../../pages/whyUs_careers.po')
const utils = require('../../utils/driver.wrapper')

describe('Abstracta US: Visual/Why Us - Careers', function() {

   before(function() {
     Careers.open();
     utils.waitUntilDisplayed(Careers.siteLocator,{timeout:Careers.timeout,timeoutMsg:Careers.timeoutMsg});
     utils.closeCookiesBanner();
   });

   it("should display in viewport 'Home' section with its columns, figures, correct title and subheader",()=> {
      modules.checkHomeSection(Careers.home,{
         homeTitle: 'Join the Company Where Testers Grow',
         homeSubheader: 'Are you curious, collaborative, communicative, and passionate about what you do?'
      });
      utils.assertDisplayedInViewport(Careers.home.homeEnglish);
      utils.assertDisplayedInViewport(Careers.home.homeSpanish);
   },3),

   // it("should check the figures just in the right from Home section are displayed", function(){
   //    utils.assertDisplayedInViewportList(Careers.figures.icons);
   // },3),

   it("should scroll to and display in viewport 'Why Work With Us' section with the correct title, subtitles, 4 blocks and images",function(){
      modules.checkGenericSection(Careers.whyWorkWithUs,{
         title: 'Why Work With Us',
         blocksNum: 4,
         blocksTitles: ['Learn From the Best in Testing','Flexible Work Culture','Enjoy Work and Play','Personal & Professional Development']
      });
      utils.assertDisplayedInViewportList(Careers.whyWorkWithUs.images);
      utils.assertElementsToBe(Careers.whyWorkWithUs.images,2);
   },3),

   it("should scroll to and display in viewport 'Life at Abstracta' section with the correct title and 3 blocks",function(){
      modules.checkGenericSection(Careers.lifeAtAbstracta,{
         title: 'Life at Abstracta',
         blocksNum: 3,
      });
   },3),

   it("should scroll to and display in viewport 'We Are Abstracta' slider",function(){
      modules.checkGenericSection(Careers.weAreAbstracta);
   },3),

   it("should scroll to and display in viewport 'Did You Know?' section with the correct title, 6 paragraphs with icons and an illustration",function(){
      modules.checkGenericSection(Careers.didYouKnow,{
         title: 'Did You Know?',
         blocksNum: 6,
      });
      utils.assertDisplayedInViewportList(Careers.didYouKnow.blocksIcon);
      utils.assertElementsToBe(Careers.didYouKnow.blocksIcon,6);
      utils.centerView(Careers.didYouKnow.illustration);
      utils.assertDisplayedInViewport(Careers.didYouKnow.illustration);
   },3),

   it("should scroll to and display in viewport 'Current Openings' section with the correct title, at least one job opening card and an illustration",function(){
      modules.checkGenericSection(Careers.currentOpenings,{
         title: 'Current Openings'
      });
      utils.centerView(Careers.currentOpenings.illustration);
      utils.assertDisplayedInViewport(Careers.currentOpenings.illustration);
   },3),

   it("should scroll to and display in viewport 'The Abstracta Roadmap' section with the correct title, a subheader and all 8 images of the different roles",function(){
      modules.checkGenericSection(Careers.roadmap,{
         title: 'The Abstracta Roadmap',
         blocksNum: 8,
      });
   },3),

   it("should scroll to and display in viewport 'Contact Us' section properly with the correct title, the description, the main image, inside the form: title, fields and submit button", function() {
      modules.checkContactUsSection(Careers.contactForm,{
         title: 'Contact Us',
         formTitle: 'Get in Touch'
      });
   },3)

})
