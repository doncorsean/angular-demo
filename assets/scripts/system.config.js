(function (global) {
    var libDir = "lib"

    System.config({

        // map tells the System loader where to look for things
        map: {
            'app': 'app',
            '@angular/common': libDir + '/@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': libDir + '/@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/core': libDir + '/@angular/core/bundles/core.umd.min.js',
            '@angular/http': libDir + '/@angular/http/bundles/http.umd.min.js',
            '@angular/forms': libDir + '/@angular/forms/bundles/forms.umd.min.js',
            '@angular/platform-browser': libDir + '/@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': libDir + '/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/router': libDir + '/@angular/router/bundles/router.umd.min.js',

            'rxjs': libDir + '/rxjs',
            'ng2-pagination': libDir + '/ng2-pagination',
            'angular2-cookie': libDir + '/angular2-cookie'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'app': { main: 'main', defaultExtension: 'js' },
            'rxjs': { defaultExtension: 'js' },
            'ng2-pagination': {  main: 'index.js', defaultExtension: 'js' },
            'angular2-cookie': { defaultExtension: 'js' }
        }
    });

})(this);