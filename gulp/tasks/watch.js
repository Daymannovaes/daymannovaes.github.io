'use strict';

var gulp = require('gulp');

module.exports = gulp.task('watch', function () {
  gulp.watch("index.html");
  gulp.watch("./js/**/*.js");
  gulp.watch("./css/**/*.css");
});
