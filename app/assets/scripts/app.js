/* blueprints (in JS) usually have capitilized letter. Constructor function. */
/* Web Pack allows us to better organize JS files. By making sense of NodeJS require function. */
var $ = require('jquery'); //Webpack can use npm packages too.
var Person = require('./modules/person');

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();