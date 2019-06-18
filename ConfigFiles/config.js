var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['../SpecFiles/DataProviderDemo.js'],
		capabilities: {
		    browserName: 'chrome'
		  },
		  /*multiCapabilities: [{
			    browserName: 'firefox'
			  }, {
			    browserName: 'chrome'
			  }, {
			    browserName: 'internet explorer'
			  }],*/
		  
//This is for Jasmine Html reporter
   onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './ConfigFiles/target/screenshots'
        })
      );
   }
}

