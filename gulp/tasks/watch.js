'use strict';

$.gulp.task('watch', function () {
   $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
   $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));

});