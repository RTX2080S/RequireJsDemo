
/*
    Defined an listCreator module that requires 'underscore'
    the ['underscore'] means the app module is dependent on the 'underscore'
*/

define(['underscore'], function () {

    var listCreator = function () {

        const ulContent = ["Green", "Red", "Blue", "Orange", "Purple"];

        function getUlContent() {
            var result = '';
            _.each(ulContent, function (ulItem) {
                result += '<li>' + ulItem + '</li>';
            });
            return result;
        }

        this.ContentEnum = ulContent;
        this.GetContent = getUlContent;
    }

    return listCreator;
});
