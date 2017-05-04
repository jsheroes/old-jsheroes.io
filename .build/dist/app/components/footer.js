'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _footer = require('./footer.style');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement('footer', null, _react2.default.createElement(_footer2.default, null), 'I\'m the footer!!!', _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Alin'), _react2.default.createElement('li', null, 'Paul'), _react2.default.createElement('li', null, 'WOoohoo')));
};

module.exports = Footer;