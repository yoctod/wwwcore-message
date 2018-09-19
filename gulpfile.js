'use strict';

var gulp = require('gulp');
var wwwcoreTasks = require('wwwcore-build');

wwwcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
