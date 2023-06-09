// Gulpfile
"use strict";
const gulp                   = require('gulp');
const sass                   = require('gulp-sass')(require('sass'));
const autoprefixer           = require('gulp-autoprefixer');
const rename                 = require('gulp-rename');
const concat                 = require('gulp-concat');
const cleanCSS               = require('gulp-clean-css');
const uglify                 = require('gulp-uglify-es').default;
const browsersync            = require('browser-sync').create();

// Gulp plumber error handler - displays if any error occurs during the process on your command
function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

// SASS - Compile SASS files into CSS
function scss() {
  return gulp
    .src('./assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/css/'))
    .on('error', sass.logError)
    .pipe(autoprefixer([
        "last 1 major version",
        ">= 1%",
        "Chrome >= 45",
        "Firefox >= 38",
        "Edge >= 12",
        "Explorer >= 10",
        "iOS >= 9",
        "Safari >= 9",
        "Android >= 4.4",
        "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browsersync.stream());
}

// BrowserSync (live reload) - keeps multiple browsers & devices in sync when building websites
function browserSync(done) {
  browsersync.init({
    files: "./*.html",
    startPath: "./Sewer-maintenance-Service.html",
    server: {
      baseDir: "./",
      routes: {},
      middleware: function (req, res, next) {
        if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() == 'POST') {
          console.log('[POST => GET] : ' + req.url);
          req.method = 'GET';
        }
        next();
      }
    }
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Gulp Watch and Tasks
function watch() {
  gulp.watch('./assets/scss/**/*.scss', scss);
  gulp.watch(
    [
      './html/**/*.html'
    ],
    gulp.series(browserSyncReload)
  );
}

// JavaSript minifier - merges and minifies the below given list of Space libraries into one theme.min.js
function minJS() {
  return gulp
    .src([
      './assets/js/fabrx-scripts.js',
    ])
    .pipe(concat('fabrx-scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/'));
}

// Copy Vendors - a utility to copy client-side dependencies into a folder
function copyVendors() {
  return gulp
    .src([
      './node_modules/*bootstrap/**/*',
      './node_modules/*swiper/**/*',
      './node_modules/*lodash/**/*',
      './node_modules/*simplebar/**/*',
      './node_modules/*dropzone/**/*',
      './node_modules/*flatpickr/**/*',
      './node_modules/*sticky-js/**/*',
      './node_modules/*smooth-scroll/**/*',
      './node_modules/*bootstrap-slider/**/*',
      './node_modules/*isotope-layout/**/*',
      './node_modules/*isotope-packery/**/*',
      './node_modules/*masonry-layout/**/*',
      './node_modules/*purecounterjs/**/*',
    ])
    .pipe(gulp.dest('./assets/vendor/'))
};

// Gulp Tasks
gulp.task('default', gulp.parallel(watch, scss, browserSync));
gulp.task('minJS', minJS);
gulp.task('copyVendors', copyVendors);
gulp.task('dist', gulp.series(copyVendors, minJS));


