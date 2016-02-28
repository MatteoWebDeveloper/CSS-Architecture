(function(){
    'use strict';

    var depCopySnippets = require('./copy-snippets.js');
    var depHtmlToText = require('./html-to-text.js');

    var CopySnippets = new depCopySnippets();
    var HtmlToText = new depHtmlToText();

    CopySnippets.init();
    HtmlToText.init();
    new Clipboard('[copy-snippet]');
})();