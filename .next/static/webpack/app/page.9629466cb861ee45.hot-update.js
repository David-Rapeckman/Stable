"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsiL1VzZXJzL215bGVuYXNlbmEvU3RhYmxlLTEvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9hcGkvbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuLi9jbGllbnQvY29tcG9uZW50cy9uYXZpZ2F0aW9uJztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/Components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/Components/Header/Header.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n// app/components/Header/Header.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Header = (param)=>{\n    let { onNavigate } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleNavigate = (page)=>{\n        onNavigate(page);\n        router.push(page); // Navega para a página correspondente\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            padding: '20px',\n            background: 'linear-gradient(to right, #a8e6cf, #dcedc1)',\n            textAlign: 'center'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    margin: 0\n                },\n                children: \"Sistema de Monitoramento de Energia\"\n            }, void 0, false, {\n                fileName: \"/Users/mylenasena/Stable-1/src/Components/Header/Header.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleNavigate('/'),\n                        style: buttonStyle,\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mylenasena/Stable-1/src/Components/Header/Header.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleNavigate('/integrantes'),\n                        style: buttonStyle,\n                        children: \"Integrantes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mylenasena/Stable-1/src/Components/Header/Header.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mylenasena/Stable-1/src/Components/Header/Header.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mylenasena/Stable-1/src/Components/Header/Header.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n// Estilo para os botões\nconst buttonStyle = {\n    margin: '0 10px',\n    padding: '10px 15px',\n    border: 'none',\n    borderRadius: '5px',\n    backgroundColor: '#007bff',\n    color: '#fff',\n    cursor: 'pointer'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUNBQW1DOzs7QUFHVDtBQUNrQjtBQUU1QyxNQUFNRSxTQUEyRDtRQUFDLEVBQUVDLFVBQVUsRUFBRTs7SUFDNUUsTUFBTUMsU0FBU0gsMERBQVNBO0lBRXhCLE1BQU1JLGlCQUFpQixDQUFDQztRQUNwQkgsV0FBV0c7UUFDWEYsT0FBT0csSUFBSSxDQUFDRCxPQUFPLHNDQUFzQztJQUM3RDtJQUVBLHFCQUNJLDhEQUFDRTtRQUFPQyxPQUFPO1lBQUVDLFNBQVM7WUFBUUMsWUFBWTtZQUErQ0MsV0FBVztRQUFTOzswQkFDN0csOERBQUNDO2dCQUFHSixPQUFPO29CQUFFSyxRQUFRO2dCQUFFOzBCQUFHOzs7Ozs7MEJBQzFCLDhEQUFDQzs7a0NBQ0csOERBQUNDO3dCQUFPQyxTQUFTLElBQU1aLGVBQWU7d0JBQU1JLE9BQU9TO2tDQUFhOzs7Ozs7a0NBQ2hFLDhEQUFDRjt3QkFBT0MsU0FBUyxJQUFNWixlQUFlO3dCQUFpQkksT0FBT1M7a0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRjtHQWpCTWhCOztRQUNhRCxzREFBU0E7OztLQUR0QkM7QUFtQk4sd0JBQXdCO0FBQ3hCLE1BQU1nQixjQUFtQztJQUNyQ0osUUFBUTtJQUNSSixTQUFTO0lBQ1RTLFFBQVE7SUFDUkMsY0FBYztJQUNkQyxpQkFBaUI7SUFDakJDLE9BQU87SUFDUEMsUUFBUTtBQUNaO0FBRUEsaUVBQWVyQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbXlsZW5hc2VuYS9TdGFibGUtMS9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeFxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPHsgb25OYXZpZ2F0ZTogKHBhZ2U6IHN0cmluZykgPT4gdm9pZCB9PiA9ICh7IG9uTmF2aWdhdGUgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlTmF2aWdhdGUgPSAocGFnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIG9uTmF2aWdhdGUocGFnZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKHBhZ2UpOyAvLyBOYXZlZ2EgcGFyYSBhIHDDoWdpbmEgY29ycmVzcG9uZGVudGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhOGU2Y2YsICNkY2VkYzEpJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDAgfX0+U2lzdGVtYSBkZSBNb25pdG9yYW1lbnRvIGRlIEVuZXJnaWE8L2gxPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRlKCcvJyl9IHN0eWxlPXtidXR0b25TdHlsZX0+SG9tZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUoJy9pbnRlZ3JhbnRlcycpfSBzdHlsZT17YnV0dG9uU3R5bGV9PkludGVncmFudGVzPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbi8vIEVzdGlsbyBwYXJhIG9zIGJvdMO1ZXNcbmNvbnN0IGJ1dHRvblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgIG1hcmdpbjogJzAgMTBweCcsXG4gICAgcGFkZGluZzogJzEwcHggMTVweCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA3YmZmJyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkhlYWRlciIsIm9uTmF2aWdhdGUiLCJyb3V0ZXIiLCJoYW5kbGVOYXZpZ2F0ZSIsInBhZ2UiLCJwdXNoIiwiaGVhZGVyIiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImgxIiwibWFyZ2luIiwibmF2IiwiYnV0dG9uIiwib25DbGljayIsImJ1dHRvblN0eWxlIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJjdXJzb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Header/Header.tsx\n"));

/***/ })

});