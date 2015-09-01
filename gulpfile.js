var gulp = require('gulp');
var typescript = require('gulp-tsc');
var argv = require('minimist')(process.argv.slice(2));
 
gulp.task('compile-once', function(){
  var opts = {
    target: 'ES5',
    outDir: 'build/',
    sourceRoot: 'src/',
    sourceMap: true,
    module: 'commonjs',
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    emitError: false,
    tmpDir: '.tmp'
  };
  gulp.src(['src/**/*.ts'])
    .pipe(typescript(opts))
    .pipe(gulp.dest('build/'))
});

gulp.task('compile', ['compile-once'], function() {
  if (argv.w) {
    gulp.watch('src/ts/**.ts', ['compile-once']);
  }
});
