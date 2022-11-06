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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-violet-500 font-bold text-4xl\",\n        children: [\n            \"Hello NLW! Contagem: \",\n            props.count\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paulohco/Documents/Development/React/nlw-copa/web/src/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\nconst getServerSideProps = async ()=>{\n    const response = await fetch(\"http://localhost:3333/pools/count\");\n    const data = await response.json();\n    return {\n        props: {\n            count: data.count\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUllLFNBQVNBLEtBQUtDLEtBQWdCLEVBQUU7SUFDM0MscUJBQ0ksOERBQUNDO1FBQUdDLFdBQVU7O1lBQXFDO1lBQXNCRixNQUFNRyxLQUFLOzs7Ozs7O0FBRTVGLENBQUM7QUFFTSxNQUFNQyxxQkFBcUIsVUFBWTtJQUMxQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLE9BQU87UUFDSFIsT0FBTztZQUNIRyxPQUFPSSxLQUFLSixLQUFLO1FBQ3JCO0lBQ0o7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gICAgY291bnQ6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBIb21lUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC12aW9sZXQtNTAwIGZvbnQtYm9sZCB0ZXh0LTR4bFwiPkhlbGxvIE5MVyEgQ29udGFnZW06IHtwcm9wcy5jb3VudH08L2gxPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvcG9vbHMvY291bnQnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7IFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY291bnQ6IGRhdGEuY291bnQsXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImgxIiwiY2xhc3NOYW1lIiwiY291bnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

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