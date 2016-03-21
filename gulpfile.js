require('babel-core/register.js')({
	'plugins': [
		'transform-es2015-modules-commonjs',
		'transform-es2015-parameters'
	]
});

var gulp = require('gulp');
var babel = require('gulp-babel');
var jasmine = require('gulp-jasmine');


// build module
gulp.task('build', function() {
	return (
		gulp.src('./src/**/!(*Spec).js')
		.pipe(babel({
			moduleIds: true,
			plugins: ['transform-es2015-modules-commonjs']
		}))
		.pipe(gulp.dest('./dist'))
	);
});

//run test
gulp.task('test', () => {
	return (
		gulp.src('./src/**/*Spec.js')
			.pipe(jasmine({ includeStackTrace: true }))
	);
});


// -------------------------------------PRIVATE HELPER TASKS
gulp.task('dev', function() {
	gulp.watch(['./src/**/*.js'], ['test']);
});