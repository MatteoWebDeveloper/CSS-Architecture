'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
    sass: 'src/scss/index.scss',
    css: 'dist/style/'
};

gulp.task('styles', function() {
    gulp.src(path.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css));
});

gulp.task('watch', function() {
    gulp.watch(path.sass,['styles']);
});

gulp.task('default', ['styles','watch']);