const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

gulp.task('sass', function(){
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['sass']);
});