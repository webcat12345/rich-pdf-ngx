import { RichPdfPage } from './app.po';

describe('rich-pdf App', () => {
  let page: RichPdfPage;

  beforeEach(() => {
    page = new RichPdfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
