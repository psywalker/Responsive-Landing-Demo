var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['sass']);

})