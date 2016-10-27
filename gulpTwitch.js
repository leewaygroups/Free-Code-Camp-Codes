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
    port: 4005,
    devBaseUrl: 'http://localhost',
    paths: {
      html: './intermediateFrontEndProjects/twitchTv/src/*.html',
      js: './intermediateFrontEndProjects/twitchTv/src/**/*.js',
      img: './intermediateFrontEndProjects/twitchTv/src/images/**/*.jpg',
      css: [
          'intermediateFrontEndProjects/twitchTv/src/css/custom.css',
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
          'node_modules/toastr/toastr.css'
      ],
      mainJS: './intermediateFrontEndProjects/twitchTv/src/main.js',
      dist: './intermediateFrontEndProjects/twitchTv/dist'
    }
}

function twitchGulp (){
  console.info('..................TwitchTV Project...................');
    /**Start a local development server */
    gulp.task('connect', function () {
        connect.server({
            root: ['./intermediateFrontEndProjects/twitchTv/dist'],
            port: config.port,
            base: config.devBaseUrl,
            livereload: true
        });
    });

    gulp.task('twitchOpen', ['connect'], function () {
        gulp.src('./intermediateFrontEndProjects/twitchTv/dist/index.html')
            .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }))
    });

    gulp.task('twitchHtml', function () {
        gulp.src(config.paths.html)
            .pipe(gulp.dest(config.paths.dist))
            .pipe(connect.reload());
    });

    gulp.task('twitchJs', function () {
        browserify(config.paths.mainJS)
            .transform(reactify)
            .bundle()
            .on('error', console.error.bind(console))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(config.paths.dist + '/scripts'))
            .pipe(connect.reload());
    });

    gulp.task('twitchImages', function(){
      gulp.src(config.paths.img)
      .pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());
    })

    gulp.task('twitchCss', function(){
        gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
    });

    gulp.task('twitchLint', function(){
        return gulp.src(config.paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
    });

    gulp.task('twitchWatch', function () {
        gulp.watch(config.paths.html, ['twitchHtml']);
        gulp.watch(config.paths.css, ['twitchCss']);
        gulp.watch(config.paths.js, ['twitchJs', 'twitchLint']);
    });
}

module.exports = twitchGulp;