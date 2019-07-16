import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    // return element(by.css('app-root h1')).getText();
    return element(by.css('home h3')).getText();
  }
}
