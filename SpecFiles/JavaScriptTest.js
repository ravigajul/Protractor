const { browser, element, by } = require("protractor");

describe('angularjs homepage todo list', function () {
  it('should add a todo', function () {
    browser.get('https://qaclickacademy.github.io/protocommerce/').then(function () {
    var el="document.querySelector(\"div[class='form-group'] input[name='name']\")";
       browser.executeScript(el+ ".value=\"Areyooooo\"").then(function(){
         browser.sleep(5000);
     });
    console.log("test");
  });
  });
});