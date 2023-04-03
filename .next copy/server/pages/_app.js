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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/appContext.js":
/*!***********************************!*\
  !*** ./src/context/appContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppProvider\": () => (/* binding */ AppProvider),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ \"./src/context/appReducer.js\");\n\n\n\nconst initialState = {\n    blurredBg: false\n};\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst appActions = (dispatch)=>{\n    return {\n        setBlurred: (value)=>dispatch({\n                type: \"SET_BLURRED\",\n                payload: value\n            })\n    };\n};\nconst AppProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_appReducer__WEBPACK_IMPORTED_MODULE_2__.appReducer, initialState);\n    const actions = appActions(dispatch);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            ...state,\n            ...actions\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\context\\\\appContext.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\nconst useAppContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hcHBDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUU7QUFDM0I7QUFFMUMsTUFBTUssWUFBWSxHQUFHO0lBQ2pCQyxTQUFTLEVBQUUsS0FBSztDQUNuQjtBQUVELE1BQU1DLFVBQVUsaUJBQUdOLG9EQUFhLENBQUNJLFlBQVksQ0FBQztBQUU5QyxNQUFNRyxVQUFVLEdBQUcsQ0FBQ0MsUUFBUSxHQUFLO0lBQzdCLE9BQU87UUFDSEMsVUFBVSxFQUFFLENBQUNDLEtBQUssR0FDZEYsUUFBUSxDQUFDO2dCQUFFRyxJQUFJLEVBQUUsYUFBYTtnQkFBRUMsT0FBTyxFQUFFRixLQUFLO2FBQUUsQ0FBQztLQUN4RCxDQUFDO0NBQ0w7QUFFRCxNQUFNRyxXQUFXLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNsQyxNQUFNLEVBakJWLEdBaUJXQyxLQUFLLEdBakJoQixHQWlCa0JQLFFBQVEsTUFBSVAsaURBQVUsQ0FBQ0UsbURBQVUsRUFBRUMsWUFBWSxDQUFDO0lBQzlELE1BQU1ZLE9BQU8sR0FBR1QsVUFBVSxDQUFDQyxRQUFRLENBQUM7SUFDcEMscUJBQ0ksOERBQUNGLFVBQVUsQ0FBQ1csUUFBUTtRQUFDUCxLQUFLLEVBQUU7WUFBRSxHQUFHSyxLQUFLO1lBQUUsR0FBR0MsT0FBTztTQUFFO2tCQUMvQ0YsUUFBUTs7Ozs7aUJBQ1MsQ0FDeEI7Q0FDTDtBQUVELE1BQU1JLGFBQWEsR0FBRyxJQUFNO0lBQ3hCLE9BQU9oQixpREFBVSxDQUFDSSxVQUFVLENBQUMsQ0FBQztDQUNqQztBQUVpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZHkvLi9zcmMvY29udGV4dC9hcHBDb250ZXh0LmpzP2QzNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwcFJlZHVjZXIgfSBmcm9tIFwiLi9hcHBSZWR1Y2VyXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBibHVycmVkQmc6IGZhbHNlLFxufTtcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcblxuY29uc3QgYXBwQWN0aW9ucyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldEJsdXJyZWQ6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfQkxVUlJFRFwiLCBwYXlsb2FkOiB2YWx1ZSB9KSxcbiAgICB9O1xufTtcblxuY29uc3QgQXBwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IGFwcEFjdGlvbnMoZGlzcGF0Y2gpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCAuLi5hY3Rpb25zIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmNvbnN0IHVzZUFwcENvbnRleHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG59O1xuXG5leHBvcnQgeyBBcHBQcm92aWRlciwgQXBwQ29udGV4dCwgdXNlQXBwQ29udGV4dCB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VDb250ZXh0IiwiYXBwUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImJsdXJyZWRCZyIsIkFwcENvbnRleHQiLCJhcHBBY3Rpb25zIiwiZGlzcGF0Y2giLCJzZXRCbHVycmVkIiwidmFsdWUiLCJ0eXBlIiwicGF5bG9hZCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImFjdGlvbnMiLCJQcm92aWRlciIsInVzZUFwcENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/appContext.js\n");

/***/ }),

/***/ "./src/context/appReducer.js":
/*!***********************************!*\
  !*** ./src/context/appReducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appReducer\": () => (/* binding */ appReducer)\n/* harmony export */ });\nconst appReducer = (state, action)=>{\n    switch(action.type){\n        case \"SET_BLURRED\":\n             false ? 0 : null;\n            return {\n                ...state,\n                blurredBg: action.payload\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hcHBSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7SUFDekMsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2YsS0FBSyxhQUFhO1lBQ2QsTUFBNkIsR0FDdkJDLENBQWtELEdBQ2xELElBQUksQ0FBQztZQUNYLE9BQU87Z0JBQUUsR0FBR0gsS0FBSztnQkFBRU0sU0FBUyxFQUFFTCxNQUFNLENBQUNJLE9BQU87YUFBRSxDQUFDO1FBRW5EO1lBQ0ksT0FBT0wsS0FBSyxDQUFDO0tBQ3BCO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZHkvLi9zcmMvY29udGV4dC9hcHBSZWR1Y2VyLmpzP2JkMzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIlNFVF9CTFVSUkVEXCI6XG4gICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgPyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIklTX0JMVVJSRURcIiwgYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJsdXJyZWRCZzogYWN0aW9uLnBheWxvYWQgfTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiYXBwUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwYXlsb2FkIiwiYmx1cnJlZEJnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/appReducer.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/appContext */ \"./src/context/appContext.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll-parallax */ \"react-scroll-parallax\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default().configure({\n    showSpinner: true\n});\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().start()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nfunction MyApp({ Component , pageProps  }) {\n    const queryClientRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    if (!queryClientRef.current) {\n        queryClientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {\n        client: queryClientRef.current,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_appContext__WEBPACK_IMPORTED_MODULE_5__.AppProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1 maximum-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"description\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"robots\",\n                            content: \"noindex, nofollow\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"keywords\",\n                            content: \"React Template, Portfolio Template\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"author\",\n                            content: \"Nuclear Themes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: \"#72E2AE\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            httpEquiv: \"X-UA-Compatible\",\n                            content: \"IE=edge\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/manifest.json\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"shortcut icon\",\n                            href: \"/favicon.ico\",\n                            type: \"image/x-icon\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            href: \"/icon-192x192.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Bieber - React Personal Portfolio Template\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__.ParallaxProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.Hydrate, {\n                        state: pageProps.dehydratedState,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\61450\\\\Desktop\\\\personal\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDSTtBQUNDO0FBQ0g7QUFDcUI7QUFDb0I7QUFDZDtBQUNEO0FBQ2xDO0FBQ1U7QUFDYjtBQUNXO0FBQ0M7QUFFaENFLDBEQUFtQixDQUFDO0lBQUVTLFdBQVcsRUFBRSxJQUFJO0NBQUUsQ0FBQyxDQUFDO0FBQzNDViw0REFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFNQyxzREFBZSxFQUFFO0FBQUEsQ0FBQyxDQUFDO0FBQzlERCw0REFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxJQUFNQyxxREFBYyxFQUFFO0FBQUEsQ0FBQyxDQUFDO0FBQ2hFRCw0REFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFNQyxxREFBYyxFQUFFO0FBQUEsQ0FBQyxDQUFDO0FBRTdELFNBQVNjLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLE1BQU1DLGNBQWMsR0FBR2hCLDZDQUFNLEVBQUU7SUFFL0IsSUFBSSxDQUFDZ0IsY0FBYyxDQUFDQyxPQUFPLEVBQUU7UUFDM0JELGNBQWMsQ0FBQ0MsT0FBTyxHQUFHLElBQUlkLG9EQUFXLEVBQUUsQ0FBQztLQUM1QztJQUVELHFCQUNFLDhEQUFDQyw0REFBbUI7UUFBQ2MsTUFBTSxFQUFFRixjQUFjLENBQUNDLE9BQU87a0JBQ2pELDRFQUFDaEIsNERBQVc7OzhCQUNWLDhEQUFDSixrREFBSTs7c0NBQ0gsOERBQUNzQixNQUFJOzRCQUNIQyxJQUFJLEVBQUMsVUFBVTs0QkFDZkMsT0FBTyxFQUFDLHFEQUFxRDs7Ozs7Z0NBQzdEO3NDQUNGLDhEQUFDRixNQUFJOzRCQUFDQyxJQUFJLEVBQUMsYUFBYTs0QkFBQ0MsT0FBTyxFQUFDLGFBQWE7Ozs7O2dDQUFHO3NDQUNqRCw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQUNDLE9BQU8sRUFBQyxtQkFBbUI7Ozs7O2dDQUFHO3NDQUNsRCw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFVBQVU7NEJBQUNDLE9BQU8sRUFBQyxvQ0FBb0M7Ozs7O2dDQUFHO3NDQUNyRSw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQUNDLE9BQU8sRUFBQyxnQkFBZ0I7Ozs7O2dDQUFHO3NDQUMvQyw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLGFBQWE7NEJBQUNDLE9BQU8sRUFBQyxTQUFTOzs7OztnQ0FBRztzQ0FDN0MsOERBQUNGLE1BQUk7NEJBQUNHLFNBQVMsRUFBQyxpQkFBaUI7NEJBQUNELE9BQU8sRUFBQyxTQUFTOzs7OztnQ0FBRztzQ0FDdEQsOERBQUNFLE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxVQUFVOzRCQUFDQyxJQUFJLEVBQUMsZ0JBQWdCOzs7OztnQ0FBRztzQ0FDN0MsOERBQUNGLE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxlQUFlOzRCQUFDQyxJQUFJLEVBQUMsY0FBYzs0QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7O2dDQUFHO3NDQUNwRSw4REFBQ0gsTUFBSTs0QkFBQ0MsR0FBRyxFQUFDLGtCQUFrQjs0QkFBQ0MsSUFBSSxFQUFDLG1CQUFtQjs7Ozs7Z0NBQUc7c0NBQ3hELDhEQUFDRSxPQUFLO3NDQUFDLDRDQUEwQzs7Ozs7Z0NBQVE7Ozs7Ozt3QkFDcEQ7OEJBQ1AsOERBQUNyQixtRUFBZ0I7OEJBQ2YsNEVBQUNKLGdEQUFPO3dCQUFDMEIsS0FBSyxFQUFFYixTQUFTLENBQUNjLGVBQWU7a0NBQ3ZDLDRFQUFDZixTQUFTOzRCQUFFLEdBQUdDLFNBQVM7Ozs7O2dDQUFJOzs7Ozs0QkFDcEI7Ozs7O3dCQUNPOzs7Ozs7Z0JBQ1A7Ozs7O1lBRU0sQ0FDdEI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2R5Ly4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvYXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgSHlkcmF0ZSwgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiO1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIjtcbmltcG9ydCBcIm5vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIm5wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcblxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiB0cnVlIH0pO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50UmVmID0gdXNlUmVmKCk7XG5cbiAgaWYgKCFxdWVyeUNsaWVudFJlZi5jdXJyZW50KSB7XG4gICAgcXVlcnlDbGllbnRSZWYuY3VycmVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50UmVmLmN1cnJlbnR9PlxuICAgICAgPEFwcFByb3ZpZGVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSBtYXhpbXVtLXNjYWxlPTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXgsIG5vZm9sbG93XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiUmVhY3QgVGVtcGxhdGUsIFBvcnRmb2xpbyBUZW1wbGF0ZVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJOdWNsZWFyIFRoZW1lc1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM3MkUyQUVcIiAvPlxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9pY29uLTE5MngxOTIucG5nXCIgLz5cbiAgICAgICAgICA8dGl0bGU+QmllYmVyIC0gUmVhY3QgUGVyc29uYWwgUG9ydGZvbGlvIFRlbXBsYXRlPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICAgICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9IeWRyYXRlPlxuICAgICAgICA8L1BhcmFsbGF4UHJvdmlkZXI+XG4gICAgICA8L0FwcFByb3ZpZGVyPlxuICAgICAgey8qIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+ICovfVxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsInVzZVJlZiIsIkFwcFByb3ZpZGVyIiwiSHlkcmF0ZSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsIlBhcmFsbGF4UHJvdmlkZXIiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudFJlZiIsImN1cnJlbnQiLCJjbGllbnQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJodHRwRXF1aXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJ0aXRsZSIsInN0YXRlIiwiZGVoeWRyYXRlZFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.min.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();