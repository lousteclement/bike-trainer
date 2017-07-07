import { BikeTrainerPage } from './app.po';

describe('bike-trainer App', () => {
  let page: BikeTrainerPage;

  beforeEach(() => {
    page = new BikeTrainerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
