'use strict';

var del          = require('del');
var parseArgs    = require('minimist');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var gulpif       = require('gulp-if');
var runSequence  = require('run-sequence');
var connect      = require('gulp-connect');
var open         = require('gulp-open');
var livereload   = require('gulp-livereload');
var sourcemaps   = require('gulp-sourcemaps');
var htmlmin      = require('gulp-htmlmin');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss    = require('gulp-minify-css');
var symdiff      = require('gulp-symdiff');
var symdiffHtml  = require('symdiff-html');
var symdiffCss   = require('symdiff-css');
var concat       = require('gulp-concat');
var browserify   = require('gulp-browserify');
var jshint       = require('gulp-jshint');
var uglify       = require('gulp-uglify');
var config       = require('./config.json');

function isSourceMap ()
{
    return parseArgs(process.argv).sm;
};


gulp.task('clean', function ()
{
    return del([config.distFiles]);
});


gulp.task('fonts', function ()
{
    return gulp
        .src(config.fontFiles)
        .pipe(gulp.dest(config.fontDist));
});


gulp.task('html', function()
{
    return gulp
        .src(config.htmlFiles)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.htmlDist))
        .pipe(livereload());
});


gulp.task('cssVendor', function()
{
    if (config.vendor.css.length == 0) {
        console.log('vendor css empty');
        return false;
    }

    return gulp
        .src(config.vendor.css)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.cssDist));
});


gulp.task('css', function()
{
    return gulp
        .src(config.sassIndex)
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
        .pipe(gulp.dest(config.cssDist))
        .pipe(livereload());
});


gulp.task('css-unused', function ()
{
    gulp
    .src([config.cssDistFiles, config.htmlFiles])
    .pipe(symdiff({
        templates: [symdiffHtml],      // list all templates plugins
        css: [symdiffCss]//,           // list all css plugins
        //ignore: [/^ignore/]          // classes to ignore
    })
    .on('error', function() {
        process.exit(1);    // break the build
    }));
});


gulp.task('jsVendor', function()
{
    if (config.vendor.js.length == 0) {
        console.log('vendor js empty');
        return false;
    }

    return gulp
        .src(config.vendor.js)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.jsDist));
});


gulp.task('js', function()
{
    return gulp
        .src(config.jsFiles)
        .pipe(
            gulpif(isSourceMap(), sourcemaps.init())
        )
        .pipe(uglify())
        .pipe(
            gulpif(isSourceMap(),sourcemaps.write())
        )
        .pipe(gulp.dest(config.jsDist))
        .pipe(livereload());
});


gulp.task('watch', function()
{
    livereload.listen();

    gulp.watch(config.htmlFiles,['html']);
    gulp.watch(config.sassFiles,['css']);
    gulp.watch(config.jsFiles,['js']);
});


gulp.task('connect', function()
{
    connect.server({
        root: ['dist'],
        port: config.port,
        livereload: true
    });

    // open default browser
    gulp
    .src(__filename)
    .pipe(
        open({uri: config.localhost})
    );
});


// gulp --sm you activate sourcemap task
gulp.task('default', function ()
{
    runSequence('clean',['fonts','html','cssVendor','css','jsVendor','js'],'connect','watch')
});