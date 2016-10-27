"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs local dev server
var open = require('gulp-open'); // Opens a URL in a web browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text stream with Gulp
var concat = require('gulp-concat'); //concatenate files
var eslint =require('gulp-eslint'); //Lint JS files, including JSX

/**config object */
var config = {
    port: 4006,
    devBaseUrl: 'http://localhost',
    paths: {
      html: './advancedFrontEndProjects/calculator/src/*.html',
      js: './advancedFrontEndProjects/calculator/src/**/*.js',
      css: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
          'node_modules/toastr/toastr.css',
          'advancedFrontEndProjects/calculator/src/css/custom.css'
      ],
      mainJS: './advancedFrontEndProjects/calculator/src/main.js',
      dist: './advancedFrontEndProjects/calculator/dist'
    }
}

function calculatorGulp (){
  console.info('..................Calculator Project...................');

    /**Start a local development server */
    gulp.task('connect', function () {
        connect.server({
            root: ['./advancedFrontEndProjects/calculator/dist'],
            port: config.port,
            base: config.devBaseUrl,
            livereload: true
        });
    });

    gulp.task('calculatorOpen', ['connect'], function () {
        gulp.src('./advancedFrontEndProjects/calculator/dist/index.html')
            .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }))
    });

    gulp.task('calculatorHtml', function () {
        gulp.src(config.paths.html)
            .pipe(gulp.dest(config.paths.dist))
            .pipe(connect.reload());
    });

    gulp.task('calculatorJs', function () {
        browserify(config.paths.mainJS)
            .transform(reactify)
            .bundle()
            .on('error', console.error.bind(console))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(config.paths.dist + '/scripts'))
            .pipe(connect.reload());
    });

    gulp.task('calculatorCss', function(){
        gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
    });

    gulp.task('calculatorLint', function(){
        return gulp.src(config.paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
    });

    gulp.task('calculatorWatch', function () {
        gulp.watch(config.paths.html, ['calculatorHtml']);
        gulp.watch(config.paths.css, ['calculatorCss']);
        gulp.watch(config.paths.js, ['calculatorJs', 'calculatorLint']);
    });
}

module.exports = calculatorGulp;