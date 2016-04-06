var browserify = require('browserify');
var config = require('./config');
var gulp = require('gulp');
var gutil = require('gulp-util');
var minify = require('gulp-minify-css');
var react = require('gulp-react');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sequence = require('run-sequence');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('default', function(callback) {
  sequence('react', 'browserify', 'sass', callback);
});

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

gulp.task('sass', function() {
  gulp.src(config.sass.src)
      .pipe(sass())
      .pipe(minify({keepBreaks: true}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(config.sass.dest));
});
