'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kryfeLib = require('kryfe-lib');

var _includeHead = require('./../../lib/utils/includeHead');

var _components = require('./../../lib/utils/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = _includeHead.antd.Input;

var CustomInput = function (_BaseComponent) {
  _inherits(CustomInput, _BaseComponent);

  function CustomInput(props, context) {
    _classCallCheck(this, CustomInput);

    var _this = _possibleConstructorReturn(this, (CustomInput.__proto__ || Object.getPrototypeOf(CustomInput)).call(this, props, context));

    _this.pressEnterFn = props.pressEnterFn;
    _this.state = {
      value: props.value
    };
    _this.config = _extends({}, props || {});
    return _this;
  }

  _createClass(CustomInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.init(arguments.length <= 0 ? undefined : arguments[0]);
    }
  }, {
    key: 'init',
    value: function init(props) {
      this.setState({
        value: props.value
      });
    }
  }, {
    key: 'onPressEnter',
    value: function onPressEnter() {
      var contextComponent = this.context.contextComponent;
      if (contextComponent && this.pressEnterFn) {
        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
          arg[_key] = arguments[_key];
        }

        contextComponent[this.pressEnterFn].apply(contextComponent, [].concat(arg, [this]));
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;
      if (this.props.onChange) this.props.onChange(e);
      this.config.value = value;
      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.cloneElement(_react2.default.createElement(Input, _extends({}, this.props, {
        value: this.state.value,
        onChange: function onChange() {
          return _this2.onChange.apply(_this2, arguments);
        },
        onPressEnter: function onPressEnter() {
          return _this2.onPressEnter.apply(_this2, arguments);
        }
      })));
    }
  }]);

  return CustomInput;
}(_kryfeLib.BaseComponent);

CustomInput.contextTypes = {
  contextComponent: _propTypes2.default.object
};

exports.default = (0, _components.factoryComponentsConfig)(CustomInput);