var gulp = require("gulp"),
	sass = require("gulp-sass");
 
gulp.task("sass", function () {
  gulp.src("src/sass/main.scss")
    .pipe(sass())
	.on("error", onError)
    .pipe(gulp.dest("build/css"));
});

function onError(err) {
  console.log(err);
  this.emit("end");
}