var
// modules
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    mixins = require('postcss-mixins'),
    cssImport = require('postcss-import'),
    // browserSync = require('browser-sync').creat()

    // folders
    src = './app/assets/'
build = './app/temp/';


function css() {
    return gulp
        .src(src + 'css/styles.css')
        .pipe(postcss([cssImport(), mixins(), cssvars(), autoprefixer(), nested()]))
        .pipe(gulp.dest(build + 'css'));
}

exports.css = css;

//   gulp.watch('./app/assets/css/**/*.css', gulp.series('css'));