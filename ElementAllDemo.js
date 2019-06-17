 //Elements all Demo when more than one row is present in table
  
  describe('Element All Demo', function() {
	  it('should add one and two', function() {
	    browser.get('http://juliemr.github.io/protractor-demo/');
	    element(by.model('first')).sendKeys(1);
	    element(by.model('second')).sendKeys(2);
	    // element(by.model('operator')).sendKeys(('*'));
	    element(by.id('gobutton')).click();

	    expect(element(by.binding('latest')).getText()).
	        toEqual('3'); // This is wrong!
	    
	    // adding another row to history
	    element(by.model('first')).sendKeys(5);
	    element(by.model('second')).sendKeys(5);
	    element(by.id('gobutton')).click();

	    expect(element(by.binding('latest')).getText()).
	        toEqual('10'); // This is wrong!
	    
	    
		    // Parsing through first Row to get second and third column values
		 expect(element.all(by.repeater('result in memory')).get(0).element(by.css('td:nth-of-type(2)')).getText()).toBe('5 + 5');
		 expect(element.all(by.repeater('result in memory')).get(0).element(by.css('td:nth-of-type(3)')).getText()).toBe('10');
		 
		 // Parsing through second Row to get second and third column values
		 expect(element.all(by.repeater('result in memory')).get(1).element(by.css('td:nth-of-type(2)')).getText()).toBe('1 + 2');
		 expect(element.all(by.repeater('result in memory')).get(1).element(by.css('td:nth-of-type(3)')).getText()).toBe('3');
		
		 //Another way of getting the table data by looping
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
