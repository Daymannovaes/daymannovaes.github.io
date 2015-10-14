'use strict';

var gulp = require('gulp');

module.exports = gulp.task('watch', function () {
  gulp.watch("./js/**/*.js");
  gulp.watch("./css/**/*.css");
});
