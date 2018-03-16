'use strict';

$.gulp.task('js:lint', function () {
    return $.gulp.src($.path.app)
        .pipe($.gp.eslint())
        .pipe($.gp.eslint.format());
})
