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

var _DataEntryConfig = require('./../../DataEntryConfig');

var _DataEntryConfig2 = _interopRequireDefault(_DataEntryConfig);

var _components = require('./../../lib/utils/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = _includeHead.antd.Form;

var CustomFormItem = function (_BaseComponent) {
  _inherits(CustomFormItem, _BaseComponent);

  function CustomFormItem(props, context) {
    _classCallCheck(this, CustomFormItem);

    var _this = _possibleConstructorReturn(this, (CustomFormItem.__proto__ || Object.getPrototypeOf(CustomFormItem)).call(this, props, context));

    _this.init(props);
    return _this;
  }

  _createClass(CustomFormItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.init(arguments.length <= 0 ? undefined : arguments[0]);
      this.setState({ random: Math.random() });
    }
  }, {
    key: 'init',
    value: function init(props) {
      this.config = _extends({}, props);
      this.initDataEntryConfig(props);
      this.initFieldDecorator(props);
      delete this.config.dataEntryConfig;
    }
  }, {
    key: 'initDataEntryConfig',
    value: function initDataEntryConfig(props) {
      var dataEntryConfig = props.dataEntryConfig;
      this.renderDataEntry = (0, _DataEntryConfig2.default)(dataEntryConfig.key, dataEntryConfig.option);
      delete this.config.dataEntryConfig;
    }
  }, {
    key: 'initFieldDecorator',
    value: function initFieldDecorator(props) {
      var fieldDecoratorConfig = props.fieldDecoratorConfig;
      if (!fieldDecoratorConfig || !this.context.form) return;
      var getFieldDecorator = this.context.form.getFieldDecorator;

      this.renderFieldDecorator = getFieldDecorator(fieldDecoratorConfig.key, fieldDecoratorConfig.option);
      delete this.config.fieldDecoratorConfig;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Form.Item,
        this.config,
        this.renderFieldDecorator ? this.renderFieldDecorator(this.renderDataEntry()) : this.renderDataEntry()
      );
    }
  }]);

  return CustomFormItem;
}(_kryfeLib.BaseComponent);

CustomFormItem.contextTypes = {
  form: _propTypes2.default.object
};

exports.default = (0, _components.factoryComponentsConfig)(CustomFormItem);