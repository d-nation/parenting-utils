export class ParentingUtilsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('parenting-utils-app h1')).getText();
  }
}
