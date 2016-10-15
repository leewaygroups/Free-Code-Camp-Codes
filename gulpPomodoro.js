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
      html: './advancedFrontEndProjects/pomodoro/src/*.html',
      js: './advancedFrontEndProjects/pomodoro/src/**/*.js',
      css: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
          'node_modules/toastr/toastr.css',
          'advancedFrontEndProjects/pomodoro/src/css/custom.css'
      ],
      mainJS: './advancedFrontEndProjects/pomodoro/src/main.js',
      dist: './advancedFrontEndProjects/pomodoro/dist'
    }
}

function pomodoroGulp (){
    /**Start a local development server */
    gulp.task('connect', function () {
        connect.server({
            root: ['./advancedFrontEndProjects/pomodoro/dist'],
            port: config.port,
            base: config.devBaseUrl,
            livereload: true
        });
    });

    gulp.task('pomodoroOpen', ['connect'], function () {
        gulp.src('./advancedFrontEndProjects/pomodoro/dist/index.html')
            .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }))
    });

    gulp.task('pomodoroHtml', function () {
        gulp.src(config.paths.html)
            .pipe(gulp.dest(config.paths.dist))
            .pipe(connect.reload());
    });

    gulp.task('pomodoroJs', function () {
        browserify(config.paths.mainJS)
            .transform(reactify)
            .bundle()
            .on('error', console.error.bind(console))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(config.paths.dist + '/scripts'))
            .pipe(connect.reload());
    });

    gulp.task('pomodoroCss', function(){
        gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
    });

    gulp.task('pomodoroLint', function(){
        return gulp.src(config.paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
    });

    gulp.task('pomodoroWatch', function () {
        gulp.watch(config.paths.html, ['pomodoroHtml']);
        gulp.watch(config.paths.css, ['pomodoroCss']);
        gulp.watch(config.paths.js, ['pomodoroJs', 'pomodoroLint']);
    });
}

module.exports = pomodoroGulp;