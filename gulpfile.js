var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var reload = browserSync.reload;
// 静态服务器 + 监听 scss/html 文件(也可添加代理服务器)
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir:"./",
            index:"index.html"
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
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/dist/css'))//目的路径
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
