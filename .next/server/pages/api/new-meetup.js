module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  MongoClient\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nasync function handler(req, res) {\n  if (req.method == 'POST') {\n    const data = req.body;\n    const {\n      title,\n      image,\n      address,\n      description\n    } = data;\n    const client = await MongoClient.connect('mongodb+srv://alvaromashiro:C7aR2HIEIPPCDkvf@cluster0.bwryvdh.mongodb.net/meetups?retryWrites=true&w=majority');\n    const db = client.db();\n    const meetupCollection = db.collection('meetups');\n    const result = await meetupCollection.insertOne(data);\n    console.log(result);\n    client.close();\n    res.status(201).json({\n      message: 'meetup created!'\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU07QUFBRUE7QUFBRixJQUFrQkMsbUJBQU8sQ0FBQyx3QkFBRCxDQUEvQjs7QUFFQSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLElBQWMsTUFBbEIsRUFBMEI7QUFDeEIsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCO0FBQ0EsVUFBTTtBQUFFQyxXQUFGO0FBQVNDLFdBQVQ7QUFBZ0JDLGFBQWhCO0FBQXlCQztBQUF6QixRQUF5Q0wsSUFBL0M7QUFFQSxVQUFNTSxNQUFNLEdBQUcsTUFBTVosV0FBVyxDQUFDYSxPQUFaLENBQ25CLCtHQURtQixDQUFyQjtBQUlBLFVBQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFQLEVBQVg7QUFFQSxVQUFNQyxnQkFBZ0IsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUF6QjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxNQUFNRixnQkFBZ0IsQ0FBQ0csU0FBakIsQ0FBMkJaLElBQTNCLENBQXJCO0FBRUFhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBRUFMLFVBQU0sQ0FBQ1MsS0FBUDtBQUVBakIsT0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxhQUFPLEVBQUU7QUFEVSxLQUFyQjtBQUdEO0FBQ0Y7O0FBRWN0QixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNb25nb0NsaWVudCB9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09ICdQT1NUJykge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSA9IGRhdGE7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgJ21vbmdvZGIrc3J2Oi8vYWx2YXJvbWFzaGlybzpDN2FSMkhJRUlQUENEa3ZmQGNsdXN0ZXIwLmJ3cnl2ZGgubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICAgKTtcblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICBtZXNzYWdlOiAnbWVldHVwIGNyZWF0ZWQhJ1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });