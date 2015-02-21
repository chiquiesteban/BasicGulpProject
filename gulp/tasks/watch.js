var gulp   = require('gulp');

gulp.task('watch', function() {

	// watch changes to html files
	gulp.watch('html/*.html', ['html']);

	// watch changes to sass files
	gulp.watch('css/*.scss', ['sass']);

	// watch changes to js files
	gulp.watch('js/*.js', ['js']);

});