(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/formItemConfig', './components/formConfig'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/formItemConfig'), require('./components/formConfig'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.formItemConfig, global.formConfig);
    global.index = mod.exports;
  }
})(this, function (exports, _formItemConfig, _formConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _formItemConfig2 = _interopRequireDefault(_formItemConfig);

  var _formConfig2 = _interopRequireDefault(_formConfig);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    FormItemConfig: _formItemConfig2.default,
    FormCreateConfig: _formConfig2.default
  };
});