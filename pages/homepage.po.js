const Page = require('./BasePage');

const HomePage = Object.assign(Object.create(Page),{

   //redefine Base PO methods
   open: function(url=""){ Page.open(url) },
   // siteLocator: Page.siteLocator,
   // timeout: Page.timeout,
   timeoutMsg: Page.timeoutMsg + "HomePage after " + Page.timeout + "ms",

   //elements and flags
   home: {
      get main() { { return $('#home'); } },
      get mainColumns() { { return $$('#home .col-lg-6'); } },
      get homeTitle() { { return $('#home h1:not(.hidden-lg)'); } },
      get homeSubtitle() {  { return $('#home .p-home'); } },
      get homeButton() { return $('#home button'); },
      get homeIllustration(){ return $('#home .ilustracion')}
   },

   logos: {
      get logosSlider() { return $('.section1 .logosSlider:nth-child(1)')}
   },

   solutions: {
      get section() { return $('#solutions')},
      get title() { return $('#solutions h3')},
      get subheader() { return $('#solutions .p-subheader')},
      get blocks() { return $$('#solutions .block-solutions')}
   },

   background: {
      get section() { return $('#backgrounds') },
      get blocks() { return $$('#backgrounds img') },
   },

   whyAbstracta: {
      get section() { return $('#why-us') },
      get title() { return $('#why-us h3') },
      get blocks() { return $$('#why-us .block-why-us') }
   },

   awards: {
      get section() { return $('#awards') },
      get blocks() { return $$('#awards .block-award') },
   },

   whatOthersSay: {
      get section() { return $('#our-clients') },
      get title() { return $('#our-clients h3') },
      get blocks() { return $('#our-clients #wrap') },
      get sliderItems() { return $$('#our-clients .slick-track li[aria-describedBy]')}
   },

   featuredInsights: {
      get section() { return $('#aux-container.hidden-xs') },
      get title() { return $('#aux-container.hidden-xs h3') },
      get blocks() { return $$('#aux-container.hidden-xs .resource') }
   },

   featuredCaseStudies: {
      get section() { return $('#aux-container:not(.hidden-xs)') },
      get title() { return $('#aux-container:not(.hidden-xs) h3') },
      get blocks() { return $$('#aux-container:not(.hidden-xs) .resource') },
      get button() { return $('.go-home button') }
   },

   contactForm: {
      get contactUs() { return $('#contact-us') },
      get contactUsTitle() { return $('#contact-us .lets-talk-data > h3') },
      get contactUsDescription() { return $('#contact-us .lets-talk-data > p') },
      get contactUsImage() { return $('#contact-us .lets-talk-data > img') },
      get contactUsForm() { return $('#contact-us .aux_div_form') },
      get contactUsFormTitle() { return $('#contact-us .aux_div_form h3') },
      get contactUsFormFields() { return $$('#contact-us .aux_div_form .input-group') },
      get contactUsFormSubmit() { return $('#contact-us .btn-contact') }
   }

})

module.exports = HomePage;
