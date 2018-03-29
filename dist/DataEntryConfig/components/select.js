(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'kryfe-lib', './../../lib/utils/includeHead', './../../lib/utils/components'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('kryfe-lib'), require('./../../lib/utils/includeHead'), require('./../../lib/utils/components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.kryfeLib, global.includeHead, global.components);
    global.select = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _kryfeLib, _includeHead, _components) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Select = _includeHead.antd.Select;

  var Option = Select.Option;

  var CustomInput = function (_BaseComponent) {
    _inherits(CustomInput, _BaseComponent);

    function CustomInput(props, context) {
      _classCallCheck(this, CustomInput);

      var _this = _possibleConstructorReturn(this, (CustomInput.__proto__ || Object.getPrototypeOf(CustomInput)).call(this, props, context));

      _this.pressEnterFn = props.pressEnterFn;
      _this.state = {
        value: (props.value || '').toString()
      };
      _this.init(props);
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
        var _this2 = this;

        this.config = _extends({}, props || {});
        ['value', 'children', 'onChange'].forEach(function (_key) {
          return delete _this2.config[_key];
        });
      }
    }, {
      key: 'onChange',
      value: function onChange(value) {
        if (this.props.onChange) this.props.onChange(value);
        this.setState({ value: value });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var children = this.props.children || [];
        return _react2.default.createElement(
          Select,
          _extends({
            size: 'large'
          }, this.config, {
            value: this.state.value,
            onChange: function onChange() {
              return _this3.onChange.apply(_this3, arguments);
            }
          }),
          children.map(function (item, index) {
            return _react2.default.createElement(
              Option,
              { value: item.value.toString(), key: index.toString() },
              item.label
            );
          }),
          this.config.child
        );
      }
    }]);

    return CustomInput;
  }(_kryfeLib.BaseComponent);

  CustomInput.contextTypes = {
    contextComponent: _propTypes2.default.object
  };

  exports.default = (0, _components.factoryComponentsConfig)(CustomInput);
});