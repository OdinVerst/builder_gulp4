'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  browserSync: require('browser-sync')
};

$.path.task.forEach(function (tasksPath) {
  require(tasksPath);
});

$.gulp.task('default', $.gulp.series(
  'del',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'css:foundation',
    'js:process',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

