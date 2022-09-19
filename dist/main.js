/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const obj = __webpack_require__(/*! ../bars.json */ \"./bars.json\");\n\nvar map;\n\nfunction initMap() {\n  map = new google.maps.Map(document.getElementById('map'), {\n    center: {\n      lat: 40.73111943279368,\n      lng: -73.98234710313223\n    },\n    zoom: 13.2 // mapTypeId: 'satellite',\n    // heading: -90\n\n  });\n\n  for (let bar in obj) {\n    let marker = new google.maps.Marker({\n      position: new google.maps.LatLng(obj[bar].coords[0], obj[bar].coords[1]),\n      map: map\n    });\n    marker.setMap(map);\n    console.log(obj[bar]);\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  initMap();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGlDQUFELENBQW5COztBQUVBLElBQUlDLEdBQUo7O0FBRUEsU0FBU0MsT0FBVCxHQUFtQjtFQUNqQkQsR0FBRyxHQUFHLElBQUlFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxHQUFoQixDQUFvQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EO0lBQ3hEQyxNQUFNLEVBQUU7TUFBQ0MsR0FBRyxFQUFFLGlCQUFOO01BQXlCQyxHQUFHLEVBQUUsQ0FBQztJQUEvQixDQURnRDtJQUV4REMsSUFBSSxFQUFFLElBRmtELENBR3hEO0lBQ0E7O0VBSndELENBQXBELENBQU47O0VBTUEsS0FBSyxJQUFJQyxHQUFULElBQWdCYixHQUFoQixFQUFxQjtJQUNuQixJQUFJYyxNQUFNLEdBQUcsSUFBSVYsTUFBTSxDQUFDQyxJQUFQLENBQVlVLE1BQWhCLENBQXVCO01BQ2hDQyxRQUFRLEVBQUUsSUFBSVosTUFBTSxDQUFDQyxJQUFQLENBQVlZLE1BQWhCLENBQXVCakIsR0FBRyxDQUFDYSxHQUFELENBQUgsQ0FBU0ssTUFBVCxDQUFnQixDQUFoQixDQUF2QixFQUEyQ2xCLEdBQUcsQ0FBQ2EsR0FBRCxDQUFILENBQVNLLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBM0MsQ0FEc0I7TUFFaENoQixHQUFHLEVBQUVBO0lBRjJCLENBQXZCLENBQWI7SUFJRVksTUFBTSxDQUFDSyxNQUFQLENBQWNqQixHQUFkO0lBQ0ZrQixPQUFPLENBQUNDLEdBQVIsQ0FBWXJCLEdBQUcsQ0FBQ2EsR0FBRCxDQUFmO0VBQ0Q7QUFDRjs7QUFFRE4sUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUNoRG5CLE9BQU87QUFDVixDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmliZXovLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvYmogPSByZXF1aXJlKFwiLi4vYmFycy5qc29uXCIpXG5cbnZhciBtYXA7XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgY2VudGVyOiB7bGF0OiA0MC43MzExMTk0MzI3OTM2OCwgbG5nOiAtNzMuOTgyMzQ3MTAzMTMyMjN9LFxuICAgIHpvb206IDEzLjIsXG4gICAgLy8gbWFwVHlwZUlkOiAnc2F0ZWxsaXRlJyxcbiAgICAvLyBoZWFkaW5nOiAtOTBcbiAgfSk7XG4gIGZvciAobGV0IGJhciBpbiBvYmopIHtcbiAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG9ialtiYXJdLmNvb3Jkc1swXSwgb2JqW2Jhcl0uY29vcmRzWzFdKSxcbiAgICAgICAgbWFwOiBtYXBcbiAgICAgIH0pO1xuICAgICAgbWFya2VyLnNldE1hcChtYXApO1xuICAgIGNvbnNvbGUubG9nKG9ialtiYXJdKVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgaW5pdE1hcCgpO1xufSkiXSwibmFtZXMiOlsib2JqIiwicmVxdWlyZSIsIm1hcCIsImluaXRNYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJiYXIiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsIkxhdExuZyIsImNvb3JkcyIsInNldE1hcCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWJlei8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./bars.json":
/*!*******************!*\
  !*** ./bars.json ***!
  \*******************/
/***/ (function() {

throw new Error("Module parse failed: Unexpected token \":\" (0x3A) in JSON at position 2626 while parsing near \"...: \\n        \\\"address\\\": \\n        \\\"coords\\\":...\"\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\nJSONParseError: Unexpected token \":\" (0x3A) in JSON at position 2626 while parsing near \"...: \\n        \\\"address\\\": \\n        \\\"coords\\\":...\"\n    at JsonParser.parse (/Users/ianverger/Desktop/App_Academy/vibez/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Users/ianverger/Desktop/App_Academy/vibez/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Users/ianverger/Desktop/App_Academy/vibez/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Users/ianverger/Desktop/App_Academy/vibez/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Users/ianverger/Desktop/App_Academy/vibez/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Users/ianverger/Desktop/App_Academy/vibez/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at /Users/ianverger/Desktop/App_Academy/vibez/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Users/ianverger/Desktop/App_Academy/vibez/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Users/ianverger/Desktop/App_Academy/vibez/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Users/ianverger/Desktop/App_Academy/vibez/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Users/ianverger/Desktop/App_Academy/vibez/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Users/ianverger/Desktop/App_Academy/vibez/node_modules/graceful-fs/graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;