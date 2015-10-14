"use strict";

var gulp = require("gulp");

// Default task
module.exports = gulp.task("default", ["babel", "sass", "watch", "browser-sync"]);
