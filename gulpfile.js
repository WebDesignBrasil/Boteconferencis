var gulp = require('gulp');
var config = require('./config');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function() {
gulp.task('assets', function() {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist'));
});

    gulp.src('src/content/**/*.html')
        .pipe(plugins.fileInclude({
            prefix: '@',
            basepath: 'src/includes'
        }))
        .pipe(plugins.wrap(
            { src: 'src/layouts/default.html' },
            { data: config }
        ))
        .pipe(gulp.dest('dist'));
});