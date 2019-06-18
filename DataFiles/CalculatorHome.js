function CalculatorHome(){
	
	this.firstInput=element(by.model('first'));
	this.secondInput=element(by.model('second'));
	this.goButton=element(by.id('gobutton'));
	this.goToHomePage=function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
	}
};

module.exports= new CalculatorHome();