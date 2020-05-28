const assert = require('assert')

const UtilsWrapper = ({

   waitUntilDisplayed(selector, options) {
      const component = $(selector);
      component.waitUntil(async function() {
         var result = await this.isDisplayed();
         return result
      }, options);
   },

   closeComponent(closeButtonSelector, componentSelector) {
      const closeButton = $(closeButtonSelector);
      const component = $(componentSelector);
      //aca capaz mejor un es visible
      while (component.isDisplayedInViewport()) {
         browser.pause(1000);
         if (closeButton.isClickable()){
           try{
             closeButton.click();
           } catch(error) {}
         }
      }
   },

   closeCovidModal() {
      this.closeComponent('.modal-dialog .close-modal', '.modal-content')
   },

   closeCookiesBanner() {
      this.closeComponent('.cc-btn', '.cc-banner')
   },

   waitForModal_waitUntilDisappears(mainLogo) {
      const modal = $('#modal-covid');
      modal.waitForDisplayed({timeout:4000});
      const closeModalButton = $('.modal-dialog .close-modal')
      try{
         while (modal.isDisplayed()) {
            if (closeModalButton.isClickable()) {
               closeModalButton.click()
            }
         }
      } catch(e){}
      modal.waitUntil(async function() {
         var result = await this.getCSSProperty("display");
         return result.value == 'none'
      },{timeout:4000,timeoutMsg:'expected modal to disappear after 4s'});

      $(mainLogo).waitForClickable({timeout: 3000});
      // $(mainLogo).moveTo()
   },

   assertComponentTextList(selector, expectedList) {
      const component = $$(selector)
      let labelList = [];
      component.forEach((item, i) => {
         assert.strictEqual(item.isDisplayed(), true);
         labelList.push(item.getText());
         // console.log(item.getText());
      });
      assert.deepStrictEqual(labelList, expectedList);
      return component;
   },

   assertComponentText(selector, expectedText, message = "") {
      const component = $(selector)
      this.assertDisplayed(selector);
      message = (message == "") ? "expected: " + expectedText + " | but found " + component.getText() : message;
      assert.strictEqual(component.getText(), `${expectedText}`, message)
   },

   assertDisplayedInViewportList(selector, center = true) {
      const component = this.selectorIsArray(selector);
      component.forEach(function(item, i) {
         if (center)
            UtilsWrapper.centerView(item);
         UtilsWrapper.waitUntilInViewport(item);
         assert.strictEqual(item.isDisplayedInViewport(), true);
      });
   },

   assertDisplayedList(selector) {
      const component = this.selectorIsArray(selector);
      component.forEach(function(item, i) {
         assert.strictEqual(item.isDisplayed(), true)
      });
   },

   assertDisplayed(selector) {
      const component = $(selector)
      assert.strictEqual(component.isDisplayed(), true)
   },

   assertDisplayedInViewport(selector) {
      const component = $(selector)
      assert.strictEqual(component.isDisplayedInViewport(), true)
   },

   assertEnabled(selector) {
      const component = $(selector)
      assert.strictEqual(component.isEnabled(), true)
   },

   assertClickable(selector) {
      const component = $(selector)
      assert.strictEqual(component.isClickable(), true)
   },

   assertInternalLinkWorking(selector, expectedTitle) {
      const component = $(selector)
      component.waitForDisplayed()
      component.click()
      assert.strictEqual(browser.getTitle(), expectedTitle)
   },

   assertInternalLinkWorkingandGoBack(selector, expectedTitle, isSelector = true) {
      const component = isSelector ? $(selector) : selector;
      component.waitForDisplayed()
      component.click()
      // browser.pause(1000)
      assert.strictEqual(browser.getTitle(), expectedTitle)
      browser.back()
      // browser.pause(1000)
   },

   assertSectionLinkWorkingandGoBack(linkSelector, sectionSelector, time = 3000) {
      const component = $(linkSelector),
         destination = $(sectionSelector);
      component.waitForDisplayed();
      component.click();
      destination.waitUntil(function() {
            return this.isDisplayedInViewport();
         },
         time, 'expected section to appear within ' + time + 'ms');
      assert.strictEqual(destination.isDisplayedInViewport(), true);
      browser.pause(1000);
      this.centerView(component);
      browser.pause(1000);
   },

   assertExternalLinkWorkingandGoBack(selector, pageUrl = "", expectedTitle = "", pageLocator) {
      const component = $(selector)
      component.scrollIntoView()
      component.waitForDisplayed()
      component.click()
      browser.pause(500)
      browser.switchToWindow(browser.getWindowHandles()[1])
      $(pageLocator).waitForDisplayed(10000);
      assert.strictEqual(browser.getUrl().includes(pageUrl), true,
         "expected " + browser.getUrl() + " to include " + pageUrl);
      if (expectedTitle != "") {
         browser.pause(1000)
         assert.strictEqual(browser.getTitle().includes(expectedTitle), true,
            "expected " + browser.getTitle() + " to include " + expectedTitle);
      }
      browser.pause(500)
      browser.closeWindow();
      browser.switchToWindow(browser.getWindowHandles()[0])
      browser.pause(1000);
   },

   assertExternalLinkWorking(selector, pageUrl, expectedTitle) {
      const component = $(selector)
      component.scrollIntoView()
      component.waitForDisplayed()
      component.click()
      browser.pause(4000)
      browser.switchWindow(`${pageUrl}`)
      assert.strictEqual(browser.getTitle(), expectedTitle)
   },

   assertElementsToBe(selector, quantity, message = "number of elements expected to be " + quantity) {
      const component = this.selectorIsArray(selector);
      assert.strictEqual(component.length === quantity, true, message + " but found " + component.length);
   },

   centerView(selector) {
      $(selector).scrollIntoView({
         block: "center"
      });
   },

   selectorIsArray(selector) {
      return (Array.isArray(selector)) ? selector : $$(selector);
   },

   executeJSClick(selector) {
      selector = $(selector);
      browser.execute(function(sel) {
         sel.click();
      }, selector)
   },

   scrollAndAssertSectionInViewPort(selector) {
      selector = $(selector);
      this.centerView(selector);
      this.waitUntilInViewport(selector);
      this.assertDisplayedInViewport(selector);
      return selector;
   },

   waitUntilInViewport(webElem) {
      webElem.waitUntil(async function() {
         var displayed = await this.isDisplayedInViewport();
         return displayed
      }, 1000, 'expected element to appear in viewport after 1s');
   },

   assertFail(message) {
      assert.fail(message)
   }

});

module.exports = UtilsWrapper
