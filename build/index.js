/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animations/increaseWidth.js":
/*!*****************************************!*\
  !*** ./src/animations/increaseWidth.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/selectors */ \"./src/helpers/selectors.js\");\n\n\nvar $ = function $(selector) {\n  return document.querySelector(selector);\n};\n\nvar $All = function $All(selector) {\n  return document.querySelectorAll(selector);\n};\n\nvar increaseWidth = function increaseWidth() {\n  //let width = select('#blue').getBoundingClientRect().width\n  window.addEventListener('scroll', function () {\n    var _window = window,\n        scrollY = _window.scrollY; // if (scrollY >= 430 && scrollY <= 1900) {\n    //   select('#blue').setAttribute('style', `width: ${scrollY}px`)\n    // }\n\n    increaseW(430, scrollY); // increaseTransform(1700, scrollY)\n\n    increaseOpacity(1800, scrollY, 0);\n    increaseOpacity(1900, scrollY, 1);\n    increaseOpacity(2100, scrollY, 2);\n    increaseOpacity(2300, scrollY, 3);\n    increaseOpacity(2500, scrollY, 4); // increaseTransform(2000, scrollY)\n    // increaseOpacity(1800, scrollY, 0)\n    // increaseOpacity(1900, scrollY, 1)\n    // increaseOpacity(2100, scrollY, 2)\n    // increaseOpacity(2300, scrollY, 3)\n    // increaseOpacity(2500, scrollY, 4)\n  });\n};\n\nvar increaseW = function increaseW() {\n  var initLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 430;\n  var scrollY = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (scrollY >= initLimit && scrollY <= 1900) {\n    (0,_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__.select)('#blue').setAttribute('style', \"width: \".concat(scrollY, \"px\"));\n  }\n};\n\nvar increaseOpacity = function increaseOpacity() {\n  var initLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n  var scrollY = arguments.length > 1 ? arguments[1] : undefined;\n  var i = arguments.length > 2 ? arguments[2] : undefined;\n  var increment = scrollY - initLimit;\n\n  if (scrollY >= initLimit && scrollY <= 3000) {\n    (0,_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.features')[i].style.opacity = \"\".concat(increment / 100);\n  }\n};\n\nvar increaseTransform = function increaseTransform() {\n  var initLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n  var increment = scrollY - initLimit;\n\n  if (scrollY >= initLimit && scrollY <= 3000) {\n    (0,_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__.select)('.listFeatures').style.transform = \"translateY(-\".concat(increment, \"px)\");\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (increaseWidth);\n\n//# sourceURL=webpack://landingpage/./src/animations/increaseWidth.js?");

/***/ }),

/***/ "./src/animations/intersection.js":
/*!****************************************!*\
  !*** ./src/animations/intersection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/selectors */ \"./src/helpers/selectors.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar intersection = function intersection(lights, Three) {\n  var lazyLoadingCallback = function lazyLoadingCallback(entries) {\n    (0,_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__.select)('#scene');\n\n    var _iterator = _createForOfIteratorHelper(entries),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var entry = _step.value;\n\n        if (entry.isIntersecting) {\n          var _entry$target$dataset = entry.target.dataset,\n              colorone = _entry$target$dataset.colorone,\n              colortwo = _entry$target$dataset.colortwo;\n          console.log({\n            colorone: colorone,\n            colortwo: colortwo\n          });\n          lights[1].color = new Three.Color(colorone);\n          lights[2].color = new Three.Color(colortwo);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  var lazyLoadingObserver = new IntersectionObserver(lazyLoadingCallback, {\n    rootMargin: '0px 0px -500px 0px'\n  });\n  var images = (0,_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.space');\n  console.log(images);\n\n  var _iterator2 = _createForOfIteratorHelper(images),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var image = _step2.value;\n      lazyLoadingObserver.observe(image);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intersection);\n\n//# sourceURL=webpack://landingpage/./src/animations/intersection.js?");

/***/ }),

/***/ "./src/animations/rotation.js":
/*!************************************!*\
  !*** ./src/animations/rotation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar rotation = function rotation() {\n  var $ = function $(selector) {\n    return document.querySelector(selector);\n  };\n\n  var wrapper = $('.wrapper');\n  var container = $('.container');\n  var ticket = $('.ticket');\n\n  var _container$getBoundin = container.getBoundingClientRect(),\n      width = _container$getBoundin.width,\n      height = _container$getBoundin.height;\n\n  var halfWitdh = width / 2;\n  var halfHeigth = height / 2;\n  container.addEventListener('mousemove', function (event) {\n    var pageX = event.pageX,\n        pageY = event.pageY;\n    var rotationX = (pageX - halfWitdh) / halfWitdh * 10;\n    var rotationY = (pageY - halfHeigth) / halfHeigth * 10;\n    ticket.style.transform = \"rotateX(\".concat(rotationX, \"deg) rotateY(\").concat(rotationY, \"deg)\");\n  });\n  container.addEventListener('mouseleave', function (event) {\n    ticket.style.transform = \"rotateX(0deg) rotateY(0deg)\";\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rotation);\n\n//# sourceURL=webpack://landingpage/./src/animations/rotation.js?");

/***/ }),

/***/ "./src/animations/scene.js":
/*!*********************************!*\
  !*** ./src/animations/scene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _intersection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersection */ \"./src/animations/intersection.js\");\n\n\nvar init = function init(THREE) {\n  /**\r\n   * Scene\r\n   */\n  var scene = new THREE.Scene();\n  /**\r\n   * Viewport Size\r\n   */\n\n  var sizes = {\n    width: window.innerWidth,\n    height: window.innerHeight\n  };\n  /**\r\n   * Resize Window\r\n   */\n\n  window.addEventListener('resize', function () {\n    // Viewport Update\n    sizes.width = window.innerWidth;\n    sizes.height = window.innerHeight; // Camera Update\n\n    camera.aspect = sizes.width / sizes.height;\n    camera.updateProjectionMatrix(); // Renderer Update\n\n    renderer.setSize(sizes.width, sizes.height);\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n  });\n  /**\r\n   * Camera\r\n   */\n\n  var camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);\n  camera.position.z = 400;\n  scene.add(camera);\n  /**\r\n   * instance Render\r\n   */\n\n  var renderer = new THREE.WebGLRenderer({\n    antialias: true,\n    alpha: true\n  });\n  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n  renderer.setSize(sizes.width, sizes.height);\n  var container = document.getElementById('scene');\n  container.appendChild(renderer.domElement);\n  renderer.setClearColor(0x000000, 0.0); //renderer.setClearColor(new Three.Color('#21282a'), 1)\n\n  /**\r\n   * particles\r\n   */\n\n  var particles = new THREE.Object3D();\n  scene.add(particles);\n  /**\r\n   * Shape of the particles\r\n   */\n\n  var geometry = new THREE.TetrahedronGeometry(4, 2);\n  var material = new THREE.MeshPhongMaterial({\n    color: 0xffffff,\n    shading: THREE.FlatShading\n  });\n  /**\r\n   * Position Particles\r\n   */\n\n  for (var i = 0; i < 1000; i++) {\n    var mesh = new THREE.Mesh(geometry, material);\n    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();\n    mesh.position.multiplyScalar(90 + Math.random() * 700);\n    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);\n    particles.add(mesh);\n  }\n  /**\r\n   * Light In the Scene\r\n   */\n\n\n  var ambientLight = new THREE.AmbientLight(0x999999);\n  scene.add(ambientLight);\n  var lights = [];\n  lights[0] = new THREE.DirectionalLight(0xffffff, 1);\n  lights[0].position.set(1, 0, 0);\n  lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);\n  lights[1].position.set(0.75, 1, 0.5);\n  lights[2] = new THREE.DirectionalLight(0x8200c9, 1);\n  lights[2].position.set(-0.75, -1, 0.5);\n  scene.add(lights[0]);\n  scene.add(lights[1]);\n  scene.add(lights[2]);\n  /**\r\n   * Render Scene, Camera\r\n   */\n\n  var contador = 0;\n  var clock = new THREE.Clock();\n\n  var render = function render() {\n    var elapsedTime = clock.getElapsedTime();\n\n    if (contador == window.scrollY) {\n      particles.rotation.x = elapsedTime * 0.08;\n    } else {\n      particles.rotation.x = window.scrollY * elapsedTime * 0.0008;\n      contador = window.scrollY;\n    } // particle.rotation.x += 0.0\n    // particle.rotation.y -= 0.004\n\n\n    renderer.render(scene, camera);\n    requestAnimationFrame(render);\n  };\n\n  render();\n  (0,_intersection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lights, THREE);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://landingpage/./src/animations/scene.js?");

/***/ }),

/***/ "./src/helpers/selectors.js":
/*!**********************************!*\
  !*** ./src/helpers/selectors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"select\": () => (/* binding */ select),\n/* harmony export */   \"selectAll\": () => (/* binding */ selectAll)\n/* harmony export */ });\nvar select = function select(selector) {\n  return document.querySelector(selector);\n};\n\nvar selectAll = function selectAll(selector) {\n  return document.querySelectorAll(selector);\n};\n\n\n\n//# sourceURL=webpack://landingpage/./src/helpers/selectors.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/sass/index.scss */ \"./src/static/sass/index.scss\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _animations_rotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/rotation */ \"./src/animations/rotation.js\");\n/* harmony import */ var _animations_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/scene */ \"./src/animations/scene.js\");\n/* harmony import */ var _animations_increaseWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/increaseWidth */ \"./src/animations/increaseWidth.js\");\n// import lib from \"../static/css/lib.css\"\n\n\n\n\n // const init = () => {\n//   const scene = new Three.Scene()\n//   const canvas = document.querySelector('#scene')\n//   const loader = new Three.TextureLoader()\n//   const fondo = loader.load(background)\n//   const particlesGeometry = new Three.BufferGeometry()\n//   const particleCnt = 5000\n//   const posArray = new Float32Array(particleCnt * 3)\n//   for (let i = 0; i < particleCnt; i++) {\n//     posArray[i] = (Math.random() - 0.5) * 5\n//   }\n//   particlesGeometry.setAttribute(\n//     'position',\n//     new Three.BufferAttribute(posArray, 3)\n//   )\n//   // Materials\n//   const particlesMaterial = new Three.PointsMaterial({\n//     size: 0.005,\n//     map: fondo,\n//     // transparent: true,\n//   })\n//   particlesMaterial.color = new Three.Color(0xff0000)\n//   // Mesh\n//   const particleMesh = new Three.Points(particlesGeometry, particlesMaterial)\n//   scene.add(particleMesh)\n//   // Lights\n//   const pointLight = new Three.PointLight(0xffffff, 0.1)\n//   pointLight.position.x = 2\n//   pointLight.position.y = 3\n//   pointLight.position.z = 4\n//   scene.add(pointLight)\n//   /**\n//    * Sizes\n//    */\n//   const sizes = {\n//     width: window.innerWidth,\n//     height: window.innerHeight,\n//   }\n//   window.addEventListener('resize', () => {\n//     // Update sizes\n//     sizes.width = window.innerWidth\n//     sizes.height = window.innerHeight\n//     // Update camera\n//     camera.aspect = sizes.width / sizes.height\n//     camera.updateProjectionMatrix()\n//     // Update renderer\n//     renderer.setSize(sizes.width, sizes.height)\n//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))\n//   })\n//   /**\n//    * Camera\n//    */\n//   // Base camera\n//   const camera = new Three.PerspectiveCamera(\n//     75,\n//     sizes.width / sizes.height,\n//     0.1,\n//     100\n//   )\n//   camera.position.x = 0\n//   camera.position.y = 0\n//   camera.position.z = 2\n//   scene.add(camera)\n//   // sceneElement.appendChild(renderer.domElement)\n//   // render(renderer, scene, camera)\n//   // Controls\n//   // const controls = new OrbitControls(camera, canvas)\n//   // controls.enableDamping = true\n//   /**\n//    * Renderer\n//    */\n//   const renderer = new Three.WebGLRenderer({\n//     canvas: canvas,\n//   })\n//   renderer.setSize(sizes.width, sizes.height)\n//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))\n//   //renderer.setClearColor(new Three.Color('#21282a'), 1)\n//   /**\n//    * Animate\n//    */\n//   let mouseY = 0\n//   let mouseX = 0\n//   document.addEventListener('mousemove', (event) => {\n//     mouseY = event.clientY\n//     mouseX = event.clientX\n//   })\n//   const clock = new Three.Clock()\n//   const render = () => {\n//     const elapsedTime = clock.getElapsedTime()\n//     particleMesh.rotation.y = -0.1 * elapsedTime\n//     particleMesh.rotation.x = mouseY * (elapsedTime * 0.00008)\n//     particleMesh.rotation.y = mouseX * (elapsedTime * 0.00008)\n//     renderer.render(scene, camera)\n//     requestAnimationFrame(render)\n//   }\n//   render()\n// }\n\n(0,_animations_scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(three__WEBPACK_IMPORTED_MODULE_4__); // intersection(particlesMaterial, Three)\n\n(0,_animations_rotation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_animations_increaseWidth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // function intersection(particlesMaterial) {\n//   const lazyLoadingCallback = (entries) => {\n//     for (let entry of entries) {\n//       if (entry.isIntersecting) {\n//         console.log('hi')\n//         entry.target.src = entry.target.dataset.src\n//         particlesMaterial.color = new Three.Color('skyblue')\n//         //lazyLoadingObserver.unobserve(entry.target)\n//       }\n//     }\n//   }\n//   let lazyLoadingObserver = new IntersectionObserver(lazyLoadingCallback, {\n//     rootMargin: '0px 0px -500px 0px',\n//   })\n//   const images = document.querySelectorAll('.space')\n//   for (let image of images) {\n//     lazyLoadingObserver.observe(image)\n//   }\n// }\n\n//# sourceURL=webpack://landingpage/./src/index.js?");

/***/ }),

/***/ "./src/static/sass/index.scss":
/*!************************************!*\
  !*** ./src/static/sass/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://landingpage/./src/static/sass/index.scss?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;