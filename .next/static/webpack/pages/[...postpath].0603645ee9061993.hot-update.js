"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...postpath]",{

/***/ "./pages/[...postpath].tsx":
/*!*********************************!*\
  !*** ./pages/[...postpath].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Post = function(props) {\n    var post = props.post, host = props.host, path = props.path;\n    // to remove tags from excerpt\n    var removeTags = function(str) {\n        if (str === null || str === \"\") return \"\";\n        else str = str.toString();\n        return str.replace(/(<([^>]+)>)/gi, \"\").replace(/\\[[^\\]]*\\]/, \"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"canonical\",\n                        href: \"https://\".concat(host, \"/\").concat(path)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: removeTags(post.excerpt)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"https://\".concat(host, \"/\").concat(path)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"article\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:locale\",\n                        content: \"en_US\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: host.split(\".\")[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"article:published_time\",\n                        content: post.dateGmt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"article:modified_time\",\n                        content: post.modifiedGmt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: post.featuredImage.node.sourceUrl\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image:alt\",\n                        content: post.featuredImage.node.altText || post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.featuredImage.node.sourceUrl,\n                        alt: post.featuredImage.node.altText || post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.content\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckIsOERBQUNlLEtBQUc7d0JBQ0ZDLEdBQUcsRUFBRTFCLElBQUksQ0FBQ2tCLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTO3dCQUN0Q08sR0FBRyxFQUFFM0IsSUFBSSxDQUFDa0IsYUFBYSxDQUFDQyxJQUFJLENBQUNFLE9BQU8sSUFBSXJCLElBQUksQ0FBQ1UsS0FBSzs7Ozs7NkJBQ2xEO2tDQUNGLDhEQUFDa0IsU0FBTzt3QkFBQ0MsdUJBQXVCLEVBQUU7NEJBQUVDLE1BQU0sRUFBRTlCLElBQUksQ0FBQ1MsT0FBTzt5QkFBRTs7Ozs7NkJBQUk7Ozs7OztxQkFDMUQ7O29CQUNMLENBQ0g7QUFDSixDQUFDO0FBdkNLWCxLQUFBQSxJQUFJOztBQXlDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1suLi5wb3N0cGF0aF0udHN4PzM3MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEdyYXBoUUxDbGllbnQsIGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCBlbmRwb2ludCA9IHByb2Nlc3MuZW52LkdSQVBIUUxfRU5EUE9JTlQgYXMgc3RyaW5nO1xuICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoZW5kcG9pbnQpO1xuICBjb25zdCByZWZlcnJpbmdVUkwgPSBjdHgucmVxLmhlYWRlcnM/LnJlZmVyZXIgfHwgbnVsbDtcbiAgY29uc3QgcGF0aEFyciA9IGN0eC5xdWVyeS5wb3N0cGF0aCBhcyBBcnJheTxzdHJpbmc+O1xuICBjb25zdCBwYXRoID0gcGF0aEFyci5qb2luKFwiL1wiKTtcbiAgY29uc29sZS5sb2cocGF0aCk7XG4gIGNvbnN0IGZiY2xpZCA9IGN0eC5xdWVyeS5mYmNsaWQ7XG5cbiAgLy8gcmVkaXJlY3QgaWYgZmFjZWJvb2sgaXMgdGhlIHJlZmVyZXIgb3IgcmVxdWVzdCBjb250YWlucyBmYmNsaWRcbiAgaWYgKHJlZmVycmluZ1VSTD8uaW5jbHVkZXMoXCJmYWNlYm9vay5jb21cIikgfHwgZmJjbGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBgJHtcbiAgICAgICAgICBlbmRwb2ludC5yZXBsYWNlKC8oXFwvZ3JhcGhxbFxcLykvLCBcIi9cIikgKyBlbmNvZGVVUkkocGF0aCBhcyBzdHJpbmcpXG4gICAgICAgIH1gLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxuXHRcdHtcblx0XHRcdHBvc3QoaWQ6IFwiLyR7cGF0aH0vXCIsIGlkVHlwZTogVVJJKSB7XG5cdFx0XHRcdGlkXG5cdFx0XHRcdGV4Y2VycHRcblx0XHRcdFx0dGl0bGVcblx0XHRcdFx0bGlua1xuXHRcdFx0XHRkYXRlR210XG5cdFx0XHRcdG1vZGlmaWVkR210XG5cdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0YXV0aG9yIHtcblx0XHRcdFx0XHRub2RlIHtcblx0XHRcdFx0XHRcdG5hbWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZmVhdHVyZWRJbWFnZSB7XG5cdFx0XHRcdFx0bm9kZSB7XG5cdFx0XHRcdFx0XHRzb3VyY2VVcmxcblx0XHRcdFx0XHRcdGFsdFRleHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdGA7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDbGllbnQucmVxdWVzdChxdWVyeSk7XG4gIGlmICghZGF0YS5wb3N0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGF0aCxcbiAgICAgIHBvc3Q6IGRhdGEucG9zdCxcbiAgICAgIGhvc3Q6IGN0eC5yZXEuaGVhZGVycy5ob3N0LFxuICAgIH0sXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDogYW55O1xuICBob3N0OiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbn1cblxuY29uc3QgUG9zdDogUmVhY3QuRkM8UG9zdFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBvc3QsIGhvc3QsIHBhdGggfSA9IHByb3BzO1xuXG4gIC8vIHRvIHJlbW92ZSB0YWdzIGZyb20gZXhjZXJwdFxuICBjb25zdCByZW1vdmVUYWdzID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHN0ciA9PT0gbnVsbCB8fCBzdHIgPT09IFwiXCIpIHJldHVybiBcIlwiO1xuICAgIGVsc2Ugc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgXCJcIikucmVwbGFjZSgvXFxbW15cXF1dKlxcXS8sIFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cG9zdC50aXRsZX0gLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YGh0dHBzOi8vJHtob3N0fS8ke3BhdGh9YH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3JlbW92ZVRhZ3MocG9zdC5leGNlcnB0KX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly8ke2hvc3R9LyR7cGF0aH1gfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtob3N0LnNwbGl0KFwiLlwiKVswXX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIgY29udGVudD17cG9zdC5kYXRlR210fSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImFydGljbGU6bW9kaWZpZWRfdGltZVwiIGNvbnRlbnQ9e3Bvc3QubW9kaWZpZWRHbXR9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwb3N0LmZlYXR1cmVkSW1hZ2Uubm9kZS5zb3VyY2VVcmx9IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZTphbHRcIlxuICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuZmVhdHVyZWRJbWFnZS5ub2RlLmFsdFRleHQgfHwgcG9zdC50aXRsZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwb3N0LmZlYXR1cmVkSW1hZ2Uubm9kZS5zb3VyY2VVcmx9XG4gICAgICAgICAgYWx0PXtwb3N0LmZlYXR1cmVkSW1hZ2Uubm9kZS5hbHRUZXh0IHx8IHBvc3QudGl0bGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxhcnRpY2xlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiUG9zdCIsInByb3BzIiwicG9zdCIsImhvc3QiLCJwYXRoIiwicmVtb3ZlVGFncyIsInN0ciIsInRvU3RyaW5nIiwicmVwbGFjZSIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiZXhjZXJwdCIsInNwbGl0IiwiZGF0ZUdtdCIsIm1vZGlmaWVkR210IiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzb3VyY2VVcmwiLCJhbHRUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbWciLCJzcmMiLCJhbHQiLCJhcnRpY2xlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...postpath].tsx\n"));

/***/ })

});