(function (global) {

    var angular = "@angular";
    var ngDir = angular + "/";
    var scripts = "assets/scripts/";
    var lib = scripts + "lib/";
    var app = scripts + 'app/';

    var map = {
        'app'               : app,
        angular             : lib + angular,
        'rxjs'              : lib + 'rxjs',
        'symbol-observable' : lib + 'symbol-observable/lib'
    };
    var packages = {
        'app'               : { main: 'main.js',           defaultExtension: 'js' },
        'rxjs'              : { main: 'Rx.js',             defaultExtension: 'js' },
        'symbol-observable' : { main: 'index.js',          defaultExtension: 'js' }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    function packIndex(pkgName) { packages[ngDir + pkgName] = {main: 'index.js', defaultExtension: 'js'}; }

    function packUmd(pkgName) { packages[ngDir + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'}; }

    function addAngularModulesToMap(pkgName) { map[ngDir + pkgName] = lib + ngDir + pkgName; }

    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig)
    ngPackageNames.forEach(function (pkgName) { addAngularModulesToMap(pkgName) });
    console.log(JSON.stringify(map));
    console.log(JSON.stringify(packages));
    System.config({ map: map, packages: packages });

})(this);