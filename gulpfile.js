var gulp = require('gulp');
var sass = require('gulp-sass');
var postCss = require('gulp-postcss');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssNext = require('cssnext');
var reload = browserSync.reload;
var processors = [autoprefixer(({ browsers: ['last 2 versions', 'Android >= 4.0', "ff > 20"] })), cssNext];
// 静态服务器 + 监听 scss/html 文件(也可添加代理服务器)
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')//源路径
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postCss(processors))
        //.pipe(sourcemaps.write())//添加sourcemaps
        .pipe(gulp.dest('src/dist/css'))//目的路径
        .pipe(minifyCss())//压缩css
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
