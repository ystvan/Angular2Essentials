import { Angular2EssentialsPage } from './app.po';

describe('angular2-essentials App', function() {
  let page: Angular2EssentialsPage;

  beforeEach(() => {
    page = new Angular2EssentialsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
