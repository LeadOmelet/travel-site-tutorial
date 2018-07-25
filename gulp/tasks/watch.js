var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('html', function(){
	browserSync.reload();
});

gulp.task('watch', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function(){
		gulp.start('html'); //Trigger our HTML task.
	});
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});
});

/* gulp.task(task, dependencyTask, anonFunction) */
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});