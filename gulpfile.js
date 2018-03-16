'use strict';

global.$ = {
  gulp : require('gulp'),
    gp : require('gulp-load-plugins')()
};


require('./gulp/tasks/sass');
require('./gulp/tasks/pug');

$.gulp.task('sass');
$.gulp.task('pug');

