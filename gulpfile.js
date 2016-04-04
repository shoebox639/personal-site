const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const tscConfig = require('./tsconfig.json');
// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('build/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/app'));
});

gulp.task('copy:libs', ['clean'], function() {
  gulp.src(['bower_components/bootstrap/**/*'])
  .pipe(gulp.dest('build/lib/bootstrap'));

  return gulp.src([
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
  ])
  .pipe(gulp.dest('build/lib'));
});

gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['src/**/*', '!src/**/*.ts'])
    .pipe(gulp.dest('build/app'));
});

gulp.task('build', ['compile', 'copy:assets']);
gulp.task('build:watch', ['build'], function() {
  return gulp.watch(['src/**/*'], ['compile', 'copy:libs', 'copy:assets']);
});
gulp.task('default', ['build']);