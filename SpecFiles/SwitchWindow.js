//Switching Windows Demo
describe('Switching Windows Demo', function() {
  it('should add one and two', function() {
    browser.get('http://www.way2automation.com/protractor-angularjs-practice-website.html#');
    element(by.css('a[href*="registration"]')).click();
    browser.getAllWindowHandles().then(function(handles) {
    	browser.getTitle().then(function(title) {
    		console.log("Before Switching "+ title);
    	})
    	browser.switchTo().window(handles[1]);
    	browser.getTitle().then(function(title) {
    		console.log("After Switching " + title);
    	})
    })
  });
});