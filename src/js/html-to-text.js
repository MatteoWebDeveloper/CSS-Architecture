function Service ()
{
    'use strict';

    this.init = function (elm) {
        var elmString = elm.innerHTML;

        // convert
        //elmString = elmString.replace(/^\s+/g, '');
        elmString = elmString.replace(/\</g, '&lt;');
        elmString = elmString.replace(/\>/g, '&gt;');
        //elmString = elmString.replace(/\s+$/g, '');

        // inject back
        elm.innerHTML = elmString;
    };
};

module.exports = Service;