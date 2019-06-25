//Page Object Model

describe('Page Object Model Demo', function() {
	var calciHome=require("../DataFiles/CalculatorHome.js");
	beforeEach(function() {
		console.log("Before Each");
		calciHome.goToHomePage();
	});
  it('should add one and two', function() {
    console.log("Running the test");
    calciHome.firstInput.sendKeys("1");
    calciHome.secondInput.sendKeys("2");
    calciHome.goButton.click().then(function() {
    	browser.sleep(2000);
    	 expect(element(by.binding('latest')).getText()).
         toEqual("3"); // This is wrong!
    });
   
  });
	afterEach(function() {
		console.log("after Each:");
	});
});

