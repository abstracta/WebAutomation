const ResourcesPage = Object.create({
  /**
  * define elements
  */
  title: { get() { return browser.getTitle(); } },
  /**
  * define or overwrite page methods
  */
  open() {
      browser.url(`${browser.options.baseUrl}/insights/resources`);
  }
});

module.exports = ResourcesPage;