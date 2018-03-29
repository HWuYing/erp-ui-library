'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.factoryCloneComponents = factoryCloneComponents;
exports.factoryComponentsConfig = factoryComponentsConfig;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function factoryCloneComponents(Components, fn) {
  return function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _cloneElement = void 0;
    _cloneElement = _react2.default.createElement(Components, config);
    return function () {
      for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      _cloneElement = fn.apply(undefined, [_cloneElement].concat(arg));
      return _cloneElement;
    };
  };
}

function factoryComponentsConfig(Components) {
  return factoryCloneComponents(Components, function (cloneElement, options) {
    return _react2.default.cloneElement(cloneElement, _extends({}, options || {}));
  });
}