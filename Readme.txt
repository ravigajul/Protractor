Jasmine--JavaScript Framework
Mocha,Chai are other java script frameworks

https://jasmine.github.io/
https://jasmine.github.io/tutorials/your_first_suite

Install NodeJs --https://nodejs.org/en/download/
Install Protractor using npm --commands on this page https://www.protractortest.org/#/
Install Webdriver using npm i selenium-webdriver --save-dev --Web Driver
To Install latest IE Driver webdriver-manager update --ie
	Setup
	Use npm to install Protractor globally with:
	npm install -g protractor
	This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.
	The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
	webdriver-manager update
	Now start up a server with:
	webdriver-manager start
	This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.
	
From <https://www.protractortest.org/#/> 

 

Prepare Run configuration : 
Add protractor package from <<C:\Users\rgajul\AppData\Roaming\npm\node_modules>> to eclipse project
Install tern plugin using eclipse(only selected versions of eclipse supports tern check the versions on the link here)--https://marketplace.eclipse.org/content/tern-eclipse-ide/metrics#group-details
Right Click on Project-->Runconfigurations-->add cli.js from <<C:\Users\rgajul\AppData\Roaming\npm\node_modules\protractor\built>>
Enter Arguments --> Config.js
Run the config file and it should work.

Auto Suggestions

Right click on project--> configure-->convert to intern project -->Select "Protractor"

Now browser. <<ctrl+space>> will show auto suggestions. 
Note : Eclipse will not show auto suggestions on entering . <<ctrl+space>> only shows the auto suggestions.



Type npm in cmd prompt to check if node js is already installed.
Node -v for checking the version.

Locators

// Find an element using a css selector.
by.css('.myclass')
// Find an element with the given id.
by.id('myid')
// Find an element using an input name selector.
by.name('field_name')
// Find an element with a certain ng-model.
// Note that at the moment, this is only supported for AngularJS apps.
by.model('name')
// Find an element bound to the given variable.
// Note that at the moment, this is only supported for AngularJS apps.
by.binding('bindingname')

From <https://www.protractortest.org/#/locators> 

Read data from json files

Method 1
Var element =require('../ElementLocators/Elements.json')
Element.<<<json path>>

Method2
Browser.params.testdata.<<jsonpath>>
And add  below in spec file
Params: 
{
	testdata: require('../ElementLocators/Elements.json')
}

Html Reporter

1.Install protractor-jasmine2-html-reporter package

npm install protractor-jasmine2-html-reporter --save-dev

From <https://www.npmjs.com/package/protractor-jasmine2-html-reporter> 



2.Add following details in protractor config file 

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
   // ...
   onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   }
}

From <https://www.npmjs.com/package/protractor-jasmine2-html-reporter> 

JavaScript is Asynchronouse

Promise handling due to asynchronous nature of java script
Element(by.id("id")).getText().then (function(text){

Console.log(text);
});

All Locator

Elements.all(by.repeater("result in memory")) --returns a element finder array

Chain Locator

 element(by.repeater('result in memory')).element(by.css('td:nth-of-type(2)')).getText().then(function(text){
		 console.log(text)
	 });

CSSContainingText Locator

 element(by.cssContainingText("#exampleFormControlSelect1 > option","Male")).click().then(function() {
    	browser.sleep(2000);
    })


Resolve Promise for all

 //Looping through each row in the table.

		 element.all(by.repeater('result in memory')).count().then(function(count) {
			 console.log(count)
		 });
		 element.all(by.repeater('result in memory')).each(function(Row){
			 			
				 Row.element(by.css('td:nth-of-type(3)')).getText().then(function(text){
				 			console.log(text);
				 
				 });
			 });

.All Methods

element.all(by.css('some-css')).first().element(by.tagName('tag-within-css'));
element.all(by.css('some-css')).get(index).element(by.tagName('tag-within-css'));
element.all(by.css('some-css')).first().all(by.tagName('tag-within-css'));

From <http://www.protractortest.org/#/locators> 


Functions

Reusable Functions should be outside it block and inside descript

Switch to a new window

Browser.getAllWindowHandles().then(function(handles){
Browser.switchTo().Window(handles[1]);
});

To Test Non Angular Apps using Protractor

browser.waitForAngularEnabled(false);

Java Script Object

Module.export = new car(); //making this availble in another call
Require("./<<filename where above class  is present>>") //this is like import statement in java
Example
Var obj=require("ClassCar.js");


OnPrepare Function

This has to be created in config file and all statements in this function will be executed first before any line of code in spec files is executed. This is a global setting like before Each. BeforeEach is specific to a specfile, while onprepare is globally applicable to all spec files.

Common statement that can be used are 
Reporting related -Jasmine-2-htmlreporter
waitForAngularEnabled(false);
Launching and maximizing the browser() , etc.

Package.json 

This is like POM.xml which downloads the dependencies from maven.
Package.json downloads the dependencies from npm (node package manager)

Go to project location and type below command for initialization package.json with default values.

npm init -f 

Add the below dependency  to package.json and while in the project location run the command "npm install"
Or right click on run as npm install
"dependencies":{
  	"protractor": "5.4.2"
  },
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webdriver-update":"./node_modules/.bin/webdriver-manager update",
    "webdriver-start":"./node_modules/.bin/webdriver-manager start",
    "Runconfig":"./node-modules/.bin/protractor ./ConfigFiles/config.js",
    "UpdateAndStartWebdriverManager": "npm run webdriver-update && npm run webdriver-start "
  }


Update the testrunner configuration to repoint to new cli.js as per the new download.
Under package.json you will see above test scripts. 
To run the config.js right click on RunConfig and RunAsConfiguration and select protractorRunner and run.
