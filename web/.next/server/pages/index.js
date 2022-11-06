"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            \"Hello NLW! Contagem: \",\n            props.count\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paulohco/Documents/Development/React/nlw-copa/web/src/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\nconst getServerSideProps = async ()=>{\n    const response = await fetch(\"http://localhost:3333/pools/count\");\n    const data = await response.json();\n    return {\n        props: {\n            count: data.count\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUllLFNBQVNBLEtBQUtDLEtBQWdCLEVBQUU7SUFDM0MscUJBQ0ksOERBQUNDOztZQUFHO1lBQXNCRCxNQUFNRSxLQUFLOzs7Ozs7O0FBRTdDLENBQUM7QUFFTSxNQUFNQyxxQkFBcUIsVUFBWTtJQUMxQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLE9BQU87UUFDSFAsT0FBTztZQUNIRSxPQUFPSSxLQUFLSixLQUFLO1FBQ3JCO0lBQ0o7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gICAgY291bnQ6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBIb21lUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDE+SGVsbG8gTkxXISBDb250YWdlbToge3Byb3BzLmNvdW50fTwvaDE+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9wb29scy9jb3VudCcpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb3VudDogZGF0YS5jb3VudCxcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiaDEiLCJjb3VudCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();