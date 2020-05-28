const utils = require('../driver.wrapper');

exports.checkHomeSection = function(obj,params){
   checkError(obj);
   utils.assertDisplayedInViewport(obj.main);
   utils.assertDisplayedInViewportList(obj.mainColumns,false)
   utils.assertDisplayedInViewport(obj.homeIllustration)
   if (obj.homeIcon)
      utils.assertDisplayedInViewport(obj.homeIcon);
   utils.assertComponentText(obj.homeTitle,params.homeTitle);
   if (obj.homeSubheader)
      utils.assertComponentText(obj.homeSubheader,params.homeSubheader);
   else
      utils.assertComponentText(obj.homeSubtitle,params.homeSubheader);
   utils.assertDisplayedInViewport(obj.homeSubtitle);
   if (obj.homeButton)
      utils.assertComponentText(obj.homeButton,params.homeButton);
}

exports.logos_static = function(obj,params) {
   utils.scrollAndAssertSectionInViewPort(obj.logos);
   utils.assertElementsToBe(obj.logosElems,params.logos);
}

exports.logos_slider = function(obj){
   utils.scrollAndAssertSectionInViewPort(obj.logosSlider);
}

exports.checkGenericSection = function(object,params){
   checkError(object);
   utils.scrollAndAssertSectionInViewPort(object.section);
   if (object.title)
      utils.assertComponentText(object.title,params.title);
   if (object.subheader){
      utils.centerView(object.subheader);
      utils.assertDisplayedInViewport(object.subheader);
   }
   if (object.blocks.length){
      utils.assertDisplayedInViewportList(object.blocks);
      utils.assertElementsToBe(object.blocks,params.blocksNum);
   }
   else
      utils.assertDisplayedInViewport(object.blocks);
}

exports.checkContactUsSection = function(object,params){
   checkError(object);
   utils.scrollAndAssertSectionInViewPort(object.contactUs);
   utils.assertComponentText(object.contactUsTitle,params.title);
   utils.assertDisplayedInViewport(object.contactUsDescription);
   utils.assertDisplayedInViewport(object.contactUsImage);
   utils.centerView(object.contactUsForm);
   utils.assertDisplayedInViewport(object.contactUsForm);
   utils.assertComponentText(object.contactUsFormTitle,params.formTitle);
   utils.assertDisplayedInViewportList(object.contactUsFormFields)
   utils.centerView(object.contactUsFormSubmit);
   utils.assertDisplayedInViewport(object.contactUsFormSubmit)
}

function checkError(object){
   for (let val of Object.values(object)){
      if(val.error)
         utils.assertFail(val.error.message)
   }
}
