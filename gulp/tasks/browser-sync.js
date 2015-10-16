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

    browserSync.init(files, {
        server: {
            baseDir: "./"
        },
        startPath: "?me=true"
    });
});