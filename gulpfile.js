var gulp = require('gulp'),
    watch = require('gulp-watch');



gulp.task('css', () =>
    gulp.src('./app/assets/css/styles.css')
    .pipe(gulp.dest('./app/temp/css'))
);

gulp.task('watch', gulp.series('css', (done) => {
    gulp.watch('./app/assets/css/**/*.css', gulp.series('css'));
    done();
}));