'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tableSearch = require('./components/tableSearch');

var _tableSearch2 = _interopRequireDefault(_tableSearch);

var _cardSelection = require('./components/cardSelection');

var _cardSelection2 = _interopRequireDefault(_cardSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  TableSearchLayout: _tableSearch2.default,
  CardSelectionLayout: _cardSelection2.default
};