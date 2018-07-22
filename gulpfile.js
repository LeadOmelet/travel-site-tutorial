var gulp = require('gulp');
watch = require('gulp-watch');

//CLI: gulp
gulp.task('default', function(){
	console.log("Gulp!!!!");
});

//CLI: gulp html
gulp.task('html', function(){
	console.log("Wicked HTML edits, bro!");
});

//Watches for changes to the index.html file.
gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html'); //Trigger our HTML task.
	});
});