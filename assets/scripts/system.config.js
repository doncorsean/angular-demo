(function (global) {
    var libDir = "lib"

    System.config({

        // map tells the System loader where to look for things
        map: {

            '@angular/common': libDir + '/@angular/common/bundles/common.umd.js',
            '@angular/compiler': libDir + '/@angular/compiler/bundles/compiler.umd.js',
            '@angular/core': libDir + '/@angular/core/bundles/core.umd.js',
            '@angular/http': libDir + '/@angular/http/bundles/http.umd.js',
            '@angular/forms': libDir + '/@angular/forms/bundles/forms.umd.js',
            '@angular/platform-browser': libDir + '/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': libDir + '/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/router': libDir + '/@angular/router/bundles/router.umd.js',

            'rxjs': libDir + '/rxjs',
            'ng2-pagination': libDir + '/ng2-pagination',
            'angular2-cookie': libDir + '/angular2-cookie',
            'app': 'app',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {

            'rxjs': { defaultExtension: 'js' },
            'ng2-pagination': {  main: 'index.js', defaultExtension: 'js' },
            'angular2-cookie': { defaultExtension: 'js' },
            'app': { main: 'main', defaultExtension: 'js' },
        }
    });
    // System.import("app").then(
    //     function handleResolve() { console.info( "System.js successfully bootstrapped app." ); },
    //     function handleReject( error ) { console.error( error ); }
    // );
})(this);