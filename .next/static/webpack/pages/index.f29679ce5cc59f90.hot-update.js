"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timeout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nvar _s = $RefreshSig$();\nfunction Timeout() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1\n    ]), message = ref[0], setMessage = ref[1];\n    setTimeout(function() {\n        if (message > 10) return;\n        setMessage(function(prev) {\n            return _toConsumableArray(prev).concat([\n                prev[prev.length - 1] + 1\n            ]);\n        });\n    }, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: message.map(function(num) {\n            return num;\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sehouli\\\\Desktop\\\\next-tu\\\\tuto\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n};\n_s(Timeout, \"AWQGtarDlKvQaV/97IdHyLWBN0g=\");\n_c = Timeout;\nvar _c;\n$RefreshReg$(_c, \"Timeout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQzs7QUFFbEIsU0FBU0MsT0FBTyxHQUFHOztJQUNoQyxJQUE4QkQsR0FBYSxHQUFiQSwrQ0FBUSxDQUFDO0FBQUMsU0FBQztLQUFDLENBQUMsRUFIN0MsT0FHZ0IsR0FBZ0JBLEdBQWEsR0FBN0IsRUFIaEIsVUFHNEIsR0FBSUEsR0FBYSxHQUFqQjtJQUUxQkksVUFBVSxDQUFDLFdBQU07UUFDZixJQUFJRixPQUFPLEdBQUcsRUFBRSxFQUFFLE9BQU87UUFDekJDLFVBQVUsQ0FBQyxTQUFDRSxJQUFJO21CQUFLLG1CQUFJQSxJQUFJLENBQUpBLFFBQUo7Z0JBQVVBLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQzVELEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFVCxxQkFBTyw4REFBQ0MsS0FBRztrQkFBRUwsT0FBTyxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsR0FBRzttQkFBS0EsR0FBRztTQUFBLENBQUM7Ozs7O1lBQU8sQ0FBQztDQUMvQztHQVR1QlIsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZW91dCgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoWzFdKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAobWVzc2FnZSA+IDEwKSByZXR1cm47XG4gICAgc2V0TWVzc2FnZSgocHJldikgPT4gWy4uLnByZXYsIHByZXZbcHJldi5sZW5ndGggLSAxXSArIDFdKTtcbiAgfSwgMTAwMCk7XG5cbiAgcmV0dXJuIDxkaXY+e21lc3NhZ2UubWFwKChudW0pID0+IG51bSl9PC9kaXY+O1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGltZW91dCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V0VGltZW91dCIsInByZXYiLCJsZW5ndGgiLCJkaXYiLCJtYXAiLCJudW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});