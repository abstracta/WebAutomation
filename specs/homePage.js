const HomePage = require('../pages/homepage.po');
const utils = require('../utils/driver.wrapper');
const data = require('../resources/parameters/homepage.params').home_data

describe('Abstracta US: Visual/HomePage', function() {

   before(function() {
     HomePage.open;
     utils.waitUntilDisplayed(HomePage.siteLocator,{timeout:HomePage.timeout,timeoutMsg:HomePage.timeoutMsg});
   });

   it('should wait for the COVID19 modal to appear and close it',()=>{utils.waitForModal_waitUntilDisappears()})
   ,
   it("should display 'Home' section with its columns, image, proper title and subtitle",function(){
      utils.assertDisplayedInViewport(HomePage.main);
      utils.assertDisplayedInViewportList(HomePage.mainColumns,false)
      if (HomePage.homeIcon)
         utils.assertDisplayedInViewport(HomePage.homeIcon);
      utils.assertComponentText(HomePage.homeTitle,data.homeTitle);
      if (HomePage.homeSubheader)
         utils.assertComponentText(HomePage.homeSubheader,data.homeSubheader);
      else
         utils.assertComponentText(HomePage.homeSubtitle,data.homeSubheader);
      utils.assertDisplayedInViewport(HomePage.homeSubtitle);
      if (HomePage.homeButton)
         utils.assertComponentText(HomePage.homeButton,data.homeButton);
   })
   ,
   it('should display the logos slider', function(){
      utils.scrollAndAssertSectionInViewPort(HomePage.logosSlider);
   })
   ,
   it("should display 'Solutions' section with the correct title and 6 blocks",function(){
      let solutions = utils.scrollAndAssertSectionInViewPort(HomePage.solutions);
      utils.assertComponentText(HomePage.solutionsTitle,data.solutions);
      if (HomePage.solutionsSubheader){
         utils.centerView(HomePage.solutionsSubheader);
         utils.assertDisplayedInViewport(HomePage.solutionsSubheader);
      }
      utils.assertDisplayedInViewportList(HomePage.solutionsBlocks);
      utils.assertElementsToBe(HomePage.solutionsBlocks,data.solutionsElems);
   })
   ,
   it("should display the backgrounds section and its images, that is along 'Why Abstracta'", function(){
      let backgrn = utils.scrollAndAssertSectionInViewPort(HomePage.background);
      utils.assertDisplayedInViewportList(HomePage.backgroundImages,false);
      utils.assertElementsToBe(HomePage.backgroundImages,data.backgroundsImgs);
   })
   ,
   it("should display 'Why Abstracta' section with the correct title and 4 blocks", function(){
      let whyUs = utils.scrollAndAssertSectionInViewPort(HomePage.whyAbstracta);
      utils.assertComponentText(HomePage.whyAbstractaTitle,data.whyAbstracta);
      utils.assertDisplayedInViewportList(HomePage.whyAbstractaBlocks);
      utils.assertElementsToBe(HomePage.whyAbstractaBlocks,data.whyAbstractaElems);
   })
   ,
   it("should display 'Awards' section with 4 images", function() {
      let awards = utils.scrollAndAssertSectionInViewPort(HomePage.awards)
      utils.assertDisplayedInViewportList(HomePage.awardsBlock);
      utils.assertElementsToBe(HomePage.awardsBlock,data.awards);
   })
   ,
   it("should display 'What others Say' section with its correct title",function(){
      let others = utils.scrollAndAssertSectionInViewPort(HomePage.whatOthersSay);
      utils.assertComponentText(HomePage.whatOthersSayTitle,data.whatOthersSay);
      utils.centerView(HomePage.whatOthersSayContent);
      utils.assertDisplayedInViewport(HomePage.whatOthersSayContent);
   })
   ,
   it("should display 'Featured Insights' section with its correct title and 3 columns",function(){
      let feat_ins = utils.scrollAndAssertSectionInViewPort(HomePage.featuredInsights);
      utils.assertComponentText(HomePage.featuredInsightsTitle,data.featuredInsights);
      utils.assertDisplayedInViewportList(HomePage.featuredInsightsBlocks,false);
      utils.assertElementsToBe(HomePage.featuredInsightsBlocks,data.featuredInsightsElems);
   })
   ,
   it("should display 'Featured Case Studies' section with its correct title and 3 columns",function(){
      let feat_ins = utils.scrollAndAssertSectionInViewPort(HomePage.featuredCaseStudies);
      utils.assertComponentText(HomePage.featuredCaseStudiesTitle,data.featuredCaseStudies);
      utils.assertDisplayedInViewportList(HomePage.featuredCaseStudiesBlocks,false);
      utils.assertElementsToBe(HomePage.featuredCaseStudiesBlocks,data.featuredCaseStudiesElems);
      utils.centerView(HomePage.featuredCaseStudiesButton);
      utils.assertDisplayedInViewport(HomePage.featuredCaseStudiesButton);
   })
   ,
   it("should display 'Contact Us' section properly with the correct titles", function() {
      let contactUs = utils.scrollAndAssertSectionInViewPort(HomePage.contactUs);
      utils.assertComponentText(HomePage.contactUsTitle,data.contact);
      utils.assertDisplayedInViewport(HomePage.contactUsDescription);
      utils.assertDisplayedInViewport(HomePage.contactUsImage);
      utils.centerView(HomePage.contactUsForm);
      utils.assertDisplayedInViewport(HomePage.contactUsForm);
      utils.assertComponentText(HomePage.contactUsFormTitle,data.formTitle);
      utils.assertDisplayedInViewportList(HomePage.contactUsFormFields)
      utils.centerView(HomePage.contactUsFormSubmit);
      utils.assertDisplayedInViewport(HomePage.contactUsFormSubmit)
   })

})
