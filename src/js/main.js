'use strict';

(function(){
    // transform html to string
    var codeListDOM = document.querySelectorAll('pre code');

    for (var i = 0; i < codeListDOM.length; i++) {
        var elm = codeListDOM[i],
            elmString = elm.innerHTML;

        // convert
        //elmString = elmString.replace(/^\s+/g, '');
        elmString = elmString.replace(/\</g, '&lt;');
        elmString = elmString.replace(/\>/g, '&gt;');
        //elmString = elmString.replace(/\s+$/g, '');

        // inject back
        elm.innerHTML = elmString;
    }

    // highlight
    hljs.initHighlightingOnLoad();
})();