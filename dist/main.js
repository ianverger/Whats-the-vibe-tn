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
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"0":{"name":"Josie\'s","address":"520 E 6th St, New York, NY 10009","coords":[40.725017278238006,-73.98297197390893],"burough":"Manhattan","hours":"3pm - 4am","description":"Neighborhood haunt with a pool table and cheap drinks","vibe":["dive"]},"1":{"name":"Spring Lounge","address":"48 Spring St, New York, NY 10012","coords":[40.72203407878144,-73.9964347310665],"burough":"Manhattan","hours":"8am - 4am","description":"Neighborhood dive bar since the 1920s draws patrons from 8AM on for basic drinks & weekend bagels.","vibe":["dive"]},"2":{"name":"Lucy\'s","address":"135 Avenue A, New York, NY 10009","coords":[40.72715609936718,-73.98297580037664],"burough":"Manhattan","hours":"5pm - 4am","description":"Easygoing hangout, famed for its eponymous owner, features pool, video games & a laid-back vibe.","vibe":["dive"]},"3":{"name":"KGB Bar","address":"85 E 4th St, New York, NY 10003","coords":[40.72664730042396,-73.98989100223018],"burough":"Manhattan","hours":"7pm - 4am","description":"Readings & publication parties are regular events at this tiny Soviet-themed watering hole.","vibe":["dive"]},"4":{"name":"Doc Holiday\'s","address":"141 Avenue A, New York, NY 10009","coords":[40.727398198864286,-73.98285052735937],"burough":"Manhattan","hours":"12pm - 4am","description":"Texas roadhouse-style bar in the East Village with biker bartenders & country music on the jukebox.","vibe":["dive"]},"5":{"name":"St Dymphna\'s","address":"117 Avenue A, New York, NY 10009","coords":[40.72660169252299,-73.98352315804907],"burough":"Manhattan","hours":"4pm - 4am","description":"Irish watering hole dispensing pints & classic pub grub in a snug, patio-equipped setting.","vibe":["dive"]},"6":{"name":"Phoenix Bar","address":"447 E 13th St, New York, NY 10009","coords":[40.730094511842545,-73.9809088966695],"burough":"Manhattan","hours":"3pm - 4am","description":"Gay & lesbian mainstay in the East Village known for its jukebox & relaxed atmosphere.","vibe":["dive","gay"]},"7":{"name":"Berlin","address":"25 Avenue A, New York, NY 10009","coords":[40.723145259456345,-73.98596223373347],"burough":"Manhattan","hours":"8pm - 4am","description":"Tiny, dimly-lit entertainment venue featuring DJs & live bands along with cocktails & beer.","vibe":["dive"]},"8":{"name":"Pineapple Club","address":"509 E 6th St, New York, NY 10009","coords":[],"burough":"Manhattan","hours":"5pm - 1am","description":"International plates & tropical cocktails served in a vast locale with colorful, fashionable decor.","vibe":["cocktail"]},"9":{"name":"Death & Company","address":"433 E 6th St, New York, NY 10009","coords":[40.72605820154622,-73.98465593053965],"burough":"Manhattan","hours":"6pm - 1am","description":"Bartenders in bow ties & suspenders recall the speakeasy era at this dark, moody cocktail lounge.","vibe":["cocktail"]},"10":{"name":"169 Bar","address":"169 E Broadway, New York, NY 10002","coords":[40.71405965526719,-73.98966855752671],"burough":"Manhattan","hours":"2pm - 4am","description":"Bar with palm trees, a leopard-print pool table & a small menu of oysters, borscht & dumplings.","vibe":["dive"]},"11":{"name":"Welcome to the Johnson\'s","address":"123 Rivington St, New York, NY 10002","coords":[40.719849145933516,-73.98733610170436],"burough":"Manhattan","hours":"3pm - 4am","description":"Unpretentious bar with beer from a fridge, a jukebox & a 1970s wood-paneled-basement vibe.","vibe":["dive"]},"12":{"name":"Clockwork Bar","address":"21 Essex St, New York, NY 10002","coords":[40.715538523393555,-73.99001505752673],"burough":"Manhattan","hours":"2pm - 4am","description":"Storied punk rock bar & music club with an edgy backdrop of graffiti-covered walls & booths.","vibe":["dive"]},"13":{"name":"Mr. Fong\'s","address":"40 Market St, New York, NY 10002","coords":[40.71260262672593,-73.9941237310669],"burough":"Manhattan","hours":"4pm - 4am","description":"Unassuming watering hole featuring Chinese-inspired cocktails & bar bites, plus a jukebox.","vibe":["cocktail"]},"14":{"name":"Clandestino","address":"35 Canal St, New York, NY 10002","coords":[40.714899656816776,-73.99085600355312],"burough":"Manhattan","hours":"4pm - 4am","description":"Hip, low-key barroom with cocktails, beer & wine in a cozy space with a pressed-tin ceiling.","vibe":["dive","cocktail"]},"15":{"name":"Up Stairs","address":"59 Canal St #2FL, New York, NY 10002","coords":[40.71532178793467,-73.99203265937551],"burough":"Manhattan","hours":"6pm - 3am","description":"Hidden kareoke bar above Chinatown","vibe":["dive"]},"16":{"name":"Pianos","address":"158 Ludlow St, New York, NY 10002","coords":[40.72120207428647,-73.9877175728688],"burough":"Manhattan","hours":"4pm - 4am","description":"Hipsters pack this 2-level bar/music venue to hear live indie acts or dance to DJ sets upstairs.","vibe":["dive"]},"17":{"name":"Ray\'s Downtown","address":"177 Chrystie St, New York, NY 10002","coords":[],"burough":"Manhattan","hours":"5pm - 2am","description":"Watering hole with a dive bar vibe, disco ball & a pool table, serving beer & craft cocktails.","vibe":["dive"]},"18":{"name":"Kind Regards","address":"152 Ludlow St, New York, NY 10002","coords":[40.72099693747117,-73.98779547286877],"burough":"Manhattan","hours":"5pm - 4am","description":"A cocktail spot with loungey seating & occasional basement shows in the former Cake Shop space.","vibe":["cocktail"]},"19":{"name":"Le Dive","address":"37 Canal St, New York, NY 10002","coords":[],"burough":"Manhattan","hours":"5pm - 2am","description":"","vibe":["cocktail"]},"20":{"name":"Flower Shop","address":"107 Eldridge St, New York, NY 10002","coords":[40.718334607664175,-73.99228548821094],"burough":"Manhattan","hours":"5pm - 2am","description":"Contemporary American cooking in a \'70s-style space with colorful furnishings & a downstairs bar.","vibe":["cocktail"]}}');

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