(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.component */ "./src/app/components/autocomplete/autocomplete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'autocomplete', component: _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngxPagination';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _materialtwo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./materialtwo */ "./src/app/materialtwo.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.component */ "./src/app/components/autocomplete/autocomplete.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_16__["AutocompleteComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _materialtwo__WEBPACK_IMPORTED_MODULE_11__["MaterialtwoModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p { \r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-size: 100%;\r\n  padding: 20px;\r\n }\r\n\r\n .example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n .example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n .example-option-img {\r\n  vertical-align: middle;\r\n  margin-right: 8px;\r\n}\r\n\r\n [dir='rtl'] .example-option-img {\r\n  margin-right: 0;\r\n  margin-left: 8px;\r\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n\n  <h1 class=\"lg\">Planets</h1>\n\n  <mat-card class=\"w500 center black\" *ngFor=\" let planet of planets | paginate : { itemsPerPage:2, currentPage: d }\">\n\n\n\n    <mat-card-title>\n      <h3 class=\"black\">Planet Name: {{planet.name}}</h3>\n    </mat-card-title>\n    <mat-card-content class=\"black\">\n      <ul>\n        <li>Rotation Period: {{planet.rotation_period}}</li>\n        <li>Rotation Period: {{planet.rotation_period}}</li>\n        <li>Diameter: {{planet.diameter}}</li>\n        <li>Climate: {{planet.climate}}</li>\n        <li>Gravity: {{planet.gravity}}</li>\n        <li>Terrain: {{planet.terrain }}</li>\n        <li>Surface Water: {{planet.surface_water }}</li>\n        <li>Population: {{planet.population }}</li>\n        <li class=\"long\">Residents: {{planet.residents }}</li>\n        <li class=\"long\">Films: {{planet.films }}</li>\n        <li>Created: {{planet.created }}</li>\n        <li>Edited: {{planet.edited }}</li>\n        <li>Url: {{planet.url }}</li>\n      </ul>\n    </mat-card-content>\n\n    <mat-card-actions class=\"center\">\n      <button mat-raised-button class=\"green\">Zobacz więcej</button>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n\n\n  </mat-card>\n\n</div>\n\n<div class=\"w500\">\n  <pagination-controls class=\"center\" (pageChange)=\"d =$event\"></pagination-controls>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.users = [
            {
                firstName: 'Piotr',
                lastName: 'Adamkowski',
                age: 32
            },
            {
                firstName: 'Piotrek',
                lastName: 'Adamkowsky',
                age: 37
            }
        ];
        // Planets Data
        this.planets = [
            {
                name: 'Tatoine',
                rotation_period: 23,
                orbital_period: 304,
                residents: [
                    'https://swapi.co/api/people/1/',
                    'https://swapi.co/api/people/2/'
                ],
                diameter: 10465,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Tatoria',
                rotation_period: 33,
                orbital_period: 304,
                residents: [
                    'https://swapi.co/api/people/1/',
                    'https://swapi.co/api/people/2/'
                ],
                diameter: 10465,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Oxant',
                rotation_period: 34,
                orbital_period: 305,
                residents: [
                    'https://swapi.co/api/people/1/ ',
                    'https://swapi.co/api/people/2/ ',
                    'https://swapi.co/api/people/3/'
                ],
                diameter: 10488,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Baros',
                rotation_period: 23,
                orbital_period: 304,
                residents: [
                    'https://swapi.co/api/people/1/',
                    'https://swapi.co/api/people/2/'
                ],
                diameter: 10465,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Talos',
                rotation_period: 33,
                orbital_period: 304,
                residents: [
                    'https://swapi.co/api/people/1/',
                    'https://swapi.co/api/people/2/'
                ],
                diameter: 10465,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Nyxt',
                rotation_period: 34,
                orbital_period: 305,
                residents: [
                    'https://swapi.co/api/people/1/ ',
                    'https://swapi.co/api/people/2/ ',
                    'https://swapi.co/api/people/3/'
                ],
                diameter: 10488,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Alderaan',
                rotation_period: 24,
                orbital_period: 364,
                diameter: 12500,
                climate: 'temperate',
                gravity: '1 standard',
                terrain: 'grasslands, mountains',
                surface_water: 40,
                population: 2000000000,
                residents: [
                    'https://swapi.co/api/people/5/',
                    'https://swapi.co/api/people/68/',
                    'https://swapi.co/api/people/81/'
                ],
                films: [
                    'https://swapi.co/api/films/6/',
                    'https://swapi.co/api/films/1/'
                ],
                created: '2014 - 12 - 10T11: 35: 48.479000Z',
                edited: '2014 - 12 - 20T20: 58: 18.420000Z',
                url: 'https://swapi.co/api/planets/2/'
            },
            {
                name: 'Yavin IV',
                rotation_period: 24,
                orbital_period: 4818,
                diameter: 10200,
                climate: 'temperate, tropical',
                gravity: '1 standard',
                terrain: 'jungle, rainforests',
                surface_water: 8,
                population: 1000,
                residents: [],
                films: [
                    'https://swapi.co/api/films/1/'
                ],
                created: '2014 - 12 - 10T11: 37: 19.144000Z',
                edited: '2014 - 12 - 20T20: 58: 18.421000Z',
                url: 'https://swapi.co/api/planets/3/'
            },
            {
                name: 'Hoth',
                rotation_period: 23,
                orbital_period: 549,
                diameter: 7200,
                climate: 'frozen',
                gravity: '1.1 standard',
                terrain: 'tundra, ice caves, mountain ranges',
                surface_water: 100,
                population: 'unknown',
                residents: [],
                films: [
                    'https://swapi.co/api/films/2/'
                ],
                created: '2014 - 12 - 10T11: 39: 13.934000Z',
                edited: '2014 - 12 - 20T20: 58: 18.423000Z',
                url: 'https://swapi.co/api/planets/4/'
            },
            {
                name: 'Dagobah',
                rotation_period: 23,
                orbital_period: 341,
                diameter: 8900,
                climate: 'murky',
                gravity: 'N / A',
                terrain: 'swamp, jungles',
                surface_water: 8,
                population: 'unknown',
                residents: [],
                films: [
                    'https://swapi.co/api/films/2/',
                    'https://swapi.co/api/films/6/',
                    'https://swapi.co/api/films/3/'
                ],
                created: '2014 - 12 - 10T11: 42: 22.590000Z',
                edited: '2014 - 12 - 20T20: 58: 18.425000Z',
                url: 'https://swapi.co/api/planets/5/'
            },
            {
                name: 'Bespin',
                rotation_period: 12,
                orbital_period: 5110,
                diameter: 118000,
                climate: 'temperate',
                gravity: '1.5(surface), 1 standard(Cloud City)',
                terrain: 'gas giant',
                surface_water: 0,
                population: 6000000,
                residents: [
                    'https://swapi.co/api/people/26/'
                ],
                films: [
                    'https://swapi.co/api/films/2/'
                ],
                created: '2014 - 12 - 10T11: 43: 55.240000Z',
                edited: '2014 - 12 - 20T20: 58: 18.427000Z',
                url: 'https://swapi.co/api/planets/6/'
            },
            {
                name: 'Endor',
                rotation_period: 18,
                orbital_period: 402,
                diameter: 4900,
                climate: 'temperate',
                gravity: '0.85 standard',
                terrain: 'forests, mountains, lakes',
                surface_water: 8,
                population: 30000000,
                residents: [
                    'https://swapi.co/api/people/30/'
                ],
                films: [
                    ' https://swapi.co/api/films/3/'
                ],
                created: '2014 - 12 - 10T11: 50: 29.349000Z',
                edited: '2014 - 12 - 20T20: 58: 18.429000Z',
                url: 'https://swapi.co/api/planets/7/'
            },
            {
                name: 'Naboo',
                rotation_period: 26,
                orbital_period: 312,
                diameter: 12120,
                climate: 'temperate',
                gravity: '1 standard',
                terrain: 'grassy hills, swamps, forests, mountains',
                surface_water: 12,
                population: 4500000000,
                residents: [
                    'https://swapi.co/api/people/3/',
                    'https://swapi.co/api/people/21/',
                    'https://swapi.co/api/people/36/',
                ],
                films: [
                    'https://swapi.co/api/films/5/',
                    'https://swapi.co/api/films/4/',
                    'https://swapi.co/api/films/6/',
                    'https://swapi.co/api/films/3/'
                ],
                created: '2014 - 12 - 10T11: 52: 31.066000Z',
                edited: '2014 - 12 - 20T20: 58: 18.430000Z',
                url: ' https://swapi.co/api/planets/8/'
            },
            {
                name: 'Coruscant',
                rotation_period: 24,
                orbital_period: 368,
                diameter: 12240,
                climate: 'temperate',
                gravity: '1 standard',
                terrain: 'cityscape, mountains',
                surface_water: 'unknown',
                population: 1000000000000,
                residents: [
                    'https://swapi.co/api/people/34/',
                    'https://swapi.co/api/people/55/',
                    'https://swapi.co/api/people/74'
                ],
                films: [
                    'https://swapi.co/api/films/5/',
                    'https://swapi.co/api/films/4/',
                    'https://swapi.co/api/films/6/',
                    'https://swapi.co/api/films/3/'
                ],
                created: '2014 - 12 - 10T11: 54: 13.921000Z',
                edited: '2014 - 12 - 20T20: 58: 18.432000Z',
                url: 'https://swapi.co/api/planets/9/'
            },
            {
                name: 'Kamino',
                rotation_period: 27,
                orbital_period: 463,
                diameter: 19720,
                climate: 'temperate',
                gravity: '1 standard',
                terrain: 'ocean',
                surface_water: 100,
                population: 1000000000,
                residents: [
                    'https://swapi.co/api/people/22/',
                    'https://swapi.co/api/people/72/',
                    'https://swapi.co/api/people/73/'
                ],
                films: [
                    'https://swapi.co/api/films/5/'
                ],
                created: '2014 - 12 - 10T12: 45: 06.577000Z',
                edited: '2014 - 12 - 20T20: 58: 18.434000Z',
                url: 'https://swapi.co/api/planets/10/'
            },
            {
                name: 'Geonosis',
                rotation_period: 30,
                orbital_period: 256,
                diameter: 11370,
                climate: 'temperate, arid',
                gravity: '0.9 standard',
                terrain: 'rock, desert, mountain, barren',
                surface_water: 5,
                population: 100000000000,
                residents: [
                    'https://swapi.co/api/people/63/'
                ],
                films: [
                    'https://swapi.co/api/films/5/'
                ],
                created: '2014 - 12 - 10T12: 47: 22.350000Z',
                edited: '2014 - 12 - 20T20: 58: 18.437000Z',
                url: 'https://swapi.co/api/planets/11/'
            },
            {
                name: 'Tatoine',
                rotation_period: 23,
                orbital_period: 304,
                residents: [
                    'https://swapi.co/api/people/1/',
                    'https://swapi.co/api/people/2/'
                ],
                diameter: 10465,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Tatoria',
                rotation_period: 33,
                orbital_period: 304,
                residents: [
                    'https://swapi.co/api/people/1/',
                    'https://swapi.co/api/people/2/'
                ],
                diameter: 10465,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Oxant',
                rotation_period: 34,
                orbital_period: 305,
                residents: [
                    'https://swapi.co/api/people/1/ ',
                    'https://swapi.co/api/people/2/ ',
                    'https://swapi.co/api/people/3/'
                ],
                diameter: 10488,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Baros',
                rotation_period: 23,
                orbital_period: 304,
                residents: [
                    'https://swapi.co/api/people/1/',
                    'https://swapi.co/api/people/2/'
                ],
                diameter: 10465,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Talos',
                rotation_period: 33,
                orbital_period: 304,
                residents: [
                    'https://swapi.co/api/people/1/',
                    'https://swapi.co/api/people/2/'
                ],
                diameter: 10465,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Nyxt',
                rotation_period: 34,
                orbital_period: 305,
                residents: [
                    'https://swapi.co/api/people/1/ ',
                    'https://swapi.co/api/people/2/ ',
                    'https://swapi.co/api/people/3/'
                ],
                diameter: 10488,
                climate: 'arid',
                gravity: '1 standard',
                created: '2014-12-09T13:50:49.641000Z',
                edited: '2014-12-21T20:48:04.175778Z',
                url: 'https://swapi.co/api/planets/1/',
            },
            {
                name: 'Alderaan',
                rotation_period: 24,
                orbital_period: 364,
                diameter: 12500,
                climate: 'temperate',
                gravity: '1 standard',
                terrain: 'grasslands, mountains',
                surface_water: 40,
                population: 2000000000,
                residents: [
                    'https://swapi.co/api/people/5/',
                    'https://swapi.co/api/people/68/',
                    'https://swapi.co/api/people/81/'
                ],
                films: [
                    'https://swapi.co/api/films/6/',
                    'https://swapi.co/api/films/1/'
                ],
                created: '2014 - 12 - 10T11: 35: 48.479000Z',
                edited: '2014 - 12 - 20T20: 58: 18.420000Z',
                url: 'https://swapi.co/api/planets/2/'
            },
            {
                name: 'Yavin IV',
                rotation_period: 24,
                orbital_period: 4818,
                diameter: 10200,
                climate: 'temperate, tropical',
                gravity: '1 standard',
                terrain: 'jungle, rainforests',
                surface_water: 8,
                population: 1000,
                residents: [],
                films: [
                    'https://swapi.co/api/films/1/'
                ],
                created: '2014 - 12 - 10T11: 37: 19.144000Z',
                edited: '2014 - 12 - 20T20: 58: 18.421000Z',
                url: 'https://swapi.co/api/planets/3/'
            },
            {
                name: 'Hoth',
                rotation_period: 23,
                orbital_period: 549,
                diameter: 7200,
                climate: 'frozen',
                gravity: '1.1 standard',
                terrain: 'tundra, ice caves, mountain ranges',
                surface_water: 100,
                population: 'unknown',
                residents: [],
                films: [
                    'https://swapi.co/api/films/2/'
                ],
                created: '2014 - 12 - 10T11: 39: 13.934000Z',
                edited: '2014 - 12 - 20T20: 58: 18.423000Z',
                url: 'https://swapi.co/api/planets/4/'
            },
            {
                name: 'Dagobah',
                rotation_period: 23,
                orbital_period: 341,
                diameter: 8900,
                climate: 'murky',
                gravity: 'N / A',
                terrain: 'swamp, jungles',
                surface_water: 8,
                population: 'unknown',
                residents: [],
                films: [
                    'https://swapi.co/api/films/2/',
                    'https://swapi.co/api/films/6/',
                    'https://swapi.co/api/films/3/'
                ],
                created: '2014 - 12 - 10T11: 42: 22.590000Z',
                edited: '2014 - 12 - 20T20: 58: 18.425000Z',
                url: 'https://swapi.co/api/planets/5/'
            },
            {
                name: 'Bespin',
                rotation_period: 12,
                orbital_period: 5110,
                diameter: 118000,
                climate: 'temperate',
                gravity: '1.5(surface), 1 standard(Cloud City)',
                terrain: 'gas giant',
                surface_water: 0,
                population: 6000000,
                residents: [
                    'https://swapi.co/api/people/26/'
                ],
                films: [
                    'https://swapi.co/api/films/2/'
                ],
                created: '2014 - 12 - 10T11: 43: 55.240000Z',
                edited: '2014 - 12 - 20T20: 58: 18.427000Z',
                url: 'https://swapi.co/api/planets/6/'
            },
            {
                name: 'Endor',
                rotation_period: 18,
                orbital_period: 402,
                diameter: 4900,
                climate: 'temperate',
                gravity: '0.85 standard',
                terrain: 'forests, mountains, lakes',
                surface_water: 8,
                population: 30000000,
                residents: [
                    'https://swapi.co/api/people/30/'
                ],
                films: [
                    ' https://swapi.co/api/films/3/'
                ],
                created: '2014 - 12 - 10T11: 50: 29.349000Z',
                edited: '2014 - 12 - 20T20: 58: 18.429000Z',
                url: 'https://swapi.co/api/planets/7/'
            },
            {
                name: 'Naboo',
                rotation_period: 26,
                orbital_period: 312,
                diameter: 12120,
                climate: 'temperate',
                gravity: '1 standard',
                terrain: 'grassy hills, swamps, forests, mountains',
                surface_water: 12,
                population: 4500000000,
                residents: [
                    'https://swapi.co/api/people/3/',
                    'https://swapi.co/api/people/21/',
                    'https://swapi.co/api/people/36/',
                ],
                films: [
                    'https://swapi.co/api/films/5/',
                    'https://swapi.co/api/films/4/',
                    'https://swapi.co/api/films/6/',
                    'https://swapi.co/api/films/3/'
                ],
                created: '2014 - 12 - 10T11: 52: 31.066000Z',
                edited: '2014 - 12 - 20T20: 58: 18.430000Z',
                url: ' https://swapi.co/api/planets/8/'
            },
            {
                name: 'Coruscant',
                rotation_period: 24,
                orbital_period: 368,
                diameter: 12240,
                climate: 'temperate',
                gravity: '1 standard',
                terrain: 'cityscape, mountains',
                surface_water: 'unknown',
                population: 1000000000000,
                residents: [
                    'https://swapi.co/api/people/34/',
                    'https://swapi.co/api/people/55/',
                    'https://swapi.co/api/people/74'
                ],
                films: [
                    'https://swapi.co/api/films/5/',
                    'https://swapi.co/api/films/4/',
                    'https://swapi.co/api/films/6/',
                    'https://swapi.co/api/films/3/'
                ],
                created: '2014 - 12 - 10T11: 54: 13.921000Z',
                edited: '2014 - 12 - 20T20: 58: 18.432000Z',
                url: 'https://swapi.co/api/planets/9/'
            },
            {
                name: 'Kamino',
                rotation_period: 27,
                orbital_period: 463,
                diameter: 19720,
                climate: 'temperate',
                gravity: '1 standard',
                terrain: 'ocean',
                surface_water: 100,
                population: 1000000000,
                residents: [
                    'https://swapi.co/api/people/22/',
                    'https://swapi.co/api/people/72/',
                    'https://swapi.co/api/people/73/'
                ],
                films: [
                    'https://swapi.co/api/films/5/'
                ],
                created: '2014 - 12 - 10T12: 45: 06.577000Z',
                edited: '2014 - 12 - 20T20: 58: 18.434000Z',
                url: 'https://swapi.co/api/planets/10/'
            },
            {
                name: 'Geonosis',
                rotation_period: 30,
                orbital_period: 256,
                diameter: 11370,
                climate: 'temperate, arid',
                gravity: '0.9 standard',
                terrain: 'rock, desert, mountain, barren',
                surface_water: 5,
                population: 100000000000,
                residents: [
                    'https://swapi.co/api/people/63/'
                ],
                films: [
                    'https://swapi.co/api/films/5/'
                ],
                created: '2014 - 12 - 10T12: 47: 22.350000Z',
                edited: '2014 - 12 - 20T20: 58: 18.437000Z',
                url: 'https://swapi.co/api/planets/11/'
            }
        ];
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form black\">\n  <mat-card class=\"center black\">\n    <mat-card-title>Pick the Planet</mat-card-title>\n    <mat-card-content>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo quis nulla vitae. Sit, cumque earum! Quo\n        ipsa, ex quasi officiis laboriosam numquam culpa perspiciatis voluptates ab? Sapiente delectus autem est. Error\n        nobis reprehenderit deleniti minima! Ullam aperiam dolorem nesciunt, consectetur nam veritatis error! Hic, sunt?\n        Fugit, hic laudantium id omnis expedita ad, earum atque obcaecati soluta repellat odit vero eum? Perspiciatis\n        quibusdam quod, commodi fugiat dolore incidunt laudantium? Aut aliquam eius totam molestiae nisi nostrum ipsum\n        eaque inventore at mollitia laudantium sequi, placeat earum ducimus error commodi natus quae magnam?\n        Necessitatibus ex laborum quia. Id nihil numquam fuga odit eos maiores excepturi veniam cupiditate esse, quas\n        aspernatur laborum in optio rem pariatur sit nulla. Alias, ratione repudiandae! Dolorem nemo labore, maxime rem\n        recusandae perferendis voluptatem quasi magnam ratione ducimus molestias eveniet fugit. Nemo, sit sequi\n        doloribus atque debitis dolorem mollitia magnam iusto necessitatibus temporibus odit ipsa possimus quos\n        excepturi minus at a fugiat deserunt similique quas? Ducimus, perferendis maxime quae incidunt qui reprehenderit\n        cumque iste soluta possimus similique odio dolorum porro nesciunt nobis laudantium obcaecati vero placeat\n        molestias eveniet beatae provident delectus illo enim. Autem iusto quas cupiditate iste molestias ullam, ad\n        quidem voluptates in commodi alias sequi at?</p>\n      <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\"\n            [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n              {{option}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </form>\n    </mat-card-content>\n\n\n\n\n  </mat-card>"

/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.ts ***!
  \*******************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = ['Tatoine', 'Alderaan', 'Yavin IV', 'Hoth', 'Dagobah', 'Endor', 'Naboo', 'Cruscant', 'Kamino'];
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/components/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.css */ "./src/app/components/autocomplete/autocomplete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"100px\">\n  <mat-grid-tile>\n    <p>CopyRight</p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <p>SWAPI 2019</p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <p>OpenGateWe.com</p>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\na:hover {\r\n  background: coral;\r\n  padding: 3px;\r\n  border-radius: 15%;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n  <h1 class=\"lg\">Star Wars API</h1>\n  <h3 class=\"md\">Discover Planets</h3>\n  <button mat-raised-button [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\" class=\"green\">Get\n    Started</button>\n</div>\n\n<mat-grid-list cols=\"3\" rowHeight=\"4:1\">\n\n  <mat-grid-tile>\n    <h3>Discover Star Wars Planets</h3>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <h3>Search Habitat</h3>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <h3>Any Other Topics</h3>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-grid-list cols=\"3\" rowHeight=\"5:1\">\n  <mat-grid-tile>\n    <p class=\"sm\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum vel sit voluptates. Explicabo\n      dolorum\n      assumenda, fugit a excepturi soluta?</p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <p class=\"sm\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum vel sit voluptates. Explicabo\n      dolorum\n      assumenda, fugit a excepturi soluta?</p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <p class=\"sm\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum vel sit voluptates. Explicabo\n      dolorum\n      assumenda, fugit a excepturi soluta?</p>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'ngxPagination';
        this.collection = [];
        for (var i = 1; i <= 100; i++) {
            this.collection.push("Simply Data Probes " + i + ".0");
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"black\">\n  <mat-toolbar-row>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon class=\"material-icons.md-36\">menu</mat-icon>\n    </button>\n    <span>Star Wars API</span>\n\n    <mat-menu #menu=\"matMenu\" class=\"black\">\n      <button mat-menu-item [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">\n        <mat-icon class=\"black\">home</mat-icon>\n        <span class=\"black\">Home</span>\n      </button>\n      <button mat-menu-item [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">\n        <mat-icon class=\"black\">subject</mat-icon>\n        <span class=\"black\">Planets</span>\n      </button>\n      <button mat-menu-item [routerLink]=\"['/user']\" routerLinkActive=\"router-link-active\">\n        <mat-icon class=\"black\">new_releases</mat-icon>\n        <span class=\"black\">Spec</span>\n      </button>\n      <button mat-menu-item [routerLink]=\"['/autocomplete']\" routerLinkActive=\"router-link-active\">\n        <mat-icon class=\"black\">assignment</mat-icon>\n        <span class=\"black\">List</span>\n      </button>\n    </mat-menu>\n\n\n    <span class=\"example-spacer\"></span>\n    <!-- -->\n    <a mat-button routerLink=\"/autocomplete\">\n      <mat-icon class=\"example-icon black material-icons.md-36\">search</mat-icon>\n    </a>\n\n\n\n\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p { \r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-size: 100%;\r\n  padding: 20px;\r\n }\r\n .center {\r\n   margin-left: 20px;\r\n }\r\n .wrapper {\r\n   display:-ms-grid;\r\n   display:grid;\r\n   -ms-grid-columns: 60% 40%;\r\n       grid-template-columns: 60% 40%;\r\n   padding: 20px;\r\n }"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Specification SWAPI Planets</h1>\n\n\n<h3>List of Planets</h3>\n\n<p>Write an application that presents a list of planets. Data should be requested from an external server. Use this\n  service - https://swapi.co/api/planets/. You may choose in what way you wish to present the list, as long as it is\n  pleasing to the user’s eye.</p>\n\n<p>The application should have a search bar located at the top of the list. A user should be able to type a string\n  phrase\n  into the search input and the planet list should be filtered by their names.</p>\n\n<p>The list presented should also contain pagination with an option to navigate to different pages in addition to\n  another\n  option in order to select the page size (possible values should be 5, 10, 25, 100).</p>\n\n<p> user should also have an option to view the details of their selected planet. Clicking on a planet should navigate\n  the user to a page where the details of the planet are presented. At the top of that page should be a ‘back’ button\n  that navigates back to the list. Navigation should be possible by changing only the URL.</p>\n\n<p>Prepare your own design for the application, not forgetting to make it as user friendly as possible. In case of\n  problems with availability of API, prepare a JSON file populated with mock/dummy data (architecture has to\n  be written to easy switch to API) </p>\n\n\n<mat-grid-list cols=\"2\" rowHeight=\"4:1\">\n  <mat-grid-tile>\n    <h3>Technical Requairements</h3>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <h3>Accomplished</h3>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-grid-list cols=\"2\" rowHeight=\"4:1\">\n  <mat-grid-tile>\n    <p>1. HTML CSS RWD</p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-icon>trending_up</mat-icon>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-grid-list cols=\"2\" rowHeight=\"4:1\">\n  <mat-grid-tile>\n    <p>2. Latest Angular & Typescript.</p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-icon>trending_up</mat-icon>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-grid-list cols=\"2\" rowHeight=\"4:1\">\n  <mat-grid-tile>\n    <p>3. Angular library like material, ngrx, rxjs </p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-icon>trending_up</mat-icon>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-grid-list cols=\"2\" rowHeight=\"4:1\">\n  <mat-grid-tile>\n    <p>4. Npm, yarn 5. Webpack / Bazel / Rollup / SystemJs for building application </p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-icon>trending_up</mat-icon>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-grid-list cols=\"2\" rowHeight=\"4:1\">\n  <mat-grid-tile>\n    <p>5. Webpack / Bazel / Rollup / SystemJs for building application</p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-icon>trending_up</mat-icon>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-grid-list cols=\"2\" rowHeight=\"4:1\">\n  <mat-grid-tile>\n    <p>6. Application should run </p>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-icon>trending_up</mat-icon>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/materialtwo.ts":
/*!********************************!*\
  !*** ./src/app/materialtwo.ts ***!
  \********************************/
/*! exports provided: MaterialtwoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialtwoModule", function() { return MaterialtwoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialtwoModule = /** @class */ (function () {
    function MaterialtwoModule() {
    }
    MaterialtwoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"]],
            exports: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"]],
        })
    ], MaterialtwoModule);
    return MaterialtwoModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mujlo\Projekty\ngMaterial-Copy1\ng-mat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map