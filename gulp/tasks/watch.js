"use strict";

var gulp = require("gulp");

gulp.task("index", function() {
	gulp.src("index.html")
	.on("error", onError)
    .pipe(gulp.dest("build"));
});

module.exports = gulp.task("watch", function () {
	gulp.watch("index.html", ["index"]);
	gulp.watch("./src/jsx/**/*.js", ["babel"]);
	gulp.watch("./src/sass/**/*.scss", function(event, cb) {
		setTimeout(function(){
			gulp.start("sass");
		}, 1000);
	});
});

function onError(err) {
  console.log(err);
  this.emit("end");
}
