var config = require('./config');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var react = require('gulp-react');
var gutil = require('gulp-util');

gulp.task('react', function () {
  return gulp.src(config.react.src)
    .pipe(react())
    .pipe(gulp.dest(config.react.dest));
});

gulp.task('browserify', function(){
  browserify({
    entries: [config.react.entry_file],
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true,
    standalone: 'Site'
  })
    .bundle()
    .pipe(source(config.react.minified_file))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(config.react.dist_folder));
});

gulp.task('default', ['react', 'browserify']);
