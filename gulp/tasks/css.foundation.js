'use strict';

$.gulp.task('css:foundation', function () {
    return $.gulp.src($.path.cssFoundation)
        .pipe($.gp.concatCss('foundation.css'))
        .pipe($.gp.csso())
        .pipe($.gulp.dest($.config.root + '/assets/css'))
});
