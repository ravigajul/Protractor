//Data Provider Demo

describe('Dataprovider Demo', function() {
	var calciHome=require("../DataFiles/CalculatorHome.js");
	var testdata=require("../DataFiles/TestData.js");
	var using = require('jasmine-data-provider');
	var d=require("../DataFiles/JasmineTestData.js");
	using(d.DataDriver, function (data,description) {
		 it('should add one and two' + description , function() {
			    console.log("Running the test");
			    calciHome.goToHomePage();
			    calciHome.firstInput.sendKeys(data.firstvalue);
			    calciHome.secondInput.sendKeys(data.secondvalue);
			    calciHome.goButton.click();
			    expect(element(by.binding('latest')).getText()).
			        toEqual(data.result); 
			  });
	});
});