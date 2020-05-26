const ResourcesPage = Object.create({
  /**
  * define elements
  */
  title: { get() { return browser.getTitle(); } },
  activeTypeFilter:{ get() { return $('.categories-container .category .active'); } },
  activeTopicFilter:{ get() { return $('.topics-container .topic .active'); } },
  cards: { get() { return $$('.resources-container .resource-container:not([style*="display: none"]) .resource'); } },
  nextPageButton: { get() { return $('.next-arrow'); } },
  /**
  * define or overwrite page methods
  */
  open() {
    browser.url(`${browser.options.baseUrl}/insights/resources`);
  },
  getPageQuantity() {
    return $$('//ul[@id="page-list"]/li').length;
  },
  selectTypeFilter(type) {
    let filterButton = $(`//div[contains(@class, "categories-container")]/div[@data-type="${type}"]`);
    filterButton.click();
  },
  checkTypeFilterWorking(type) {
    let aux = true;
    this.selectTypeFilter(type);
    
    for (let index = 0; index < this.getPageQuantity(); index++) {

      this.cards.get().forEach(card => {
          if(! (card.getText().includes(`${type}`.replace('-',' ')))) aux = false;
      });

      if(this.pageQuantity > index + 1) this.nextPageButton.click();
    
    }

    return aux;
  },
  selectTopicFilter(topic) {
    $('.categories-container').scrollIntoView();
    let filterButton = $(`//div[contains(@class, "topics-container")]/div[@data-category="${topic}"]`);
    filterButton.click();
  },
  checkTopicFilterWorking(topic) {
    let aux = true;
    this.selectTopicFilter(topic);
    let auxTopic = topic.replace('-',' ');

    for (let index = 0; index < this.getPageQuantity(); index++) {
        
      this.cards.get().forEach(card => {
        if(! (card.getText().includes(`${auxTopic}`))) aux = false;
      })
        
      if(this.pageQuantity > index + 1) this.nextPageButton.click();
    }

    return aux;
  }
});

module.exports = ResourcesPage;