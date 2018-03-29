'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _includeHead = require('./../../lib/utils/includeHead');

var _kryfeLib = require('kryfe-lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD';

var DatePicker = _includeHead.antd.DatePicker;

var DataRange = function (_BaseComponent) {
  _inherits(DataRange, _BaseComponent);

  function DataRange(props, context) {
    _classCallCheck(this, DataRange);

    var _this = _possibleConstructorReturn(this, (DataRange.__proto__ || Object.getPrototypeOf(DataRange)).call(this, props, context));

    var value = props.value || [];
    var startValue = value[0] ? (0, _moment2.default)(value[0], dateFormat) : null;
    var endValue = value[1] ? (0, _moment2.default)(value[1], dateFormat) : null;
    _this.state = {
      startValue: startValue,
      endValue: endValue,
      value: value
    };
    return _this;
  }

  _createClass(DataRange, [{
    key: 'onStartChange',
    value: function onStartChange(value) {
      this.setState({ startValue: value });
      this.state.value[0] = value ? (0, _moment2.default)(value).format(dateFormat) : '';
      this.onChange();
    }
  }, {
    key: 'onEndChange',
    value: function onEndChange(value) {
      this.setState({ endValue: value });
      this.state.value[1] = value ? (0, _moment2.default)(value).format(dateFormat) : '';
      this.onChange();
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      if (this.props.onChange) {
        this.props.onChange(value || this.state.value);
      }
    }
  }, {
    key: 'disabledStartDate',
    value: function disabledStartDate(startValue) {
      var endValue = this.state.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    }
  }, {
    key: 'disabledEndDate',
    value: function disabledEndDate(endValue) {
      var startValue = this.state.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return endValue.valueOf() <= startValue.valueOf();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          startValue = _state.startValue,
          endValue = _state.endValue;

      var defaultState = DataRange.defaultState;
      var connectText = this.props.connectText || '至';
      return _react2.default.createElement(
        'div',
        { style: { whiteSpace: 'nowrap' }, className: 'flex flex-row' },
        _react2.default.createElement(DatePicker, _extends({
          disabledDate: function disabledDate() {
            return _this2.disabledStartDate.apply(_this2, arguments);
          },
          placeholder: '开始时间'
        }, defaultState, {
          value: startValue,
          onChange: function onChange() {
            return _this2.onStartChange.apply(_this2, arguments);
          }
        })),
        _react2.default.createElement(
          'span',
          { style: { margin: '0 5px' } },
          connectText
        ),
        _react2.default.createElement(DatePicker, _extends({
          disabledDate: function disabledDate() {
            return _this2.disabledEndDate.apply(_this2, arguments);
          },
          placeholder: '结束时间'
        }, defaultState, {
          value: endValue,
          onChange: function onChange() {
            return _this2.onEndChange.apply(_this2, arguments);
          }
        }))
      );
    }
  }]);

  return DataRange;
}(_kryfeLib.BaseComponent);

DataRange.defaultState = {
  className: 'flex-1',
  format: 'YYYY-MM-DD',
  size: 'large'
};

exports.default = DataRange;