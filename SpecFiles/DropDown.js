//Single Suite
describe('Drop Down', function() {
	

  it('should add one and two', function() {
	browser.waitForAngularEnabled(true);
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(5);
    element(by.model('second')).sendKeys(2);
    
    element.all(by.tagName('option')).each(function(operator) {
    	
    	operator.getAttribute('value').then(function(value) {
    		
    		console.log(value);
    		browser.sleep(1000)
    		operator.click();
    		
    	});
    	
    });
    
  });
});

