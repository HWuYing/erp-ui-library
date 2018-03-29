(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './input', './search', './textArea', './select', './dataRange'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./input'), require('./search'), require('./textArea'), require('./select'), require('./dataRange'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.input, global.search, global.textArea, global.select, global.dataRange);
    global.index = mod.exports;
  }
})(this, function (exports, _input, _search, _textArea, _select, _dataRange) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _input2 = _interopRequireDefault(_input);

  var _search2 = _interopRequireDefault(_search);

  var _textArea2 = _interopRequireDefault(_textArea);

  var _select2 = _interopRequireDefault(_select);

  var _dataRange2 = _interopRequireDefault(_dataRange);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var mapCache = {
    input: _input2.default,
    search: _search2.default,
    textArea: _textArea2.default,
    select: _select2.default,
    dataRange: _dataRange2.default
  };

  exports.default = function (key, config) {
    var componentConfig = mapCache[key];
    if (!componentConfig) throw new Error('not componentConfig info');
    return componentConfig(config);
  };
});