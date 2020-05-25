const ResourcesPage = Object.create({
  /**
  * define elements
  */
  title: { get() { return browser.getTitle(); } },
  pageQuantity: { get() { return $$('//ul[@id="page-list"]/li').length - 2; } },
  cards: { get() { return $$('.resources-container .resource-container[style=""] .resource'); } },
  nextPageButton: { get() { return $('.next-arrow'); } },
  /**
  * define or overwrite page methods
  */
  open() {
      browser.url(`${browser.options.baseUrl}/insights/resources`);
  },
  checkTypeFilterWorking(type) {
    let aux = true;
    
    let filterButton = $(`//div[contains(@class, "categories-container")]/div[@data-type="${type}"]`);
    filterButton.click();
    
    for (let index = 0; index < this.pageQuantity; index++) {
      
      this.cards.forEach(card => {
          if(! card.getText().includes(`${type}`)) retorno = false;
      });

      if(ResourcesPage.pageQuantity > index + 1) ResourcesPage.nextPageButton.click();
    
    }

    return aux;
  }
});

module.exports = ResourcesPage;