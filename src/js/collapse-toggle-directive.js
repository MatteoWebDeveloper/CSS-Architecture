function componentFactory (domElement)
{
    'use strict';

    var _self = this;
    var _elementTrigger = domElement;
    var _elementTarget = null;
    var _attribute = 'toggle-target';
    var _hideClass = 't_collapse';

    this.toogleState = null;


    this.init = function ()
    {
        // run async
        setTimeout(_self.getInitialState,0);

        _elementTrigger.addEventListener("click", _self.toogle, false);
    };


    this.getInitialState = function ()
    {
        var elementTargetID = _elementTrigger.getAttribute(_attribute);
        _elementTarget = document.querySelectorAll(elementTargetID)[0];

        // check if has class
        _self.toogleState = _elementTarget.classList.contains(_hideClass);
        _self.toogle(null, true);
    };


    this.toogle = function (e, isInit)
    {
        _self.toogleState = isInit ? _self.toogleState : !_self.toogleState;
        _elementTrigger.innerText = _self.toogleState ? 'show code': 'hide code';
        _elementTarget.classList.toggle(_hideClass, _self.toogleState);
    };
};

module.exports = componentFactory;