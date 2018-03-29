(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './TableConfig', './PaginationConfig', './ButtonConfig', './DataEntryConfig', './FormConfig', './LayoutMap'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./TableConfig'), require('./PaginationConfig'), require('./ButtonConfig'), require('./DataEntryConfig'), require('./FormConfig'), require('./LayoutMap'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TableConfig, global.PaginationConfig, global.ButtonConfig, global.DataEntryConfig, global.FormConfig, global.LayoutMap);
    global.index = mod.exports;
  }
})(this, function (exports, _TableConfig, _PaginationConfig, _ButtonConfig, _DataEntryConfig, _FormConfig, _LayoutMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LayoutMap = exports.FormConfig = exports.DataEntryConfig = exports.ButtonConfig = exports.PaginationConfig = exports.TableConfig = undefined;

  var _TableConfig2 = _interopRequireDefault(_TableConfig);

  var _PaginationConfig2 = _interopRequireDefault(_PaginationConfig);

  var _ButtonConfig2 = _interopRequireDefault(_ButtonConfig);

  var _DataEntryConfig2 = _interopRequireDefault(_DataEntryConfig);

  var _FormConfig2 = _interopRequireDefault(_FormConfig);

  var _LayoutMap2 = _interopRequireDefault(_LayoutMap);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.TableConfig = _TableConfig2.default;
  exports.PaginationConfig = _PaginationConfig2.default;
  exports.ButtonConfig = _ButtonConfig2.default;
  exports.DataEntryConfig = _DataEntryConfig2.default;
  exports.FormConfig = _FormConfig2.default;
  exports.LayoutMap = _LayoutMap2.default;
});