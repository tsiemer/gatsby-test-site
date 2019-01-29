//gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'src/styles/sass/**/*.scss',
    cssDest = './src/styles/css';

gulp.task('styles', function(){
    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest('src/styles/css'))
});


gulp.task('default', function() {
    console.log("Hello master!")
    console.log("Let me watch styles for you.")
    
    gulp.watch('src/styles/sass/**/*.scss', gulp.series('styles')); 
});