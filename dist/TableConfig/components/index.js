(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'kryfe-lib', './../../lib/utils/includeHead', './../../lib/utils/components', './index.less'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('kryfe-lib'), require('./../../lib/utils/includeHead'), require('./../../lib/utils/components'), require('./index.less'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.kryfeLib, global.includeHead, global.components, global.index);
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

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

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

  var Table = _includeHead.antd.Table;

  var EVENT_MAP = {
    onCellClick: 'ON_CELL_CLICK', // 单元格点击回调
    onFilter: 'ON_FILTER', // 本地模式下，确定筛选的运行函数
    onFilterDropdownVisibleChange: 'ON_FILTER_DROP_DOWN_VISIBLE_CHANGE', // 自定义筛选菜单可见变化时调用
    onChange: 'ON_CHANGE', // 分页、排序、筛选变化时触发
    onRowClick: 'ON_ROW_CLICK', // 点击行时触发
    onRowDoubleClick: 'ON_ROW_DOUBLE_CLICK', // 点击行时触发
    onSelect: 'ON_SELECT', // 用户手动选择/取消选择某列的回调
    onSelectAll: 'ON_SELECT_ALL', // 用户手动选择/取消选择所有列的回调
    onSelectInvert: 'ON_SELECT_INVERT', // 用户手动选择反选的回调
    onSelectRowChange: 'ON_SELECT_ROW_CHANGE' // 选中项发生变化的时的回调
  };

  var CustomTable = function (_BaseComponent) {
    _inherits(CustomTable, _BaseComponent);

    function CustomTable(props, context) {
      _classCallCheck(this, CustomTable);

      var _this = _possibleConstructorReturn(this, (CustomTable.__proto__ || Object.getPrototypeOf(CustomTable)).call(this, props, context));

      _this.otherConfig = undefined;
      _this.columns = undefined;
      _this.rowSelection = undefined;
      _this.pagination = false;
      _this.init(props);
      _this.state = {};
      _this.localEventBus = _this.context.localEventBus;
      return _this;
    }

    _createClass(CustomTable, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        var tableParentHeight = this.state.tableParentHeight;

        this.init(props);
        if (tableParentHeight < 0) {
          this.state.tableParentHeight = this.getTableParentHeight();
          this.setState({ random: Math.random() });
        }
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.otherConfig.headerFixed) this.initFixed();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.$eventbus.$off('WINDOW_RESIZE', this.bindTableHeightResize);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.resizeTableHeight();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.resizeTableHeight();
      }
    }, {
      key: 'getTableParentHeight',
      value: function getTableParentHeight() {
        if (!this.otherConfig.headerFixed || !this.refs['table-parent']) return;
        return this.refs['table-parent'].clientHeight - 51;
      }
    }, {
      key: 'resizeTableHeight',
      value: function resizeTableHeight() {
        this.setState({
          tableParentHeight: this.getTableParentHeight()
        });
      }
    }, {
      key: 'init',
      value: function init(props) {
        this.initColumn(props);
        this.initRowSelection(props);
        this.initOther(props);
        if (props.rowSelection) {
          this.selectedRowKeys = this.rowSelection.selectedRowKeys;
          this.selectedRows = [];
          this.resetSelectRows();
        }
      }
    }, {
      key: 'initFixed',
      value: function initFixed() {
        this.bindTableHeightResize = this.resizeTableHeight.bind(this);
        this.$eventbus.$on('WINDOW_RESIZE', this.bindTableHeightResize);
      }
    }, {
      key: 'initColumn',
      value: function initColumn(props) {
        var _this2 = this;

        var widthStatus = true;
        var sumWidth = 0;
        this.columns = props.columns.map(function (column) {
          var _column = column;
          ['onCellClick', 'onFilter', 'onFilterDropdownVisibleChange'].forEach(function (key) {
            _column[key] = _this2.factoryEventFn(EVENT_MAP[key]);
          });
          sumWidth += column.width;
          widthStatus = column.width && widthStatus;
          return _column;
        });
        this.tableParentWidth = widthStatus ? sumWidth : undefined;
      }
    }, {
      key: 'initRowSelection',
      value: function initRowSelection(props) {
        var _this3 = this;

        if (!props.rowSelection) return;
        this.rowSelection = props.rowSelection;
        ['onSelect', 'onSelectAll', 'onSelectInvert'].forEach(function (key) {
          _this3.rowSelection[key] = _this3.factoryEventFn(EVENT_MAP[key]);
        });
        this.rowSelection.onChange = this.onSelectRowChange.bind(this);
        this.selectedRowKeys = this.rowSelection.selectedRowKeys;
        this.selectedRows = undefined;
      }
    }, {
      key: 'initOther',
      value: function initOther(props) {
        var _this4 = this;

        this.otherConfig = {};
        Object.keys(props).forEach(function (key) {
          if (['pagination', 'columns', 'rowSelection', 'dataSource'].indexOf(key) === -1) _this4.otherConfig[key] = props[key];
        });
        ['onChange', 'onRowClick', 'onRowDoubleClick'].forEach(function (key) {
          _this4.otherConfig[key] = _this4.factoryEventFn(EVENT_MAP[key], key);
        });
        this.otherConfig.dataSource = this.dataSourceAddKey(props.dataSource || []);
      }
    }, {
      key: 'factoryEventFn',
      value: function factoryEventFn(eventType, key) {
        var _this5 = this;

        return function () {
          var _props, _localEventBus;

          for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
          }

          if (_this5.props[key]) (_props = _this5.props)[key].apply(_props, arg);
          if (_this5.localEventBus) (_localEventBus = _this5.localEventBus).$emit.apply(_localEventBus, [eventType].concat([arg, _this5]));
        };
      }
    }, {
      key: 'onSelectRowChange',
      value: function onSelectRowChange() {
        var _localEventBus2, _props2;

        for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          arg[_key2] = arguments[_key2];
        }

        var arg0 = arg[0];
        if (this.localEventBus) (_localEventBus2 = this.localEventBus).$emit.apply(_localEventBus2, ['ON_SELECT_ROW_CHANGE'].concat([].concat(arg, [this])));
        if (this.props.onSelectRowChange) (_props2 = this.props).onSelectRowChange.apply(_props2, [].concat(arg, [this]));
        this.rowSelection.selectedRowKeys = arg0;
        this.selectedRowKeys = arg0;
        this.selectedRows = arg[1];
        this.forceUpdate();
      }
    }, {
      key: 'clearSelectRows',
      value: function clearSelectRows() {
        this.selectedRowKeys = [];
        this.selectedRows = [];
        this.rowSelection.selectedRowKeys = this.selectedRowKeys;
        this.setState({ random: Math.random() });
      }
    }, {
      key: 'selectAllRows',
      value: function selectAllRows() {
        var _this6 = this;

        this.selectedRowKeys = [];
        this.otherConfig.dataSource.forEach(function (data) {
          return _this6.selectedRowKeys.push(data.key);
        });
        this.selectedRows = [].concat(_toConsumableArray(this.otherConfig.dataSource));
        this.rowSelection.selectedRowKeys = [].concat(_toConsumableArray(this.selectedRowKeys));
        this.setState({ random: Math.random() });
      }
    }, {
      key: 'resetSelectRows',
      value: function resetSelectRows() {
        var selectedRowKeys = this.selectedRowKeys || [];
        var len = selectedRowKeys.length;
        this.selectedRows = (this.otherConfig.dataSource || []).filter(function (source) {
          var i = 0;
          for (; i < len; i++) {
            if (selectedRowKeys[i] === source.key) return true;
          }
          return false;
        });
      }
    }, {
      key: 'getSelectRows',
      value: function getSelectRows() {
        return {
          selectedRowKeys: this.selectedRowKeys,
          selectedRows: this.selectedRows
        };
      }
    }, {
      key: 'dataSourceAddKey',
      value: function dataSourceAddKey(dataSource) {
        return dataSource.map(function (source, index) {
          if (!source.key) source.key = index.toString();
          return source;
        });
      }
    }, {
      key: 'renderTable',
      value: function renderTable() {
        var className = this.props.className;
        var columns = this.columns,
            rowSelection = this.rowSelection,
            pagination = this.pagination,
            otherConfig = this.otherConfig;
        var tableParentHeight = this.state.tableParentHeight;
        var tableParentWidth = this.tableParentWidth;

        return _react2.default.createElement(Table, _extends({
          style: { minWidth: tableParentWidth + 'px' },
          className: 'custom-table-t-1 ' + (className || ''),
          columns: columns,
          rowSelection: rowSelection,
          pagination: pagination,
          scroll: { y: tableParentHeight || 'auto' }
        }, _extends({}, otherConfig), {
          bordered: true
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        var headerFixed = this.otherConfig.headerFixed;

        return !headerFixed ? this.renderTable() : _react2.default.createElement(
          'div',
          _extends({ className: 'flex-1 custom-table table-parent' }, { ref: 'table-parent' }),
          this.renderTable()
        );
      }
    }]);

    return CustomTable;
  }(_kryfeLib.BaseComponent);

  CustomTable.contextTypes = {
    localEventBus: _propTypes2.default.object
  };

  exports.default = (0, _components.factoryCloneComponents)(CustomTable, function (cloneElement, dataSource, option) {
    return _react2.default.cloneElement(cloneElement, _extends({ dataSource: dataSource }, option || {}));
  });
});