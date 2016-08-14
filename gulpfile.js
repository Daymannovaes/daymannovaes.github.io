"use strict";

let gulp = require("gulp");
let fs = require("fs");
let tasks = fs.readdirSync("./gulp-tasks");

tasks.forEach((task) => require(`./gulp-tasks/${task}`));
