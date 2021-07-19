const { element, browser } = require("protractor");

//spec file to demonstrate javascript execution
describe('Java script execution demo', function() {
    it('Java Script Demo', function() {
      
      browser.get("chrome://downloads/");
      browser.sleep(10000);
    element.all(by.tagName('downloads-manager')).get(0).
    shadow.element(by.css('div#mainContainer'))
    .element(by.css('iron-list#downloadsList'))
    .shadow.element(by.css('downloads-item#frb0'))
    .shadow.element(by.css('div#title-area')).click();
      browser.sleep(10000);
    });
});