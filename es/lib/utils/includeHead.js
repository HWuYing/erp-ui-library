'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChildSystem = exports.$eventbus = exports.antd = undefined;

var _react = require('react');

var _antd2 = require('antd');

var _antd3 = _interopRequireDefault(_antd2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var antd = exports.antd = window.antd || require('antd');
var $eventbus = exports.$eventbus = window.$eventbus;
var isChildSystem = exports.isChildSystem = window.isChildSystem;