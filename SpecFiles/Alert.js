//Alert Demo
describe('Alert Demo', function() {
  it('Alert', function() {
	browser.waitForAngularEnabled(false);
    browser.get('https://formy-project.herokuapp.com/modal');
   element(by.id('modal-button')).click();
   browser.sleep(2000);
   element(by.id('ok-button')).click().then(function() {
    	browser.sleep(2000);
    });
  });
});
