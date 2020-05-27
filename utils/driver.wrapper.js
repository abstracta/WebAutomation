const UtilsWrapper = ({

  closeComponent(closeButtonSelector, componentSelector) {
    const closeButton = $(closeButtonSelector);
    const component = $(componentSelector);
    //aca capaz mejor un es visible
    while(component.isDisplayedInViewport()){
      browser.pause(1000);
      if (closeButton.isClickable()){
        try{
          closeButton.click();
        } catch(error) {
        }
      }
    }
  },

  closeCovidModal() {
    this.closeComponent('.modal-dialog .close-modal','.modal-content')
  },

  closeCookiesBanner() {
    this.closeComponent('.cc-btn','.cc-banner')
  }

});

module.exports = UtilsWrapper