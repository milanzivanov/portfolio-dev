import { PortfolioDevPage } from './app.po';

describe('portfolio-dev App', () => {
  let page: PortfolioDevPage;

  beforeEach(() => {
    page = new PortfolioDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
