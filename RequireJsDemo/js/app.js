
/*
    Defined an app module that requires 'jquery', 'listCreator';
    the ['jquery', 'listCreator'] means the app module is dependent on the 'jquery' and 'listCreator'
*/

define(['jquery', 'listCreator'], function ($, listCreator) {

    function run() {
        $(function () {
            var creator = new listCreator();
            var content = creator.GetContent();
            $('#targetUl').html(content);
        });
    }

    function App() {
        this.Name = 'App';
        this.Run = run;
    }

    return App;
});
