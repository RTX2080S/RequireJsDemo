
require.config({
    paths: {
        "jquery": "Scripts/jquery-3.1.1.min",
        "underscore": "Scripts/underscore.min",
        "app": "js/app",
        "listCreator": "js/listCreator"
    }
});

require(['app'], function (App) {
    var app = new App();
    app.Run();
});
