//Alert Demo
describe('Synchronization', function() {
  it('Synchronization', function() {
	var EC = protractor.ExpectedConditions;
	browser.waitForAngularEnabled(false);
    browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
    element(by.css('a[href*="loadAjax"]')).click();
    browser.wait(EC.invisibilityOf(element(by.id('loader'))),10000)
    element(by.id('results')).getText().then(function(text) {
    	console.log(text);
    })
  });
});
