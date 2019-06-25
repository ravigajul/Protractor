 //Elements Each Demo to loop through the data table without using the loop
  
  describe('For Each Demo', function() {
	  
	  function Addition(a,b)
	  {
		  element(by.model('first')).sendKeys(a);
		    element(by.model('second')).sendKeys(b);
	  }
	  
	  it('should add one and two', function() {
	    browser.get('http://juliemr.github.io/protractor-demo/');
	   
	    Addition(1,2)
	    // element(by.model('operator')).sendKeys(('*'));
	    element(by.id('gobutton')).click().then(function() {
	    	browser.sleep(2000);
	    	expect(element(by.binding('latest')).getText()).
	        toEqual('3'); // This is wrong!
	    });

	    
	    
	    // adding another row to history
	    Addition(5,5)
	    element(by.id('gobutton')).click().then(function() {
	    	browser.sleep(2000);
	    	 expect(element(by.binding('latest')).getText()).
		        toEqual('10'); // This is wrong!
	    });

	   
	    
	    
	    //Add another row to history
	    Addition(3,5)
	    element(by.id('gobutton')).click().then(function() {
	    	browser.sleep(2000);
	    	 expect(element(by.binding('latest')).getText()).
		        toEqual('8');
	    });

	   
	    
		 //Looping through each row in the table.
		 element.all(by.repeater('result in memory')).count().then(function(count) {
			 console.log(count)
		 });
		 element.all(by.repeater('result in memory')).each(function(Row){
			 			
				 Row.element(by.css('td:nth-of-type(3)')).getText().then(function(text){
				 			console.log(text);
				 
				 });
			 });
	  });
  });
