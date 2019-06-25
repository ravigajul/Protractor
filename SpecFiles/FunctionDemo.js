//Function Demo
describe('Function Demo', function() {
	  
	  function Addition(a,b)
	  {
		  element(by.model('first')).sendKeys(a);
		    element(by.model('second')).sendKeys(b);
	  }
	  
	  it('should add one and two', function() {
	    browser.get('http://juliemr.github.io/protractor-demo/');
	   
	    Addition(1,2)
	    // element(by.model('operator')).sendKeys(('*'));
	    element(by.id('gobutton')).click().then(function() {
	    	browser.sleep(2000);
	    	 expect(element(by.binding('latest')).getText()).
		        toEqual('3'); // This is wrong!
	    });
	  });
});