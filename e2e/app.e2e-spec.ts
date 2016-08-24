import { ParentingUtilsRc5Page } from './app.po';

describe('parenting-utils-rc5 App', function() {
  let page: ParentingUtilsRc5Page;

  beforeEach(() => {
    page = new ParentingUtilsRc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
