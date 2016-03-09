
// =============================================================================
// Include plugins
// =============================================================================
var $                 = require('gulp-load-plugins')();
var gulp              = require('gulp');
var db                = require('gulp-db');
var gutil             = require('gulp-util');
var sass              = require('gulp-sass');
var shell             = require('gulp-shell');
var sassjson          = require('gulp-sass-json');
var concat            = require('gulp-concat');
var notify            = require('gulp-notify');
var cssnano           = require('gulp-cssnano');
var imagemin          = require('gulp-imagemin');
var sourcemaps        = require('gulp-sourcemaps');
var autoprefixer      = require('gulp-autoprefixer');
var rimraf            = require('rimraf');
var sassdoc           = require('sassdoc');
var sassdoc           = require('require-dir');
var browser           = require('browser-sync');
var sequence          = require('run-sequence');


// =============================================================================
// Use `spawn` to execute shell command using Node
// The directory that contains the Gulpfile whose task needs to be run.
// Gulp tasks that need to be run.
// Check for --production flag
// Port to use for the development server.
// Browsers to target when prefixing CSS.
// =============================================================================
var PORT              = 3010;
var UI_PORT           = 3020;
var COMPATIBILITY     = ['last 2 versions', 'ie >= 9'];


// =============================================================================
// Paths
// =============================================================================
var corePath          = './assets/_core';
var srcPath           = './assets/app';
var buildPath         = './assets/build';


// =============================================================================
// Server URL
// =============================================================================
var dynamicServerURL  = 'http://mogulminions.local';


// =============================================================================
// Database Details
// =============================================================================
// var dbManager = db({
//     // Credentials for local database
//     host: '127.0.0.1',
//     user: 'homestead',
//     password: 'secret',
//     database: 'nilssanderson',
//     dialect: 'mysql'
// });


// =============================================================================
// Delete the buildPath folder
// This happens every time a build starts
// =============================================================================
gulp.task('clean', function(done) {
    rimraf(buildPath, done);
});


// =============================================================================
// Copy HTML
// =============================================================================
gulp.task('html', function() {
  gulp.src(srcPath + '/*.html')
    .pipe(gulp.dest(buildPath));
});


// =============================================================================
// Compile Sass into CSS
// In production, the CSS is compressed
// Runs 2 tasks, a core and a src as to seperate the core updates
// =============================================================================
gulp.task('coreSass', function() {
    return gulp
        .src(corePath + '/sass/materialize.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()).on('error', notify.onError(function (error) {
            return "Problem file : " + error.message;
        }))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildPath + '/css'));
});

gulp.task('sass', function() {
    return gulp
        .src(srcPath + '/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()).on('error', notify.onError(function (error) {
            return "Problem file : " + error.message;
        }))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildPath + '/css'));
});

gulp.task('backendSass', function() {
    return gulp
        .src(srcPath + '/sass/backend-ui.scss')
        .pipe(sass()).on('error', notify.onError(function (error) {
            return "Problem file : " + error.message;
        }))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest(srcPath + '/backend-ui'));
});


// =============================================================================
// Combine JavaScript into one file
// In production, the file is minified
// Runs 2 tasks, a core and a src as to seperate the core updates
// =============================================================================
gulp.task('coreJavascript', function() {
    return gulp
        .src(corePath + '/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('materialize.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildPath + '/js'));
});

gulp.task('javascript', function() {
    return gulp
        .src(srcPath + '/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildPath + '/js'));
});


// =============================================================================
// Write SASS file to JSON
// =============================================================================
gulp.task('sassToJson', function() {
    return gulp
        .src(srcPath + '/sass/backend-ui-settings.scss')
        .pipe(sassjson())
        .pipe(gulp.dest(buildPath + '/backend-ui'));
});


// =============================================================================
// Write file to Database
// =============================================================================
gulp.task('writeToDatabase', shell.task([
    'bash /Users/nilssanderson/Code/MogulMinions/mogulminions/themes/heron/assets/app/backend-ui/backend-ui.sh;',
    // 'ssh vagrant@127.0.0.1 -p 2222 "mysql -uhomestead -psecret nilssanderson < /home/vagrant/Code/Personal/nilssanderson/themes/heron/app/backend-ui/backend-ui.sql"',
    'echo database was populated successfully'
]));


// =============================================================================
// Copy images to the buildPath folder
// In production, the images are compressed
// =============================================================================
gulp.task('images', function() {
    return gulp
        .src(srcPath + '/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(buildPath + '/img'));
});


// =============================================================================
// Copy core fonts to the buildPath folder
// =============================================================================
gulp.task('coreFonts', function() {
    return gulp
        .src(corePath + '/fonts/**/*')
        .pipe(gulp.dest(buildPath + '/fonts'));
});


// =============================================================================
// Copy src fonts to the buildPath folder
// =============================================================================
gulp.task('fonts', function() {
    return gulp
        .src(srcPath + '/fonts/**/*')
        .pipe(gulp.dest(buildPath + '/fonts'));
});


// =============================================================================
// Build the buildPath folder by running all of the above tasks
// =============================================================================
gulp.task('build', function(done) {
    sequence('clean', [
        'coreSass',
        'sass',
        'coreFonts',
        'fonts',
        'backendSass',
        'sassToJson',
        'writeToDatabase',
        'coreJavascript',
        'javascript',
        'images',
        'html'
    ], done);
});


// =============================================================================
// Start a server with LiveReload to preview the site in
// =============================================================================
gulp.task('server', ['build'], function() {
    browser.init({
        server: buildPath,
        port: PORT,
        ui: {
            port: UI_PORT
        }
    });
});


// =============================================================================
// Start a dyancmic server with LiveReload to proxy the site in
// =============================================================================
gulp.task('dynamic-server', ['build'], function() {
    browser.init({
        proxy: dynamicServerURL,
        port: PORT,
        ui: {
            port: UI_PORT
        }
    });
});


// =============================================================================
// Build the site, run the server, and watch for file changes
// =============================================================================
gulp.task('default', ['build', 'server'], function() {
    gulp.watch([srcPath + '/*.html'], ['html', browser.reload]);
    gulp.watch([srcPath + '/backend-ui/*.sh'], ['backendSass', 'sassToJson', 'writeToDatabase', browser.reload]);
    gulp.watch([srcPath + '/sass/**/*.scss'], ['coreSass', 'sass', 'backendSass', 'sassToJson', 'writeToDatabase', browser.reload]);
    gulp.watch([srcPath + '/fonts/**/*.fonts'], ['coreFonts', 'fonts', browser.reload]);
    gulp.watch([srcPath + '/js/**/*.js'], ['coreJavascript', 'javascript', browser.reload]);
    gulp.watch([srcPath + '/img/**/*'], ['images', browser.reload]);
});


// =============================================================================
// Proxy the site, run the dynamic server, and watch for file changes
// =============================================================================
gulp.task('dynamic', ['build', 'dynamic-server'], function() {
    gulp.watch([srcPath + '/*.html'], ['html', browser.reload]);
    gulp.watch([srcPath + '/backend-ui/*.sh'], ['backendSass', 'sassToJson', 'writeToDatabase', browser.reload]);
    gulp.watch([srcPath + '/sass/**/*.scss'], ['coreSass', 'sass', 'backendSass', 'sassToJson', 'writeToDatabase', browser.reload]);
    gulp.watch([srcPath + '/fonts/**/*.fonts'], ['coreFonts', 'fonts', browser.reload]);
    gulp.watch([srcPath + '/js/**/*.js'], ['coreJavascript', 'javascript', browser.reload]);
    gulp.watch([srcPath + '/img/**/*'], ['images', browser.reload]);
});
