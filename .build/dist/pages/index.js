'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('../app/components/main');

var _main2 = _interopRequireDefault(_main);

var _section = require('../app/components/section');

var _section2 = _interopRequireDefault(_section);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_main2.default, null, _react2.default.createElement('h1', null, 'My Blog is cool ---'), _react2.default.createElement('p', null, 'test'), _react2.default.createElement(_section2.default, null, _react2.default.createElement('div', null, 'I\'m a section')));
};