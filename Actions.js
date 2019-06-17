//Actions Demo
describe('Actions Demo', function() {
  it('should add one and two', function() {
    browser.get('http://posse.com/');
    browser.actions().mouseMove(element(by.css('input.searchLocationInput')).sendKeys("London")).perform().then(function() {
    	browser.sleep(2000);
    });
    
    browser.actions().sendKeys(protractor.key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.key.ENTER).perform().then(function() {
    	browser.sleep(2000);
    });
    
    
    
  });
});
