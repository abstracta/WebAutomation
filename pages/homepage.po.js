const Page = require('./BasePage');

const HomePage = Object.create({

   //redefine Base PO methods
   open: Page.open(),
   siteLocator: Page.siteLocator,
   timeout: Page.timeout,
   timeoutMsg: Page.timeoutMsg + "HomePage after " + Page.timeout + "ms",

   //elements and flags
   get main() { { return $('#home'); } },
   get mainColumns() { { return $$('#home .col-lg-6'); } },
   get homeTitle() { { return $('#home h1:not(.hidden-lg)'); } },
   get homeSubtitle() {  { return $('#home .p-home'); } },
   get homeButton() { return $('#home button'); },
   get logosSlider() { return $('.section1 .logosSlider:nth-child(1)')},
   get solutions() { return $('#solutions')},
   get solutionsTitle() { return $('#solutions h3')},
   get solutionsSubheader() { return $('#solutions .p-subheader')},
   get solutionsBlocks() { return $$('#solutions .block-solutions')},
   get background() { return $('#backgrounds') },
   get backgroundImages() { return $$('#backgrounds img') },
   get whyAbstracta() { return $('#why-us') },
   get whyAbstractaTitle() { return $('#why-us h3') },
   get whyAbstractaBlocks() { return $$('#why-us .block-why-us') },
   get awards() { return $('#awards') },
   get awardsBlock() { return $$('#awards .block-award') },
   get whatOthersSay() { return $('#our-clients') },
   get whatOthersSayTitle() { return $('#our-clients h3') },
   get whatOthersSayContent() { return $('#our-clients #wrap') },
   get featuredInsights() { return $('#aux-container.hidden-xs') },
   get featuredInsightsTitle() { return $('#aux-container.hidden-xs h3') },
   get featuredInsightsBlocks() { return $$('#aux-container.hidden-xs .resource') },
   get featuredCaseStudies() { return $('#aux-container:not(.hidden-xs)') },
   get featuredCaseStudiesTitle() { return $('#aux-container:not(.hidden-xs) h3') },
   get featuredCaseStudiesBlocks() { return $$('#aux-container:not(.hidden-xs) .resource') },
   get featuredCaseStudiesButton() { return $('.go-home button') },
   get contactUs() { return $('#contact-us') },
   get contactUsTitle() { return $('#contact-us .lets-talk-data > h3') },
   get contactUsDescription() { return $('#contact-us .lets-talk-data > p') },
   get contactUsImage() { return $('#contact-us .lets-talk-data > img') },
   get contactUsForm() { return $('#contact-us .aux_div_form') },
   get contactUsFormTitle() { return $('#contact-us .aux_div_form h3') },
   get contactUsFormFields() { return $$('#contact-us .aux_div_form .input-group') },
   get contactUsFormSubmit() { return $('#contact-us .btn-contact') }


})

module.exports = HomePage;
