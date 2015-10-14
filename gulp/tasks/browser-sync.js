'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
	var files = [
		"index.html",
		"js/**/*.js",
		"css/**/*.css",
		"img/**/*"
	];

	gulp.src("index.html")
    .pipe(gulp.dest("build"));

    browserSync.init(files, {
        server: {
            baseDir: "./build"
        }
    });
});