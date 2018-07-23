var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested'),
cssImport = require('postcss-import');

//CLI: gulp
gulp.task('default', function(){
	console.log("Gulp!!!!");
});

//CLI: gulp html
gulp.task('html', function(){
	console.log("Wicked HTML edits, bro!");
});

gulp.task('styles', function(){
	console.log("Sass or PostCSS stuff here.");
	/* Converting PostCSS to traditional CSS. 
	Key Terms:
	gulp.src() = get css
	gulp.dest() = where the new css should be; Run through PostCSS filters.	
	
	gulp.src is async function. We return so gulp is aware of the task finish.
	*/
	return gulp.src('./app/assets/styles/styles.css')
			.pipe(postcss([cssImport, cssvars, autoprefixer, nestedcss]))
			.pipe(gulp.dest('./app/temp/styles'));
});

//Watches for changes to the index.html file.
gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html'); //Trigger our HTML task.
	});
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});