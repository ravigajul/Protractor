//Switching Windows Demo
describe('Switching Windows Demo', function() {

  it('should add one and two', function() {
	  browser.waitForAngularEnabled(false);
    browser.get('http://www.way2automation.com/protractor-angularjs-practice-website.html#');
    element(by.css('#wrapper > div.container.margin-top-20 > div.row > div > ul > li:nth-child(1) > a > figure > img')).click();
    browser.getAllWindowHandles().then(function(handles) {
    	browser.getTitle().then(function(title) {
    		console.log("Before Switching "+ title);
    	})
    	browser.switchTo().window(handles[1]);
    	browser.getTitle().then(function(title) {
    		console.log("After Switching " + title);
    		browser.close();
    		browser.switchTo().window(handles[0]);
    	})
    })
  });
});