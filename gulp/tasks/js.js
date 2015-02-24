var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('js', function () {
    gulp.src('code.js', {cwd: 'js'})
        .pipe(gulp.dest('.tmp'))
        .pipe(browserSync.reload({stream:true}));
});