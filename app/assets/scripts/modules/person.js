class Person {
	constructor(fullName, favColor){
		this.name = fullName;
		this.favColor = favColor;
	}
	
	
	greet() {
		console.log("Sup bitches. This is es2015... YAY122");
	}
}

//module.exports = Person;
export default Person; //ES6