var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'); //Allows conversion of hex values to rgb values. See _site-header.css for example.

gulp.task('styles', function(){
	console.log("Sass or PostCSS stuff here.");
	/* Converting PostCSS to traditional CSS. 
	Key Terms:
	gulp.src() = get css
	gulp.dest() = where the new css should be; Run through PostCSS filters.	
	
	gulp.src is async function. We return so gulp is aware of the task finish.
	*/
	return gulp.src('./app/assets/styles/styles.css')
			.pipe(postcss([cssImport, mixins, cssvars, hexrgba, autoprefixer, nestedcss]))
			.on('error', function(errorInfo){
				console.log('[WARNING] CSS Syntax Error...');
				console.log(errorInfo.toString());
				this.emit('end');
				//ErrorHandling... Prevents Gulp from freaking out on syntax error.
			})
			.pipe(gulp.dest('./app/temp/styles'));
});