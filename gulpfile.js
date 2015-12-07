'use strict';

var del          = require('del');
var parseArgs    = require('minimist');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var gulpif       = require('gulp-if');
var connect      = require('gulp-connect');
var open         = require('gulp-open');
var livereload   = require('gulp-livereload');
var sourcemaps   = require('gulp-sourcemaps');
var htmlmin      = require('gulp-htmlmin');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss    = require('gulp-minify-css');
var concat       = require('gulp-concat');
var browserify   = require('gulp-browserify');
var jshint       = require('gulp-jshint');

var path = {
    localhost: 'http://localhost:8080',
    distFiles: 'dist/*',
    htmlFiles : 'index.html',
    distHtml: 'dist/',
    sassIndex: 'src/scss/main.scss',
    sassFiles: 'src/scss/**/*.scss',
    cssDist: 'dist/css/',
    jsFiles: 'src/js/**/*.js',
    jsDist: 'dist/js/'
};

function isSourceMap ()
{
    return parseArgs(process.argv).sm;
}

gulp.task('clean', function ()
{
    return del([path.distFiles]);
});


gulp.task('html', function()
{
    return gulp
        .src(path.htmlFiles)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(path.distHtml))
        .pipe(livereload());
});


gulp.task('css', function()
{
    gulp
        .src(path.sassIndex)
        .pipe(
            gulpif(isSourceMap(), sourcemaps.init())
        )
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(
            gulpif(isSourceMap(),sourcemaps.write())
        )
        .pipe(gulp.dest(path.cssDist))
        .pipe(livereload());
});


gulp.task('js', function()
{
    return gulp
        .src(path.jsFiles)
        .pipe(gulp.dest(path.jsDist))
        .pipe(livereload());
});


gulp.task('watch', function()
{
    livereload.listen();

    gulp.watch(path.htmlFiles,['html']);
    gulp.watch(path.sassFiles,['css']);
    gulp.watch(path.jsFiles,['js']);
});


gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: 8080,
        livereload: true
    });

    // open default browser
    gulp
    .src(__filename)
    .pipe(
        open({uri: path.localhost})
    );
});

// gulp --sm you activate sourcemap task
gulp.task('default',['clean','html','css','js','connect','watch']);
