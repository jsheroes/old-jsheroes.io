'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement('nav', null, _react2.default.createElement(_styles2.default, null), _react2.default.createElement('ul', null, props.menuItems.map(function (item, key) {
    return _react2.default.createElement('li', { key: key }, _react2.default.createElement('a', { href: item.url }, item.label));
  })));
};

exports.default = Header;