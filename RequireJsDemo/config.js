
require.config({
    paths: {
        "jquery": "Scripts/jquery-3.1.1.min",
        "underscore": "Scripts/underscore.min",
        "app": "js/app",
        "listCreator": "js/listCreator",
        "loadingoverlay": "Scripts/jquery.loadingoverlay/loadingoverlay.min"
    },

    /*
        Set up a shim to tell requirejs that the plugin depends on jQuery already being loaded.
        http://stackoverflow.com/questions/14756567/loading-jquery-plugins-with-require-js
    */
    shim: {
        'loadingoverlay': {
            deps: ['jquery'],
            exports: 'jQuery.fn.LoadingOverlay'
        }
    }
});

// The parameter 'App' will get the App instance defined in 'js/app.js'
require(['app'], function (App) {
    var app = new App();
    app.Run();
});
