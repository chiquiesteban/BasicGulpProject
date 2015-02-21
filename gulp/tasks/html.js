var gulp        = require('gulp');
var browserSync = require('browser-sync');
var fileinclude = require('gulp-file-include');
var rename      = require('gulp-rename');
var util        = require('gulp-util');

gulp.task('html', function() {

	var filename = 'middle.html';

	return gulp.src(filename, {cwd: 'html'})
		.pipe(fileinclude())
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({stream:true}));
});