(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'antd'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('antd'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.antd);
    global.includeHead = mod.exports;
  }
})(this, function (exports, _react, _antd2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isChildSystem = exports.$eventbus = exports.antd = undefined;

  var _antd3 = _interopRequireDefault(_antd2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (function injectionEventBus() {
    if (window.$eventbus && !Object.prototype.hasOwnProperty.call(_react.Component.prototype, '$eventbus')) {
      Object.defineProperty(_react.Component.prototype, '$eventbus', {
        get: function get() {
          return window.$eventbus || {};
        },
        set: function set() {
          throw new Error('不允许赋值');
        }
      });
    }
    return injectionEventBus;
  })();

  var antd = exports.antd = window.antd;
  var $eventbus = exports.$eventbus = window.$eventbus;
  var isChildSystem = exports.isChildSystem = window.isChildSystem;
});