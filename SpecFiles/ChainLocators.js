//Chain Locators to parse through history table
describe('Chain Locators Demo', function() {
  it('should add one and two', function() {
	  browser.waitForAngularEnabled(true);
	  browser.sleep(2000);
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    browser.
    element(by.id('gobutton')).click().then(function() {
    	browser.sleep(2000);
    	expect(element(by.binding('latest')).getText()).
        toEqual('3'); // This is wrong!
    
    });

    
	    //Parsing through History Table
	 element(by.repeater('result in memory')).element(by.css('td:nth-of-type(1)')).getText().then(function(text){
		console.log("=============================================")
		 console.log(text)
	 });
	 element(by.repeater('result in memory')).element(by.css('td:nth-of-type(2)')).getText().then(function(text){
		 console.log(text)
	 });
	 element(by.repeater('result in memory')).element(by.css('td:nth-of-type(3)')).getText().then(function(text){
		 console.log(text)
	 });
  });
});