var gulp = require ('gulp'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin')

// --------------  js transpiler  --------------   //

// --------------  watch changes  --------------   //
gulp.task('watch', function(){
  browserSync.init({
    server : {
      baseDir : './'
    }
  })
})

gulp.task('default', ['watch'])
