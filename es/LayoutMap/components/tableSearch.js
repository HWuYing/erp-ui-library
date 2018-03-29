'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _kryfeLib = require('kryfe-lib');

var _includeHead = require('./../../lib/utils/includeHead');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = _includeHead.antd.Row,
    Col = _includeHead.antd.Col;

var TableSearchLayout = function (_BaseComponent) {
  _inherits(TableSearchLayout, _BaseComponent);

  function TableSearchLayout(props, context) {
    _classCallCheck(this, TableSearchLayout);

    var _this = _possibleConstructorReturn(this, (TableSearchLayout.__proto__ || Object.getPrototypeOf(TableSearchLayout)).call(this, props, context));

    _this.state = {
      colCount: parseInt(props.colCount || 3, 10)
    };
    _this.init();
    return _this;
  }

  _createClass(TableSearchLayout, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({ random: Math.random() });
      this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.config = _extends({}, this.props);
      ['colCount'].forEach(function (_key) {
        return delete _this2.config[_key];
      });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this3 = this;

      var colCount = this.state.colCount;

      var rowList = [];
      var children = this.props.children;
      var colWidth = 24 / colCount;
      var s = new Array(colCount).join('_').split('_');
      if (!Array.isArray(children) && children) children = [children];

      var _loop = function _loop(i, len) {
        rowList.push(_react2.default.createElement(
          Row,
          _extends({ gutter: 5, key: i.toString() }, _this3.config),
          s.map(function (p, _index) {
            return children[_index + i] ? _react2.default.createElement(
              Col,
              { span: colWidth, key: (p + _index + i).toString() },
              children[_index + i]
            ) : undefined;
          })
        ));
      };

      for (var i = 0, len = children.length; i < len; i += colCount) {
        _loop(i, len);
      }
      return rowList;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-1' },
        this.renderChildren()
      );
    }
  }]);

  return TableSearchLayout;
}(_kryfeLib.BaseComponent);

exports.default = TableSearchLayout;