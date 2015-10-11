var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("./public/*.css").on('change', browserSync.reload);
});

//gulp.task('watch', function(){
  //gulp.watch("./*.css").on('change', browserSync.reload);
//});

gulp.task('default', ['serve']);
