(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-home-home-module"],{

/***/ "./src/main/webapp/app/components/main/home/home-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/components/main/home/home-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cs_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cs/main */ "./src/main/webapp/app/components/main/index.ts");
/* harmony import */ var _cs_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cs/consts */ "./src/main/webapp/app/components/core/consts.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var homeRoutes = [
    {
        path: "", component: _cs_main__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], children: [
            {
                path: "", component: _cs_main__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"]
            },
            {
                path: _cs_consts__WEBPACK_IMPORTED_MODULE_2__["APP_URLS"].RATION_DETAILS, component: _cs_main__WEBPACK_IMPORTED_MODULE_1__["RationDetailsComponent"]
            },
            {
                path: "", pathMatch: "full", redirectTo: _cs_consts__WEBPACK_IMPORTED_MODULE_2__["APP_URLS"].DASHBOARD
            }
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(homeRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/main/webapp/app/components/main/home/home.module.ts":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/components/main/home/home.module.ts ***!
  \*****************************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cs_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cs/main */ "./src/main/webapp/app/components/main/index.ts");
/* harmony import */ var _cs_main_home_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cs/main/home/home-routing.module */ "./src/main/webapp/app/components/main/home/home-routing.module.ts");
/* harmony import */ var _cs_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cs/common/shared.module */ "./src/main/webapp/app/components/common/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _cs_main_home_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                _cs_common_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [
                _cs_main__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                _cs_main__WEBPACK_IMPORTED_MODULE_1__["RationDetailsComponent"],
                _cs_main__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"]
            ],
            providers: [],
            entryComponents: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-home-home-module.js.map