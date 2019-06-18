
//Promise Resolution

describe('Resolve a Promise Demo', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    element(by.id('gobutton')).click();
    
    /*This step will not print 3 as the output of the statement inside of log returns a 
    promise and promise is not resolved yet.
    */
    console.log(element(by.binding('latest')).getText());
    
//    This step will print the value 3 as the promise is resolved by using .then(function)
    element(by.binding('latest')).getText().then(function(text)
    		{
		console.log("The value returned from getText() is " + text);
	})
	
	/*jasmine takes care of promise resolve there fore no 
	explicit promise resolution is required for the below satement
    .toBe is a jasmine assertion
    */
	
	expect(element(by.binding('latest')).getText()).
        toEqual('3'); // This is wrong!
  });
});