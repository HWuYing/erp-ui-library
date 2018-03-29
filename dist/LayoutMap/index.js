(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/tableSearch', './components/cardSelection'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/tableSearch'), require('./components/cardSelection'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.tableSearch, global.cardSelection);
    global.index = mod.exports;
  }
})(this, function (exports, _tableSearch, _cardSelection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _tableSearch2 = _interopRequireDefault(_tableSearch);

  var _cardSelection2 = _interopRequireDefault(_cardSelection);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    TableSearchLayout: _tableSearch2.default,
    CardSelectionLayout: _cardSelection2.default
  };
});