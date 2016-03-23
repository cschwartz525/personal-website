var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var react = require('gulp-react');
var gutil = require('gulp-util');

var config = {
  react: {
    src: './src/react/**/*',
    dest: './lib/react'
  },
};

gulp.task('react', function () {
  return gulp.src(config.react.src)
    .pipe(react())
    .pipe(gulp.dest(config.react.dest));
});

gulp.task('browserify', function(){
  browserify({
    entries: ['./lib/react/site.js'],
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true,
    standalone: 'Site'
  })
    .bundle()
    .pipe(source('bundle.js'))
    //.pipe(streamify(uglify()))
    .pipe(gulp.dest('public/assets/js'));
});
