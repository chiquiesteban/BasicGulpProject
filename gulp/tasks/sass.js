var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('main.scss', {cwd: 'css'})
        .pipe(sass())
        .pipe(gulp.dest('.tmp'))
        .pipe(browserSync.reload({stream:true}));
});