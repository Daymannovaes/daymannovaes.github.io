"use strict";

var gulp = require("gulp");

gulp.task("index", function() {
	gulp.src("index.html")
    .pipe(gulp.dest("build"));
});

module.exports = gulp.task("watch", function () {
  gulp.watch("index.html", ["index"]);
  gulp.watch("./src/js/**/*.js", ["babel"]);
  gulp.watch("./src/css/**/*.css", ["sass"]);
});
