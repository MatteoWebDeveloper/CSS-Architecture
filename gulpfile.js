'use strict';

var gulp         = require('gulp');
var gutil        = require('gulp-util');
var clean        = require('gulp-clean');
var connect      = require('gulp-connect');
var livereload   = require('gulp-livereload');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss    = require('gulp-minify-css');
var concat       = require('gulp-concat');
var browserify   = require('gulp-browserify');
//var jshint       = require('gulp-jshint');

var path = {
    distFiles: 'dist/*',
    sassIndex: 'src/scss/index.scss',
    sassFiles: 'src/scss/**/*.scss',
    cssDist: 'dist/css/'
};

gulp.task('clean', function() {
    return gulp
        .src(path.distFiles)
        .pipe(clean({force: true}));
});

gulp.task('css', function()
{
    gulp
    .src(path.sassIndex)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(path.cssDist));

    livereload.changed(path.cssDist);
});

gulp.task('js', function()
{
    // gulp
    // .src(path.sass)
    // .pipe(sass().on('error', sass.logError))
    // .pipe(autoprefixer({
    //     browsers: ['last 2 versions'],
    //     cascade: false
    // }))
    // .pipe(gulp.dest(path.cssDist));
});

gulp.task('watch', function()
{
    livereload.listen();
    gulp.watch(path.sassFiles,['css']);
});

gulp.task('connect', function() {
    connect.server();
});

gulp.task('default', ['clean','css','js','watch','connect']);
