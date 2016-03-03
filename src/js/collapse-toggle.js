function componentFactory ()
{
    'use strict';

    var copySnippetDirective = require('./collapse-toggle-directive.js');
    var _self = this;

    this.init = function () {

        var toogleDirectiveList = document.querySelectorAll('[toggle-target]');

        _.forEach(
            toogleDirectiveList,
            function(toogleDirective){
                var instance = new copySnippetDirective(toogleDirective);

                instance.init();
            }
        );


    };
};

module.exports = componentFactory;