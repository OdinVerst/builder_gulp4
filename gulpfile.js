'use strict';

global.$ = {
  path: {
    task: require('./gulp/paths/tasks')
  },
  gulp : require('gulp'),
    gp : require('gulp-load-plugins')()
};

$.path.task.forEach(function (tasksPath) {
    require(tasksPath);
});

