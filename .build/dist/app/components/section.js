'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function Section(props) {
  return _react2.default.createElement('section', null, _react2.default.createElement(Style, props), props.children);
};

var Style = function Style(props) {
  return _react2.default.createElement('style', null, '\n    \n    section {\n      background-color: ' + _constants.styles.mainColor5 + ';\n      text-align: center;\n    }\n    \n  ');
};

module.exports = Section;