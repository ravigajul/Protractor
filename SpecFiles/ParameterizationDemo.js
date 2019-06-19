//Parameterization Demo

describe('Parameterization Demo', function() {
	var calciHome=require("../DataFiles/CalculatorHome.js");
	var testdata=require("../DataFiles/TestData.js");
	beforeEach(function() {
		console.log("Before Each");
		calciHome.goToHomePage();
	});
  it('should add one and two', function() {
    console.log("Running the test");
    calciHome.firstInput.sendKeys(testdata.datadriver.firstValue);
    calciHome.secondInput.sendKeys(testdata.datadriver.secondValue);
    calciHome.goButton.click();
    expect(element(by.binding('latest')).getText()).
        toEqual(testdata.datadriver.result); // This is wrong!
  });
	afterEach(function() {
		console.log("after Each:");
		browser.quit();
	});
});

