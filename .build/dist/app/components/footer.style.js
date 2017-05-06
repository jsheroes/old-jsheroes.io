'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterStyle = function FooterStyle() {
  return _react2.default.createElement('style', { jsx: true }, '\n    \n    footer {\n      background-color: ' + _constants.styles.mainColor2 + ';\n      text-align: center;\n    }\n\n    li {\n      color: white\n    }\n    \n  ');
};

module.exports = FooterStyle;