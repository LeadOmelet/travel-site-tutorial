function Person(fullName, favColor){
	this.name = fullName;
	this.favColor = favColor;
	this.greet = function() {
		console.log("Sup bitches");
	}
}

module.exports = Person;