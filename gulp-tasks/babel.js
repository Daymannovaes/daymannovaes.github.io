var gulp = require("gulp"),
	babel = require("gulp-babel");

module.exports = gulp.task("babel", function () {
  return gulp.src("src/jsx/**/*.js")
    .pipe(babel())
	.on("error", onError)
    .pipe(gulp.dest("build/js"));
});

function onError(err) {
  console.log(err);
  this.emit("end");
}