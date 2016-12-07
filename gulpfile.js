var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var fs = require('fs');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('serve-static', function () {
  gulp.src('.')
    .pipe(webserver({
      https: true,
      port: '8443',
      host: '0.0.0.0',
      directoryListing: true,
      fallback: 'index.html'
    }));
});

gulp.task('package', function() {
  return gulp.src('./App/Javascript/*.js')
    .pipe(concat('Home.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./App/Home'));
});
