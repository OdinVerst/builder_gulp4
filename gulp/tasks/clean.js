'use strict';

$.gulp.task('del', function(cb) {
    return $.del($.config.root, cb);
});