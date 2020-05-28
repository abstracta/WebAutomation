const BasePage = Object.create({

   siteLocator: '.navbar-header',
   open: function(url="") {browser.url(`${browser.options.baseUrl}`+url);},
   timeout: 120000,
   timeoutMsg: "Error: the page locator was not found for "
})

module.exports = BasePage;
