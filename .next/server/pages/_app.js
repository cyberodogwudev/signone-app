"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/_App/GoTop.js


const GoTop = ({ scrollStepInPx , delayInMs  })=>{
    const [thePosition, setThePosition] = external_react_default().useState(false);
    const timeoutRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                setThePosition(true);
            } else {
                setThePosition(false);
            }
        });
    }, []);
    const onScrollStep = ()=>{
        if (window.pageYOffset === 0) {
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    };
    const scrollToTop = ()=>{
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    };
    const renderGoTopIcon = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `go-top ${thePosition ? "active" : ""}`,
            onClick: scrollToTop,
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fas fa-chevron-up"
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: renderGoTopIcon()
    });
};
/* harmony default export */ const _App_GoTop = (GoTop);

;// CONCATENATED MODULE: ./components/_App/Layout.js




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "SignOne Shopfitters Limited"
                    })
                ]
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(_App_GoTop, {
                scrollStepInPx: "100",
                delayInMs: "10.50"
            })
        ]
    });
};
/* harmony default export */ const _App_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js










function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(_App_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5059));
module.exports = __webpack_exports__;

})();