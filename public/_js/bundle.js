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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ \"./src/plugins/index.ts\");\n\nclass App extends _plugins__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n}\n\n\n//# sourceURL=webpack://landingpage/./src/app.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n/* harmony import */ var _states_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/_root */ \"./src/states/_root/index.ts\");\n\n\nconst app = new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\napp.setNavgation({}, _states_root__WEBPACK_IMPORTED_MODULE_1__[\"default\"], app);\n\n\n//# sourceURL=webpack://landingpage/./src/index.ts?");

/***/ }),

/***/ "./src/plugins/hash/index.ts":
/*!***********************************!*\
  !*** ./src/plugins/hash/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hash)\n/* harmony export */ });\n/* harmony import */ var _push__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push */ \"./src/plugins/hash/push.ts\");\n\nclass Hash extends _push__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super(...arguments);\n        this.on = false;\n        this.back = false;\n    }\n    remove() {\n        if (this.on)\n            window.history.back();\n        if (this.cb)\n            this.cb();\n    }\n}\n\n\n//# sourceURL=webpack://landingpage/./src/plugins/hash/index.ts?");

/***/ }),

/***/ "./src/plugins/hash/plugin.ts":
/*!************************************!*\
  !*** ./src/plugins/hash/plugin.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HashPlugin)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/plugins/hash/index.ts\");\n\nfunction HashPlugin(base) {\n    return class extends base {\n        constructor() {\n            super(...arguments);\n            this.hash = new ___WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        }\n        setHash() {\n            window.onhashchange = e => {\n                if (e.newURL.split(\"#\").length > 1)\n                    this.hash.on = true;\n                else\n                    this.hash.remove();\n            };\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./src/plugins/hash/plugin.ts?");

/***/ }),

/***/ "./src/plugins/hash/push.ts":
/*!**********************************!*\
  !*** ./src/plugins/hash/push.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Push)\n/* harmony export */ });\nclass Push {\n    push(hash) {\n        window.location.hash = hash;\n    }\n}\n\n\n//# sourceURL=webpack://landingpage/./src/plugins/hash/push.ts?");

/***/ }),

/***/ "./src/plugins/index.ts":
/*!******************************!*\
  !*** ./src/plugins/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Plugins)\n/* harmony export */ });\n/* harmony import */ var _hash_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hash/plugin */ \"./src/plugins/hash/plugin.ts\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ \"./src/plugins/lib.ts\");\n/* harmony import */ var _navigation_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/plugin */ \"./src/plugins/navigation/plugin.ts\");\n\n\n\nclass Plugins extends (0,_navigation_plugin__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_hash_plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_lib__WEBPACK_IMPORTED_MODULE_1__.Root)) {\n}\n\n\n//# sourceURL=webpack://landingpage/./src/plugins/index.ts?");

/***/ }),

/***/ "./src/plugins/lib.ts":
/*!****************************!*\
  !*** ./src/plugins/lib.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Root: () => (/* binding */ Root)\n/* harmony export */ });\nclass Root {\n    constructor() {\n        this.root = document.querySelector(\"#root\");\n    }\n}\n\n\n//# sourceURL=webpack://landingpage/./src/plugins/lib.ts?");

/***/ }),

/***/ "./src/plugins/navigation/index.ts":
/*!*****************************************!*\
  !*** ./src/plugins/navigation/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\nclass Navigation {\n    constructor(state, replaceRoot) {\n        this.state = state;\n        this.replaceRoot = replaceRoot ? true : false;\n    }\n    async next(option, app) {\n        const newState = new option.next(app);\n        newState.previous = this.state;\n        this.state = newState;\n        const path = `${option.next.path}/${option.param ? option.param.join('/') : \"\"}${option.param ? option.param.length ? \"/\" : \"\" : \"\"}`;\n        window.history.pushState({ name: this.state.name }, \"\", path);\n        if (option.param)\n            this.state.setParametros(option.param);\n        await this.state.setup();\n        await this.setPage(app);\n    }\n    async back(frompop, app) {\n        if (!frompop)\n            return window.history.back();\n        if (!this.state.previous || (this.state.previous.name === \"root\" && this.replaceRoot))\n            return;\n        const aux = this.state;\n        this.state = this.state.previous;\n        this.state.forward = aux;\n        console.log(\"antes do setpage\", this.state);\n        if (this.state.page && this.state.forward.page && app) {\n            console.log(\"setpage\", this.state.page);\n            await this.setPage(app);\n        }\n    }\n    async forward(app) {\n        if (!this.state.forward)\n            return;\n        this.state = this.state.forward;\n        await this.state.setup();\n        await this.setPage(app);\n    }\n    async push(state, app) {\n        const aux = this.state;\n        this.state = state;\n        this.state.previous = aux;\n        await this.state.setup();\n        await this.setPage(app);\n        const param = Object.values(this.state.parametros);\n        const pathname = `${this.state.name}/${param ? param.join('/') : \"\"}${param ? param.length ? \"/\" : \"\" : \"\"}`;\n        if (window.location.pathname === \"/\" && this.replaceRoot)\n            window.history.replaceState({ name: this.state.name }, \"\", pathname);\n        else\n            window.history.pushState({ name: this.state.name }, \"\", pathname);\n    }\n    async replace(state, app) {\n        const aux = this.state;\n        this.state = state;\n        this.state.previous = aux;\n        await this.state.setup();\n        await this.setPage(app);\n        const param = Object.values(this.state.parametros);\n        const pathname = `${this.state.name}/${param ? param.join('/') : \"\"}${param ? param.length ? \"/\" : \"\" : \"\"}`;\n        window.history.replaceState({ name: this.state.name }, \"\", pathname);\n    }\n    async read(path, app, replace) {\n        if (!path.length)\n            return true;\n        const key = path.shift();\n        if (key === \"\" && !path.length)\n            return;\n        if (!key || (!this.state.childrens[key] && !this.state.childrens[\"*\"]))\n            return console.error(key, \"não existe em:\", this.state.name);\n        const k = this.state.childrens[key] ? key : \"*\";\n        const state = new this.state.childrens[k](app);\n        if (k === \"*\")\n            path.push(key);\n        path = state.setParametros(path);\n        console.log(\"path\", path);\n        if (replace)\n            await this.replace(state, app);\n        else\n            await this.push(state, app);\n        await this.read(path, app);\n    }\n    async setPage(app) {\n        if (this.state.page) {\n            const page = new this.state.page(app);\n            app.root.innerHTML = \"\";\n            app.root.appendChild(page.element);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://landingpage/./src/plugins/navigation/index.ts?");

/***/ }),

/***/ "./src/plugins/navigation/plugin.ts":
/*!******************************************!*\
  !*** ./src/plugins/navigation/plugin.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavigationPlugin)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/plugins/navigation/index.ts\");\n/* harmony import */ var _states_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../states/_root */ \"./src/states/_root/index.ts\");\n\n\nfunction NavigationPlugin(base) {\n    return class extends base {\n        constructor() {\n            super(...arguments);\n            this.navigation = new ___WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _states_root__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({}));\n        }\n        setNavgation(childrens, rootPage, app) {\n            this.navigation = new ___WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _states_root__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rootPage));\n            this.navigation.setPage(app);\n            window.onpopstate = e => {\n                e.preventDefault();\n                console.log(\"entro aqui\", window.location.hash, app.hash.on);\n                if (window.location.hash)\n                    return;\n                if (app.hash.on) {\n                    app.hash.on = false;\n                    app.hash.remove();\n                    if (!app.hash.back)\n                        return;\n                }\n                if (this.navigation.state.forward && e.state && this.navigation.state.forward.name === e.state.name)\n                    this.navigation.forward(app);\n                else\n                    this.navigation.back(true, app);\n            };\n            if (!window.location.pathname.endsWith(\"/\"))\n                window.location.pathname = window.location.pathname + \"/\";\n            const pathname = window.location.pathname.substring(1).split('/');\n            if (pathname.length === 1)\n                this.navigation.setPage(app);\n            else {\n                window.history.replaceState({ name: \"root\" }, \"\", \"/\");\n                this.navigation.read(pathname, app);\n            }\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./src/plugins/navigation/plugin.ts?");

/***/ }),

/***/ "./src/plugins/navigation/state/index.ts":
/*!***********************************************!*\
  !*** ./src/plugins/navigation/state/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StateBase: () => (/* binding */ StateBase)\n/* harmony export */ });\nclass StateBase {\n    constructor() {\n        this.childrens = {};\n        this.parametros = {};\n    }\n}\n\n\n//# sourceURL=webpack://landingpage/./src/plugins/navigation/state/index.ts?");

/***/ }),

/***/ "./src/states/_root/index.ts":
/*!***********************************!*\
  !*** ./src/states/_root/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Root)\n/* harmony export */ });\n/* harmony import */ var _plugins_navigation_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/navigation/state */ \"./src/plugins/navigation/state/index.ts\");\n/* harmony import */ var _propriedades_componente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../propriedades/componente */ \"./src/states/propriedades/componente.ts\");\n/* harmony import */ var _propriedades_parametrosGenerico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../propriedades/parametrosGenerico */ \"./src/states/propriedades/parametrosGenerico.ts\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ \"./src/states/_root/page.ts\");\n\n\n\n\nclass Root extends (0,_propriedades_componente__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_propriedades_parametrosGenerico__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_plugins_navigation_state__WEBPACK_IMPORTED_MODULE_0__.StateBase)) {\n    constructor(childrens, page) {\n        super();\n        this.options = {};\n        this.previous = undefined;\n        this.title = \"Root\";\n        this.name = \"root\";\n        this.icons = [{\n                title: \"Conta\",\n                type: \"route\",\n                route: \"/account\",\n                param: {}\n            }];\n        this.page = _page__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        this.parametros = {};\n        this.childrens = childrens;\n    }\n    async setup() {\n    }\n    setParametros(route) {\n        return [];\n    }\n}\nRoot.path = \"\";\n\n\n//# sourceURL=webpack://landingpage/./src/states/_root/index.ts?");

/***/ }),

/***/ "./src/states/_root/page.ts":
/*!**********************************!*\
  !*** ./src/states/_root/page.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootPage)\n/* harmony export */ });\n/* harmony import */ var zeyo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zeyo */ \"./node_modules/zeyo/lib/index.js\");\n\nclass RootPage extends zeyo__WEBPACK_IMPORTED_MODULE_0__.ZeyoAs {\n    constructor(app) {\n        super(\"main\");\n        this.children((0,zeyo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\").text(\"Início de tudo\"));\n    }\n}\n\n\n//# sourceURL=webpack://landingpage/./src/states/_root/page.ts?");

/***/ }),

/***/ "./src/states/propriedades/componente.ts":
/*!***********************************************!*\
  !*** ./src/states/propriedades/componente.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ComponenteGenerico)\n/* harmony export */ });\n/* harmony import */ var zeyo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zeyo */ \"./node_modules/zeyo/lib/index.js\");\n\nfunction ComponenteGenerico(base) {\n    return class extends base {\n        async setComponente(app) {\n            return (0,zeyo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\").class(\"generico\");\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./src/states/propriedades/componente.ts?");

/***/ }),

/***/ "./src/states/propriedades/parametrosGenerico.ts":
/*!*******************************************************!*\
  !*** ./src/states/propriedades/parametrosGenerico.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ParametrosGenerico)\n/* harmony export */ });\nfunction ParametrosGenerico(base) {\n    return class extends base {\n        constructor() {\n            super(...arguments);\n            this.parametros = {};\n        }\n        setParametros(route) {\n            return route;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./src/states/propriedades/parametrosGenerico.ts?");

/***/ }),

/***/ "./node_modules/zeyo/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/zeyo/lib/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ZeyoAs: () => (/* reexport safe */ _zeyo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"default\": () => (/* binding */ Z)\n/* harmony export */ });\n/* harmony import */ var _zeyo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zeyo */ \"./node_modules/zeyo/lib/zeyo.js\");\n\n\nfunction Z(tagName) {\n    return new _zeyo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tagName);\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/index.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/_root.js":
/*!***************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/_root.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Root)\n/* harmony export */ });\nclass Root {\n    constructor(tagName) {\n        this.element = document.createElement(tagName);\n    }\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/_root.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/addClass.js":
/*!******************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/addClass.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddClass)\n/* harmony export */ });\nfunction AddClass(base) {\n    return class extends base {\n        class(...tokens) {\n            this.element.classList.add(...tokens);\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/addClass.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/attribute.js":
/*!*******************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/attribute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Attribute)\n/* harmony export */ });\nfunction Attribute(base) {\n    return class extends base {\n        attributes(atribs) {\n            for (const key in atribs) {\n                this.element.setAttribute(key, atribs[key]);\n            }\n            return this;\n        }\n        attribute(key, value) {\n            this.element.setAttribute(key, value);\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/attribute.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/children.js":
/*!******************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/children.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Children)\n/* harmony export */ });\nfunction Children(base) {\n    return class extends base {\n        children(...child) {\n            child.forEach(c => {\n                if (typeof c === \"string\")\n                    this.element.innerHTML += c;\n                else\n                    this.element.appendChild(c.element);\n            });\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/children.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/click.js":
/*!***************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/click.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Click)\n/* harmony export */ });\nfunction Click(base) {\n    return class extends base {\n        click(cb) {\n            this.element.onclick = cb;\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/click.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/html.js":
/*!**************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/html.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HTML)\n/* harmony export */ });\nfunction HTML(base) {\n    return class extends base {\n        HTML(t) {\n            this.element.innerHTML = t;\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/html.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/object.js":
/*!****************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/object.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Object)\n/* harmony export */ });\nfunction Object(base) {\n    return class extends base {\n        object(cb) {\n            cb(this);\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/object.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/on.js":
/*!************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/on.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ On)\n/* harmony export */ });\nfunction On(base) {\n    return class extends base {\n        on(event, cb) {\n            if (Object.prototype.hasOwnProperty.call(this.element, `on${event}`))\n                this.element[`on${event}`] = cb;\n            else\n                console.error(`Event: on${event} doesn't exist in ${this.element}`);\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/on.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/properties/text.js":
/*!**************************************************!*\
  !*** ./node_modules/zeyo/lib/properties/text.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Text)\n/* harmony export */ });\nfunction Text(base) {\n    return class extends base {\n        text(t) {\n            this.element.innerText = t;\n            return this;\n        }\n    };\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/properties/text.js?");

/***/ }),

/***/ "./node_modules/zeyo/lib/zeyo.js":
/*!***************************************!*\
  !*** ./node_modules/zeyo/lib/zeyo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Zeyo)\n/* harmony export */ });\n/* harmony import */ var _properties_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties/addClass */ \"./node_modules/zeyo/lib/properties/addClass.js\");\n/* harmony import */ var _properties_attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/attribute */ \"./node_modules/zeyo/lib/properties/attribute.js\");\n/* harmony import */ var _properties_children__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/children */ \"./node_modules/zeyo/lib/properties/children.js\");\n/* harmony import */ var _properties_click__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/click */ \"./node_modules/zeyo/lib/properties/click.js\");\n/* harmony import */ var _properties_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/html */ \"./node_modules/zeyo/lib/properties/html.js\");\n/* harmony import */ var _properties_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/object */ \"./node_modules/zeyo/lib/properties/object.js\");\n/* harmony import */ var _properties_on__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/on */ \"./node_modules/zeyo/lib/properties/on.js\");\n/* harmony import */ var _properties_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties/text */ \"./node_modules/zeyo/lib/properties/text.js\");\n/* harmony import */ var _properties_root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties/_root */ \"./node_modules/zeyo/lib/properties/_root.js\");\n\n\n\n\n\n\n\n\n\nclass Zeyo extends (0,_properties_text__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_properties_on__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_properties_object__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_properties_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_properties_click__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_properties_children__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_properties_attribute__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_properties_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_properties_root__WEBPACK_IMPORTED_MODULE_8__[\"default\"])))))))) {\n    constructor(tagName) {\n        super(tagName);\n    }\n    set(property, value) {\n        this.element[property] = value;\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack://landingpage/./node_modules/zeyo/lib/zeyo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;