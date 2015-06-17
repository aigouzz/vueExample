/**
 * Created by gxc on 15/6/10.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;


gulp.task('default', function () {
    var injectStyles = gulp.src([
        './bower_components/**/*.css',
        '!./bower_components/**/#.css'
    ], { read: false });

    var injectScripts = gulp.src([
        './bower_components/**/*.min.js',
        '!./bower_components/**/*.spec.js',
        '!./bower_components/**/*.mock.js'
    ]);

    var injectOptions = {
        ignorePath: './node_modules',
        addRootSlash: false
    };

    return gulp.src('./*.html')
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep())
        .pipe(gulp.dest('./'));

});

