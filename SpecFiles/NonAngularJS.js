//Switching Windows Demo
describe('Switching Windows Demo', function() {
  it('should add one and two', function() {
	browser.waitForAngularEnabled(false);
    browser.get('http://www.way2automation.com/protractor-angularjs-practice-website.html#');
    element(by.css("section#wrapper li:nth-child(1) > a > h2")).click();
    browser.getAllWindowHandles().then(function(handles) {
    	browser.getTitle().then(function(title) {
    		console.log("Before Switching "+ title);
    		browser.sleep(1000);
    	})
    	browser.switchTo().window(handles[1]);
    	browser.getTitle().then(function(title) {
    		console.log("After Switching " + title);
    		browser.sleep(1000);
    		browser.close();
    		browser.switchTo().window(handles[0]);
    	})
    })
  });
});