/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	/*import './view/style.scss';

	//App Dependecies
	import VueRouter from 'vue-router';
	Vue.use(VueRouter);

	import VueResource from 'vue-resource';
	Vue.use(VueResource);

	//Root Element
	import rootElement from './view/root.vue';
	let root = Vue.extend(rootElement);

	//Router Config
	import routerMap from './router';

	let router = new VueRouter({
	    history: false
	})

	.map(routerMap)
	    .start(root, '#root', () => {
	        console.log('Приложение работает');
	        //счетчикпосетителей таблица guests
	        postData.post('/api/guest/new', {
	            user_agent: navigator.userAgent
	        })
	        .then(data => {
	            console.log(`${data} загрузок!`);
	        });

	    });*/

		alert(123);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhYThiYTIxMmYyNDMzN2M5YjIzZSIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhYThiYTIxMmYyNDMzN2M5YjIzZVxuICoqLyIsIi8qaW1wb3J0ICcuL3ZpZXcvc3R5bGUuc2Nzcyc7XHJcblxyXG4vL0FwcCBEZXBlbmRlY2llc1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xyXG5WdWUudXNlKFZ1ZVJvdXRlcik7XHJcblxyXG5pbXBvcnQgVnVlUmVzb3VyY2UgZnJvbSAndnVlLXJlc291cmNlJztcclxuVnVlLnVzZShWdWVSZXNvdXJjZSk7XHJcblxyXG4vL1Jvb3QgRWxlbWVudFxyXG5pbXBvcnQgcm9vdEVsZW1lbnQgZnJvbSAnLi92aWV3L3Jvb3QudnVlJztcclxubGV0IHJvb3QgPSBWdWUuZXh0ZW5kKHJvb3RFbGVtZW50KTtcclxuXHJcbi8vUm91dGVyIENvbmZpZ1xyXG5pbXBvcnQgcm91dGVyTWFwIGZyb20gJy4vcm91dGVyJztcclxuXHJcbmxldCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuICAgIGhpc3Rvcnk6IGZhbHNlXHJcbn0pXHJcblxyXG4ubWFwKHJvdXRlck1hcClcclxuICAgIC5zdGFydChyb290LCAnI3Jvb3QnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Cf0YDQuNC70L7QttC10L3QuNC1INGA0LDQsdC+0YLQsNC10YInKTtcclxuICAgICAgICAvL9GB0YfQtdGC0YfQuNC60L/QvtGB0LXRgtC40YLQtdC70LXQuSDRgtCw0LHQu9C40YbQsCBndWVzdHNcclxuICAgICAgICBwb3N0RGF0YS5wb3N0KCcvYXBpL2d1ZXN0L25ldycsIHtcclxuICAgICAgICAgICAgdXNlcl9hZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2RhdGF9INC30LDQs9GA0YPQt9C+0LohYCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7Ki9cclxuXHJcblxyXG4gYWxlcnQoMTIzKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9tYWluLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=