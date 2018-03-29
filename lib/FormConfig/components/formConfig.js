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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = _includeHead.antd.Form;

var CustomForm = function (_BaseComponent) {
  _inherits(CustomForm, _BaseComponent);

  function CustomForm(props, context) {
    _classCallCheck(this, CustomForm);

    var _this = _possibleConstructorReturn(this, (CustomForm.__proto__ || Object.getPrototypeOf(CustomForm)).call(this, props, context));

    _this.localEventBus = _this.context.localEventBus;
    _this.init(props);
    return _this;
  }

  _createClass(CustomForm, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        form: this.props.form
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.init(arguments.length <= 0 ? undefined : arguments[0]);
    }
  }, {
    key: 'init',
    value: function init(props) {
      var _this2 = this;

      this.config = _extends({}, props);
      this.submitFn = this.config.submitFn;
      if (!this.config.onSubmit) this.config.onSubmit = this.onSubmit.bind(this);
      ['submitFn', 'form', 'wrappedComponentRef'].forEach(function (key) {
        return delete _this2.config[key];
      });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var contextComponent = this.context.contextComponent;

      if (contextComponent && this.submitFn) {
        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
          arg[_key] = arguments[_key];
        }

        if (typeof this.submitFn === 'function') this.submitFn.apply(this, [].concat(arg, [this.props.form]));else contextComponent[this.submitFn].apply(contextComponent, [].concat(arg, [this.props.form]));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Form,
        this.config,
        this.props.children
      );
    }
  }]);

  return CustomForm;
}(_kryfeLib.BaseComponent);

CustomForm.contextTypes = {
  localEventBus: _propTypes2.default.object,
  contextComponent: _propTypes2.default.object
};

CustomForm.childContextTypes = {
  form: _propTypes2.default.object
};

exports.default = function (config) {
  var CreateForm = Form.create(config || {})(CustomForm);
  var CUSTOM_FORM = 'CURSTOM_FORM';
  return function (option) {
    return function (_BaseComponent2) {
      _inherits(HOCForm, _BaseComponent2);

      function HOCForm() {
        _classCallCheck(this, HOCForm);

        return _possibleConstructorReturn(this, (HOCForm.__proto__ || Object.getPrototypeOf(HOCForm)).apply(this, arguments));
      }

      _createClass(HOCForm, [{
        key: 'getForm',
        value: function getForm() {
          return this.refs[CUSTOM_FORM].getForm();
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(CreateForm, _extends({}, option, this.props, { ref: CUSTOM_FORM }));
        }
      }]);

      return HOCForm;
    }(_kryfeLib.BaseComponent);
  };
};