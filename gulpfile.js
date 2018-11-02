var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', function(){
    gulp.watch('src/scss/**/main.scss', ['default']);
})