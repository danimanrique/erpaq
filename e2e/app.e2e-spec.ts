import { ErpaqPage } from './app.po';

describe('erpaq App', () => {
  let page: ErpaqPage;

  beforeEach(() => {
    page = new ErpaqPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
