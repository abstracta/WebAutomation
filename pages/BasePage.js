const BasePage = Object.create({

   url:"",
   siteLocator: '.navbar-header',
   open: function() { browser.url(`${browser.options.baseUrl}`+ this.url);},
   timeout: 120000,
   timeoutMsg: "Error: the page locator was not found for "
})

module.exports = BasePage;
