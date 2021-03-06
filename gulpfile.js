const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

const injectCss = () => {
  return gulp
    .src("./assets/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
};

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "./public" //,
      // notify: false
    }
  });

  gulp.watch("./**/*.scss", injectCss);
  gulp.watch("./**/*.html").on("change", browserSync.reload);
  gulp.watch("./**/*.js").on("change", browserSync.reload);
};

exports.default = watch;
