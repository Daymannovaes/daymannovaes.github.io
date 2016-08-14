'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

function server() {
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
}

gulp.task('browser-sync', server);
gulp.task('server', server);