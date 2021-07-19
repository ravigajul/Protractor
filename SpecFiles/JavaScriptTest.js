const { browser, element, by } = require("protractor");

/* describe('TestCase To check element data entry through java script', function () {
  it('should add a todo', function () {
    browser.get('https://qaclickacademy.github.io/protocommerce/').then(function () {
    var el="document.querySelector(\"div[class='form-group'] input[name='name']\")";
       browser.executeScript(el+ ".value=\"Areyooooo\"").then(function(){
         browser.sleep(5000);
     });
    console.log("test");
  });
  });
}); */

describe('TestCase To check element data entry through java script another flavour', function () {
  it('should add a todo', function () {
    browser.get('https://qaclickacademy.github.io/protocommerce/').then(function () {
    var el=browser.executeScript("return document.querySelector(\"div[class='form-group'] input[name='name']\")").then(function(el){
      browser.sleep(3000);
      return el;
    });
    browser.executeScript("arguments[0].value=\"This is spartan\";",el).then(function(){
      browser.sleep(3000);
    });
  console.log("test"); 
  });
  });
});