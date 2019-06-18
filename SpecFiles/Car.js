function Car() {
	this.color = "red";
	this.brand = "Ford";
	this.year = 2019;
	this.getModel = function() {
		console.log("This is Mastang");
	};
};

module.exports= new Car();
