"use strict";

var gulpTwitch = require('./gulpTwitch');
var gulpCalculator = require('./gulpCalculator');
var gulpPomodoro = require('./gulpPomodoro');
var gulpTicTac = require('./gulpTicTac');
var gulpJobs = require('./gulpJobs');
var gulp = require('gulp');
/*
var connect = require('gulp-connect'); //Runs local dev server
var open = require('gulp-open'); // Opens a URL in a web browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text stream with Gulp
var concat = require('gulp-concat'); //concatenate files
var eslint =require('gulp-eslint'); //Lint JS files, including JSX*/


/**config object */

gulpTwitch();
gulp.task('twitch', ['twitchCss', 'twitchHtml', 'twitchJs', 'twitchLint', 'twitchOpen', 'twitchWatch']);

gulpCalculator();
gulp.task('calculator', ['calculatorCss', 'calculatorHtml', 'calculatorJs', 'calculatorLint', 'calculatorOpen', 'calculatorWatch'])

gulpPomodoro();
gulp.task('pomodoro', ['pomodoroCss', 'pomodoroHtml', 'pomodoroJs', 'pomodoroLint', 'pomodoroOpen', 'pomodoroWatch']);

gulpJobs();
gulp.task('jobs', ['jobsCss', 'jobsImages', 'jobsHtml', 'jobsJs', 'jobsLint', 'jobsOpen', 'jobsWatch']);

gulpTicTac();
gulp.task('tictac', ['tictacCss', 'tictacHtml', 'tictacJs', 'tictacLint', 'tictacOpen', 'tictacWatch']);
