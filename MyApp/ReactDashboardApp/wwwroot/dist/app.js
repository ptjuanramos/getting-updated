(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dotnetify"), require("dotNetifyElements"), require("styled"));
	else if(typeof define === 'function' && define.amd)
		define(["dotnetify", "dotNetifyElements", "styled"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("dotnetify"), require("dotNetifyElements"), require("styled")) : factory(root["dotnetify"], root["dotNetifyElements"], root["styled"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_dotnetify__, __WEBPACK_EXTERNAL_MODULE_dotnetify_elements__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/ActivitiesCard.js":
/*!*********************************************!*\
  !*** ./client/components/ActivitiesCard.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _dotnetifyElements = __webpack_require__(/*! dotnetify-elements */ "dotnetify-elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var panelCss = '\n   overflow-x: hidden;\n   .cell { border: none; }\n   .cell-body { padding: .5rem 0 }\n';

var statusColors = ['', 'silver', 'limegreen', 'red', 'gray', 'orange'];
var userIconColors = ['#00ce6f', '#a95df0', '#2ea7eb'];

var UserIcon = _styledComponents2.default.span.withConfig({
  displayName: 'ActivitiesCard__UserIcon'
})(['width:25px;height:25px;border-radius:50%;color:white;background:', ';font-weight:bold;margin-right:1rem;text-align:center;'], function (props) {
  return props.color;
});

var StatusIcon = _styledComponents2.default.span.withConfig({
  displayName: 'ActivitiesCard__StatusIcon'
})(['height:14px;width:14px;margin-left:1rem;background-color:', ';border-radius:50%;display:inline-block;'], function (props) {
  return statusColors[props.status];
});

var Activity = function Activity(_ref) {
  var person = _ref.person;

  var initial = person.PersonName[0].toUpperCase();
  var iconColor = userIconColors[initial.charCodeAt(0) % 3];
  return _react2.default.createElement(
    _dotnetifyElements.Panel,
    { horizontal: true, css: panelCss },
    _react2.default.createElement(
      _dotnetifyElements.Cell,
      { flex: true },
      _react2.default.createElement(
        UserIcon,
        { color: iconColor },
        initial
      ),
      person.PersonName
    ),
    _react2.default.createElement(
      _dotnetifyElements.Cell,
      { flex: true, right: true, middle: true },
      person.Status,
      _react2.default.createElement(StatusIcon, { status: person.StatusId })
    )
  );
};

var ActivitiesCard = function (_Element) {
  _inherits(ActivitiesCard, _Element);

  function ActivitiesCard() {
    _classCallCheck(this, ActivitiesCard);

    return _possibleConstructorReturn(this, (ActivitiesCard.__proto__ || Object.getPrototypeOf(ActivitiesCard)).apply(this, arguments));
  }

  _createClass(ActivitiesCard, [{
    key: 'render',
    value: function render() {
      var activities = this.value || [];
      return _react2.default.createElement(
        _dotnetifyElements.Card,
        { horizontal: true },
        _react2.default.createElement(
          'h4',
          null,
          'Activities'
        ),
        activities.map(function (person, idx) {
          return _react2.default.createElement(Activity, { key: idx, person: person });
        })
      );
    }
  }]);

  return ActivitiesCard;
}(_dotnetifyElements.Element);

exports.default = ActivitiesCard;

/***/ }),

/***/ "./client/components/Dashboard.js":
/*!****************************************!*\
  !*** ./client/components/Dashboard.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _dotnetifyElements = __webpack_require__(/*! dotnetify-elements */ "dotnetify-elements");

var _InfoCard = __webpack_require__(/*! ./InfoCard */ "./client/components/InfoCard.js");

var _InfoCard2 = _interopRequireDefault(_InfoCard);

var _ActivitiesCard = __webpack_require__(/*! ./ActivitiesCard */ "./client/components/ActivitiesCard.js");

var _ActivitiesCard2 = _interopRequireDefault(_ActivitiesCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infoPanelCss = '\n   flex: 1 1 20%;\n   @media (max-width: 1280px) { flex: 1 1 40%; }    \n   @media (max-width: 880px) { flex: 1 1 100%; }       \n';

/* You can access the 'vm' object from VMContext by handling the 'onConnected' event. */
var handleConnected = function handleConnected(vm, initialState) {
  return console.log(vm, initialState);
};

var Dashboard = function Dashboard(_) {
  return _react2.default.createElement(
    _dotnetifyElements.VMContext,
    { vm: 'Dashboard', options: { appId: 'react-dashboard-app' }, onConnected: handleConnected },
    _react2.default.createElement(
      _dotnetifyElements.Frame,
      { css: 'max-width: calc(100% - 3rem)' },
      _react2.default.createElement(
        _dotnetifyElements.Panel,
        { horizontal: true, wrap: true, childProps: { css: infoPanelCss } },
        _react2.default.createElement(
          _dotnetifyElements.Panel,
          null,
          _react2.default.createElement(_InfoCard2.default, { id: 'Download', color: '#1c8adb' })
        ),
        _react2.default.createElement(
          _dotnetifyElements.Panel,
          null,
          _react2.default.createElement(_InfoCard2.default, { id: 'Upload', color: '#5cb85c' })
        ),
        _react2.default.createElement(
          _dotnetifyElements.Panel,
          null,
          _react2.default.createElement(_InfoCard2.default, { id: 'Latency', color: '#f0ad4e' })
        ),
        _react2.default.createElement(
          _dotnetifyElements.Panel,
          null,
          _react2.default.createElement(_InfoCard2.default, { id: 'Users', color: '#d9534f' })
        )
      ),
      _react2.default.createElement(
        _dotnetifyElements.Panel,
        null,
        _react2.default.createElement(
          _dotnetifyElements.Card,
          null,
          _react2.default.createElement(
            _dotnetifyElements.Panel,
            { horizontal: true },
            _react2.default.createElement(
              _dotnetifyElements.Panel,
              { flex: '70%' },
              _react2.default.createElement(
                'h4',
                null,
                'Network Traffic'
              ),
              _react2.default.createElement(_dotnetifyElements.LineChart, { id: 'Traffic', height: '75px' })
            ),
            _react2.default.createElement(
              _dotnetifyElements.Panel,
              { flex: '30%' },
              _react2.default.createElement(
                'h4',
                null,
                'Utilization'
              ),
              _react2.default.createElement(_dotnetifyElements.PieChart, { id: 'Utilization' })
            )
          )
        ),
        _react2.default.createElement(
          _dotnetifyElements.Panel,
          { horizontal: true },
          _react2.default.createElement(
            _dotnetifyElements.Panel,
            { flex: '40%' },
            _react2.default.createElement(_ActivitiesCard2.default, { flex: true, id: 'RecentActivities' })
          ),
          _react2.default.createElement(
            _dotnetifyElements.Panel,
            { flex: '60%' },
            _react2.default.createElement(
              _dotnetifyElements.Card,
              { flex: true },
              _react2.default.createElement(
                'h4',
                null,
                'Server Usage'
              ),
              _react2.default.createElement(_dotnetifyElements.BarChart, { id: 'ServerUsage', height: '70px' })
            )
          )
        )
      )
    )
  );
};

exports.default = (0, _dotnetifyElements.withTheme)(Dashboard);

/***/ }),

/***/ "./client/components/InfoCard.js":
/*!***************************************!*\
  !*** ./client/components/InfoCard.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _dotnetifyElements = __webpack_require__(/*! dotnetify-elements */ "dotnetify-elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoIcon = _styledComponents2.default.i.attrs(function (props) {
   return {
      className: 'material-icons'
   };
}).withConfig({
   displayName: 'InfoCard__InfoIcon'
})(['font-size:3rem;padding:1.5rem;color:white;background:', ';opacity:.8;'], function (props) {
   return props.color;
});

var cardCss = '\n   .card-body { padding: .5rem 1.5rem }\n   h3 { font: 600 2rem Helvetica; }\n   @media (max-width: 1550px) and (min-width: 1280px) { \n      h3 { font-size: 1.25rem } \n   }    \n';

var InfoCard = function (_Element) {
   _inherits(InfoCard, _Element);

   function InfoCard() {
      _classCallCheck(this, InfoCard);

      return _possibleConstructorReturn(this, (InfoCard.__proto__ || Object.getPrototypeOf(InfoCard)).apply(this, arguments));
   }

   _createClass(InfoCard, [{
      key: 'render',
      value: function render() {
         var _attrs = this.attrs,
             color = _attrs.color,
             icon = _attrs.icon,
             label = _attrs.label;

         return _react2.default.createElement(
            _dotnetifyElements.Card,
            { horizontal: true, css: cardCss },
            _react2.default.createElement(
               _dotnetifyElements.CardImage,
               null,
               _react2.default.createElement(
                  InfoIcon,
                  { color: color },
                  icon
               )
            ),
            _react2.default.createElement(
               'label',
               null,
               label
            ),
            _react2.default.createElement(
               'h3',
               null,
               this.value
            )
         );
      }
   }]);

   return InfoCard;
}(_dotnetifyElements.Element);

exports.default = InfoCard;

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Core = __webpack_require__(/*! dotnetify-elements/web-components/Core */ "./node_modules/dotnetify-elements/web-components/Core.js");

var _Dashboard = __webpack_require__(/*! ./components/Dashboard */ "./client/components/Dashboard.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elementName = 'react-dashboard-app';
(0, _Core.createWebComponent)(_Dashboard2.default, elementName);

exports.default = document.createElement(elementName);

/***/ }),

/***/ "./node_modules/dotnetify-elements/web-components/Core.js":
/*!****************************************************************!*\
  !*** ./node_modules/dotnetify-elements/web-components/Core.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function webpackUniversalModuleDefinition(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! styled-components */ "styled-components"),__webpack_require__(/*! dotnetify */ "dotnetify")):undefined}(window,function(t,e,r){return function(t){var e={};function __webpack_require__(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,r){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},__webpack_require__.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)__webpack_require__.d(r,n,function(e){return t[e]}.bind(null,n));return r},__webpack_require__.n=function(t){var e=t&&t.__esModule?function getDefault(){return t.default}:function getModuleExports(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=194)}([function(t,e,r){var n=r(2),o=r(5);t.exports=function _curry2(t){return function f2(e,r){switch(arguments.length){case 0:return f2;case 1:return o(e)?f2:n(function(r){return t(e,r)});default:return o(e)&&o(r)?f2:o(e)?n(function(e){return t(e,r)}):o(r)?n(function(r){return t(e,r)}):t(e,r)}}}},function(e,r){e.exports=t},function(t,e,r){var n=r(5);t.exports=function _curry1(t){return function f1(e){return 0===arguments.length||n(e)?f1:t.apply(this,arguments)}}},function(t,e,r){t.exports=r(71)()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.flexAuto=e.createEventEmitter=e.addChildNode=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.deepEqual=function deepEqual(t,e){return JSON.stringify(t)===JSON.stringify(e)},e.filterChildren=function filterChildren(t,e){var r=[],n=o.default.Children.map(t,function(t){return t&&t.type&&e(t)?(r.push(t),null):t});return[r,n]},e.getDefaultTheme=function getDefaultTheme(){var t=document.querySelector("d-main");if(t){var e=t.getAttribute("theme");if("dark"==e)return s.default;if("light"==e)return i.default;if(/^{.*}/.exec(e))return JSON.parse(e)}return i.default},e.ifBoolElse=function ifBoolElse(t,e){return"boolean"==typeof t?t:!!e},e.isIE11=isIE11,e.mapChildren=function mapChildren(t,e,r){var n=this;return o.default.Children.map(t,function(t){if(t)return t.type&&e(t)?r(t):t.props&&t.props.children?o.default.cloneElement(t,t.props,n.mapChildren(t.props.children,e,r)):t})},e.mergeProps=function mergeProps(t){if(null==t.type)return console.error("Cannot resolve the type of element with props '"+JSON.stringify(t.props)+"'"),{};for(var e=Object.keys(t.type.propTypes||{}),r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var i=n.reduce(function(t,e){return Object.assign(t,e)},{}),s=Object.keys(i).filter(function(t){return"style"===t||"css"===t||e.includes(t)}).reduce(function(t,e){return Object.assign(t,function _defineProperty(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}({},e,i[e]))},{});return Object.assign({},s,t.props)},e.nestedGet=function nestedGet(t,e){return e.split(".").reduce(function(t,e){return void 0===t||null===t?t:t[e]},t)},e.parseFunctionString=function parseFunctionString(t){return t?function(e){var r=function _eval(t){return Function('"use strict";return ('+t+")")()}(""+t);return"function"==typeof r?r(e):r}:null},e.resolveComponents=function resolveComponents(t,e){return Object.keys(t.componentTypes).map(function(r){return e[toCamelCase(r)]||t.componentTypes[r]})},e.toCamelCase=toCamelCase,e.toggleNavDrawer=function toggleNavDrawer(t){var e=document.getElementsByTagName("nav")[0]||document.getElementsByTagName("d-nav")[0];e&&(!1===t?e.classList.remove("open"):e.classList.toggle("open"))},e.toPixel=function toPixel(t){if(!t)return null;if("string"==typeof t&&t.endsWith("px"))return parseInt(t);var e=window.getComputedStyle(document.body,null)["font-size"];return e.endsWith("px")?parseInt(t)*parseInt(e):parseInt(t)};var o=_interopRequireDefault(r(1)),i=_interopRequireDefault(r(21)),s=_interopRequireDefault(r(72));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}e.addChildNode=function addChildNode(t,e,r,n){var o=document.createElement(e);return r&&r.split(" ").forEach(function(t){return o.classList.add(t)}),n&&t.childNodes.length>0?t.insertBefore(o,t.childNodes[0]):t.appendChild(o)},e.createEventEmitter=function createEventEmitter(t){var e=[];return{emit:function emit(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];e.forEach(function(t){return t.apply(void 0,function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(r))})},subscribe:function subscribe(t){return!e.includes(t)&&e.push(t),function(){return e=e.filter(function(e){return e!==t})}}}};e.flexAuto=isIE11()?"1 1 auto":"1";function isIE11(){return window.navigator.userAgent.indexOf("Trident/")>0}function toCamelCase(t){if("string"==typeof t)return t.substr(0,1).toLowerCase()+t.substr(1);if("object"===(void 0===t?"undefined":n(t))){var e={},r=!0,o=!1,i=void 0;try{for(var s,a=Object.keys(t)[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var c=s.value;e[toCamelCase(c)]=t[c]}}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return e}return t}},function(t,e){t.exports=function _isPlaceholder(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}},function(t,r){t.exports=e},function(t,e){t.exports=function _has(t,e){return Object.prototype.hasOwnProperty.call(e,t)}},function(t,e){t.exports=function _arity(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,r){return e.apply(this,arguments)};case 3:return function(t,r,n){return e.apply(this,arguments)};case 4:return function(t,r,n,o){return e.apply(this,arguments)};case 5:return function(t,r,n,o,i){return e.apply(this,arguments)};case 6:return function(t,r,n,o,i,s){return e.apply(this,arguments)};case 7:return function(t,r,n,o,i,s,a){return e.apply(this,arguments)};case 8:return function(t,r,n,o,i,s,a,c){return e.apply(this,arguments)};case 9:return function(t,r,n,o,i,s,a,c,u){return e.apply(this,arguments)};case 10:return function(t,r,n,o,i,s,a,c,u,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}},function(t,e,r){var n=r(58),o=r(56),i=r(55);function _iterableReduce(t,e,r){for(var n=r.next();!n.done;){if((e=t["@@transducer/step"](e,n.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n=r.next()}return t["@@transducer/result"](e)}function _methodReduce(t,e,r,n){return t["@@transducer/result"](r[n](i(t["@@transducer/step"],t),e))}var s="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";t.exports=function _reduce(t,e,r){if("function"==typeof t&&(t=o(t)),n(r))return function _arrayReduce(t,e,r){for(var n=0,o=r.length;n<o;){if((e=t["@@transducer/step"](e,r[n]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n+=1}return t["@@transducer/result"](e)}(t,e,r);if("function"==typeof r["fantasy-land/reduce"])return _methodReduce(t,e,r,"fantasy-land/reduce");if(null!=r[s])return _iterableReduce(t,e,r[s]());if("function"==typeof r.next)return _iterableReduce(t,e,r);if("function"==typeof r.reduce)return _methodReduce(t,e,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}},function(t,e){t.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},function(t,e,r){var n=r(20),o=r(66);t.exports=function _dispatchable(t,e,r){return function(){if(0===arguments.length)return r();var i=Array.prototype.slice.call(arguments,0),s=i.pop();if(!n(s)){for(var a=0;a<t.length;){if("function"==typeof s[t[a]])return s[t[a]].apply(s,i);a+=1}if(o(s))return e.apply(null,i)(s)}return r.apply(this,arguments)}}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";t.exports={alwaysValid:function alwaysValid(){return!0}}},function(t,e,r){"use strict";var n=r(33),o=r(32),i=r(31),s=r(1),a=r(29);t.exports={createElement:function createElement(t,e,r,c){var u={key:e};t.attribs&&(u=i(function(t,e){var r=e[0],o=e[1];return"style"===(r=a[r.replace(/[-:]/,"")]||r)?o=function createStyleJsonFromString(t){for(var e,r,o,i=(t=t||"").split(/;(?!base64)/),s={},a=0;a<i.length;++a)(e=i[a].split(":")).length>2&&(e[1]=e.slice(1).join(":")),r=e[0],"string"==typeof(o=e[1])&&(o=o.trim()),null!=r&&null!=o&&r.length>0&&o.length>0&&(s[n(r)]=o);return s}(o):"class"===r?r="className":"for"===r&&(r="htmlFor"),"string"==typeof o&&(o=o),t[r]=o||r,t},u,o(t.attribs))),c=c||[];var l=null!=r?[r].concat(c):c;return s.createElement.apply(null,[t.name,u].concat(l))}}},function(t,e,r){"use strict";var n=r(14),o=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","menuitem","textarea"];t.exports=function ProcessNodeDefinitions(){return{processDefaultNode:function processDefaultNode(t,e,r){return"text"===t.type?t.data:"comment"!==t.type&&(o.indexOf(t.name)>-1?n.createElement(t,r):n.createElement(t,r,t.data,e))}}}},function(t,e,r){"use strict";var n=r(34),o=r(15);t.exports=function ProcessingInstructions(){var t=new o;return{defaultProcessingInstructions:[{shouldProcessNode:n.shouldProcessEveryNode,processNode:t.processDefaultNode}]}}},function(t,e){var r=t.exports={get firstChild(){var t=this.children;return t&&t[0]||null},get lastChild(){var t=this.children;return t&&t[t.length-1]||null},get nodeType(){return o[this.type]||o.element}},n={tagName:"name",childNodes:"children",parentNode:"parent",previousSibling:"prev",nextSibling:"next",nodeValue:"data"},o={element:1,text:3,cdata:4,comment:8};Object.keys(n).forEach(function(t){var e=n[t];Object.defineProperty(r,t,{get:function(){return this[e]||null},set:function(t){return this[e]=t,t}})})},function(t,e,r){var n=r(8),o=r(2),i=r(0),s=r(50),a=i(function curryN(t,e){return 1===t?o(e):n(t,s(t,[],e))});t.exports=a},function(t,e,r){var n=r(2),o=r(7),i=r(53),s=!{toString:null}.propertyIsEnumerable("toString"),a=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],c=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),u=function contains(t,e){for(var r=0;r<t.length;){if(t[r]===e)return!0;r+=1}return!1},l="function"!=typeof Object.keys||c?n(function keys(t){if(Object(t)!==t)return[];var e,r,n=[],l=c&&i(t);for(e in t)!o(e,t)||l&&"length"===e||(n[n.length]=e);if(s)for(r=a.length-1;r>=0;)o(e=a[r],t)&&!u(n,e)&&(n[n.length]=e),r-=1;return n}):n(function keys(t){return Object(t)!==t?[]:Object.keys(t)});t.exports=l},function(t,e){t.exports=Array.isArray||function _isArray(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["rgba(255, 99, 132, 0.8)","rgba(54, 162, 235, 0.8)","rgba(255, 206, 86, 0.8)","rgba(75, 192, 192, 0.8)","rgba(153, 102, 255, 0.8)","rgba(255, 159, 64, 0.8)"],o=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t})({name:"light"},{Alert:"",BarChart:{AreaColor:[].concat(n,n)},DataGrid:{Container:"",Header:"",HeaderCell:"",Row:"",Cell:""},Label:{Container:"",IconContainer:"",IconComponent:""},LineChart:{AreaColor:"rgba(217, 237, 245, 0.2)",LineColor:"#9acfea",LineWidth:2},Markdown:"",MarkdownTOC:{Selected:"\n         font-weight: 600;\n         border-bottom: 1px dashed #ddd;\n      ",Container:"\n         .toc-h1, \n         .toc-h2 {\n            font-size: 1.1rem;\n         }\n         .toc-h3, \n         .toc-h4 {\n            font-size: .9rem;\n         } \n      "},PieChart:{AreaColor:[].concat(n,n)}},{Button:"",Checkbox:{style:"custom",GroupContainer:"",Container:{Default:"",Checked:""},Label:"",Input:""},Input:"",InputValidationError:"\n        border-color: red;\n    ",Radio:{style:"custom",GroupContainer:"",Container:{Default:"",Checked:""},Label:"",Input:""},RadioToggle:{GroupContainer:"",Label:{Default:"",Checked:""},Input:""},TextArea:""},{Main:"\n      a {\n         color: #337ab7;\n         &:hover { \n            color: #0056b3;\n            text-decoration: none;\n         } \n         &:focus { \n            color: #337ab7; \n         }\n      }     \n   ",Header:"\n      background: #f8f8f8;\n      border-bottom: 1px solid #e7e7e7;\n      box-shadow: 0 0 5px 0 rgba(0,0,0,.2);\n\n   ",Footer:"\n      background: #f8f8f8;\n      border-top: 1px solid #e7e7e7;  \n   ",Nav:"\n        background: #f4f4f4;\n        border-right: 1px solid #e7e7e7;\n    ",Section:"\n        background: #f4f4f4;\n    ",Panel:{Container:"",ChildContainer:"",Gap:{small:".5rem",large:"1rem"},Margin:{small:"1em",large:"1.5rem"}}},{NavDrawerButton:"\n      color: #999;\n   ",NavMenu:{SelectedRoute:"\n         > a > div > div {\n            padding-left: .5rem;\n            border-left: 2px solid tomato;\n            font-weight: 600;\n         }\n      ",RouteContainer:"\n         border-bottom: 1px solid #e7e7e7;\n         color: #868e96; \n         background: #f4f4f4;\n         &:hover { background: #f0f0f0; }\n      ",GroupContainer:"\n         background: #f8f8f8;\n         border-bottom: 1px solid #e7e7e7;\n         color: #337ab7;\n         &:hover { \n            color: #0056b3; \n            background: #f0f0f0;\n         }\n      "}},{Card:{Container:"",ImageContainer:"",HeaderContainer:"",BodyContainer:"",FooterContainer:""},Cell:{Container:"",HeaderContainer:"",BodyContainer:""},Collapsible:{Container:"",HeaderContainer:""},Field:{Container:"",LabelContainer:"\n         font-weight: 500;\n      ",InputContainer:"\n         input, select, textarea {\n            font-weight: 500;\n            ::-webkit-input-placeholder {\n               font-weight: 400;\n            }\n         }\n      ",ValidationMessageContainer:"\n         color: red;\n      ",PlainTextContainer:"",PlainTextComponent:"font-weight: 500;"},Menu:{Container:"",GroupContainer:"\n         background: #f8f8f8;\n         border-color: #ccc;\n      ",ItemContainer:"\n         &:hover > button {\n            background-color: #f0f0f0;\n         }      \n         &.separator {\n            border-bottom-color: #ccc;\n         }        \n         &.submenu::after {\n            border-left-color: #337ab7;\n         }          \n      "},Modal:{Container:"",HeaderContainer:"",BodyContainer:"",FooterContainer:""},Tab:{Container:"",BodyContainer:"",TabItemContainer:"",TabItem:"\n         color: #337ab7;\n         &:hover { \n            color: #0056b3;\n         }\n      "}});e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}();function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=function(){function VMProperty(t,e){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,VMProperty),this.vmContext=t,this.propId=e}return n(VMProperty,[{key:"dispatch",value:function dispatch(t,e){this.vmContext.dispatchState(_defineProperty({},this.propId,t),e)}},{key:"dispatchProp",value:function dispatchProp(t,e){void 0!==this.vmContext.getState(t)&&this.vmContext.setState(_defineProperty({},t,e)),this.vmContext.dispatchState(_defineProperty({},t,e))}},{key:"vm",get:function get(){return this.vmContext.vm}},{key:"vmState",get:function get(){return this.vmContext.getState()}},{key:"fullId",get:function get(){return this.vmContext.vmId?this.vmContext.vmId+"."+this.propId:this.propId}},{key:"attrs",get:function get(){return this.vmContext.getPropAttributes(this.propId)}},{key:"value",get:function get(){return this.vmContext.getState(this.propId)},set:function set(t){this.vmContext.setState(_defineProperty({},this.propId,t))}}]),VMProperty}();e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VMContext=e.ContextTypes=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),i=_interopRequireDefault(r(1)),s=_interopRequireDefault(r(3)),a=_interopRequireDefault(r(74));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var c=e.ContextTypes={vmContext:s.default.object,theme:s.default.object},u=e.VMContext=function(t){function VMContext(t,e){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,VMContext);var r=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(VMContext.__proto__||Object.getPrototypeOf(VMContext)).call(this,t,e));return r.store=new a.default(r),window.__dotnetify_ssr__&&r.connect(),r}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(VMContext,i.default.Component),o(VMContext,[{key:"vmContext",get:function get(){return this.context&&this.context.vmContext}}]),o(VMContext,[{key:"componentDidMount",value:function componentDidMount(){window.__dotnetify_ssr__||this.connect()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.store.destroy()}},{key:"connect",value:function connect(){var t=this;this.vm=this.store.connect(this.props.vm,this.props.options,function(e){return t.onStateChange(e)})}},{key:"getChildContext",value:function getChildContext(){return n({},this.context,{vmContext:this.store.context})}},{key:"render",value:function render(){var t=this.props,e=t.children,r=t.placeholder;return this.state?e:r||null}},{key:"onStateChange",value:function onStateChange(t){this.connected||(this.connected=!0,"function"==typeof this.props.onConnected&&this.props.onConnected(this.vm,t)),"function"==typeof this.props.onStateChange&&this.props.onStateChange(t)}}]),VMContext}();u.contextTypes=c,u.childContextTypes=c,u.propTypes={vm:s.default.string,options:s.default.object,onConnected:s.default.func,onStateChange:s.default.func}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),o=_interopRequireDefault(r(1)),i=_interopRequireDefault(r(3)),s=_interopRequireDefault(r(6)),a=r(23),c=_interopRequireDefault(r(22)),u=function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(4));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var l=s.default.span.withConfig({displayName:"Element__Container"})(["",";"],function(t){return t.css}),p=function(t){function Element(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Element),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Element.__proto__||Object.getPrototypeOf(Element)).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Element,o.default.Component),n(Element,[{key:"componentDidMount",value:function componentDidMount(){this.props.onChange&&this.isVMProperty&&this.props.onChange(this.vmProperty.value)}},{key:"componentDidUpdate",value:function componentDidUpdate(t){t.id&&(this._vmProperty=null)}},{key:"dispatch",value:function dispatch(t){return this.vmProperty.dispatch(t)}},{key:"dispatchProp",value:function dispatchProp(t,e){return this.vmProperty.dispatchProp(t,e)}},{key:"getTemplateContent",value:function getTemplateContent(t){var e=this,r="TEMPLATE"===t.nodeName?t:document.getElementById(t)||document.querySelector(t);if(r){r=r.cloneNode(!0);var n=this.attrs;r.content.querySelectorAll("[slot]").forEach(function(t){var r=t.getAttribute("slot");"value"===r?t.innerText=e.value:n.hasOwnProperty(r)&&(t.innerText=e.attrs[r])});var o=r.innerHTML.trim();return o.length>0?o:null}}},{key:"resolveComponents",value:function resolveComponents(t){return u.resolveComponents(t,this.props)}},{key:"render",value:function render(){var t=this.attrs,e=t.hidden,r=t.css,n=this.vmProperty.value;if(null==n)return null;if(n=r?o.default.createElement(l,{css:r},n):n,this.props.template){var i=this.getTemplateContent(this.props.template);i&&(n=o.default.createElement(l,{css:r,dangerouslySetInnerHTML:{__html:i}}))}return e?null:n}},{key:"vm",get:function get(){return this.vmProperty.vm}},{key:"vmContext",get:function get(){return this.context.vmContext||this.props.vmContext}},{key:"value",get:function get(){return this.vmProperty.value},set:function set(t){this.vmProperty.value=t}},{key:"attrs",get:function get(){return Object.assign({fullId:this.vmProperty.fullId},this.vmProperty.attrs,this.props)}},{key:"isVMProperty",get:function get(){var t=this.vmContext&&this.vmContext.getState();return!!t&&t.hasOwnProperty(this.props.id)}},{key:"vmProperty",get:function get(){var t=this;if(this._vmProperty)return this._vmProperty;if(this.isVMProperty)return this._vmProperty=new c.default(this.vmContext,this.props.id),this._vmProperty;var e=this.props.id||Math.random().toString(36).substring(2);return this._vmProperty=new c.default({getState:function getState(r){return r===e&&t.props.hasOwnProperty("value")?t.props.value:t.state&&t.state[r]},setState:function setState(e){return t.setState(e)},getPropAttributes:function getPropAttributes(e){return t.props.attrs||{}},dispatchState:function dispatchState(t){}},e),this._vmProperty}}]),Element}();p.contextTypes=a.ContextTypes,p.propTypes={id:i.default.string.isRequired,hidden:i.default.bool,onChange:i.default.func},e.default=p},function(t,e,r){"use strict";
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/!function(){if(void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.polyfillWrapFlushCallback){var t=HTMLElement;window.HTMLElement=function HTMLElement(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}}()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),i=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(69));function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var s=function(){function WebComponentHelper(t){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,WebComponentHelper),this.host=t,this.host.__eventHandlers=this.host.__eventHandlers||{}}return o(WebComponentHelper,[{key:"convertAttributeToProp",value:function convertAttributeToProp(t,e,r){var n=Object.keys(t).find(function(t){return t.toLowerCase()==e}),o=r;return"css"===e?o=r:"true"===r||"false"===r?o="true"==r:isNaN(r)||""===r?/^{.*}/.exec(r)?o=JSON.parse(r):/([A-z0-9$_]*)\(.*\)/.exec(r)&&(o=this.parseFunctionString(r)):o=+r,{name:n||e,value:o}}},{key:"getProps",value:function getProps(t,e){var r=this;return e=e||{},[].concat(_toConsumableArray(t)).filter(function(t){return"style"!==t.name}).map(function(t){return r.convertAttributeToProp(e,t.name,t.value)}).reduce(function(t,e){return n({},t,_defineProperty({},e.name,e.value))},{})}},{key:"getEvents",value:function getEvents(t,e){var r=this;return e=e||{},Object.keys(e).filter(function(t){return/on([A-Z].*)/.exec(t)}).reduce(function(e,o){return n({},e,_defineProperty({},o,function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];var s=o.toLowerCase(),a=r.host.__eventHandlers[s];if(!a){var c=[].concat(_toConsumableArray(t)).find(function(t){return t.name==s});c&&(a=c.value,/([A-z0-9$_]*)\(.*\)/.exec(c.value)&&(a=r.parseFunctionString(c.value)),r.host.__eventHandlers[s]=a)}a&&"function"!=typeof a&&(a=r._eval(a));var u="function"==typeof a?a(n):a;return r.host.dispatchEvent(new CustomEvent(o,{detail:n})),r.host.vmContextElem&&"function"==typeof r.host.vmContextElem.dispatchVMEvent&&r.host.vmContextElem.dispatchVMEvent("onElementEvent",{detail:{targetId:r.host.getAttribute("id"),eventName:o,eventArgs:n}}),u||null}))},{})}},{key:"getContainerParent",value:function getContainerParent(){for(var t=this.host.parentElement;t;){if(t._isContainer)return t;t=t.parentElement}return null}},{key:"parseFunctionString",value:function parseFunctionString(t){return WebComponentHelper._parseFunctionString(t)}},{key:"parseHtmlToReact",value:function parseHtmlToReact(t){return"string"==typeof t&&(new i.default.Parser).parse(t.trim())}}],[{key:"_parseFunctionString",value:function _parseFunctionString(t){var e=this;return t?function(r){var n=e._eval(""+t);return"function"==typeof n?n(r):n}:null}},{key:"_eval",value:function _eval(t){return Function('"use strict";return ('+t+")")()}}]),WebComponentHelper}();e.default=s,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},function(t,e,r){"use strict";var n=function validateFormat(t){};t.exports=function invariant(t,e,r,o,i,s,a,c){if(n(e),!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,i,s,a,c],p=0;(u=new Error(e.replace(/%s/g,function(){return l[p++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(t,e,r){"use strict";function makeEmptyFunction(t){return function(){return t}}var n=function emptyFunction(){};n.thatReturns=makeEmptyFunction,n.thatReturnsFalse=makeEmptyFunction(!1),n.thatReturnsTrue=makeEmptyFunction(!0),n.thatReturnsNull=makeEmptyFunction(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(t){return t},t.exports=n},function(t,e,r){"use strict";var n=["accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","challenge","charSet","checked","cite","classID","className","colSpan","cols","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","encType","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang","htmlFor","httpEquiv","icon","id","inputMode","integrity","is","keyParams","keyType","kind","label","lang","list","loop","low","manifest","marginHeight","marginWidth","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","nonce","open","optimum","pattern","placeholder","poster","preload","profile","radioGroup","readOnly","rel","required","reversed","role","rowSpan","rows","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","spellCheck","src","srcDoc","srcLang","srcSet","start","step","style","summary","tabIndex","target","title","type","useMap","value","width","wmode","wrap"].concat(["autoCapitalize","autoCorrect","color","itemProp","itemScope","itemType","itemRef","itemID","security","unselectable","results","autoSave"]).concat(["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlns","xmlnsXlink","xmlBase","xmlLang","xmlSpace","y","y1","y2","yChannelSelector","z","zoomAndPan"]).reduce(function(t,e){var r=e.toLowerCase();return r!==e&&(t[r]=e),t},{});t.exports=n},function(t,e,r){var n=r(2),o=r(0),i=r(5);t.exports=function _curry3(t){return function f3(e,r,s){switch(arguments.length){case 0:return f3;case 1:return i(e)?f3:o(function(r,n){return t(e,r,n)});case 2:return i(e)&&i(r)?f3:i(e)?o(function(e,n){return t(e,r,n)}):i(r)?o(function(r,n){return t(e,r,n)}):n(function(n){return t(e,r,n)});default:return i(e)&&i(r)&&i(s)?f3:i(e)&&i(r)?o(function(e,r){return t(e,r,s)}):i(e)&&i(s)?o(function(e,n){return t(e,r,n)}):i(r)&&i(s)?o(function(r,n){return t(e,r,n)}):i(e)?n(function(e){return t(e,r,s)}):i(r)?n(function(r){return t(e,r,s)}):i(s)?n(function(n){return t(e,r,n)}):t(e,r,s)}}}},function(t,e,r){var n=r(30)(r(9));t.exports=n},function(t,e,r){var n=r(2),o=r(7),i=n(function toPairs(t){var e=[];for(var r in t)o(r,t)&&(e[e.length]=[r,t[r]]);return e});t.exports=i},function(t,e,r){(function(e){var r=1/0,n="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="[\\ud800-\\udfff]",c="["+s+"]",u="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\d+",p="[\\u2700-\\u27bf]",h="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+s+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="\\ud83c[\\udffb-\\udfff]",m="[^\\ud800-\\udfff]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",b="[A-Z\\xc0-\\xd6\\xd8-\\xde]",y="(?:"+h+"|"+f+")",v="(?:"+b+"|"+f+")",x="(?:"+u+"|"+d+")"+"?",C="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+[m,_,g].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),w="(?:"+[p,_,g].join("|")+")"+C,k="(?:"+[m+u+"?",u,_,g,a].join("|")+")",E=RegExp("['’]","g"),S=RegExp(u,"g"),T=RegExp(d+"(?="+d+")|"+k+C,"g"),q=RegExp([b+"?"+h+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[c,b,"$"].join("|")+")",v+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[c,b+y,"$"].join("|")+")",b+"?"+y+"+(?:['’](?:d|ll|m|re|s|t|ve))?",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",l,w].join("|"),"g"),P=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),A=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,O="object"==typeof e&&e&&e.Object===Object&&e,D="object"==typeof self&&self&&self.Object===Object&&self,L=O||D||Function("return this")();var N=function basePropertyOf(t){return function(e){return null==t?void 0:t[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"});function hasUnicode(t){return P.test(t)}function stringToArray(t){return hasUnicode(t)?function unicodeToArray(t){return t.match(T)||[]}(t):function asciiToArray(t){return t.split("")}(t)}var I=Object.prototype.toString,R=L.Symbol,M=R?R.prototype:void 0,j=M?M.toString:void 0;function baseToString(t){if("string"==typeof t)return t;if(function isSymbol(t){return"symbol"==typeof t||function isObjectLike(t){return!!t&&"object"==typeof t}(t)&&I.call(t)==n}(t))return j?j.call(t):"";var e=t+"";return"0"==e&&1/t==-r?"-0":e}function castSlice(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function baseSlice(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}function toString(t){return null==t?"":baseToString(t)}var z=function createCompounder(t){return function(e){return function arrayReduce(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}(function words(t,e,r){return t=toString(t),void 0===(e=r?void 0:e)?function hasUnicodeWord(t){return A.test(t)}(t)?function unicodeWords(t){return t.match(q)||[]}(t):function asciiWords(t){return t.match(o)||[]}(t):t.match(e)||[]}(function deburr(t){return(t=toString(t))&&t.replace(i,N).replace(S,"")}(e).replace(E,"")),t,"")}}(function(t,e,r){return e=e.toLowerCase(),t+(r?function capitalize(t){return V(toString(t).toLowerCase())}(e):e)});var V=function createCaseFirst(t){return function(e){var r=hasUnicode(e=toString(e))?stringToArray(e):void 0,n=r?r[0]:e.charAt(0),o=r?castSlice(r,1).join(""):e.slice(1);return n[t]()+o}}("toUpperCase");t.exports=z}).call(this,r(12))},function(t,e,r){"use strict";t.exports={shouldProcessEveryNode:function shouldProcessEveryNode(t){return!0}}},function(t,e,r){var n=r(17),o=t.exports=Object.create(n),i={tagName:"name"};Object.keys(i).forEach(function(t){var e=i[t];Object.defineProperty(o,t,{get:function(){return this[e]||null},set:function(t){return this[e]=t,t}})})},function(t,e){t.exports={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag",CDATA:"cdata",Doctype:"doctype",isTag:function(t){return"tag"===t.type||"script"===t.type||"style"===t.type}}},function(t,e,r){var n=r(36),o=/\s+/g,i=r(17),s=r(35);function DomHandler(t,e,r){"object"==typeof t?(r=e,e=t,t=null):"function"==typeof e&&(r=e,e=a),this._callback=t,this._options=e||a,this._elementCB=r,this.dom=[],this._done=!1,this._tagStack=[],this._parser=this._parser||null}var a={normalizeWhitespace:!1,withStartIndices:!1,withEndIndices:!1};DomHandler.prototype.onparserinit=function(t){this._parser=t},DomHandler.prototype.onreset=function(){DomHandler.call(this,this._callback,this._options,this._elementCB)},DomHandler.prototype.onend=function(){this._done||(this._done=!0,this._parser=null,this._handleCallback(null))},DomHandler.prototype._handleCallback=DomHandler.prototype.onerror=function(t){if("function"==typeof this._callback)this._callback(t,this.dom);else if(t)throw t},DomHandler.prototype.onclosetag=function(){var t=this._tagStack.pop();this._options.withEndIndices&&t&&(t.endIndex=this._parser.endIndex),this._elementCB&&this._elementCB(t)},DomHandler.prototype._createDomElement=function(t){if(!this._options.withDomLvl1)return t;var e;for(var r in e="tag"===t.type?Object.create(s):Object.create(i),t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},DomHandler.prototype._addDomElement=function(t){var e=this._tagStack[this._tagStack.length-1],r=e?e.children:this.dom,n=r[r.length-1];t.next=null,this._options.withStartIndices&&(t.startIndex=this._parser.startIndex),this._options.withEndIndices&&(t.endIndex=this._parser.endIndex),n?(t.prev=n,n.next=t):t.prev=null,r.push(t),t.parent=e||null},DomHandler.prototype.onopentag=function(t,e){var r={type:"script"===t?n.Script:"style"===t?n.Style:n.Tag,name:t,attribs:e,children:[]},o=this._createDomElement(r);this._addDomElement(o),this._tagStack.push(o)},DomHandler.prototype.ontext=function(t){var e,r=this._options.normalizeWhitespace||this._options.ignoreWhitespace;if(!this._tagStack.length&&this.dom.length&&(e=this.dom[this.dom.length-1]).type===n.Text)r?e.data=(e.data+t).replace(o," "):e.data+=t;else if(this._tagStack.length&&(e=this._tagStack[this._tagStack.length-1])&&(e=e.children[e.children.length-1])&&e.type===n.Text)r?e.data=(e.data+t).replace(o," "):e.data+=t;else{r&&(t=t.replace(o," "));var i=this._createDomElement({data:t,type:n.Text});this._addDomElement(i)}},DomHandler.prototype.oncomment=function(t){var e=this._tagStack[this._tagStack.length-1];if(e&&e.type===n.Comment)e.data+=t;else{var r={data:t,type:n.Comment},o=this._createDomElement(r);this._addDomElement(o),this._tagStack.push(o)}},DomHandler.prototype.oncdatastart=function(){var t={children:[{data:"",type:n.Text}],type:n.CDATA},e=this._createDomElement(t);this._addDomElement(e),this._tagStack.push(e)},DomHandler.prototype.oncommentend=DomHandler.prototype.oncdataend=function(){this._tagStack.pop()},DomHandler.prototype.onprocessinginstruction=function(t,e){var r=this._createDomElement({name:t,data:e,type:n.Directive});this._addDomElement(r)},t.exports=DomHandler},function(t,e){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(t){return"function"==typeof t}function isObject(t){return"object"==typeof t&&null!==t}function isUndefined(t){return void 0===t}t.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(t){if(!function isNumber(t){return"number"==typeof t}(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},EventEmitter.prototype.emit=function(t){var e,r,n,o,i,s;if(this._events||(this._events={}),"error"===t&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var a=new Error('Uncaught, unspecified "error" event. ('+e+")");throw a.context=e,a}if(isUndefined(r=this._events[t]))return!1;if(isFunction(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(isObject(r))for(o=Array.prototype.slice.call(arguments,1),n=(s=r.slice()).length,i=0;i<n;i++)s[i].apply(this,o);return!0},EventEmitter.prototype.addListener=function(t,e){var r;if(!isFunction(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,isFunction(e.listener)?e.listener:e),this._events[t]?isObject(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,isObject(this._events[t])&&!this._events[t].warned&&(r=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners)&&r>0&&this._events[t].length>r&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(t,e){if(!isFunction(e))throw TypeError("listener must be a function");var r=!1;function g(){this.removeListener(t,g),r||(r=!0,e.apply(this,arguments))}return g.listener=e,this.on(t,g),this},EventEmitter.prototype.removeListener=function(t,e){var r,n,o,i;if(!isFunction(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(o=(r=this._events[t]).length,n=-1,r===e||isFunction(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(isObject(r)){for(i=o;i-- >0;)if(r[i]===e||r[i].listener&&r[i].listener===e){n=i;break}if(n<0)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},EventEmitter.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(isFunction(r=this._events[t]))this.removeListener(t,r);else if(r)for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},EventEmitter.prototype.listeners=function(t){return this._events&&this._events[t]?isFunction(this._events[t])?[this._events[t]]:this._events[t].slice():[]},EventEmitter.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(isFunction(e))return 1;if(e)return e.length}return 0},EventEmitter.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e){"function"==typeof Object.create?t.exports=function inherits(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function inherits(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t){t.exports={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}},function(t){t.exports={Aacute:"Á",aacute:"á",Acirc:"Â",acirc:"â",acute:"´",AElig:"Æ",aelig:"æ",Agrave:"À",agrave:"à",amp:"&",AMP:"&",Aring:"Å",aring:"å",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",brvbar:"¦",Ccedil:"Ç",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",COPY:"©",curren:"¤",deg:"°",divide:"÷",Eacute:"É",eacute:"é",Ecirc:"Ê",ecirc:"ê",Egrave:"È",egrave:"è",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",GT:">",Iacute:"Í",iacute:"í",Icirc:"Î",icirc:"î",iexcl:"¡",Igrave:"Ì",igrave:"ì",iquest:"¿",Iuml:"Ï",iuml:"ï",laquo:"«",lt:"<",LT:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",Ntilde:"Ñ",ntilde:"ñ",Oacute:"Ó",oacute:"ó",Ocirc:"Ô",ocirc:"ô",Ograve:"Ò",ograve:"ò",ordf:"ª",ordm:"º",Oslash:"Ø",oslash:"ø",Otilde:"Õ",otilde:"õ",Ouml:"Ö",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',QUOT:'"',raquo:"»",reg:"®",REG:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",THORN:"Þ",thorn:"þ",times:"×",Uacute:"Ú",uacute:"ú",Ucirc:"Û",ucirc:"û",Ugrave:"Ù",ugrave:"ù",uml:"¨",Uuml:"Ü",uuml:"ü",Yacute:"Ý",yacute:"ý",yen:"¥",yuml:"ÿ"}},function(t){t.exports={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",amp:"&",AMP:"&",andand:"⩕",And:"⩓",and:"∧",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angmsd:"∡",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",apacir:"⩯",ap:"≈",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxHd:"╤",boxhD:"╥",boxHD:"╦",boxhu:"┴",boxHu:"╧",boxhU:"╨",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsolb:"⧅",bsol:"\\",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",capand:"⩄",capbrcup:"⩉",capcap:"⩋",cap:"∩",Cap:"⋒",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cir:"○",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cup:"∪",Cup:"⋓",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",Darr:"↡",dArr:"⇓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",ddagger:"‡",ddarr:"⇊",DD:"ⅅ",dd:"ⅆ",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrowBar:"⤓",downarrow:"↓",DownArrow:"↓",Downarrow:"⇓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVectorBar:"⥖",DownLeftVector:"↽",DownRightTeeVector:"⥟",DownRightVectorBar:"⥗",DownRightVector:"⇁",DownTeeArrow:"↧",DownTee:"⊤",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",Ecirc:"Ê",ecirc:"ê",ecir:"≖",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",edot:"ė",eDot:"≑",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp13:" ",emsp14:" ",emsp:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",ge:"≥",gE:"≧",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",gescc:"⪩",ges:"⩾",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gla:"⪥",gl:"≷",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gtcc:"⪧",gtcir:"⩺",gt:">",GT:">",Gt:"≫",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",harrcir:"⥈",harr:"↔",hArr:"⇔",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",Im:"ℑ",imof:"⊷",imped:"Ƶ",Implies:"⇒",incare:"℅",in:"∈",infin:"∞",infintie:"⧝",inodot:"ı",intcal:"⊺",int:"∫",Int:"∬",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larrb:"⇤",larrbfs:"⤟",larr:"←",Larr:"↞",lArr:"⇐",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",latail:"⤙",lAtail:"⤛",lat:"⪫",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",LeftArrowBar:"⇤",leftarrow:"←",LeftArrow:"←",Leftarrow:"⇐",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVectorBar:"⥙",LeftDownVector:"⇃",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTeeArrow:"↤",LeftTee:"⊣",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangleBar:"⧏",LeftTriangle:"⊲",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVectorBar:"⥘",LeftUpVector:"↿",LeftVectorBar:"⥒",LeftVector:"↼",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",lescc:"⪨",les:"⩽",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",llarr:"⇇",ll:"≪",Ll:"⋘",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoustache:"⎰",lmoust:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftrightarrow:"⟷",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longmapsto:"⟼",longrightarrow:"⟶",LongRightArrow:"⟶",Longrightarrow:"⟹",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",ltcc:"⪦",ltcir:"⩹",lt:"<",LT:"<",Lt:"≪",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",midast:"*",midcir:"⫰",mid:"∣",middot:"·",minusb:"⊟",minus:"−",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natural:"♮",naturals:"ℕ",natur:"♮",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",ne:"≠",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nlE:"≦̸",nle:"≰",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangleBar:"⧏̸",NotLeftTriangle:"⋪",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangleBar:"⧐̸",NotRightTriangle:"⋫",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",nparallel:"∦",npar:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",nprec:"⊀",npreceq:"⪯̸",npre:"⪯̸",nrarrc:"⤳̸",nrarr:"↛",nrArr:"⇏",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",Ocirc:"Ô",ocirc:"ô",ocir:"⊚",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",orarr:"↻",Or:"⩔",or:"∨",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",otimesas:"⨶",Otimes:"⨷",otimes:"⊗",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",para:"¶",parallel:"∥",par:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plus:"+",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",prap:"⪷",Pr:"⪻",pr:"≺",prcue:"≼",precapprox:"⪷",prec:"≺",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",pre:"⪯",prE:"⪳",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportional:"∝",Proportion:"∷",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarr:"→",Rarr:"↠",rArr:"⇒",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",Re:"ℜ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrowBar:"⇥",rightarrow:"→",RightArrow:"→",Rightarrow:"⇒",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVectorBar:"⥕",RightDownVector:"⇂",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTeeArrow:"↦",RightTee:"⊢",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangleBar:"⧐",RightTriangle:"⊳",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVectorBar:"⥔",RightUpVector:"↾",RightVectorBar:"⥓",RightVector:"⇀",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoustache:"⎱",rmoust:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",scap:"⪸",Scaron:"Š",scaron:"š",Sc:"⪼",sc:"≻",sccue:"≽",sce:"⪰",scE:"⪴",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdotb:"⊡",sdot:"⋅",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",solbar:"⌿",solb:"⧄",sol:"/",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squ:"□",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succapprox:"⪸",succ:"≻",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",Sup:"⋑",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",therefore:"∴",Therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",ThinSpace:" ",thinsp:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",timesbar:"⨱",timesb:"⊠",times:"×",timesd:"⨰",tint:"∭",toea:"⤨",topbot:"⌶",topcir:"⫱",top:"⊤",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",uarr:"↑",Uarr:"↟",uArr:"⇑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrowBar:"⤒",uparrow:"↑",UpArrow:"↑",Uparrow:"⇑",UpArrowDownArrow:"⇅",updownarrow:"↕",UpDownArrow:"↕",Updownarrow:"⇕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTeeArrow:"↥",UpTee:"⊥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",Vcy:"В",vcy:"в",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",veebar:"⊻",vee:"∨",Vee:"⋁",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xharr:"⟷",xhArr:"⟺",Xi:"Ξ",xi:"ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",yuml:"ÿ",Yuml:"Ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",zfr:"𝔷",Zfr:"ℨ",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},function(t){t.exports={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376}},function(t,e,r){var n=r(43);t.exports=function decodeCodePoint(t){if(t>=55296&&t<=57343||t>1114111)return"�";t in n&&(t=n[t]);var e="";t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|1023&t);return e+=String.fromCharCode(t)}},function(t,e,r){t.exports=Tokenizer;var n=r(44),o=r(42),i=r(41),s=r(40),a=0,c=a++,u=a++,l=a++,p=a++,h=a++,f=a++,d=a++,m=a++,_=a++,g=a++,b=a++,y=a++,v=a++,x=a++,C=a++,w=a++,k=a++,E=a++,S=a++,T=a++,q=a++,P=a++,A=a++,O=a++,D=a++,L=a++,N=a++,I=a++,R=a++,M=a++,j=a++,z=a++,V=a++,B=a++,H=a++,U=a++,F=a++,G=a++,W=a++,X=a++,Y=a++,Z=a++,J=a++,Q=a++,K=a++,$=a++,tt=a++,et=a++,rt=a++,nt=a++,ot=a++,it=a++,st=a++,at=a++,ct=a++,ut=0,lt=ut++,pt=ut++,ht=ut++;function whitespace(t){return" "===t||"\n"===t||"\t"===t||"\f"===t||"\r"===t}function ifElseState(t,e,r){var n=t.toLowerCase();return t===n?function(t){t===n?this._state=e:(this._state=r,this._index--)}:function(o){o===n||o===t?this._state=e:(this._state=r,this._index--)}}function consumeSpecialNameChar(t,e){var r=t.toLowerCase();return function(n){n===r||n===t?this._state=e:(this._state=l,this._index--)}}function Tokenizer(t,e){this._state=c,this._buffer="",this._sectionStart=0,this._index=0,this._bufferOffset=0,this._baseState=c,this._special=lt,this._cbs=e,this._running=!0,this._ended=!1,this._xmlMode=!(!t||!t.xmlMode),this._decodeEntities=!(!t||!t.decodeEntities)}Tokenizer.prototype._stateText=function(t){"<"===t?(this._index>this._sectionStart&&this._cbs.ontext(this._getSection()),this._state=u,this._sectionStart=this._index):this._decodeEntities&&this._special===lt&&"&"===t&&(this._index>this._sectionStart&&this._cbs.ontext(this._getSection()),this._baseState=c,this._state=ot,this._sectionStart=this._index)},Tokenizer.prototype._stateBeforeTagName=function(t){"/"===t?this._state=h:"<"===t?(this._cbs.ontext(this._getSection()),this._sectionStart=this._index):">"===t||this._special!==lt||whitespace(t)?this._state=c:"!"===t?(this._state=C,this._sectionStart=this._index+1):"?"===t?(this._state=k,this._sectionStart=this._index+1):(this._state=this._xmlMode||"s"!==t&&"S"!==t?l:j,this._sectionStart=this._index)},Tokenizer.prototype._stateInTagName=function(t){("/"===t||">"===t||whitespace(t))&&(this._emitToken("onopentagname"),this._state=m,this._index--)},Tokenizer.prototype._stateBeforeCloseingTagName=function(t){whitespace(t)||(">"===t?this._state=c:this._special!==lt?"s"===t||"S"===t?this._state=z:(this._state=c,this._index--):(this._state=f,this._sectionStart=this._index))},Tokenizer.prototype._stateInCloseingTagName=function(t){(">"===t||whitespace(t))&&(this._emitToken("onclosetag"),this._state=d,this._index--)},Tokenizer.prototype._stateAfterCloseingTagName=function(t){">"===t&&(this._state=c,this._sectionStart=this._index+1)},Tokenizer.prototype._stateBeforeAttributeName=function(t){">"===t?(this._cbs.onopentagend(),this._state=c,this._sectionStart=this._index+1):"/"===t?this._state=p:whitespace(t)||(this._state=_,this._sectionStart=this._index)},Tokenizer.prototype._stateInSelfClosingTag=function(t){">"===t?(this._cbs.onselfclosingtag(),this._state=c,this._sectionStart=this._index+1):whitespace(t)||(this._state=m,this._index--)},Tokenizer.prototype._stateInAttributeName=function(t){("="===t||"/"===t||">"===t||whitespace(t))&&(this._cbs.onattribname(this._getSection()),this._sectionStart=-1,this._state=g,this._index--)},Tokenizer.prototype._stateAfterAttributeName=function(t){"="===t?this._state=b:"/"===t||">"===t?(this._cbs.onattribend(),this._state=m,this._index--):whitespace(t)||(this._cbs.onattribend(),this._state=_,this._sectionStart=this._index)},Tokenizer.prototype._stateBeforeAttributeValue=function(t){'"'===t?(this._state=y,this._sectionStart=this._index+1):"'"===t?(this._state=v,this._sectionStart=this._index+1):whitespace(t)||(this._state=x,this._sectionStart=this._index,this._index--)},Tokenizer.prototype._stateInAttributeValueDoubleQuotes=function(t){'"'===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=m):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=ot,this._sectionStart=this._index)},Tokenizer.prototype._stateInAttributeValueSingleQuotes=function(t){"'"===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=m):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=ot,this._sectionStart=this._index)},Tokenizer.prototype._stateInAttributeValueNoQuotes=function(t){whitespace(t)||">"===t?(this._emitToken("onattribdata"),this._cbs.onattribend(),this._state=m,this._index--):this._decodeEntities&&"&"===t&&(this._emitToken("onattribdata"),this._baseState=this._state,this._state=ot,this._sectionStart=this._index)},Tokenizer.prototype._stateBeforeDeclaration=function(t){this._state="["===t?P:"-"===t?E:w},Tokenizer.prototype._stateInDeclaration=function(t){">"===t&&(this._cbs.ondeclaration(this._getSection()),this._state=c,this._sectionStart=this._index+1)},Tokenizer.prototype._stateInProcessingInstruction=function(t){">"===t&&(this._cbs.onprocessinginstruction(this._getSection()),this._state=c,this._sectionStart=this._index+1)},Tokenizer.prototype._stateBeforeComment=function(t){"-"===t?(this._state=S,this._sectionStart=this._index+1):this._state=w},Tokenizer.prototype._stateInComment=function(t){"-"===t&&(this._state=T)},Tokenizer.prototype._stateAfterComment1=function(t){this._state="-"===t?q:S},Tokenizer.prototype._stateAfterComment2=function(t){">"===t?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=c,this._sectionStart=this._index+1):"-"!==t&&(this._state=S)},Tokenizer.prototype._stateBeforeCdata1=ifElseState("C",A,w),Tokenizer.prototype._stateBeforeCdata2=ifElseState("D",O,w),Tokenizer.prototype._stateBeforeCdata3=ifElseState("A",D,w),Tokenizer.prototype._stateBeforeCdata4=ifElseState("T",L,w),Tokenizer.prototype._stateBeforeCdata5=ifElseState("A",N,w),Tokenizer.prototype._stateBeforeCdata6=function(t){"["===t?(this._state=I,this._sectionStart=this._index+1):(this._state=w,this._index--)},Tokenizer.prototype._stateInCdata=function(t){"]"===t&&(this._state=R)},Tokenizer.prototype._stateAfterCdata1=function(t){this._state="]"===t?M:I},Tokenizer.prototype._stateAfterCdata2=function(t){">"===t?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=c,this._sectionStart=this._index+1):"]"!==t&&(this._state=I)},Tokenizer.prototype._stateBeforeSpecial=function(t){"c"===t||"C"===t?this._state=V:"t"===t||"T"===t?this._state=J:(this._state=l,this._index--)},Tokenizer.prototype._stateBeforeSpecialEnd=function(t){this._special!==pt||"c"!==t&&"C"!==t?this._special!==ht||"t"!==t&&"T"!==t?this._state=c:this._state=tt:this._state=G},Tokenizer.prototype._stateBeforeScript1=consumeSpecialNameChar("R",B),Tokenizer.prototype._stateBeforeScript2=consumeSpecialNameChar("I",H),Tokenizer.prototype._stateBeforeScript3=consumeSpecialNameChar("P",U),Tokenizer.prototype._stateBeforeScript4=consumeSpecialNameChar("T",F),Tokenizer.prototype._stateBeforeScript5=function(t){("/"===t||">"===t||whitespace(t))&&(this._special=pt),this._state=l,this._index--},Tokenizer.prototype._stateAfterScript1=ifElseState("R",W,c),Tokenizer.prototype._stateAfterScript2=ifElseState("I",X,c),Tokenizer.prototype._stateAfterScript3=ifElseState("P",Y,c),Tokenizer.prototype._stateAfterScript4=ifElseState("T",Z,c),Tokenizer.prototype._stateAfterScript5=function(t){">"===t||whitespace(t)?(this._special=lt,this._state=f,this._sectionStart=this._index-6,this._index--):this._state=c},Tokenizer.prototype._stateBeforeStyle1=consumeSpecialNameChar("Y",Q),Tokenizer.prototype._stateBeforeStyle2=consumeSpecialNameChar("L",K),Tokenizer.prototype._stateBeforeStyle3=consumeSpecialNameChar("E",$),Tokenizer.prototype._stateBeforeStyle4=function(t){("/"===t||">"===t||whitespace(t))&&(this._special=ht),this._state=l,this._index--},Tokenizer.prototype._stateAfterStyle1=ifElseState("Y",et,c),Tokenizer.prototype._stateAfterStyle2=ifElseState("L",rt,c),Tokenizer.prototype._stateAfterStyle3=ifElseState("E",nt,c),Tokenizer.prototype._stateAfterStyle4=function(t){">"===t||whitespace(t)?(this._special=lt,this._state=f,this._sectionStart=this._index-5,this._index--):this._state=c},Tokenizer.prototype._stateBeforeEntity=ifElseState("#",it,st),Tokenizer.prototype._stateBeforeNumericEntity=ifElseState("X",ct,at),Tokenizer.prototype._parseNamedEntityStrict=function(){if(this._sectionStart+1<this._index){var t=this._buffer.substring(this._sectionStart+1,this._index),e=this._xmlMode?s:o;e.hasOwnProperty(t)&&(this._emitPartial(e[t]),this._sectionStart=this._index+1)}},Tokenizer.prototype._parseLegacyEntity=function(){var t=this._sectionStart+1,e=this._index-t;for(e>6&&(e=6);e>=2;){var r=this._buffer.substr(t,e);if(i.hasOwnProperty(r))return this._emitPartial(i[r]),void(this._sectionStart+=e+1);e--}},Tokenizer.prototype._stateInNamedEntity=function(t){";"===t?(this._parseNamedEntityStrict(),this._sectionStart+1<this._index&&!this._xmlMode&&this._parseLegacyEntity(),this._state=this._baseState):(t<"a"||t>"z")&&(t<"A"||t>"Z")&&(t<"0"||t>"9")&&(this._xmlMode||this._sectionStart+1===this._index||(this._baseState!==c?"="!==t&&this._parseNamedEntityStrict():this._parseLegacyEntity()),this._state=this._baseState,this._index--)},Tokenizer.prototype._decodeNumericEntity=function(t,e){var r=this._sectionStart+t;if(r!==this._index){var o=this._buffer.substring(r,this._index),i=parseInt(o,e);this._emitPartial(n(i)),this._sectionStart=this._index}else this._sectionStart--;this._state=this._baseState},Tokenizer.prototype._stateInNumericEntity=function(t){";"===t?(this._decodeNumericEntity(2,10),this._sectionStart++):(t<"0"||t>"9")&&(this._xmlMode?this._state=this._baseState:this._decodeNumericEntity(2,10),this._index--)},Tokenizer.prototype._stateInHexEntity=function(t){";"===t?(this._decodeNumericEntity(3,16),this._sectionStart++):(t<"a"||t>"f")&&(t<"A"||t>"F")&&(t<"0"||t>"9")&&(this._xmlMode?this._state=this._baseState:this._decodeNumericEntity(3,16),this._index--)},Tokenizer.prototype._cleanup=function(){this._sectionStart<0?(this._buffer="",this._bufferOffset+=this._index,this._index=0):this._running&&(this._state===c?(this._sectionStart!==this._index&&this._cbs.ontext(this._buffer.substr(this._sectionStart)),this._buffer="",this._bufferOffset+=this._index,this._index=0):this._sectionStart===this._index?(this._buffer="",this._bufferOffset+=this._index,this._index=0):(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart,this._bufferOffset+=this._sectionStart),this._sectionStart=0)},Tokenizer.prototype.write=function(t){this._ended&&this._cbs.onerror(Error(".write() after done!")),this._buffer+=t,this._parse()},Tokenizer.prototype._parse=function(){for(;this._index<this._buffer.length&&this._running;){var t=this._buffer.charAt(this._index);this._state===c?this._stateText(t):this._state===u?this._stateBeforeTagName(t):this._state===l?this._stateInTagName(t):this._state===h?this._stateBeforeCloseingTagName(t):this._state===f?this._stateInCloseingTagName(t):this._state===d?this._stateAfterCloseingTagName(t):this._state===p?this._stateInSelfClosingTag(t):this._state===m?this._stateBeforeAttributeName(t):this._state===_?this._stateInAttributeName(t):this._state===g?this._stateAfterAttributeName(t):this._state===b?this._stateBeforeAttributeValue(t):this._state===y?this._stateInAttributeValueDoubleQuotes(t):this._state===v?this._stateInAttributeValueSingleQuotes(t):this._state===x?this._stateInAttributeValueNoQuotes(t):this._state===C?this._stateBeforeDeclaration(t):this._state===w?this._stateInDeclaration(t):this._state===k?this._stateInProcessingInstruction(t):this._state===E?this._stateBeforeComment(t):this._state===S?this._stateInComment(t):this._state===T?this._stateAfterComment1(t):this._state===q?this._stateAfterComment2(t):this._state===P?this._stateBeforeCdata1(t):this._state===A?this._stateBeforeCdata2(t):this._state===O?this._stateBeforeCdata3(t):this._state===D?this._stateBeforeCdata4(t):this._state===L?this._stateBeforeCdata5(t):this._state===N?this._stateBeforeCdata6(t):this._state===I?this._stateInCdata(t):this._state===R?this._stateAfterCdata1(t):this._state===M?this._stateAfterCdata2(t):this._state===j?this._stateBeforeSpecial(t):this._state===z?this._stateBeforeSpecialEnd(t):this._state===V?this._stateBeforeScript1(t):this._state===B?this._stateBeforeScript2(t):this._state===H?this._stateBeforeScript3(t):this._state===U?this._stateBeforeScript4(t):this._state===F?this._stateBeforeScript5(t):this._state===G?this._stateAfterScript1(t):this._state===W?this._stateAfterScript2(t):this._state===X?this._stateAfterScript3(t):this._state===Y?this._stateAfterScript4(t):this._state===Z?this._stateAfterScript5(t):this._state===J?this._stateBeforeStyle1(t):this._state===Q?this._stateBeforeStyle2(t):this._state===K?this._stateBeforeStyle3(t):this._state===$?this._stateBeforeStyle4(t):this._state===tt?this._stateAfterStyle1(t):this._state===et?this._stateAfterStyle2(t):this._state===rt?this._stateAfterStyle3(t):this._state===nt?this._stateAfterStyle4(t):this._state===ot?this._stateBeforeEntity(t):this._state===it?this._stateBeforeNumericEntity(t):this._state===st?this._stateInNamedEntity(t):this._state===at?this._stateInNumericEntity(t):this._state===ct?this._stateInHexEntity(t):this._cbs.onerror(Error("unknown _state"),this._state),this._index++}this._cleanup()},Tokenizer.prototype.pause=function(){this._running=!1},Tokenizer.prototype.resume=function(){this._running=!0,this._index<this._buffer.length&&this._parse(),this._ended&&this._finish()},Tokenizer.prototype.end=function(t){this._ended&&this._cbs.onerror(Error(".end() after done!")),t&&this.write(t),this._ended=!0,this._running&&this._finish()},Tokenizer.prototype._finish=function(){this._sectionStart<this._index&&this._handleTrailingData(),this._cbs.onend()},Tokenizer.prototype._handleTrailingData=function(){var t=this._buffer.substr(this._sectionStart);this._state===I||this._state===R||this._state===M?this._cbs.oncdata(t):this._state===S||this._state===T||this._state===q?this._cbs.oncomment(t):this._state!==st||this._xmlMode?this._state!==at||this._xmlMode?this._state!==ct||this._xmlMode?this._state!==l&&this._state!==m&&this._state!==b&&this._state!==g&&this._state!==_&&this._state!==v&&this._state!==y&&this._state!==x&&this._state!==f&&this._cbs.ontext(t):(this._decodeNumericEntity(3,16),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):(this._decodeNumericEntity(2,10),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData())):(this._parseLegacyEntity(),this._sectionStart<this._index&&(this._state=this._baseState,this._handleTrailingData()))},Tokenizer.prototype.reset=function(){Tokenizer.call(this,{xmlMode:this._xmlMode,decodeEntities:this._decodeEntities},this._cbs)},Tokenizer.prototype.getAbsoluteIndex=function(){return this._bufferOffset+this._index},Tokenizer.prototype._getSection=function(){return this._buffer.substring(this._sectionStart,this._index)},Tokenizer.prototype._emitToken=function(t){this._cbs[t](this._getSection()),this._sectionStart=-1},Tokenizer.prototype._emitPartial=function(t){this._baseState!==c?this._cbs.onattribdata(t):this._cbs.ontext(t)}},function(t,e,r){var n=r(45),o={input:!0,option:!0,optgroup:!0,select:!0,button:!0,datalist:!0,textarea:!0},i={tr:{tr:!0,th:!0,td:!0},th:{th:!0},td:{thead:!0,th:!0,td:!0},body:{head:!0,link:!0,script:!0},li:{li:!0},p:{p:!0},h1:{p:!0},h2:{p:!0},h3:{p:!0},h4:{p:!0},h5:{p:!0},h6:{p:!0},select:o,input:o,output:o,button:o,datalist:o,textarea:o,option:{option:!0},optgroup:{optgroup:!0}},s={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},a={__proto__:null,math:!0,svg:!0},c={__proto__:null,mi:!0,mo:!0,mn:!0,ms:!0,mtext:!0,"annotation-xml":!0,foreignObject:!0,desc:!0,title:!0},u=/\s|\//;function Parser(t,e){this._options=e||{},this._cbs=t||{},this._tagname="",this._attribname="",this._attribvalue="",this._attribs=null,this._stack=[],this._foreignContext=[],this.startIndex=0,this.endIndex=null,this._lowerCaseTagNames="lowerCaseTags"in this._options?!!this._options.lowerCaseTags:!this._options.xmlMode,this._lowerCaseAttributeNames="lowerCaseAttributeNames"in this._options?!!this._options.lowerCaseAttributeNames:!this._options.xmlMode,this._options.Tokenizer&&(n=this._options.Tokenizer),this._tokenizer=new n(this._options,this),this._cbs.onparserinit&&this._cbs.onparserinit(this)}r(39)(Parser,r(38).EventEmitter),Parser.prototype._updatePosition=function(t){null===this.endIndex?this._tokenizer._sectionStart<=t?this.startIndex=0:this.startIndex=this._tokenizer._sectionStart-t:this.startIndex=this.endIndex+1,this.endIndex=this._tokenizer.getAbsoluteIndex()},Parser.prototype.ontext=function(t){this._updatePosition(1),this.endIndex--,this._cbs.ontext&&this._cbs.ontext(t)},Parser.prototype.onopentagname=function(t){if(this._lowerCaseTagNames&&(t=t.toLowerCase()),this._tagname=t,!this._options.xmlMode&&t in i)for(var e;(e=this._stack[this._stack.length-1])in i[t];this.onclosetag(e));!this._options.xmlMode&&t in s||(this._stack.push(t),t in a?this._foreignContext.push(!0):t in c&&this._foreignContext.push(!1)),this._cbs.onopentagname&&this._cbs.onopentagname(t),this._cbs.onopentag&&(this._attribs={})},Parser.prototype.onopentagend=function(){this._updatePosition(1),this._attribs&&(this._cbs.onopentag&&this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),!this._options.xmlMode&&this._cbs.onclosetag&&this._tagname in s&&this._cbs.onclosetag(this._tagname),this._tagname=""},Parser.prototype.onclosetag=function(t){if(this._updatePosition(1),this._lowerCaseTagNames&&(t=t.toLowerCase()),(t in a||t in c)&&this._foreignContext.pop(),!this._stack.length||t in s&&!this._options.xmlMode)this._options.xmlMode||"br"!==t&&"p"!==t||(this.onopentagname(t),this._closeCurrentTag());else{var e=this._stack.lastIndexOf(t);if(-1!==e)if(this._cbs.onclosetag)for(e=this._stack.length-e;e--;)this._cbs.onclosetag(this._stack.pop());else this._stack.length=e;else"p"!==t||this._options.xmlMode||(this.onopentagname(t),this._closeCurrentTag())}},Parser.prototype.onselfclosingtag=function(){this._options.xmlMode||this._options.recognizeSelfClosing||this._foreignContext[this._foreignContext.length-1]?this._closeCurrentTag():this.onopentagend()},Parser.prototype._closeCurrentTag=function(){var t=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===t&&(this._cbs.onclosetag&&this._cbs.onclosetag(t),this._stack.pop())},Parser.prototype.onattribname=function(t){this._lowerCaseAttributeNames&&(t=t.toLowerCase()),this._attribname=t},Parser.prototype.onattribdata=function(t){this._attribvalue+=t},Parser.prototype.onattribend=function(){this._cbs.onattribute&&this._cbs.onattribute(this._attribname,this._attribvalue),this._attribs&&!Object.prototype.hasOwnProperty.call(this._attribs,this._attribname)&&(this._attribs[this._attribname]=this._attribvalue),this._attribname="",this._attribvalue=""},Parser.prototype._getInstructionName=function(t){var e=t.search(u),r=e<0?t:t.substr(0,e);return this._lowerCaseTagNames&&(r=r.toLowerCase()),r},Parser.prototype.ondeclaration=function(t){if(this._cbs.onprocessinginstruction){var e=this._getInstructionName(t);this._cbs.onprocessinginstruction("!"+e,"!"+t)}},Parser.prototype.onprocessinginstruction=function(t){if(this._cbs.onprocessinginstruction){var e=this._getInstructionName(t);this._cbs.onprocessinginstruction("?"+e,"?"+t)}},Parser.prototype.oncomment=function(t){this._updatePosition(4),this._cbs.oncomment&&this._cbs.oncomment(t),this._cbs.oncommentend&&this._cbs.oncommentend()},Parser.prototype.oncdata=function(t){this._updatePosition(1),this._options.xmlMode||this._options.recognizeCDATA?(this._cbs.oncdatastart&&this._cbs.oncdatastart(),this._cbs.ontext&&this._cbs.ontext(t),this._cbs.oncdataend&&this._cbs.oncdataend()):this.oncomment("[CDATA["+t+"]]")},Parser.prototype.onerror=function(t){this._cbs.onerror&&this._cbs.onerror(t)},Parser.prototype.onend=function(){if(this._cbs.onclosetag)for(var t=this._stack.length;t>0;this._cbs.onclosetag(this._stack[--t]));this._cbs.onend&&this._cbs.onend()},Parser.prototype.reset=function(){this._cbs.onreset&&this._cbs.onreset(),this._tokenizer.reset(),this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._cbs.onparserinit&&this._cbs.onparserinit(this)},Parser.prototype.parseComplete=function(t){this.reset(),this.end(t)},Parser.prototype.write=function(t){this._tokenizer.write(t)},Parser.prototype.end=function(t){this._tokenizer.end(t)},Parser.prototype.pause=function(){this._tokenizer.pause()},Parser.prototype.resume=function(){this._tokenizer.resume()},Parser.prototype.parseChunk=Parser.prototype.write,Parser.prototype.done=Parser.prototype.end,t.exports=Parser},function(t,e,r){var n=r(0),o=r(10),i=function(){function XMap(t,e){this.xf=e,this.f=t}return XMap.prototype["@@transducer/init"]=o.init,XMap.prototype["@@transducer/result"]=o.result,XMap.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},XMap}(),s=n(function _xmap(t,e){return new i(t,e)});t.exports=s},function(t,e){t.exports=function _map(t,e){for(var r=0,n=e.length,o=Array(n);r<n;)o[r]=t(e[r]),r+=1;return o}},function(t,e,r){var n=r(0),o=r(11),i=r(48),s=r(9),a=r(47),c=r(18),u=r(19),l=n(o(["fantasy-land/map","map"],a,function map(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return c(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return s(function(r,n){return r[n]=t(e[n]),r},{},u(e));default:return i(t,e)}}));t.exports=l},function(t,e,r){var n=r(8),o=r(5);t.exports=function _curryN(t,e,r){return function(){for(var i=[],s=0,a=t,c=0;c<e.length||s<arguments.length;){var u;c<e.length&&(!o(e[c])||s>=arguments.length)?u=e[c]:(u=arguments[s],s+=1),i[c]=u,o(u)||(a-=1),c+=1}return a<=0?r.apply(this,i):n(a,_curryN(t,i,r))}}},function(t,e){t.exports=function _concat(t,e){var r;t=t||[],e=e||[];var n=t.length,o=e.length,i=[];for(r=0;r<n;)i[i.length]=t[r],r+=1;for(r=0;r<o;)i[i.length]=e[r],r+=1;return i}},function(t,e,r){var n=r(51),o=r(2),i=r(18),s=o(function addIndex(t){return i(t.length,function(){var e=0,r=arguments[0],o=arguments[arguments.length-1],i=Array.prototype.slice.call(arguments,0);return i[0]=function(){var t=r.apply(this,n(arguments,[e,o]));return e+=1,t},t.apply(this,i)})});t.exports=s},function(t,e,r){var n=r(7),o=Object.prototype.toString,i=function(){return"[object Arguments]"===o.call(arguments)?function _isArguments(t){return"[object Arguments]"===o.call(t)}:function _isArguments(t){return n("callee",t)}}();t.exports=i},function(t,e,r){var n=r(0),o=r(10),i=function(){function XFilter(t,e){this.xf=e,this.f=t}return XFilter.prototype["@@transducer/init"]=o.init,XFilter.prototype["@@transducer/result"]=o.result,XFilter.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},XFilter}(),s=n(function _xfilter(t,e){return new i(t,e)});t.exports=s},function(t,e,r){var n=r(8),o=r(0)(function bind(t,e){return n(t.length,function(){return t.apply(e,arguments)})});t.exports=o},function(t,e){var r=function(){function XWrap(t){this.f=t}return XWrap.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},XWrap.prototype["@@transducer/result"]=function(t){return t},XWrap.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},XWrap}();t.exports=function _xwrap(t){return new r(t)}},function(t,e){t.exports=function _isString(t){return"[object String]"===Object.prototype.toString.call(t)}},function(t,e,r){var n=r(2),o=r(20),i=r(57),s=n(function isArrayLike(t){return!!o(t)||!!t&&("object"==typeof t&&(!i(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))});t.exports=s},function(t,e){t.exports=function _isObject(t){return"[object Object]"===Object.prototype.toString.call(t)}},function(t,e){t.exports=function _filter(t,e){for(var r=0,n=e.length,o=[];r<n;)t(e[r])&&(o[o.length]=e[r]),r+=1;return o}},function(t,e,r){var n=r(0),o=r(11),i=r(60),s=r(59),a=r(9),c=r(54),u=r(19),l=n(o(["filter"],c,function(t,e){return s(e)?a(function(r,n){return t(e[n])&&(r[n]=e[n]),r},{},u(e)):i(t,e)}));t.exports=l},function(t,e){t.exports=function _complement(t){return function(){return!t.apply(this,arguments)}}},function(t,e,r){var n=r(62),o=r(0),i=r(61),s=o(function reject(t,e){return i(n(t),e)});t.exports=s},function(t,e){t.exports=function _reduced(t){return t&&t["@@transducer/reduced"]?t:{"@@transducer/value":t,"@@transducer/reduced":!0}}},function(t,e,r){var n=r(0),o=r(64),i=r(10),s=function(){function XFind(t,e){this.xf=e,this.f=t,this.found=!1}return XFind.prototype["@@transducer/init"]=i.init,XFind.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},XFind.prototype["@@transducer/step"]=function(t,e){return this.f(e)&&(this.found=!0,t=o(this.xf["@@transducer/step"](t,e))),t},XFind}(),a=n(function _xfind(t,e){return new s(t,e)});t.exports=a},function(t,e){t.exports=function _isTransformer(t){return null!=t&&"function"==typeof t["@@transducer/step"]}},function(t,e,r){var n=r(0)(r(11)(["find"],r(65),function find(t,e){for(var r=0,n=e.length;r<n;){if(t(e[r]))return e[r];r+=1}}));t.exports=n},function(t,e,r){"use strict";var n=r(67),o=r(63),i=r(52),s=r(49),a=r(46),c=r(37),u=r(16),l=r(13),p=r(14);t.exports=function Html2ReactParser(t){function parseWithInstructions(e,r,u){var l=function parseHtmlToTree(e){(t=t||{}).decodeEntities=!0;var r=new c;return new a(r,t).parseComplete(e),r.dom.filter(function(t){return"directive"!==t.type})}(e).map(function(t,e){return function traverseDom(t,e,r,a){if(e(t)){var c=n(function(e){return e.shouldProcessNode(t)},r);if(null!=c){var u=o(function(t){return null==t||!1===t},i(s)(function(t,n){return traverseDom(t,e,r,n)},t.children||[]));return c.replaceChildren?p.createElement(t,a,t.data,[c.processNode(t,u,a)]):c.processNode(t,u,a)}return!1}return!1}(t,r,u,e)});return l.length<=1?l[0]:l}return{parse:function parse(t){var e=new u;return parseWithInstructions(t,l.alwaysValid,e.defaultProcessingInstructions)},parseWithInstructions:parseWithInstructions}}},function(t,e,r){"use strict";var n=r(68),o=r(16),i=r(13),s=r(15);t.exports={Parser:n,ProcessingInstructions:o,IsValidNodeDefinitions:i,ProcessNodeDefinitions:s}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){"use strict";var n=r(28),o=r(27),i=r(70);t.exports=function(){function shim(t,e,r,n,s,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function getShim(){return shim}shim.isRequired=shim;var t={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};return t.checkPropTypes=n,t.PropTypes=t,t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(21));var i={Main:"\n      "+o.default.Main+"\n      a {\n         color: #848c94;\n         &:hover { \n            color: #c0c4c8;\n            text-decoration: none;\n         } \n         &:focus { \n            color: #c0c4c8; \n         }\n      }     \n   ",Header:"\n      background: #303030;\n      border-bottom: 1px solid #111;\n      box-shadow: 0 0 5px 0 rgba(0,0,0,.2);\n      z-index: 999;\n   ",Footer:"\n      background: #303030;\n      border-top: 1px solid #111;        \n      z-index: 997;\n   ",Nav:"\n        background: #222;\n        border-right: 1px solid #111;\n        z-index: 998;\n    ",Section:"\n        color: #fff;\n        background: #222;\n    ",Panel:{Container:"",ChildContainer:"",Gap:{small:".5rem",large:"1rem"},Margin:{small:"1em",large:"1.5rem"}}},s=n({},o.default,{Alert:"",DataGrid:{Container:"\n         .react-grid-Main {\n            outline: none;\n         }\n         .react-grid-Grid {\n            border-color: black;\n            * {\n               border-color: black !important;\n            }\n         }\n      ",HeaderCell:"\n         background: #444;\n      ",Cell:"\n         background: #303030;\n      ",Row:"\n         &.row-selected .react-grid-Cell {\n            background: #1a1a1a;\n         }\n         &:hover {\n            .react-grid-Cell { \n               background: #1a1a1a; \n            }\n         }\n      "},Label:{Container:"",IconContainer:"",IconComponent:""},Markdown:"",MarkdownTOC:{Selected:"\n         font-weight: 600;\n         border-bottom: 1px dashed #ddd;\n      ",Container:"\n         .toc-h1, \n         .toc-h2 {\n            font-size: 1.1rem;\n         }\n         .toc-h3, \n         .toc-h4,\n         .toc-h5 {\n            font-size: .9rem;\n         } \n      "}},{Button:"\n      margin-left: 3px;\n   ",Checkbox:{style:"custom",GroupContainer:"",Container:{Default:"",Checked:""},Label:"",Input:""},Input:"",InputValidationError:"\n        border-color: red;\n    ",Radio:{style:"custom",GroupContainer:"",Container:{Default:"",Checked:""},Label:"",Input:""},RadioToggle:{GroupContainer:"",Label:{Default:"",Checked:""},Input:""},TextArea:""},i,{NavMenu:{SelectedRoute:"\n         > a > div > div {\n            padding-left: .5rem;\n            border-left: 2px solid tomato;\n            font-weight: 600;\n         }\n      ",RouteContainer:"\n         border-bottom: 1px solid #444;\n         color: #868e96; \n         &:hover {\n            background: #1a1a1a; \n         }\n      ",GroupContainer:"\n         border-bottom: 1px solid #444;\n         color: #848c94;\n         &:hover { \n            color: #c0c4c8; \n            background: #1a1a1a;\n         }\n      "}},{Card:{Container:"background: #303030;",ImageContainer:"",HeaderContainer:"background: #444;",BodyContainer:"",FooterContainer:"background: #444;"},Cell:{Container:"background: #303030;",HeaderContainer:"background: #444;",BodyContainer:""},Collapsible:{Container:"",HeaderContainer:""},Field:{Container:"",LabelContainer:"\n         font-weight: 400;\n      ",InputContainer:"\n         input, select, textarea {\n            font-weight: 500;\n            ::-webkit-input-placeholder {\n               font-weight: 400;\n            }\n         },",ValidationMessageContainer:"\n            color: red;\n        ",PlainTextContainer:"",PlainTextComponent:"\n         color: #fff; \n         font-weight: 400;\n      "},Menu:{Container:"",GroupContainer:"\n         background: #303030;\n         border-color: #444;\n      ",ItemContainer:"\n         &:hover > button {\n            background-color: #1a1a1a;\n         }      \n         &.separator {\n            border-bottom-color: #444;\n         }        \n         &.submenu::after {\n            border-left-color: #444;\n         }          \n      "},Modal:{Container:"\n         .modal-content { \n            background: transparent; \n         }\n      ",HeaderContainer:"\n         color: #fff;\n         background: #303030; \n         border-bottom-color: #444;\n      ",BodyContainer:"\n      color: #fff;\n      background: #303030;       \n      ",FooterContainer:"\n      color: #fff;\n      background: #303030; \n      border-top-color: #444;      \n      "},Tab:{Container:"\n         ul {\n            border-bottom-color: #444;\n         }\n         a.nav-link.active {\n            color: #fff;\n            background: #222;\n            border-color: #444;\n         }\n      ",TabItemContainer:"",TabItem:"\n         color: #848c94;\n         &:hover { \n            color: #c0c4c8;\n         }       \n      "}},{name:"dark"});e.default=s},function(t,e){t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),i=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(73)),s=function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(4));var a=function(){function VMContextStore(t){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,VMContextStore),this.host=t,this.vmId=null,this.vm=null,this.onceHandlers=[]}return o(VMContextStore,[{key:"connect",value:function connect(t,e,r){var o=this;if(!(t=this.host.vmContext?this.host.vmContext.vmId+"."+t:t))throw new Error("'vmId' is required by connect()");return this.removeOrphan(t),this.vm=i.default.react.connect(t,this.host,n({setState:function setState(t){o.setState(t),o.notifyStateChange(t,r)}},e)),this.vmId=t,this.vm}},{key:"destroy",value:function destroy(){this.vm.$destroy(),this.onceHandlers=[],this.vm=null}},{key:"setState",value:function setState(t){this.host.setState(t)}},{key:"notifyStateChange",value:function notifyStateChange(t,e){if(this.onceHandlers.length>0){var r=this.onceHandlers.filter(function(e){return!e.propId||t.hasOwnProperty(e.propId)&&t[e.propId]!==e.value});this.onceHandlers=this.onceHandlers.filter(function(t){return!r.includes(t)}),r.forEach(function(e){return e.handler(t[e.propId])})}"function"==typeof e&&e(t)}},{key:"removeOrphan",value:function removeOrphan(t){i.default.react.getViewModels().filter(function(e){return e.$vmId===t}).forEach(function(t){return t.$destroy()})}},{key:"context",get:function get(){var t=this;return{vmId:this.vmId,vm:this.vm,getState:function getState(e){return e?t.state.hasOwnProperty(e)?t.state[e]:void 0:t.state},setState:function setState(e){return t.setState(e)},dispatchState:function dispatchState(e){return t.vm.$dispatch(e)},getPropAttributes:function getPropAttributes(e){return s.toCamelCase(t.state[e+"__attr"]||{})},getPropValidations:function getPropValidations(e){return(t.state[e+"__validation"]||[]).map(function(t){return s.toCamelCase(t)})},once:function once(e,r){return new Promise(function(n){return t.onceHandlers.push({propId:e,handler:function handler(t){return n(t)},value:r})})}}}},{key:"state",get:function get(){return this.host.state}}]),VMContextStore}();e.default=a},,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}();e.default=function createWebComponent(t,e,r){if(!window.hasOwnProperty("customElements"))return{prototype:{}};var s=function(e){function CustomElement(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,CustomElement);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(CustomElement.__proto__||Object.getPrototypeOf(CustomElement)).call(this));return t.onAttributeChange=function(e){var r=e.reduce(function(e,r){return n({},e,function _defineProperty(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}({},r.attributeName,t.getAttribute(r.attributeName)))},{}),o=t.closest("d-vm-context");o&&!o.context.getState()||t.renderComponent(r)},t.onFormContextStateChange=function(e){var r=e.detail.state.hasOwnProperty("plainText")?{plainText:e.detail.state.plainText}:null;t.component&&t.renderComponent(r)},t.onVMContextStateChange=function(e){return t.renderComponent()},t.onVMContextLocalStateChange=function(e){return t.component&&t.renderComponent()},t.mountRoot=r?t.attachShadow({mode:"open"}):t,t.observer=new MutationObserver(function(e){return t.onAttributeChange(e)}),t.observer.observe(t,{attributes:!0}),t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(CustomElement,e),o(CustomElement,[{key:"connectedCallback",value:function connectedCallback(){var t=this;if("function"==typeof this._connectedCallback&&this._connectedCallback(),this.vmContextElem=this.closest("d-vm-context"),!this.vmContextElem){var e=document.getElementsByTagName("d-modal");e.length>0&&(this.vmContextElem=e[0].closest("d-vm-context"))}this.vmContextElem&&(this.vmContext=this.vmContextElem.context,this.vmContextElem.addEventListener("onStateChange",this.onVMContextStateChange),this.vmContextElem.addEventListener("onLocalStateChange",this.onVMContextLocalStateChange)),this.formElem=this.closest("d-form"),this.formElem&&(this.vmContext=this.formElem.context.vmContext,this.formContext=this.formElem.context.formContext,this.formElem.addEventListener("onStateChange",this.onFormContextStateChange)),this.vmContextElem&&!this.vmContextElem.state||setTimeout(function(){return t.renderComponent()})}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.unmountComponent(),this.observer.disconnect(),this.vmContextElem&&(this.vmContextElem.removeEventListener("onStateChange",this.onVMContextStateChange),this.vmContextElem.removeEventListener("onLocalStateChange",this.onVMContextLocalStateChange)),this.formElem&&this.formElem.removeEventListener("onStateChange",this.onFormContextStateChange)}},{key:"getChildrenProp",value:function getChildrenProp(t){this.childrenHtml=this.childrenHtml||this.innerHTML;var e=t.parseHtmlToReact(this.childrenHtml);if(Array.isArray(e)&&(e=e.filter(function(t){return"string"!=typeof t||!!t.trim()})),this.childrenHtml)return{children:e}}},{key:"getTemplateProp",value:function getTemplateProp(){if(this.loadElementTemplate(),this.template)return{template:this.template}}},{key:"loadElementTemplate",value:function loadElementTemplate(){if("D-ELEMENT"===this.nodeName&&!this.template&&this.children.length>0){var t=this.cloneNode(!0);for(this.template=document.createElement("template");t.children.length;)this.template.content.appendChild(t.children[0])}}},{key:"mountComponent",value:function mountComponent(){var e=new i.default(this);this.props=n({},e.getProps(this.attributes,t.propTypes),e.getEvents(this.attributes,t.propTypes),{vmContext:this.vmContext,formContext:this.formContext});var r=e.getContainerParent();r&&"mounted"!==r.mountState||(Object.assign(this.props,this.getTemplateProp()||this.getChildrenProp(e)),this.mountState="mounting",this.component=ReactDOM.render(React.createElement(t,this.props),this.mountRoot),this.mountState="mounted",this.dispatchEvent(new CustomEvent("mounted")))}},{key:"unmountComponent",value:function unmountComponent(){this.component&&(ReactDOM.unmountComponentAtNode(this.mountRoot),this.component=null),this.mountState=null}},{key:"renderComponent",value:function renderComponent(t){if(this.component){if(this.vmContext&&null==t)return void("function"==typeof this.component.shouldComponentUpdate?this.component.shouldComponentUpdate({})&&this.component.forceUpdate():this.component.forceUpdate());if(t&&t.hasOwnProperty("value")&&"function"==typeof this.component.setControlledValue)return void this.component.setControlledValue(t.value);!1!==this.unmountOnRerender&&this.unmountComponent()}this.mountComponent()}}]),CustomElement}(HTMLElement);window.customElements.get(e)||window.customElements.define(e,s);return s};var i=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(26));r(25)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}();e.default=function createWebComponent(t,e){if(!window.hasOwnProperty("customElements"))return{prototype:{}};var r=function(e){function CustomElement(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,CustomElement);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(CustomElement.__proto__||Object.getPrototypeOf(CustomElement)).call(this));return t.onStateChange=function(e){var r=t.helper.parseFunctionString(t.getAttribute("onstatechange"));"function"==typeof r&&r(e),t.dispatchVMEvent("onStateChange",{detail:e})},t.onVMContextStateChange=function(e){return t.vmId&&!t.vm&&t.connect(t.vmId,t.getAttribute("options"))},t.store=new i.default(t),t.helper=new s.default(t),t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(CustomElement,e),o(CustomElement,[{key:"context",get:function get(){return n({_type:"custom"},this.store.context)}}],[{key:"observedAttributes",get:function get(){return["vm","options"]}}]),o(CustomElement,[{key:"dispatchVMEvent",value:function dispatchVMEvent(t,e){this.dispatchEvent(new CustomEvent(t,e)),document.dispatchEvent(new CustomEvent(this.vmId+"_"+t,e))}},{key:"attributeChangedCallback",value:function attributeChangedCallback(){var t=this.getAttribute("vm");this.init&&t&&(this.vmId=t,this.disconnect(),this.connect(this.vmId,this.getAttribute("options")))}},{key:"connectedCallback",value:function connectedCallback(){this.vmContextElem=this.parentElement&&this.parentElement.closest("d-vm-context"),this.vmContextElem&&(this.vmContext=this.vmContextElem.context,this.vmContextElem.addEventListener("onStateChange",this.onVMContextStateChange));var t=this.helper.getContainerParent();t&&"mounting"!==t.mountState||(this.vmId=this.getAttribute("vm"),!this.vmId||this.vmContextElem&&!this.vmContextElem.state||this.connect(this.vmId,this.getAttribute("options")),this.init=!0)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.disconnect(),this.vmContextElem&&this.vmContextElem.removeEventListener("onStateChange",this.onVMContextStateChange)}},{key:"connect",value:function connect(e,r){var o=this,i=/{.*}/.exec(r)?JSON.parse(r):{};i.exceptionHandler||(i.exceptionHandler=function(t){return o.dispatchEvent(new CustomEvent("onException",{detail:t}))}),this.vm=this.store.connect(e,i,this.onStateChange),this.props=n({},this.helper.getProps(this.attributes,t.propTypes),this.helper.getEvents(this.attributes,t.propTypes))}},{key:"disconnect",value:function disconnect(){this.vm&&(this.store.destroy(),this.vm=null)}},{key:"setState",value:function setState(t){this.state=n({},this.state,t),this.dispatchEvent(new CustomEvent("onLocalStateChange",{detail:t}))}}]),CustomElement}(HTMLElement);window.customElements.get(e)||window.customElements.define(e,r)};var i=_interopRequireDefault(r(74)),s=_interopRequireDefault(r(26));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}r(25)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VMContext=e.Element=e.ContextTypes=void 0;var n=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r(24)),o=r(23);e.ContextTypes=o.ContextTypes,e.Element=n.default,e.VMContext=o.VMContext},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createWebComponent=e.ContextTypes=e.VMContext=e.Element=e.dotnetify=void 0;var n=r(193),o=_interopRequireDefault(r(192)),i=_interopRequireDefault(r(76));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(0,i.default)(n.Element,"d-element"),(0,o.default)(n.VMContext,"d-vm-context"),e.default=n.VMContext,e.dotnetify=n.dotnetify,e.Element=n.Element,e.VMContext=n.VMContext,e.ContextTypes=n.ContextTypes,e.createWebComponent=i.default}])});

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "dotnetify":
/*!****************************!*\
  !*** external "dotnetify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dotnetify__;

/***/ }),

/***/ "dotnetify-elements":
/*!************************************!*\
  !*** external "dotNetifyElements" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dotnetify_elements__;

/***/ }),

/***/ "styled-components":
/*!*************************!*\
  !*** external "styled" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map