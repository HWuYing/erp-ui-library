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
    global.search = mod.exports;
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

  var Search = _includeHead.antd.Input.Search;

  var CustomSearch = function (_BaseComponent) {
    _inherits(CustomSearch, _BaseComponent);

    function CustomSearch(props, context) {
      _classCallCheck(this, CustomSearch);

      var _this = _possibleConstructorReturn(this, (CustomSearch.__proto__ || Object.getPrototypeOf(CustomSearch)).call(this, props, context));

      _this.state = {
        value: props.value
      };
      _this.init(props);
      return _this;
    }

    _createClass(CustomSearch, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps() {
        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
          arg[_key] = arguments[_key];
        }

        this.init(arg[0]);
        this.setState({
          value: arg[0].value
        });
      }
    }, {
      key: 'init',
      value: function init(props) {
        var _this2 = this;

        this.pressEnterFn = props.pressEnterFn;
        this.searchFn = props.searchFn;

        this.config = _extends({}, props || {});
        ['searchFn', 'value'].forEach(function (i) {
          return delete _this2.config[i];
        });
      }
    }, {
      key: 'onPressEnter',
      value: function onPressEnter() {
        var contextComponent = this.context.contextComponent;
        if (contextComponent && this.pressEnterFn) {
          for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            arg[_key2] = arguments[_key2];
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
      key: 'onSearch',
      value: function onSearch(value) {
        var contextComponent = this.context.contextComponent;
        if (contextComponent && this.searchFn) {
          contextComponent[this.searchFn].apply(contextComponent, [value, this]);
        }
        this.config.value = value;
        this.setState({ value: value });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return _react2.default.cloneElement(_react2.default.createElement(Search, _extends({}, this.config, {
          value: this.state.value,
          onChange: function onChange() {
            return _this3.onChange.apply(_this3, arguments);
          },
          onPressEnter: function onPressEnter() {
            return _this3.onPressEnter.apply(_this3, arguments);
          },
          onSearch: function onSearch() {
            return _this3.onSearch.apply(_this3, arguments);
          }
        })));
      }
    }]);

    return CustomSearch;
  }(_kryfeLib.BaseComponent);

  CustomSearch.contextTypes = {
    contextComponent: _propTypes2.default.object
  };

  exports.default = (0, _components.factoryComponentsConfig)(CustomSearch);
});