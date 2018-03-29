(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.components);
    global.index = mod.exports;
  }
})(this, function (exports, _components) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _components2 = _interopRequireDefault(_components);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _components2.default;
});