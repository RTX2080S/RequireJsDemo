
/*
    Defined an app module that requires 'jquery', 'listCreator';
    the ['jquery', 'listCreator'] means the app module is dependent on the 'jquery' and 'listCreator'
*/

define(['jquery', 'listCreator', 'loadingoverlay'], function ($, listCreator) {

    function run() {
        $(function () {
            $.LoadingOverlay("show");
            setTimeout(function () {
                var creator = new listCreator();
                var content = creator.GetContent();
                $('#targetUl').html(content);
                $.LoadingOverlay("hide");
            }, 3000);       
        });
    }

    function App() {
        this.Name = 'App';
        this.Run = run;
    }

    return App;
});
