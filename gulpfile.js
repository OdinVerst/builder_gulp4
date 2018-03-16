'use strict';

global.$ = {
  path: {
    task: require('./gulp/paths/tasks')
  },
  gulp : require('gulp'),
    gp : require('gulp-load-plugins')(),
    del : require('del'),
    browserSync: require('browser-sync')
};

$.path.task.forEach(function (tasksPath) {
    require(tasksPath);
});

$.gulp.task('default', $.gulp.series(
   'del',
    $.gulp.parallel(
        'sass',
        'pug'
    ),
        $.gulp.parallel(
            'watch',
            'serve'
        )
));

