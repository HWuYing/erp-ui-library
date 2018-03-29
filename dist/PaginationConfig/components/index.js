(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'kryfe-lib', './../../lib/utils/includeHead', './../../../utils/components'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('kryfe-lib'), require('./../../lib/utils/includeHead'), require('./../../../utils/components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.kryfeLib, global.includeHead, global.components);
    global.index = mod.exports;
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

  var Pagination = _includeHead.antd.Pagination;

  var CustomPagination = function (_BaseComponent) {
    _inherits(CustomPagination, _BaseComponent);

    function CustomPagination(props, context) {
      _classCallCheck(this, CustomPagination);

      var _this = _possibleConstructorReturn(this, (CustomPagination.__proto__ || Object.getPrototypeOf(CustomPagination)).call(this, props, context));

      _this.config = undefined;
      _this.localEventBus = _this.context.localEventBus;
      _this.state = {
        current: props.current || 1
      };
      _this.init(props);
      return _this;
    }

    _createClass(CustomPagination, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps() {
        this.init(arguments.length <= 0 ? undefined : arguments[0]);
      }
    }, {
      key: 'init',
      value: function init(props) {
        var _this2 = this;

        this.config = _extends({}, CustomPagination.defaultConfig, props);
        this.pageSize = props.pageSize || props.defaultPageSize || 10;
        this.config.onChange = this.onPaginationChange.bind(this);
        this.config.onShowSizeChange = this.onShowSizeChange.bind(this);
        ['current'].forEach(function (key) {
          return delete _this2.config[key];
        });
      }
    }, {
      key: 'resizeCurrent',
      value: function resizeCurrent(current) {
        this.setState({ current: current || 1 });
      }
    }, {
      key: 'getQuery',
      value: function getQuery() {
        return {
          page: this.state.current,
          pageSize: this.pageSize
        };
      }
    }, {
      key: 'getPageSize',
      value: function getPageSize() {
        return this.pageSize;
      }
    }, {
      key: 'updateCurrent',
      value: function updateCurrent(current) {
        this.setState({ current: current });
      }
    }, {
      key: 'onPaginationChange',
      value: function onPaginationChange() {
        var _localEventBus, _props;

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
          arg[_key] = arguments[_key];
        }

        this.updateCurrent(arg[0]);
        this.pageSize = arg[1];
        if (this.localEventBus) (_localEventBus = this.localEventBus).$emit.apply(_localEventBus, ['ON_PAGINATION_CHANGE'].concat([].concat(arg, [this])));
        if (this.props.onPaginationChange) (_props = this.props).onPaginationChange.apply(_props, arg);
      }
    }, {
      key: 'onShowSizeChange',
      value: function onShowSizeChange() {
        var _localEventBus2, _props2;

        for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          arg[_key2] = arguments[_key2];
        }

        this.updateCurrent(arg[0]);
        this.pageSize = arg[1];
        if (this.localEventBus) (_localEventBus2 = this.localEventBus).$emit.apply(_localEventBus2, ['ON_SHOW_SIZE_CHANGE'].concat([].concat(arg, [this])));
        if (this.props.onShowSizeChange) (_props2 = this.props).onPaginationChange.apply(_props2, arg);
      }
    }, {
      key: 'render',
      value: function render() {
        var current = this.state.current;

        return _react2.default.createElement(Pagination, _extends({
          className: 'ant-table-pagination',
          current: current,
          showTotal: function showTotal(total) {
            return '\u5171 ' + total + ' \u6761\u8BB0\u5F55 ';
          }
        }, this.config));
      }
    }]);

    return CustomPagination;
  }(_kryfeLib.BaseComponent);

  CustomPagination.contextTypes = {
    localEventBus: _propTypes2.default.object
  };

  CustomPagination.defaultConfig = {
    showQuickJumper: true,
    showSizeChanger: true,
    defaultCurrent: 1,
    defaultPageSize: 20
  };

  exports.default = (0, _components.factoryCloneComponents)(CustomPagination, function (cloneElement, total, current, option) {
    return _react2.default.cloneElement(cloneElement, _extends({ total: total }, current ? { current: current } : {}, option || {}));
  });
});