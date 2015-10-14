var gulp = require("gulp"),
	babel = require("gulp-babel");

module.exports = gulp.task("babel", function () {
  return gulp.src("src/jsx/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("build/js"));
});