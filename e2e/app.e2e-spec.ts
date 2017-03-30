import { Prueba02Page } from './app.po';

describe('prueba02 App', function() {
  let page: Prueba02Page;

  beforeEach(() => {
    page = new Prueba02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
