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
exports.id = "pages/[...postpath]";
exports.ids = ["pages/[...postpath]"];
exports.modules = {

/***/ "./pages/[...postpath].tsx":
/*!*********************************!*\
  !*** ./pages/[...postpath].tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst getServerSideProps = async (ctx)=>{\n    const endpoint = process.env.GRAPHQL_ENDPOINT;\n    const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_3__.GraphQLClient(endpoint);\n    const referringURL = ctx.req.headers?.referer || null;\n    const pathArr = ctx.query.postpath;\n    const path = pathArr.join(\"/\");\n    console.log(path);\n    const fbclid = ctx.query.fbclid;\n    // redirect if facebook is the referer or request contains fbclid\n    if (referringURL?.includes(\"facebook.com\") || fbclid) {\n        return {\n            redirect: {\n                permanent: false,\n                destination: `${endpoint.replace(/(\\/graphql\\/)/, \"/\") + encodeURI(path)}`\n            }\n        };\n    }\n    const query = graphql_request__WEBPACK_IMPORTED_MODULE_3__.gql`\n\t\t{\n\t\t\tpost(id: \"/${path}/\", idType: URI) {\n\t\t\t\tid\n\t\t\t\texcerpt\n\t\t\t\ttitle\n\t\t\t\tlink\n\t\t\t\tdateGmt\n\t\t\t\tmodifiedGmt\n\t\t\t\tcontent\n\t\t\t\tauthor {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfeaturedImage {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\taltText\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t`;\n    const data = await graphQLClient.request(query);\n    console.log(data);\n    if (!data.post) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            path,\n            post: data.post,\n            host: ctx.req.headers.host\n        }\n    };\n};\nconst Post = (props)=>{\n    const { post , host , path  } = props;\n    // to remove tags from excerpt\n    const removeTags = (str)=>{\n        if (str === null || str === \"\") return \"\";\n        else str = str.toString();\n        return str.replace(/(<([^>]+)>)/gi, \"\").replace(/\\[[^\\]]*\\]/, \"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"canonical\",\n                        href: `https://${host}/${path}`\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: removeTags(post.excerpt)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: `https://${host}/${path}`\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"article\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:locale\",\n                        content: \"en_US\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: host.split(\".\")[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"article:published_time\",\n                        content: post.dateGmt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"article:modified_time\",\n                        content: post.modifiedGmt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: post.featuredImage.node.sourceUrl\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image:alt\",\n                        content: post.featuredImage.node.altText || post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.featuredImage.node.sourceUrl,\n                        alt: post.featuredImage.node.altText || post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.content\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RNY-DESIGN\\\\Downloads\\\\Compressed\\\\verfb-main 2\\\\verfb-main\\\\pages\\\\[...postpath].tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4ucG9zdHBhdGhdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUV3QjtBQUU5QyxNQUFNSSxrQkFBa0IsR0FBdUIsT0FBT0MsR0FBRyxHQUFLO0lBQ25FLE1BQU1DLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtJQUM3QyxNQUFNQyxhQUFhLEdBQUcsSUFBSVIsMERBQWEsQ0FBQ0ksUUFBUSxDQUFDO0lBQ2pELE1BQU1LLFlBQVksR0FBR04sR0FBRyxDQUFDTyxHQUFHLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxJQUFJLElBQUk7SUFDckQsTUFBTUMsT0FBTyxHQUFHVixHQUFHLENBQUNXLEtBQUssQ0FBQ0MsUUFBUTtJQUNsQyxNQUFNQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO0lBQ2xCLE1BQU1JLE1BQU0sR0FBR2pCLEdBQUcsQ0FBQ1csS0FBSyxDQUFDTSxNQUFNO0lBRS9CLGlFQUFpRTtJQUNqRSxJQUFJWCxZQUFZLEVBQUVZLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSUQsTUFBTSxFQUFFO1FBQ3BELE9BQU87WUFDTEUsUUFBUSxFQUFFO2dCQUNSQyxTQUFTLEVBQUUsS0FBSztnQkFDaEJDLFdBQVcsRUFBRSxDQUFDLEVBQ1pwQixRQUFRLENBQUNxQixPQUFPLGtCQUFrQixHQUFHLENBQUMsR0FBR0MsU0FBUyxDQUFDVixJQUFJLENBQVcsQ0FDbkUsQ0FBQzthQUNIO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNRixLQUFLLEdBQUdiLGdEQUFHLENBQUM7O2NBRU4sRUFBRWUsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQnBCLENBQUM7SUFFQSxNQUFNVyxJQUFJLEdBQUcsTUFBTW5CLGFBQWEsQ0FBQ29CLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDO0lBQy9DSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQSxJQUFJLENBQUNFLElBQUksRUFBRTtRQUNkLE9BQU87WUFDTEMsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO0lBQ0osQ0FBQztJQUNELE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xmLElBQUk7WUFDSmEsSUFBSSxFQUFFRixJQUFJLENBQUNFLElBQUk7WUFDZkcsSUFBSSxFQUFFN0IsR0FBRyxDQUFDTyxHQUFHLENBQUNDLE9BQU8sQ0FBQ3FCLElBQUk7U0FDM0I7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUUYsTUFBTUMsSUFBSSxHQUF3QixDQUFDRixLQUFLLEdBQUs7SUFDM0MsTUFBTSxFQUFFRixJQUFJLEdBQUVHLElBQUksR0FBRWhCLElBQUksR0FBRSxHQUFHZSxLQUFLO0lBRWxDLDhCQUE4QjtJQUM5QixNQUFNRyxVQUFVLEdBQUcsQ0FBQ0MsR0FBVyxHQUFLO1FBQ2xDLElBQUlBLEdBQUcsS0FBSyxJQUFJLElBQUlBLEdBQUcsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDckNBLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixPQUFPRCxHQUFHLENBQUNWLE9BQU8sa0JBQWtCLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHFCQUNFOzswQkFDRSw4REFBQzFCLGtEQUFJOztrQ0FDSCw4REFBQ3NDLE1BQUk7d0JBQUNDLFFBQVEsRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUVWLElBQUksQ0FBQ1csS0FBSzs7Ozs7aUNBQUk7a0NBQ2pELDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsV0FBVzt3QkFBQ0MsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFWCxJQUFJLENBQUMsQ0FBQyxFQUFFaEIsSUFBSSxDQUFDLENBQUM7Ozs7O2lDQUFJO2tDQUN6RCw4REFBQ3FCLE1BQUk7d0JBQUNDLFFBQVEsRUFBQyxnQkFBZ0I7d0JBQUNDLE9BQU8sRUFBRUwsVUFBVSxDQUFDTCxJQUFJLENBQUNlLE9BQU8sQ0FBQzs7Ozs7aUNBQUk7a0NBQ3JFLDhEQUFDUCxNQUFJO3dCQUFDQyxRQUFRLEVBQUMsUUFBUTt3QkFBQ0MsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFUCxJQUFJLENBQUMsQ0FBQyxFQUFFaEIsSUFBSSxDQUFDLENBQUM7Ozs7O2lDQUFJO2tDQUM5RCw4REFBQ3FCLE1BQUk7d0JBQUNDLFFBQVEsRUFBQyxTQUFTO3dCQUFDQyxPQUFPLEVBQUMsU0FBUzs7Ozs7aUNBQUc7a0NBQzdDLDhEQUFDRixNQUFJO3dCQUFDQyxRQUFRLEVBQUMsV0FBVzt3QkFBQ0MsT0FBTyxFQUFDLE9BQU87Ozs7O2lDQUFHO2tDQUM3Qyw4REFBQ0YsTUFBSTt3QkFBQ0MsUUFBUSxFQUFDLGNBQWM7d0JBQUNDLE9BQU8sRUFBRVAsSUFBSSxDQUFDYSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztpQ0FBSTtrQ0FDN0QsOERBQUNSLE1BQUk7d0JBQUNDLFFBQVEsRUFBQyx3QkFBd0I7d0JBQUNDLE9BQU8sRUFBRVYsSUFBSSxDQUFDaUIsT0FBTzs7Ozs7aUNBQUk7a0NBQ2pFLDhEQUFDVCxNQUFJO3dCQUFDQyxRQUFRLEVBQUMsdUJBQXVCO3dCQUFDQyxPQUFPLEVBQUVWLElBQUksQ0FBQ2tCLFdBQVc7Ozs7O2lDQUFJO2tDQUNwRSw4REFBQ1YsTUFBSTt3QkFBQ0MsUUFBUSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBRVYsSUFBSSxDQUFDbUIsYUFBYSxDQUFDQyxJQUFJLENBQUNDLFNBQVM7Ozs7O2lDQUFJO2tDQUN4RSw4REFBQ2IsTUFBSTt3QkFDSEMsUUFBUSxFQUFDLGNBQWM7d0JBQ3ZCQyxPQUFPLEVBQUVWLElBQUksQ0FBQ21CLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDRSxPQUFPLElBQUl0QixJQUFJLENBQUNXLEtBQUs7Ozs7O2lDQUN0RDtrQ0FDRiw4REFBQ0EsT0FBSztrQ0FBRVgsSUFBSSxDQUFDVyxLQUFLOzs7OztpQ0FBUzs7Ozs7O3lCQUN0QjswQkFDUCw4REFBQ1ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjs7a0NBQzdCLDhEQUFDQyxJQUFFO2tDQUFFekIsSUFBSSxDQUFDVyxLQUFLOzs7OztpQ0FBTTtrQ0FDckIsOERBQUNlLEtBQUc7d0JBQ0ZDLEdBQUcsRUFBRTNCLElBQUksQ0FBQ21CLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTO3dCQUN0Q08sR0FBRyxFQUFFNUIsSUFBSSxDQUFDbUIsYUFBYSxDQUFDQyxJQUFJLENBQUNFLE9BQU8sSUFBSXRCLElBQUksQ0FBQ1csS0FBSzs7Ozs7aUNBQ2xEO2tDQUNGLDhEQUFDa0IsU0FBTzt3QkFBQ0MsdUJBQXVCLEVBQUU7NEJBQUVDLE1BQU0sRUFBRS9CLElBQUksQ0FBQ1UsT0FBTzt5QkFBRTs7Ozs7aUNBQUk7Ozs7Ozt5QkFDMUQ7O29CQUNMLENBQ0g7QUFDSixDQUFDO0FBRUQsaUVBQWVOLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlcmNlbC1yZWRpcmVjdC8uL3BhZ2VzL1suLi5wb3N0cGF0aF0udHN4PzM3MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEdyYXBoUUxDbGllbnQsIGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCBlbmRwb2ludCA9IHByb2Nlc3MuZW52LkdSQVBIUUxfRU5EUE9JTlQgYXMgc3RyaW5nO1xuICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoZW5kcG9pbnQpO1xuICBjb25zdCByZWZlcnJpbmdVUkwgPSBjdHgucmVxLmhlYWRlcnM/LnJlZmVyZXIgfHwgbnVsbDtcbiAgY29uc3QgcGF0aEFyciA9IGN0eC5xdWVyeS5wb3N0cGF0aCBhcyBBcnJheTxzdHJpbmc+O1xuICBjb25zdCBwYXRoID0gcGF0aEFyci5qb2luKFwiL1wiKTtcbiAgY29uc29sZS5sb2cocGF0aCk7XG4gIGNvbnN0IGZiY2xpZCA9IGN0eC5xdWVyeS5mYmNsaWQ7XG5cbiAgLy8gcmVkaXJlY3QgaWYgZmFjZWJvb2sgaXMgdGhlIHJlZmVyZXIgb3IgcmVxdWVzdCBjb250YWlucyBmYmNsaWRcbiAgaWYgKHJlZmVycmluZ1VSTD8uaW5jbHVkZXMoXCJmYWNlYm9vay5jb21cIikgfHwgZmJjbGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBgJHtcbiAgICAgICAgICBlbmRwb2ludC5yZXBsYWNlKC8oXFwvZ3JhcGhxbFxcLykvLCBcIi9cIikgKyBlbmNvZGVVUkkocGF0aCBhcyBzdHJpbmcpXG4gICAgICAgIH1gLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxuXHRcdHtcblx0XHRcdHBvc3QoaWQ6IFwiLyR7cGF0aH0vXCIsIGlkVHlwZTogVVJJKSB7XG5cdFx0XHRcdGlkXG5cdFx0XHRcdGV4Y2VycHRcblx0XHRcdFx0dGl0bGVcblx0XHRcdFx0bGlua1xuXHRcdFx0XHRkYXRlR210XG5cdFx0XHRcdG1vZGlmaWVkR210XG5cdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0YXV0aG9yIHtcblx0XHRcdFx0XHRub2RlIHtcblx0XHRcdFx0XHRcdG5hbWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZmVhdHVyZWRJbWFnZSB7XG5cdFx0XHRcdFx0bm9kZSB7XG5cdFx0XHRcdFx0XHRzb3VyY2VVcmxcblx0XHRcdFx0XHRcdGFsdFRleHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdGA7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDbGllbnQucmVxdWVzdChxdWVyeSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAoIWRhdGEucG9zdCkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBhdGgsXG4gICAgICBwb3N0OiBkYXRhLnBvc3QsXG4gICAgICBob3N0OiBjdHgucmVxLmhlYWRlcnMuaG9zdCxcbiAgICB9LFxuICB9O1xufTtcblxuaW50ZXJmYWNlIFBvc3RQcm9wcyB7XG4gIHBvc3Q6IGFueTtcbiAgaG9zdDogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFBvc3RQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb3N0LCBob3N0LCBwYXRoIH0gPSBwcm9wcztcblxuICAvLyB0byByZW1vdmUgdGFncyBmcm9tIGV4Y2VycHRcbiAgY29uc3QgcmVtb3ZlVGFncyA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgIGlmIChzdHIgPT09IG51bGwgfHwgc3RyID09PSBcIlwiKSByZXR1cm4gXCJcIjtcbiAgICBlbHNlIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksIFwiXCIpLnJlcGxhY2UoL1xcW1teXFxdXSpcXF0vLCBcIlwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Bvc3QudGl0bGV9IC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2BodHRwczovLyR7aG9zdH0vJHtwYXRofWB9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtyZW1vdmVUYWdzKHBvc3QuZXhjZXJwdCl9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vJHtob3N0fS8ke3BhdGh9YH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17aG9zdC5zcGxpdChcIi5cIilbMF19IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiIGNvbnRlbnQ9e3Bvc3QuZGF0ZUdtdH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJhcnRpY2xlOm1vZGlmaWVkX3RpbWVcIiBjb250ZW50PXtwb3N0Lm1vZGlmaWVkR210fSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cG9zdC5mZWF0dXJlZEltYWdlLm5vZGUuc291cmNlVXJsfSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2U6YWx0XCJcbiAgICAgICAgICBjb250ZW50PXtwb3N0LmZlYXR1cmVkSW1hZ2Uubm9kZS5hbHRUZXh0IHx8IHBvc3QudGl0bGV9XG4gICAgICAgIC8+XG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLm5vZGUuc291cmNlVXJsfVxuICAgICAgICAgIGFsdD17cG9zdC5mZWF0dXJlZEltYWdlLm5vZGUuYWx0VGV4dCB8fCBwb3N0LnRpdGxlfVxuICAgICAgICAvPlxuICAgICAgICA8YXJ0aWNsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkdyYXBoUUxDbGllbnQiLCJncWwiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJlbmRwb2ludCIsInByb2Nlc3MiLCJlbnYiLCJHUkFQSFFMX0VORFBPSU5UIiwiZ3JhcGhRTENsaWVudCIsInJlZmVycmluZ1VSTCIsInJlcSIsImhlYWRlcnMiLCJyZWZlcmVyIiwicGF0aEFyciIsInF1ZXJ5IiwicG9zdHBhdGgiLCJwYXRoIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJmYmNsaWQiLCJpbmNsdWRlcyIsInJlZGlyZWN0IiwicGVybWFuZW50IiwiZGVzdGluYXRpb24iLCJyZXBsYWNlIiwiZW5jb2RlVVJJIiwiZGF0YSIsInJlcXVlc3QiLCJwb3N0Iiwibm90Rm91bmQiLCJwcm9wcyIsImhvc3QiLCJQb3N0IiwicmVtb3ZlVGFncyIsInN0ciIsInRvU3RyaW5nIiwibWV0YSIsInByb3BlcnR5IiwiY29udGVudCIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJleGNlcnB0Iiwic3BsaXQiLCJkYXRlR210IiwibW9kaWZpZWRHbXQiLCJmZWF0dXJlZEltYWdlIiwibm9kZSIsInNvdXJjZVVybCIsImFsdFRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltZyIsInNyYyIsImFsdCIsImFydGljbGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[...postpath].tsx\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/[...postpath].tsx"));
module.exports = __webpack_exports__;

})();