'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _kryfeLib = require('kryfe-lib');

var _components = require('./../../CardSection/components');

var _components2 = _interopRequireDefault(_components);

var _tableSearch = require('./tableSearch');

var _tableSearch2 = _interopRequireDefault(_tableSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardSelectionLayout = function (_BaseComponent) {
  _inherits(CardSelectionLayout, _BaseComponent);

  function CardSelectionLayout(props, context) {
    _classCallCheck(this, CardSelectionLayout);

    return _possibleConstructorReturn(this, (CardSelectionLayout.__proto__ || Object.getPrototypeOf(CardSelectionLayout)).call(this, props, context));
  }

  _createClass(CardSelectionLayout, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({ random: Math.random() });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          colCount = _props.colCount,
          className = _props.className;

      return _react2.default.createElement(
        _components2.default,
        { title: title, className: '' + className },
        _react2.default.createElement(
          _tableSearch2.default,
          { colCount: colCount },
          this.props.children
        )
      );
    }
  }]);

  return CardSelectionLayout;
}(_kryfeLib.BaseComponent);

exports.default = CardSelectionLayout;