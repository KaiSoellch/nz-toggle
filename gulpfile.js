var gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    rename = require('gulp-rename');

// Build Tasks //
gulp.task('build', ['js', 'less']);

// Default //
gulp.task('default', ['build']);

gulp.task('js', function() {
    gulp.src('./src/nz-toggle.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(rename('nz-toggle.min.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('less', function () {
    return gulp.src('./src/nz-toggle.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/'));
});