var config = {
    localhost:    "http://localhost:8080",
    port:         "8080",
    distFiles:    "dist/*",
    fontFiles :    "src/fonts/**/*",
    fontDist :    "dist/fonts/",
    htmlFiles:    "src/pages/*.html",
    htmlDist:     "dist/",
    sassIndex:    "src/scss/main.scss",
    sassFiles:    "src/scss/**/*.scss",
    cssDist:      "dist/css/",
    cssDistFiles: "dist/css/*.css",
    jsFiles:      "src/js/**/*.js",
    jsDist:       "dist/js/",
    vendor: {
        css: [],
        js: [
            "bower_components/lodash/lodash.js",
            "bower_components/moment/moment.js",
            "bower_components/angular/angular.js"
        ]
    },
    csslint : {
        'adjoining-classes': false,
        'box-model': false,
        'box-sizing': false,
        'compatible-vendor-prefixes': false,
        'important': false,
        'outline-none': false,
        'order-alphabetical': false,
        'font-sizes': false,
        'qualified-headings': false,
        'unqualified-attributes': false,
        'regex-selectors': false,
        'unique-headings': false,
        'universal-selector': false,
        'zero-units': false
    },
    templates: [
        'src/pages/*.html',
        'src/js/**/*.js'
    ],
    deprecationEndDate: '2016, 1, 20', // (yyyy, mm, dd) keep in mind month start from 0
    deprecatedClasses : [
        {
            regex: /(| |'|")oldClass(| |'|")/,
            oldClass: '.oldClass',
            newClass: '.newClass'
        }
    ]
};

module.exports = config;