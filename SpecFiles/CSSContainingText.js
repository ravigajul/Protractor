//CSSContainingText Locator
describe('CSS Containing Text', function() {
  it('CSS containing Text', function() {
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    element(by.name('name')).sendKeys("Ravi");
    element(by.name('email')).sendKeys("Ravi@test.com");
    element(by.id('exampleInputPassword1')).sendKeys("test");
    element(by.id('exampleCheck1')).click();
    
    //CSSContainingText
    element(by.cssContainingText("#exampleFormControlSelect1 > option","Male")).click().then(function() {
    	browser.sleep(1000);
    })
    
  });
});
