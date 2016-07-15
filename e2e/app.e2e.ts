import { ParentingUtilsPage } from './app.po';

describe('parenting-utils App', function() {
  let page: ParentingUtilsPage;

  beforeEach(() => {
    page = new ParentingUtilsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('parenting-utils works!');
  });
});
