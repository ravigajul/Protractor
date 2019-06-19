//Locator Basics
describe('Locator Basics', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    
    //By Model
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    
    //By Id
    element(by.id('gobutton')).click();
    expect(element(by.binding('latest')).getText()).
        toEqual('3'); 
    
    //By Css
    browser.get('https://material.angular.io/components/autocomplete/overview');
    element(by.css('#mat-input-0')).sendKeys('one').then(function() {
    	browser.sleep(2000);
    })
    
    
    
  });
});
