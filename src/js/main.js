(function(){
    'use strict';

    // dependencies
    var riot = require('riot'); // riotify need this
    var depCopySnippets = require('./collapse-toggle.js');
    var depHtmlToText = require('./html-to-text.js');
    var collapseToggle = require('./collapse-toggle.tag')

    // instances
    var CopySnippets = new depCopySnippets();
    var HtmlToText = new depHtmlToText();

    CopySnippets.init();
    HtmlToText.init();
    new Clipboard('[copy-snippet]');

    // init riot mount
    riot.mount(collapseToggle);
})();