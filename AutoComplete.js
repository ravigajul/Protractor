//Auto Complete Demo
describe('Auto Complete Actions Demo', function() {
  it('should add one and two', function() {
	browser.waitForAngularEnabled(false);
    browser.get('https://formy-project.herokuapp.com/autocomplete');
    browser.actions().mouseMove(element(by.css('#autocomplete')).sendKeys(protractor.Key.ENTER)).perform().then(function() {
    	browser.sleep(2000);
    	element(by.css('#autocomplete')).sendKeys("orl");
    	browser.sleep(2000);
    	element(by.css('span.pac-matched:nth-child(1)')).click();
        	browser.sleep(2000);
    });
  });
});
