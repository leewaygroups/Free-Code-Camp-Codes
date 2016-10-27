"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs local dev server
var open = require('gulp-open'); // Opens a URL in a web browser
var browserify = require('browserify'); //Bundles JS
// var reactify = require('reactify'); //Transforms React JSX to JS
var babelify = require('babelify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text stream with Gulp
var concat = require('gulp-concat'); //concatenate files
var eslint =require('gulp-eslint'); //Lint JS files, including JSX

/**config object */
var config = {
    port: 4006,
    devBaseUrl: 'http://localhost',
    paths: {
      html: './jobs/src/*.html',
      js: './jobs/src/**/*.js',
      img: [
        'jobs/src/css/images/*'
      ],
      css: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
          'node_modules/toastr/toastr.css',
          'jobs/src/css/custom.css',
          'jobs/src/css/queries.css'
      ],
      mainJS: './jobs/src/main.js',
      dist: './jobs/dist'
    }
}

function jobsGulp (){
  console.info('..................Jobs Project...................');

    /**Start a local development server */
    gulp.task('connect', function () {
        connect.server({
            root: ['./jobs/dist'],
            port: config.port,
            base: config.devBaseUrl,
            livereload: true
        });
    });

    gulp.task('jobsOpen', ['connect'], function () {
        gulp.src('./jobs/dist/index.html')
            .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }))
    });

    gulp.task('jobsHtml', function () {
        gulp.src(config.paths.html)
            .pipe(gulp.dest(config.paths.dist))
            .pipe(connect.reload());
    });

    gulp.task('jobsJs', function () {
        browserify(config.paths.mainJS)
            .transform(babelify, {presets: ["es2015", "react"]})
            .bundle()
            .on('error', console.error.bind(console))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(config.paths.dist + '/scripts'))
            .pipe(connect.reload());
    });

    gulp.task('jobsCss', function(){
        gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
    });

     gulp.task('jobsImages', function(){
      gulp.src(config.paths.img)
      .pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());
    })

    gulp.task('jobsLint', function(){
        return gulp.src(config.paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
    });

    gulp.task('jobsWatch', function () {
        gulp.watch(config.paths.html, ['jobsHtml']);
        gulp.watch(config.paths.css, ['jobsCss']);
        gulp.watch(config.paths.img, ['jobsImages']);
        gulp.watch(config.paths.js, ['jobsJs', 'jobsLint']);
    });
}

module.exports = jobsGulp;