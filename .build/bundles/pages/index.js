
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  styles: {
    mainColor1: '#000', // full-black
    mainColor2: '#161616', // almost black
    mainColor3: '#fff', // white
    mainColor4: '#222', // grey background
    mainColor5: '#228dcb' // blue
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/constants/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/constants/index.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _main = __webpack_require__(566);

var _main2 = _interopRequireDefault(_main);

var _section = __webpack_require__(567);

var _section2 = _interopRequireDefault(_section);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_main2.default, null, _react2.default.createElement('h1', null, 'My Blog is cool ---'), _react2.default.createElement('p', null, 'test'), _react2.default.createElement(_section2.default, null, _react2.default.createElement('div', null, 'I\'m a section')));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _footer = __webpack_require__(565);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement('footer', null, _react2.default.createElement(_footer2.default, null), 'I\'m the footer!!!', _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Alin'), _react2.default.createElement('li', null, 'Paul'), _react2.default.createElement('li', null, 'WOoohoo')));
};

module.exports = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/components/footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/components/footer.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(560);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterStyle = function FooterStyle() {
  return _react2.default.createElement('style', { jsx: true }, '\n    \n    footer {\n      background-color: ' + _constants.styles.mainColor2 + ';\n      text-align: center;\n    }\n\n    li {\n      color: white\n    }\n    \n  ');
};

module.exports = FooterStyle;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/components/footer.style.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/components/footer.style.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _header = __webpack_require__(569);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(572);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(564);

var _footer2 = _interopRequireDefault(_footer);

var _constants = __webpack_require__(560);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement(Style, null)), _react2.default.createElement(_nav2.default, null), props.children, _react2.default.createElement(_footer2.default, null));
};

var Style = function Style() {
  return _react2.default.createElement('style', null, '\n\n    html, body, ul {\n      border: 0;\n      margin: 0;\n      padding: 0;\n    }\n  \n    body {\n      font-size: 18px;\n      font-family: Roboto, sans-serif;\n    }\n    \n    ul {\n      list-decoration: none;\n    }\n    \n    a {\n      text-decoration: none;\n    }\n  ');
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/components/main.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/components/main.js"); } } })();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(560);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function Section(props) {
  return _react2.default.createElement('section', null, _react2.default.createElement(Style, props), props.children);
};

var Style = function Style(props) {
  return _react2.default.createElement('style', null, '\n    \n    section {\n      background-color: ' + _constants.styles.mainColor5 + ';\n      text-align: center;\n    }\n    \n  ');
};

module.exports = Section;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/components/section.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/components/section.js"); } } })();

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement("div", null, _react2.default.createElement(_link2.default, { href: "/" }, _react2.default.createElement("a", { style: linkStyle }, "Home")), _react2.default.createElement(_link2.default, { href: "/about" }, _react2.default.createElement("a", { style: linkStyle }, "About")), _react2.default.createElement(Button, { label: "Hello" }));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/header/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/header/components/header.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(568);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContainerHeader = function (_Component) {
  (0, _inherits3.default)(ContainerHeader, _Component);

  function ContainerHeader() {
    (0, _classCallCheck3.default)(this, ContainerHeader);

    return (0, _possibleConstructorReturn3.default)(this, (ContainerHeader.__proto__ || (0, _getPrototypeOf2.default)(ContainerHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContainerHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_header2.default, null);
    }
  }]);

  return ContainerHeader;
}(_react.Component);

exports.default = ContainerHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/header/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/header/index.js"); } } })();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _styles = __webpack_require__(571);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement('nav', null, _react2.default.createElement(_styles2.default, null), _react2.default.createElement('ul', null, props.menuItems.map(function (item, key) {
    return _react2.default.createElement('li', { key: key }, _react2.default.createElement('a', { href: item.url }, item.label));
  })));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/nav/components/nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/nav/components/nav.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = function style() {
  return _react2.default.createElement("style", null, "\n\n  ul {\n    min-height: 100px;\n  }\n  \n  nav {\n    background-color: black;\n  }\n  \n  li {\n    display: block;\n    margin-right: 20px;\n    display: inline-block;\n    line-height: 100px;\n  }\n\n  a {\n    text-transform: capitalize;\n    color: white;\n    font-size: 18px;\n  }\n      \n  ");
};

module.exports = style;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/nav/components/styles/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/nav/components/styles/index.js"); } } })();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(570);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContainerHeader = function (_Component) {
  (0, _inherits3.default)(ContainerHeader, _Component);

  function ContainerHeader() {
    (0, _classCallCheck3.default)(this, ContainerHeader);

    return (0, _possibleConstructorReturn3.default)(this, (ContainerHeader.__proto__ || (0, _getPrototypeOf2.default)(ContainerHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContainerHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_nav2.default, { menuItems: menuItems });
    }
  }]);

  return ContainerHeader;
}(_react.Component);

exports.default = ContainerHeader;


var menuItems = [{
  url: '#home',
  label: 'home'
}, {
  url: '#about',
  label: 'about'
}, {
  url: '#speakers',
  label: 'speakers'
}, {
  url: '#schedule',
  label: 'schedule'
}, {
  url: '#mission',
  label: 'mission'
}, {
  url: '#sponsors',
  label: 'sponsors'
}, {
  url: '#venue',
  label: 'venue'
}, {
  url: '#sponsors',
  label: 'contact'
}];

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/var/www/inventor/paul-next/app/nav/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/inventor/paul-next/app/nav/index.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(561);


/***/ })

},[573]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29uc3RhbnRzL2luZGV4LmpzPzUyZTIyYzEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NTJlMjJjMSIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9mb290ZXIuanM/YjljMTY4ZCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9mb290ZXIuc3R5bGUuanM/YjljMTY4ZCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWluLmpzP2I5YzE2OGQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VjdGlvbi5qcz9iOWMxNjhkIiwid2VicGFjazovLy8uL2FwcC9oZWFkZXIvY29tcG9uZW50cy9oZWFkZXIuanM/YjljMTY4ZCIsIndlYnBhY2s6Ly8vLi9hcHAvaGVhZGVyL2luZGV4LmpzP2I5YzE2OGQiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdi9jb21wb25lbnRzL25hdi5qcz9iOWMxNjhkIiwid2VicGFjazovLy8uL2FwcC9uYXYvY29tcG9uZW50cy9zdHlsZXMvaW5kZXguanM/YjljMTY4ZCIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2L2luZGV4LmpzP2I5YzE2OGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTzs7Z0JBRVMsUUFDWjtnQkFBWSxXQUNaO2dCQUFZLFFBQ1o7Z0JBQVksUUFDWjtnQkFBWSxVQUFVO0FBSnRCO0FBREYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNESzs7OztBQUNBOzs7O0FBR1A7Ozs7OztrQkFBZTtTQUNiLGdCQUFDLDhCQUNDLGdEQUNBLGlFQUNBLHlCQUFDLGlDQUNDO0FBTE4sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pPOzs7Ozs7QUFFUCxJQUFNLFNBQVM7U0FDYix3Q0FDRSxzQkFBQyxnQ0FESCxPQUdFLDBEQUNFLGdEQUNBLG1EQUNBO0FBUE47O0FBWUEsT0FBTyxVQUFVLE87Ozs7Ozs7Ozs7Ozs7Ozs7QUNkUjs7OztBQUVULElBQU0sY0FBYztTQUNsQix5Q0FBTyxLQUFQLDJEQUl3QixrQkFBTyxhQUovQjtBQURGOztBQWlCQSxPQUFPLFVBQVUsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDRTs7OztBQUVULElBQU0sU0FBUztTQUNiLHFDQUVFLHNCQUFDLDhCQUNDLG9DQUFDLE9BRUgsd0JBQUMsNkJBQ0EsYUFDRCwwQkFBQyxnQ0FQSDtBQURGOztBQVlBLElBQU0sUUFBUTtTQUNaO0FBdUJGOztrQkFBZSxPOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNOOzs7O0FBRVQsSUFBTSxVQUFVO1NBQ2QseUNBQ0Usb0NBQUMsT0FDQSxjQUFNO0FBSFg7O0FBT0EsSUFBTSxRQUFRLGVBQUMsT0FBRDtTQUNaLGlHQUl3QixrQkFBTyxhQUovQjtBQURGOztBQWFBLE9BQU8sVUFBVSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCVjs7Ozs7O0FBRVAsSUFBTTtlQUNTO0FBQWI7O0FBR0YsSUFBTSxTQUFTO1NBQ2IscUNBQ0Usc0JBQUMsZ0NBQUssTUFDSiw0Q0FBRyxPQUFPLGFBRVosMEJBQUMsZ0NBQUssTUFDSixpREFBRyxPQUFPLGFBRVoseUNBQUMsVUFBTyxPQUFNO0FBSWxCOztrQkFBZSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkM7Ozs7QUFDVDs7Ozs7O0lBRWM7Ozs7Ozs7Ozs7OzZCQUVqQjthQUFPLGdCQUFDLGdDQUNUOzs7OztBQUgwQzs7a0JBQXhCLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hkOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRVAsSUFBTSxTQUFTO3lCQUNiLHFCQUNFLHNCQUFDLGdDQUNELDJDQUNHLFlBQU0sVUFBVSxJQUFJLFVBQUMsTUFBTSxLQUMxQjtXQUNFLHNDQUFJLEtBQ0YsNENBQUcsTUFBTSxLQUFXLFlBR3pCO0FBTkEsS0FITDtBQWNGOztrQkFBZSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmYsSUFBTSxRQUFRO1NBQ1o7QUFERjs7QUE2QkEsT0FBTyxVQUFVLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRDs7OztBQUNUOzs7Ozs7SUFFYzs7Ozs7Ozs7Ozs7NkJBRWpCO2FBQU8sZ0JBQUMsK0JBQVEsV0FDakI7Ozs7O0FBSDBDOztrQkFBeEI7OztBQU1yQixJQUFNO09BR0Y7U0FBTztBQURQLENBRmM7T0FPZDtTQUFPO0FBRFA7T0FLQTtTQUFPO0FBRFA7T0FLQTtTQUFPO0FBRFA7T0FLQTtTQUFPO0FBRFA7T0FLQTtTQUFPO0FBRFA7T0FLQTtTQUFPO0FBRFA7T0FLQTtTQUFPO0FBRFAsRyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0eWxlczoge1xuICAgIG1haW5Db2xvcjE6ICcjMDAwJywgLy8gZnVsbC1ibGFja1xuICAgIG1haW5Db2xvcjI6ICcjMTYxNjE2JywgLy8gYWxtb3N0IGJsYWNrXG4gICAgbWFpbkNvbG9yMzogJyNmZmYnLCAvLyB3aGl0ZVxuICAgIG1haW5Db2xvcjQ6ICcjMjIyJywgLy8gZ3JleSBiYWNrZ3JvdW5kXG4gICAgbWFpbkNvbG9yNTogJyMyMjhkY2InIC8vIGJsdWVcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnN0YW50cy9pbmRleC5qcyIsImltcG9ydCBDb21wTWFpbiBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWluJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvc2VjdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8Q29tcE1haW4+XG4gICAgPGgxPk15IEJsb2cgaXMgY29vbCAtLS08L2gxPlxuICAgIDxwPnRlc3Q8L3A+XG4gICAgPFNlY3Rpb24+IFxuICAgICAgPGRpdj5JJ20gYSBzZWN0aW9uPC9kaXY+XG4gICAgPC9TZWN0aW9uPlxuICA8L0NvbXBNYWluPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgU3R5bGUgZnJvbSAnLi9mb290ZXIuc3R5bGUnXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3Rlcj5cbiAgICA8U3R5bGUgLz5cbiAgICBJJ20gdGhlIGZvb3RlciEhIVxuICAgIDx1bD5cbiAgICAgIDxsaT5BbGluPC9saT5cbiAgICAgIDxsaT5QYXVsPC9saT5cbiAgICAgIDxsaT5XT29vaG9vPC9saT5cbiAgICA8L3VsPlxuICA8L2Zvb3Rlcj5cbilcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2Zvb3Rlci5qcyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgRm9vdGVyU3R5bGUgPSAoKSA9PiAoXG4gIDxzdHlsZSBqc3g+XG4gICAge2BcbiAgICBcbiAgICBmb290ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzdHlsZXMubWFpbkNvbG9yMn07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgY29sb3I6IHdoaXRlXG4gICAgfVxuICAgIFxuICBgfVxuICA8L3N0eWxlPlxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlclN0eWxlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9mb290ZXIuc3R5bGUuanMiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlcidcbmltcG9ydCBOYXYgZnJvbSAnLi4vbmF2J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHsvKiB3ZSdyZSB1c2luZyBuZXh0L2hlYWQgdG8gcGxhY2UgdGhpcyBzdHlsZXMgaW4gdGhlIGhlYWQgdGFnICovfVxuICAgIDxIZWFkPlxuICAgICAgPFN0eWxlIC8+XG4gICAgPC9IZWFkPlxuICAgIDxOYXYgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPEZvb3RlciAvPlxuICA8L2Rpdj5cbilcblxuY29uc3QgU3R5bGUgPSAoKSA9PiAoXG4gIDxzdHlsZT57YFxuXG4gICAgaHRtbCwgYm9keSwgdWwge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIFxuICAgIGJvZHkge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgdWwge1xuICAgICAgbGlzdC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBcbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9tYWluLmpzIiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5jb25zdCBTZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8c2VjdGlvbj5cbiAgICA8U3R5bGUgey4uLnByb3BzfSAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9zZWN0aW9uPlxuKVxuXG5jb25zdCBTdHlsZSA9IChwcm9wcykgPT4gKFxuICA8c3R5bGU+XG4gICAge2BcbiAgICBcbiAgICBzZWN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3R5bGVzLm1haW5Db2xvcjV9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgYH1cbiAgPC9zdHlsZT5cbilcblxubW9kdWxlLmV4cG9ydHMgPSBTZWN0aW9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9zZWN0aW9uLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8QnV0dG9uIGxhYmVsPVwiSGVsbG9cIiAvPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaGVhZGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbXBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVySGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29tcEhlYWRlciAvPlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaGVhZGVyL2luZGV4LmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBIZWFkZXIgPSBwcm9wcyA9PiAoXG4gIDxuYXY+XG4gICAgPFN0eWxlIC8+XG4gICAgPHVsPlxuICAgICAge3Byb3BzLm1lbnVJdGVtcy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgICA8YSBocmVmPXtpdGVtLnVybH0+e2l0ZW0ubGFiZWx9PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gIDwvbmF2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9uYXYvY29tcG9uZW50cy9uYXYuanMiLCJjb25zdCBzdHlsZSA9ICgpID0+IChcbiAgPHN0eWxlPlxuICAgIHtgXG5cbiAgdWwge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICBuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gICAgICBcbiAgYH1cbiAgPC9zdHlsZT5cbilcblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL25hdi9jb21wb25lbnRzL3N0eWxlcy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wTmF2IGZyb20gJy4vY29tcG9uZW50cy9uYXYnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lckhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbXBOYXYgbWVudUl0ZW1zPXttZW51SXRlbXN9IC8+XG4gIH1cbn1cblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgdXJsOiAnI2hvbWUnLFxuICAgIGxhYmVsOiAnaG9tZSdcbiAgfSxcbiAge1xuICAgIHVybDogJyNhYm91dCcsXG4gICAgbGFiZWw6ICdhYm91dCdcbiAgfSxcbiAge1xuICAgIHVybDogJyNzcGVha2VycycsXG4gICAgbGFiZWw6ICdzcGVha2VycydcbiAgfSxcbiAge1xuICAgIHVybDogJyNzY2hlZHVsZScsXG4gICAgbGFiZWw6ICdzY2hlZHVsZSdcbiAgfSxcbiAge1xuICAgIHVybDogJyNtaXNzaW9uJyxcbiAgICBsYWJlbDogJ21pc3Npb24nXG4gIH0sXG4gIHtcbiAgICB1cmw6ICcjc3BvbnNvcnMnLFxuICAgIGxhYmVsOiAnc3BvbnNvcnMnXG4gIH0sXG4gIHtcbiAgICB1cmw6ICcjdmVudWUnLFxuICAgIGxhYmVsOiAndmVudWUnXG4gIH0sXG4gIHtcbiAgICB1cmw6ICcjc3BvbnNvcnMnLFxuICAgIGxhYmVsOiAnY29udGFjdCdcbiAgfVxuXVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL25hdi9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        