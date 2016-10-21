import { QuoraNgPage } from './app.po';

describe('quora-ng App', function() {
  let page: QuoraNgPage;

  beforeEach(() => {
    page = new QuoraNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
