try {
    var concat = require('gulp-concat');
    var del = require('del');
    var gulp = require('gulp');
    var runSequence = require('run-sequence');
    var sourceMaps = require('gulp-sourcemaps');
    var sysBuilder = require('systemjs-builder');
    var ts = require('gulp-typescript');
    var tsLint = require('gulp-tslint');
    var uglify = require('gulp-uglify');
    var log = require("npmlog");
} catch (e) {
    // Unknown error, rethrow it.
    if (e.code !== "MODULE_NOT_FOUND") { throw e; }
    // Otherwise, we have a missing dependency. If the module is in the dependency list, the user just needs to run `npm install`.
    // Otherwise, they need to install and save it.
    var dependencies = require("./package.json").devDependencies;
    var module = e.toString().match(/'(.*?)'/)[1];
    var command = "npm install";
    if (typeof dependencies[module] === "undefined") { command += " --save-dev " + module; }
    console.error(e.toString() + ". Fix this by executing:\n\n" + command + "\n");
    process.exit(1);
}

var sourceDir = 'assets';
var targetDir = sourceDir;
var scriptsDir = targetDir + '/scripts';
var scriptsLibDir = scriptsDir + '/lib';

// Pretty, pretty log messages.
log.enableColor();

gulp.task('lint:ts', function() {
return gulp.src(sourceDir + '/scripts/app/**/*.ts')
    .pipe(tsLint({ formatter: "verbose" }))
    .pipe(tsLint.report());
});

gulp.task('clean', function () {
    return del(targetDir);
});

gulp.task('copy:scripts:lib', function() {
    gulp.src([
        'node_modules/rxjs/**/*',
        'node_modules/symbol-observable/**/*',
        'node_modules/ng2-pagination/**/*',
        'node_modules/angular2-cookie/**/*'
        ], { base: 'node_modules' })
            .pipe(gulp.dest(scriptsLibDir));

    // concatenate non-angular libs, shims & systemjs-config
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/chosen-js/chosen.jquery.js',
        'node_modules/jquery-colorbox/jquery.colorbox-min.js',
        'node_modules/jquery-cycle/index.js',
        'node_modules/jquery-validation/dist/jquery.validate.min.js',
        'node_modules/jaaulde-cookies/lib/jaaulde-cookies.js',
        'node_modules/jcarousellite/jcarousellite.min.js',
        'node_modules/masonry-layout/masonry.pkgd.min.js',
        'node_modules/jquery.scrollto/jquery.scrollTo.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ]).pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(scriptsLibDir));

    //TODO:  copy source maps
    // gulp.src([ 'node_modules/reflect-metadata/Reflect.js.map' ])
    //     .pipe(gulp.dest(scriptsLibDir));

    gulp.src([ 'assets/scripts/app/**/*.html' ])
        .pipe(gulp.dest(scriptsDir + "/app"));

    return gulp.src(['node_modules/@angular/**/*'], { base: 'node_modules' })
        .pipe(gulp.dest(scriptsLibDir));
});

gulp.task('compile:ts', function () {
    var tsProject = ts.createProject('tsconfig.json', { typescript: require('typescript') });
    var tsResult = tsProject.src().pipe(sourceMaps.init()).pipe(tsProject());
    return tsResult.js.pipe(sourceMaps.write()).pipe(gulp.dest(scriptsDir));
});

gulp.task('bundle:app', function() {
    // map sysBuilder path to our compiled scripts dir. Paths inside system.config.js begin from here.
    var builder = new sysBuilder(scriptsDir, scriptsDir + '/system.config.js');
    return builder.buildStatic('app', scriptsDir + '/app.min.js',  {minify: false, encodeNames:false })
        // .then(function () {
        //     return del([scriptsDir + '/app']);
        // })
        .catch(function(err) {
            console.error('>>> [systemjs-builder] Bundling failed'.bold.green, err);
        });
});

gulp.task('copy:scripts:app', function() {
    gulp.src([ sourceDir + '/scripts/**/*.js' ])
        .pipe(gulp.dest(scriptsDir));
});

gulp.task('minify', function() {
    return gulp
        .src(scriptsDir + '/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest(scriptsDir));
});

gulp.task('copy:styles', function() {
    return gulp.src([ sourceDir + '/css/**/*', 'node_modules/chosen-js/chosen.css' ])
        .pipe(gulp.dest(targetDir + '/css'));
});

gulp.task('build', function(callback) {
    runSequence(
        // 'clean',
        'lint:ts',
        'compile:ts',
        'copy:scripts:lib',
        'copy:scripts:app',
        'bundle:app',
        // 'minify',
        'copy:styles',
        callback
    );
});

gulp.task('copy:scripts:dynamic', function() {
    gulp.src([
        'node_modules/core-js/**/*',
        'node_modules/zone.js/**/*',
        'node_modules/reflect-metadata/**/*',
        'node_modules/systemjs/**/*'], { base: 'node_modules' })
        .pipe(gulp.dest(scriptsLibDir));
});

gulp.task('buildDynamic', function(callback) {
    runSequence(
        'lint:ts',
        'compile:ts',
        'copy:scripts:dynamic',
        'copy:scripts:lib',
        'copy:scripts:app',
        'copy:styles',
        callback
    );
});

gulp.task('default', function(callback) {
    runSequence('build', callback);
});