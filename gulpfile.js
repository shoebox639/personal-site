var gulp = require('gulp');
var typescript = require('gulp-tsc');
 
gulp.task('compile', function(){
  var opts = {
    target: 'ES5',
    outDir: 'build/',
    sourceRoot: 'src/',
    sourceMap: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,

  };
  gulp.src(['src/**/*.ts'])
    .pipe(typescript(opts))
    .pipe(gulp.dest('build/'))
});
