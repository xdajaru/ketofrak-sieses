const { src, dest, watch, series } = require("gulp");
const purgecss = require("gulp-purgecss");
const sass = require("gulp-sass")(require("sass"));

const buildStyles = function () {
	return src("sass/**/*.scss")
		.pipe(sass())
		.pipe(purgecss({ content: ["*.html"] }))
		.pipe(dest("css"));
};

const watchTask = function () {
	watch(["sass/**/*.scss", "*html"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
