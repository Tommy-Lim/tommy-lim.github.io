// DEPENDENCIES
var gulp = require('gulp');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var htmlclean = require('gulp-htmlclean');
var concat = require('gulp-concat');
var deporder = require('gulp-deporder');
var uglify = require('gulp-uglify');
var stripdebug = require('gulp-strip-debug');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var assets = require('postcss-assets');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');


// CHECK IF IN DEV MODE
// var devBuild = (process.env.NODE_ENV !== 'production')

// FOLDER STRUCTURE
var folder = {
  src: '/',
  build: 'build/'
}

// IMAGES PROCESSING AND COMPRESSING NEW IMAGES
gulp.task('images', function(){
  var out = folder.build + 'img/';
  return gulp.src(folder.src + 'img/**/*')
    .pipe(newer(out))
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(out));
})

// HTML PROCESSING
gulp.task('html', ['images'], function(){
  var out = folder.build + 'html/';
  var page = gulp.src('index.html')
    .pipe(newer(out));

  page = page.pipe(htmlclean());

  return page.pipe(gulp.dest(out));
})

// JS PROCESSING
gulp.task('js', function(){
  var out = folder.build + 'js/';
  var jsbuild = gulp.src(folder.src + 'js/**/*')
    .pipe(deporder())
    .pipe(concat('main.js'))

  jsbuild = jsbuild
    .pipe(stripdebug())
    .pipe(uglify());

  return jsbuild.pipe(gulp.dest(out))
})

// CSS PROCESSING
gulp.task('css', ['images'], function(){
  var postCssOpts = [
    assets({loadPaths: ['img/']}),
    autoprefixer({browsers: ['last 2 versions', '> 2%']}),
    mqpacker
  ];

  postCssOpts.push(cssnano);

  return gulp.src(folder.src + 'css/style.css')
    .pipe(sass({
      outputStyle: 'nested',
      imagePath: 'img/',
      precision: 3,
      errLogToConsole: true
    }))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest(folder.build + 'css/'))
})

// AUTOMATION
gulp.task('run', ['html', 'css', 'js']);

// WATCH FOR CHANGES
// gulp.task('watch', function(){
//   gulp.watch(folder.src + 'images/**/*', ['images']);
//   gulp.watch(folder.src + 'html/**/*', ['html']);
//   gulp.watch(folder.src + 'js/**/*', ['js']);
//   gulp.watch(folder.src + 'scss/**/*', ['css']);
// })

// DEFAULT TASK
// gulp.task('default', ['run', 'watch']);
