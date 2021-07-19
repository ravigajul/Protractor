const { browser } = require("protractor");

//Demontrate how java script asynchronus nature works.
describe('Asynchronus', function () {
  it('Async', function () {
    browser.get('https://angularjs.org/');
    element(by.css('div.hero h2')).getText().then(function (text) {
      console.log(text);
      browser.sleep(1000);
    })
    browser.get('http://juliemr.github.io/protractor-demo/');
    console.log("I should be the last one to print")
  });
});

describe('Synchronus', function () {
  it('Async', function () {
    browser.get('https://angularjs.org/');
    element(by.css('div.hero h2')).getText().then(function (text) {
      console.log(text);
      browser.sleep(1000);
      browser.get('http://juliemr.github.io/protractor-demo/').then(function () {
        console.log("I should be the last one to print");
      });
    })


  });
});
