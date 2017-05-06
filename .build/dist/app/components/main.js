'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _nav = require('../nav');

var _nav2 = _interopRequireDefault(_nav);

var _footer = require('../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement(Style, null)), _react2.default.createElement(_nav2.default, null), props.children, _react2.default.createElement(_footer2.default, null));
};

var Style = function Style() {
  return _react2.default.createElement('style', null, '\n\n    html, body, ul {\n      border: 0;\n      margin: 0;\n      padding: 0;\n    }\n  \n    body {\n      font-size: 18px;\n      font-family: Roboto, sans-serif;\n    }\n    \n    ul {\n      list-decoration: none;\n    }\n    \n    a {\n      text-decoration: none;\n    }\n  ');
};

exports.default = Layout;