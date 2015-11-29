var gulp = require("gulp");
var concat  = require('gulp-concat');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('compileLess',function(){
	gulp.src("./source/less/*.less")
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(less())
	.pipe(minify())
	.pipe(concat("style.min.css"))
	.pipe(gulp.dest("./app/css/"))
});
gulp.task('watchless',function(){
	gulp.watch(["./source/less/*.less"],["compileLess"]);
})