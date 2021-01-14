(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'front-end';
    }
    ngOnInit() {
        console.log('auto login');
        this.authService.autoLogin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container", "full-view"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".full-view[_ngcontent-%COMP%] {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtdmlldyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _services_game_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/game-interceptor.service */ "./src/app/services/game-interceptor.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _games_game_display_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./games/game-display.pipe */ "./src/app/games/game-display.pipe.ts");
/* harmony import */ var _gameroom_bid_display_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gameroom/bid-display.pipe */ "./src/app/gameroom/bid-display.pipe.ts");
/* harmony import */ var _gameroom_score_table_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gameroom/score-table.pipe */ "./src/app/gameroom/score-table.pipe.ts");
/* harmony import */ var _router_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./router.module */ "./src/app/router.module.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _games_create_game_create_game_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./games/create-game/create-game.component */ "./src/app/games/create-game/create-game.component.ts");
/* harmony import */ var _gameroom_gameroom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gameroom/gameroom.component */ "./src/app/gameroom/gameroom.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _gameroom_bid_bid_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gameroom/bid/bid.component */ "./src/app/gameroom/bid/bid.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _gameroom_rook_card_rook_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gameroom/rook-card/rook-card.component */ "./src/app/gameroom/rook-card/rook-card.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _gameroom_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./gameroom/action-bar/action-bar.component */ "./src/app/gameroom/action-bar/action-bar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _gameroom_info_snack_info_snack_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gameroom/info-snack/info-snack.component */ "./src/app/gameroom/info-snack/info-snack.component.ts");
/* harmony import */ var _gameroom_player_player_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./gameroom/player/player.component */ "./src/app/gameroom/player/player.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _gameroom_chat_chat_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./gameroom/chat/chat.component */ "./src/app/gameroom/chat/chat.component.ts");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptorService"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_game_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["GameInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _router_module__WEBPACK_IMPORTED_MODULE_12__["RoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _games_games_component__WEBPACK_IMPORTED_MODULE_8__["GamesComponent"],
        _games_game_display_pipe__WEBPACK_IMPORTED_MODULE_9__["DisplayPipe"],
        _gameroom_bid_display_pipe__WEBPACK_IMPORTED_MODULE_10__["BidDisplayPipe"],
        _gameroom_score_table_pipe__WEBPACK_IMPORTED_MODULE_11__["TableColorPipe"],
        _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _games_create_game_create_game_component__WEBPACK_IMPORTED_MODULE_15__["CreateGameComponent"],
        _gameroom_gameroom_component__WEBPACK_IMPORTED_MODULE_16__["GameroomComponent"],
        _gameroom_bid_bid_component__WEBPACK_IMPORTED_MODULE_20__["BidComponent"],
        _gameroom_rook_card_rook_card_component__WEBPACK_IMPORTED_MODULE_22__["RookCardComponent"],
        _gameroom_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_24__["ActionBarComponent"],
        _gameroom_info_snack_info_snack_component__WEBPACK_IMPORTED_MODULE_26__["InfoSnackComponent"],
        _gameroom_player_player_component__WEBPACK_IMPORTED_MODULE_27__["PlayerComponent"],
        _gameroom_chat_chat_component__WEBPACK_IMPORTED_MODULE_30__["ChatComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _router_module__WEBPACK_IMPORTED_MODULE_12__["RoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _games_games_component__WEBPACK_IMPORTED_MODULE_8__["GamesComponent"],
                    _games_game_display_pipe__WEBPACK_IMPORTED_MODULE_9__["DisplayPipe"],
                    _gameroom_bid_display_pipe__WEBPACK_IMPORTED_MODULE_10__["BidDisplayPipe"],
                    _gameroom_score_table_pipe__WEBPACK_IMPORTED_MODULE_11__["TableColorPipe"],
                    _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _games_create_game_create_game_component__WEBPACK_IMPORTED_MODULE_15__["CreateGameComponent"],
                    _gameroom_gameroom_component__WEBPACK_IMPORTED_MODULE_16__["GameroomComponent"],
                    _gameroom_bid_bid_component__WEBPACK_IMPORTED_MODULE_20__["BidComponent"],
                    _gameroom_rook_card_rook_card_component__WEBPACK_IMPORTED_MODULE_22__["RookCardComponent"],
                    _gameroom_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_24__["ActionBarComponent"],
                    _gameroom_info_snack_info_snack_component__WEBPACK_IMPORTED_MODULE_26__["InfoSnackComponent"],
                    _gameroom_player_player_component__WEBPACK_IMPORTED_MODULE_27__["PlayerComponent"],
                    _gameroom_chat_chat_component__WEBPACK_IMPORTED_MODULE_30__["ChatComponent"],
                ],
                entryComponents: [
                    _gameroom_bid_bid_component__WEBPACK_IMPORTED_MODULE_20__["BidComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _router_module__WEBPACK_IMPORTED_MODULE_12__["RoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptorService"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_game_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["GameInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            return !!user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(isAuth => {
            console.log(isAuth);
            if (!isAuth) {
                this.router.navigate(['/login']);
            }
        }));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(user => {
            if (!user) {
                return next.handle(req);
            }
            else {
                console.log(req);
                const modifiedReq = req.clone({ headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'auth-token': user.token }) });
                return next.handle(modifiedReq);
            }
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    signup(username, email, password) {
        return this.http.post('api/user/register', {
            name: username,
            email: email,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    }
    signin(email, password) {
        return this.http.post('api/user/login', {
            email: email,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            console.log('data');
            this.handleAuthentication(resData.name, resData.token);
        }));
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData);
        if (!userData) {
            return;
        }
        const expirationDate = new Date(userData.expiration);
        const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](userData.name, userData.id, userData.token, expirationDate);
        if (loadedUser.token) {
            const expirationDuration = (+expirationDate * 1000) - Date.now();
            this.autoLogout(expirationDuration);
            this.user.next(loadedUser);
        }
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            console.log('logged out');
            this.logout();
        }, expirationDuration);
    }
    handleAuthentication(name, token) {
        console.log(name);
        const data = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
        const id = data['_id'];
        const expirationDate = new Date(+data['exp']);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](name, id, token, expirationDate);
        localStorage.setItem('userData', JSON.stringify(user));
        this.user.next(user);
        const expirationDuration = (+expirationDate * 1000) - Date.now();
        this.autoLogout(expirationDuration);
        this.router.navigate(['/games']);
    }
    handleErrors(errorRes) {
        let errorMessage = errorRes.error;
        console.log(errorRes);
        console.log(errorRes);
        let message = 'an unkown error has occured';
        switch (errorMessage) {
            case 'INVALID_PASSWORD':
                message = 'email or password is incorrect';
                break;
            case 'INVALID_EMAIL':
                message = 'email or password is incorrect';
                break;
            case 'USERNAME_EXISTS':
                message = 'this username is taken';
                break;
            case 'EMAIL_EXISTS':
                message = "this email is taken";
                break;
            case 'INVALID_REGISTRATION':
                message = "invalid registration password and username must be at least 6 characters";
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(message);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.error = null;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmit() {
        if (this.loginForm.valid) {
            const email = this.loginForm.get('email').value;
            const password = this.loginForm.get('password').value;
            this.authService.signin(email, password).subscribe(resData => {
                console.log(resData);
            }, errorMessage => {
                this.error = errorMessage;
                console.log(this.error);
            });
        }
        this.loginForm.reset();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 4, consts: [[1, "col-sm-12", "col-md-6", "col-md-offset-3"], ["class", "row", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "auth-button"], ["type", "button", "routerLink", "/register", 1, "btn", "btn-primary", "auth-button"], [1, "row"], [1, "col-sm-6"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".auth-button[_ngcontent-%COMP%] {\n    margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtYnV0dG9uIHtcbiAgICBtYXJnaW46IDJweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function RegisterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'passwords': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'confPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            }, this.passwordValidator.bind(this))
        });
    }
    passwordValidator(group) {
        const password = group.controls.password.value;
        const confPassword = group.controls.confPassword.value;
        if (password !== confPassword) {
            return { 'password does not match confermation password': true };
        }
        return null;
    }
    onSubmit() {
        console.log(this.signupForm);
        if (this.signupForm.valid) {
            const username = this.signupForm.get('username').value;
            const email = this.signupForm.get('email').value;
            const password = this.signupForm.get('passwords').get('password').value;
            this.authService.signup(username, email, password).subscribe(resData => {
                console.log(resData);
                this.router.navigate(['/login']);
            }, errorRes => {
                this.error = errorRes;
            });
        }
        this.signupForm.reset();
        this.router;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 25, vars: 4, consts: [[1, "row"], [1, "col-sm-6", "col-md-6", "col-md-offset-3"], ["class", "row", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "username", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["formGroupName", "passwords", 1, "from-group"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["for", "confPassword"], ["type", "password", "id", "confPassword", "formControlName", "confPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "auth-button"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-primary", "auth-button"], [1, "col-sm-6"], [1, "alert", "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Confermation Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.signupForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".auth-button[_ngcontent-%COMP%] {\n    margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmF1dGgtYnV0dG9uIHtcbiAgICBtYXJnaW46IDJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name, id, token, expiration) {
        this.name = name;
        this.id = id;
        this.token = token;
        this.expiration = expiration;
    }
}


/***/ }),

/***/ "./src/app/gameroom/action-bar/action-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/gameroom/action-bar/action-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: ActionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _rook_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rook-action */ "./src/app/gameroom/rook-action.ts");
/* harmony import */ var src_app_services_models_color_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/models/color.model */ "./src/app/services/models/color.model.ts");
/* harmony import */ var _snack_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../snack-data */ "./src/app/gameroom/snack-data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function ActionBarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_div_2_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.decrementBid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_div_2_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.incrementBid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.payload, " ");
} }
function ActionBarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose a color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Green");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Choose number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "13");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_div_5_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.emitAction("choose_partner", { color: _r11.value, value: _r12.value }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.emitAction("round_info", true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.emitAction("redeal", true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.emitAction("redeal", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.emitAction("discard", null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Discard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.emitAction("bid", ctx_r23.data.payload); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionBarComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBarComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.emitAction("bid", 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ActionBarComponent {
    //@Output() action = new EventEmitter<any>();
    constructor(data) {
        this.data = data;
        this.action = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.values = [1, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        this.colors = ['red', 'blue', 'green', 'black'];
        this.message = this.data.message;
        this.bid = (this.data.action === 'bid');
        this.discard = (this.data.action === "discard");
        this.redeal = (this.data.action === "redeal");
        this.choosePartner = (this.data.action === "choose_partner");
        this.roundInfo = (this.data.action === "round_info");
        this.startingBid = this.data.payload;
    }
    decrementBid() {
        if (this.data.payload > this.startingBid) {
            this.data.payload -= 5;
        }
    }
    incrementBid() {
        this.data.payload += 5;
    }
    emitAction(action, payload) {
        //'bid' | 'discard'
        if (action == 'bid') {
            this.action.next(new _rook_action__WEBPACK_IMPORTED_MODULE_3__["RookAction"]('bid', payload));
        }
        else if (action == 'discard') {
            this.action.next(new _rook_action__WEBPACK_IMPORTED_MODULE_3__["RookAction"]('discard', payload));
        }
        else if (action === 'redeal') {
            this.action.next(new _rook_action__WEBPACK_IMPORTED_MODULE_3__["RookAction"]('redeal', payload));
        }
        else if (action === 'choose_partner') {
            if (this.values.includes(+payload.value) && this.colors.includes(payload.color)) {
                switch (payload.color) {
                    case 'black':
                        payload.color = src_app_services_models_color_model__WEBPACK_IMPORTED_MODULE_4__["Color"].BLACK;
                        break;
                    case 'red':
                        payload.color = src_app_services_models_color_model__WEBPACK_IMPORTED_MODULE_4__["Color"].RED;
                        break;
                    case 'blue':
                        payload.color = src_app_services_models_color_model__WEBPACK_IMPORTED_MODULE_4__["Color"].YELLOW;
                        break;
                    case 'green':
                        payload.color = src_app_services_models_color_model__WEBPACK_IMPORTED_MODULE_4__["Color"].GREEN;
                        break;
                }
                payload.value = +payload.value;
                this.action.next(new _rook_action__WEBPACK_IMPORTED_MODULE_3__["RookAction"]('choose_partner', payload));
            }
        }
        else if (action === 'round_info') {
            this.action.next(new _rook_action__WEBPACK_IMPORTED_MODULE_3__["RookAction"]('round_info', payload));
        }
    }
}
ActionBarComponent.ɵfac = function ActionBarComponent_Factory(t) { return new (t || ActionBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])); };
ActionBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionBarComponent, selectors: [["app-action-bar"]], decls: 12, vars: 9, consts: [[1, "snack-container"], [1, "snack-message"], ["class", "bid-flex", 4, "ngIf"], [1, "snack-actions"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "mr", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "bid-flex"], [1, "current_bid"], [1, "subtract", 3, "click"], [1, "add", 3, "click"], ["appearance", "fill"], ["input1", ""], ["value", "blue"], ["value", "green"], ["value", "black"], ["value", "red"], ["input2", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "mr", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function ActionBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActionBarComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActionBarComponent_div_5_Template, 51, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ActionBarComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ActionBarComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActionBarComponent_button_8_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ActionBarComponent_button_9_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActionBarComponent_button_10_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActionBarComponent_button_11_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.choosePartner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roundInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.redeal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.redeal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.discard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".snack-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n\n.snack-actions[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n}\n\n.snack-message[_ngcontent-%COMP%] {\n    flex: 1;\n    align-items: center;\n    display: flex;\n}\n\n.mat-form-field[_ngcontent-%COMP%]{\n    background-color: white;\n}\n\n.mr[_ngcontent-%COMP%] {\n    margin-right: .5em;\n}\n\n.current_bid[_ngcontent-%COMP%] {\n    font-weight: 500;\n    color: white;\n    font-size: 30px;\n    width: 50px;\n    display: inline-block;\n}\n\n.add[_ngcontent-%COMP%] {\n    background-image: url('add_circle_outline-24px.svg');\n    background-repeat: no-repeat;\n    background-size: contain;\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n}\n\n.subtract[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background-image: url('remove_circle_outline-24px.svg');\n    width: 30px;\n    height: 30px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    display: inline-block;\n    margin-left: 10px;\n    margin-right: 5px;\n}\n\n.bid-flex[_ngcontent-%COMP%] {\n    flex: 1;\n    align-items: center;\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXJvb20vYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0RBQW1FO0lBQ25FLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1REFBc0U7SUFDdEUsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksT0FBTztJQUNQLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXJvb20vYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc25hY2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zbmFjay1hY3Rpb25zIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zbmFjay1tZXNzYWdlIHtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1hdC1mb3JtLWZpZWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubXIge1xuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbn1cblxuLmN1cnJlbnRfYmlkIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWRkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9hZGRfY2lyY2xlX291dGxpbmUtMjRweC5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJ0cmFjdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL3JlbW92ZV9jaXJjbGVfb3V0bGluZS0yNHB4LnN2Z1wiKTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYmlkLWZsZXgge1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-bar',
                templateUrl: "./action-bar.component.html",
                styleUrls: ["./action-bar.component.css"]
            }]
    }], function () { return [{ type: _snack_data__WEBPACK_IMPORTED_MODULE_5__["SnackData"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/gameroom/bid-display.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/gameroom/bid-display.pipe.ts ***!
  \**********************************************/
/*! exports provided: BidDisplayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidDisplayPipe", function() { return BidDisplayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BidDisplayPipe {
    transform(bidWinner, index, players) {
        return players[(bidWinner - index + players.length) % players.length];
    }
}
BidDisplayPipe.ɵfac = function BidDisplayPipe_Factory(t) { return new (t || BidDisplayPipe)(); };
BidDisplayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bidDisplay", type: BidDisplayPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidDisplayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'bidDisplay',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/gameroom/bid/bid.component.ts":
/*!***********************************************!*\
  !*** ./src/app/gameroom/bid/bid.component.ts ***!
  \***********************************************/
/*! exports provided: BidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidComponent", function() { return BidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class BidComponent {
    constructor(game, dialogRef, data) {
        this.game = game;
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    ngOnInit() {
        this.bidForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'bid': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](+this.data.bid + 5, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    submitHandler() {
        console.log('submit');
        console.log(this.bidForm.value['bid']);
        if (this.bidForm.value['bid'] > this.data.bid && this.bidForm.value['bid'] % 5 == 0) {
            this.dialogRef.close();
        }
    }
    pass() {
        this.game.bidding = false;
        this, this.dialogRef.close();
    }
}
BidComponent.ɵfac = function BidComponent_Factory(t) { return new (t || BidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
BidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BidComponent, selectors: [["app-bid"]], decls: 13, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-sm"], ["matInput", "", "placeholder", "Bid", "formControlName", "bid"], ["mat-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["mat-button", "", "color", "primary", "type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function BidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BidComponent_Template_form_ngSubmit_0_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BidComponent_Template_button_click_11_listener() { return ctx.pass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.bidForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.bidForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n    margin-right: 15px;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n    max-width: 90vw;\n}\n\n.subheading[_ngcontent-%COMP%] {\n    font-weight: 500;\n    color: grey;\n}\n\n.subheadingbold[_ngcontent-%COMP%] {\n    font-weight: 500;\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXJvb20vYmlkL2JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dhbWVyb29tL2JpZC9iaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4uc3ViaGVhZGluZ2JvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bid',
                templateUrl: './bid.component.html',
                styleUrls: ['./bid.component.css']
            }]
    }], function () { return [{ type: src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/gameroom/chat/chat.component.ts":
/*!*************************************************!*\
  !*** ./src/app/gameroom/chat/chat.component.ts ***!
  \*************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/web-socket.service */ "./src/app/web-socket.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");







const _c0 = ["message"];
const _c1 = ["scrollbox"];
const _c2 = ["chat"];
const _c3 = ["circle"];
const _c4 = function () { return { "color": "white" }; };
function ChatComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.numberOfUnreadMessages);
} }
function ChatComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r6.user);
} }
function ChatComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_8_div_2_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("me", message_r6.me)("other", !message_r6.me);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !message_r6.me);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r6.message);
} }
class ChatComponent {
    constructor(socketService, authService, gameService, eRef) {
        this.socketService = socketService;
        this.authService = authService;
        this.gameService = gameService;
        this.eRef = eRef;
        this.chatOpen = false;
        this.messages = [];
        this.numberOfUnreadMessages = 0;
        socketService.listen('new_message').subscribe((message) => {
            this.authService.user.subscribe(user => {
                console.log(user.id);
                console.log(message.user_id);
                if (!(user.id === message.user_id)) {
                    message = Object.assign(Object.assign({}, message), { me: false });
                    this.messages.push(message);
                    if (!this.chatOpen) {
                        this.numberOfUnreadMessages++;
                    }
                }
                this.scrollbox.nativeElement.scrollTop = this.scrollbox.nativeElement.scrollHeight;
            });
        });
    }
    clickout(event) {
        console.log(event.target);
        if (this.chat.nativeElement.contains(event.target)) {
        }
        else if (this.chatOpen && !this.circle.nativeElement.contains(event.target)) {
            this.chatOpen = false;
        }
    }
    toggleChat() {
        this.chatOpen = !this.chatOpen;
        if (this.chatOpen) {
            setTimeout(() => {
                this.message.nativeElement.focus();
            }, 0);
        }
        this.numberOfUnreadMessages = 0;
    }
    keyDown(event) {
        if (event.keyCode === 13) {
            this.sendMessage(this.message.nativeElement.value);
        }
    }
    sendMessage(message) {
        console.log('message');
        this.message.nativeElement.value = "";
        this.authService.user.subscribe(user => {
            this.messages.push({ user: user.name, user_id: user.id, message: message, me: true });
            this.gameService.game.subscribe((game) => {
                this.socketService.emit('message', { name: user.name, user_id: user.id, message: message, game_id: game.id });
            });
        });
    }
    ngOnInit() {
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.message = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollbox = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chat = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.circle = _t.first);
    } }, hostBindings: function ChatComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 14, vars: 4, consts: [["class", "square-icon", 3, "ngStyle", 4, "ngIf"], [1, "circle-button", 3, "click"], ["circle", ""], [1, "circle-icon"], [1, "info-box"], ["chat", ""], [1, "messages"], ["scrollbox", ""], [3, "me", "other", 4, "ngFor", "ngForOf"], [1, "input-container"], ["autocomplete", "off", "type", "text", "autofocus", "", "matInput", "", 1, "message-input", 3, "keydown"], ["message", ""], ["type", "submit", 1, "btn", "btn-primary", "message-submit-button", 3, "click"], [1, "square-icon", 3, "ngStyle"], ["class", "message-title", 4, "ngIf"], [1, "message"], [1, "message-title"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_div_0_Template, 2, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_1_listener() { return ctx.toggleChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_div_8_Template, 5, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ChatComponent_Template_input_keydown_10_listener($event) { return ctx.keyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.sendMessage(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberOfUnreadMessages > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show-chat", ctx.chatOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: [".circle-icon[_ngcontent-%COMP%] {\n    background-image: url('chat.svg');\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n    background-size: contain;\n    background-position: center center;\n    position: relative;\n    cursor: pointer;\n}\n\n.square-icon[_ngcontent-%COMP%] {\n    left: 77px;\n    bottom: 88px;\n    position: fixed;\n    background: red;\n    border-radius: 50%;\n    font-weight: 500;\n    display: flex;\n    width: 25px;\n    height: 25px;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    z-index: 999;\n}\n\n.circle-button[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 50px;\n    bottom: 50px;\n    background: rgb(233, 233, 233);\n    border-radius: 50%;\n    display: flex;\n    width: 50px;\n    height: 50px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid rgb(200, 200, 200);\n    cursor: pointer;\n}\n\n.chat-box[_ngcontent-%COMP%] {\n    position: fixed;\n    right: 50px;\n    top: 150px;\n}\n\n.info-box[_ngcontent-%COMP%] {\n    visibility: hidden;\n    position: absolute;\n    width: 300px;\n    height: 60vh;\n    max-height: 500px;\n    display: flex;\n    flex-direction: column;\n    bottom: 105px;\n    left: 72px;\n    background: #484848;\n    color: white;\n    border-radius: 5px;\n    padding: 15px;\n    padding-right: 0px;\n    padding-left: 0px;\n    user-select: none;\n    \n    -webkit-user-select: none;\n    \n    -khtml-user-select: none;\n    \n    -moz-user-select: none;\n    \n    -ms-user-select: none;\n    \n}\n\n.show-chat[_ngcontent-%COMP%] {\n    visibility: visible!important;\n}\n\n.messages[_ngcontent-%COMP%] {\n    flex: 1;\n    overflow: scroll;\n}\n\n\n\n.messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n}\n\n\n\n.messages[_ngcontent-%COMP%] {\n    -ms-overflow-style: none;\n    \n    scrollbar-width: none;\n    \n}\n\n.input-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    margin-right: 15px;\n    margin-left: 15px;\n    margin-top: 5px;\n}\n\n.message-input[_ngcontent-%COMP%] {\n    outline: none;\n    border: none;\n    flex: 1;\n    padding: 10px;\n    color: black;\n    border-radius: 4px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    margin: 0px;\n    background: white;\n}\n\n.message-submit-button[_ngcontent-%COMP%] {\n    width: 70px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n\n.me[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n    padding: 0px;\n    margin-bottom: 5px;\n}\n\n.other[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    width: 100%;\n    padding: 0px;\n    margin-bottom: 5px;\n}\n\n.other[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%] {\n    text-align: left;\n    display: block;\n    color: white;\n    margin-left: 15px;\n}\n\n.me[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.message-title[_ngcontent-%COMP%] {\n    display: block;\n    color: white;\n    margin-right: 15px;\n    font-weight: 700;\n    font-size: 13px;\n}\n\n.other[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.message[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    color: black;\n    padding: 5px;\n    padding-left: 8px;\n    padding-right: 8px;\n    margin-top: 3px;\n    margin-right: 15px;\n    margin-left: 15px;\n}\n\n.other[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n    background: #f3f2f3;\n}\n\n.me[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n    background: #8180ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXJvb20vY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBK0M7SUFDL0MsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7O0FBR0EsZ0RBQWdEOztBQUVoRDtJQUNJLGFBQWE7QUFDakI7O0FBR0EsNENBQTRDOztBQUU1QztJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXJvb20vY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvY2hhdC5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcXVhcmUtaWNvbiB7XG4gICAgbGVmdDogNzdweDtcbiAgICBib3R0b206IDg4cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5jaXJjbGUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNTBweDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGF0LWJveCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIHRvcDogMTUwcHg7XG59XG5cbi5pbmZvLWJveCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3R0b206IDEwNXB4O1xuICAgIGxlZnQ6IDcycHg7XG4gICAgYmFja2dyb3VuZDogIzQ4NDg0ODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBTYWZhcmkgKi9cbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIEZpcmVmb3ggKi9cbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xufVxuXG4uc2hvdy1jaGF0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudDtcbn1cblxuLm1lc3NhZ2VzIHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuXG4ubWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuXG4ubWVzc2FnZXMge1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAvKiBGaXJlZm94ICovXG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubWVzc2FnZS1zdWJtaXQtYnV0dG9uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xufVxuXG4ubWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm90aGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ub3RoZXIgLm1lc3NhZ2UtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWUgLm1lc3NhZ2UtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWVzc2FnZS10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm90aGVyIC5tZXNzYWdlLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWVzc2FnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ub3RoZXIgLm1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNmM2YyZjM7XG59XG5cbi5tZSAubWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogIzgxODBmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: src_app_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['message']
        }], scrollbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollbox']
        }], chat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chat']
        }], circle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['circle']
        }], clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/gameroom/gameroom-gaurd.service.ts":
/*!****************************************************!*\
  !*** ./src/app/gameroom/gameroom-gaurd.service.ts ***!
  \****************************************************/
/*! exports provided: GameroomGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameroomGaurdService", function() { return GameroomGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/games.service */ "./src/app/services/games.service.ts");





class GameroomGaurdService {
    constructor(router, gameService) {
        this.router = router;
        this.gameService = gameService;
    }
    canActivate(route, router) {
        return this.gameService.game.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            return !!user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(partOfGame => {
            console.log(partOfGame);
            if (!partOfGame) {
                this.router.navigate(['/games']);
            }
        }));
    }
}
GameroomGaurdService.ɵfac = function GameroomGaurdService_Factory(t) { return new (t || GameroomGaurdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"])); };
GameroomGaurdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameroomGaurdService, factory: GameroomGaurdService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameroomGaurdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gameroom/gameroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/gameroom/gameroom.component.ts ***!
  \************************************************/
/*! exports provided: GameroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameroomComponent", function() { return GameroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bid_bid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bid/bid.component */ "./src/app/gameroom/bid/bid.component.ts");
/* harmony import */ var _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-bar/action-bar.component */ "./src/app/gameroom/action-bar/action-bar.component.ts");
/* harmony import */ var _snack_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snack-data */ "./src/app/gameroom/snack-data.ts");
/* harmony import */ var _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/models/round-stage.model */ "./src/app/services/models/round-stage.model.ts");
/* harmony import */ var _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/models/color.model */ "./src/app/services/models/color.model.ts");
/* harmony import */ var _services_models_play_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/models/play.model */ "./src/app/services/models/play.model.ts");
/* harmony import */ var _services_models_move_type_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/models/move-type.model */ "./src/app/services/models/move-type.model.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../web-socket.service */ "./src/app/web-socket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./player/player.component */ "./src/app/gameroom/player/player.component.ts");
/* harmony import */ var _info_snack_info_snack_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info-snack/info-snack.component */ "./src/app/gameroom/info-snack/info-snack.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/gameroom/chat/chat.component.ts");
/* harmony import */ var _rook_card_rook_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rook-card/rook-card.component */ "./src/app/gameroom/rook-card/rook-card.component.ts");
/* harmony import */ var _bid_display_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bid-display.pipe */ "./src/app/gameroom/bid-display.pipe.ts");
/* harmony import */ var _score_table_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./score-table.pipe */ "./src/app/gameroom/score-table.pipe.ts");






















function GameroomComponent_div_1_app_player_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 3);
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playerInfo", ctx_r7.playerInfo)("playerIndex", i_r9 + 2)("globalIndex", (ctx_r7.index + i_r9 + 2) % ctx_r7.numberOfPlayers);
} }
function GameroomComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameroomComponent_div_1_app_player_1_Template, 1, 3, "app-player", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.topPlayers);
} }
function GameroomComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} }
function GameroomComponent_div_5_app_rook_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-rook-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameroomComponent_div_5_app_rook_card_1_Template_app_rook_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const card_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.cardClicked(card_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r11);
} }
function GameroomComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameroomComponent_div_5_app_rook_card_1_Template, 1, 1, "app-rook-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.kitty);
} }
function GameroomComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-rook-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameroomComponent_div_8_Template_app_rook_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cardClicked(ctx_r14.card); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r3.playedCards[0]);
} }
function GameroomComponent_app_rook_card_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-rook-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameroomComponent_app_rook_card_9_Template_app_rook_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const card_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.cardClicked(card_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r16);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function GameroomComponent_table_11_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "bidDisplay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "tableColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const round_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](round_r20.points[ctx_r19.index]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](round_r20.points[(ctx_r19.index + 1) % ctx_r19.numberOfPlayers]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](round_r20.bid === 75 ? "80" : round_r20.bid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 5, round_r20.bidWinner, ctx_r19.index, ctx_r19.playerNames));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, round_r20.trump)));
} }
function GameroomComponent_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "We");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "They");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Er");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "trump");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GameroomComponent_table_11_tr_12_Template, 13, 13, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.rounds);
} }
function GameroomComponent_table_12_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r24);
} }
function GameroomComponent_table_12_tr_10_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r28 = ctx.index;
    const round_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](round_r25.points[(ctx_r26.index + i_r28) % ctx_r26.numberOfPlayers]);
} }
function GameroomComponent_table_12_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameroomComponent_table_12_tr_10_td_1_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "bidDisplay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "tableColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const round_r25 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", round_r25.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](round_r25.bid === 75 ? "80" : round_r25.bid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 4, round_r25.bidWinner, ctx_r22.index, ctx_r22.playerNames));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, round_r25.trump)));
} }
function GameroomComponent_table_12_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r30);
} }
function GameroomComponent_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameroomComponent_table_12_th_3_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bidder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Trump");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameroomComponent_table_12_tr_10_Template, 10, 12, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GameroomComponent_table_12_td_13_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.playerNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.rounds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.points);
} }
const _c1 = function (a0) { return { "current-player": a0 }; };
class GameroomComponent {
    constructor(snackBar, router, gameService, authService, dialog, socketService) {
        this.snackBar = snackBar;
        this.router = router;
        this.gameService = gameService;
        this.authService = authService;
        this.dialog = dialog;
        this.socketService = socketService;
        this.snack = null;
        this.snackMove = null;
        this.turn = null;
        this.misdealSnackBar = null;
        this.misdeal = null;
        this.trumpSnackBar = null;
        this.yourTurn = false;
        this.playedCards = [];
        this.playerNames = [];
        this.hands = [];
        this.points = [];
        this.playing = false;
        this.trump = null;
        this.rounds = [];
        this.playerInfo = {
            "playerNames": [],
            "playedCards": [],
            "currentPlayer": null,
            "playing": null,
            "hands": [],
            "bidWinner": null,
            "bids": [],
            "roundState": null,
            "bidders": []
        };
        this.isLeading = false;
        this.topPlayers = [];
        this.throwOutPoints = false;
    }
    ngOnInit() {
        this.gameService.fetchGames(); //Incase of refresh fetches games then checks if your in any of them then sends you to gameroom
        this.gameService.gameState.subscribe(game => {
            if (game && game !== null) {
                this.gameService.yourIndex.subscribe(index => {
                    this.hands = [];
                    this.playerNames = [];
                    this.playedCards = [];
                    this.points = [];
                    for (let i = 0; i < game.numberOfPlayers; i++) {
                        this.hands.push(null);
                        this.playerNames.push(null);
                        this.playedCards.push(null);
                        this.points.push(0);
                    }
                    if (this.playerNames.length > 3) {
                        this.topPlayers = this.playerNames.slice(2, this.playerNames.length - 1);
                    }
                    this.index = index;
                    this.throwOutPoints = game.throwOutPoints;
                    console.log('throw out points');
                    console.log(this.throwOutPoints);
                    console.log(index);
                    this.rounds = game.rounds;
                    this.game_id = game.game_id;
                    var round = game['rounds'][game['currentRoundIndex']];
                    var misdeals = round.misdeals;
                    var misdeal = false;
                    if (misdeals.includes(index) && round.hasBid[index] === false) {
                        this.snackInput(new _snack_data__WEBPACK_IMPORTED_MODULE_3__["SnackData"]('Would you like a redeal?', 'redeal', null));
                        misdeal = true;
                    }
                    else if (misdeals.includes(index)) {
                        this.misdealSnackBar = this.snackBar.open("You have already bid! You cannot call a misdeal anymore!", null, {
                            duration: 2000,
                        });
                    }
                    this.gameStage = round.roundState;
                    this.yourTurn = game['currentPlayer'] === index ? true : false;
                    this.numberOfPlayers = game['numberOfPlayers'];
                    this.currentPlayerIndex = (game['currentPlayer'] - index + this.numberOfPlayers) % this.numberOfPlayers;
                    var players = game.players;
                    var numberOfPlayers = players.length;
                    var playCards = round.tricks[round.tricks.length - 1];
                    var d = true;
                    if (playCards) {
                        this.currentTrickColor = playCards.color;
                        playCards = playCards.cards;
                        for (let card of playCards) {
                            if (card !== null) {
                                d = false;
                            }
                        }
                    }
                    var delay = d && round.tricks.length > 1;
                    console.log(round.tricks);
                    if (delay) {
                        playCards = round.tricks[round.tricks.length - 2].cards;
                    }
                    this.isLeading = d;
                    var timeout = 0;
                    if (game.rounds.length > 1 && d && round.tricks.length === 0 && round.bidders.length === this.numberOfPlayers && round.bid === 75) {
                        this.cards = [];
                        this.hands = [[], [], [], []];
                        this.kitty = [];
                        this.playing = true;
                        var indexOfTrick = game.rounds[game.rounds.length - 2].tricks.length;
                        var playCards = game.rounds[game.rounds.length - 2].tricks[indexOfTrick - 2].cards;
                        for (var i = 0; i < players.length; i++) {
                            if (players[(i + index) % numberOfPlayers]) {
                                if (playCards && playCards[(i + index) % numberOfPlayers] !== null) {
                                    this.playedCards[i] = playCards[(i + index) % numberOfPlayers];
                                }
                                else {
                                    this.playedCards[i] = null;
                                }
                            }
                        }
                        timeout = 5000;
                        this.trump = null;
                    }
                    else if (!(this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].PLAYING)) {
                        this.playing = false;
                    }
                    setTimeout(() => {
                        this.kitty = round.kitty;
                        this.playing = false;
                        for (var i = 0; i < players.length; i++) {
                            if (players[(i + index) % numberOfPlayers]) {
                                if (playCards && playCards[(i + index) % numberOfPlayers] !== null) {
                                    this.playedCards[i] = playCards[(i + index) % numberOfPlayers];
                                }
                                else {
                                    this.playedCards[i] = null;
                                }
                                this.playerNames[i] = players[(i + index) % numberOfPlayers].player_name;
                                this.points[i] = players[(i + index) % numberOfPlayers].points;
                            }
                            this.hands[i] = (round.hands[(i + index) % numberOfPlayers]);
                        }
                        this.cards = this.hands[0];
                        this.sort(this.cards);
                        console.log(this.points);
                        console.log('played cardsd');
                        console.log(this.playedCards);
                        if (this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].BIDDING && this.yourTurn) {
                            if (!misdeal) {
                                this.snackInput(new _snack_data__WEBPACK_IMPORTED_MODULE_3__["SnackData"]("", 'bid', round.bid + 5));
                            }
                        }
                        else if (this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].DISCARDING && this.yourTurn) {
                        }
                        else if (this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].CHOOSING_TRUMP && this.yourTurn) {
                            var trumpSnackBar = this.snackBar.open("Select a card to indicate trump", null, {
                                duration: 0,
                            });
                        }
                        else if (this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].CHOOSING_PARTNER && this.yourTurn) {
                            this.snackInput(new _snack_data__WEBPACK_IMPORTED_MODULE_3__["SnackData"]("Enter Card", 'choose_partner', null));
                        }
                        else if (this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].PLAYING) {
                            this.playing = true;
                            var timeout = 0;
                            if (this.trump === null) {
                                var color = round['trump'];
                                this.trump = color;
                                var trumpColorString = '';
                                switch (color) {
                                    case _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].BLACK:
                                        trumpColorString = 'black';
                                        break;
                                    case _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].RED:
                                        trumpColorString = 'red';
                                        break;
                                    case _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].YELLOW:
                                        trumpColorString = 'blue';
                                        break;
                                    case _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].GREEN:
                                        trumpColorString = 'green';
                                        break;
                                }
                                var partnerColorString = '';
                                var description = '';
                                if (this.numberOfPlayers !== 4 && this.numberOfPlayers !== 3) {
                                    var choosenCard = this.rounds[this.rounds.length - 1].choosenCard;
                                    switch (choosenCard.color) {
                                        case _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].BLACK:
                                            partnerColorString = 'black';
                                            break;
                                        case _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].RED:
                                            partnerColorString = 'red';
                                            break;
                                        case _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].YELLOW:
                                            partnerColorString = 'blue';
                                            break;
                                        case _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].GREEN:
                                            partnerColorString = 'green';
                                            break;
                                    }
                                    description = "Trump is " + trumpColorString + ". The " + choosenCard.value + " of " + partnerColorString + " is the partner.";
                                }
                                else {
                                    description = "Trump is " + trumpColorString;
                                }
                                console.log(round.tricks);
                                console.log('tricks');
                                this.snackInput(new _snack_data__WEBPACK_IMPORTED_MODULE_3__["SnackData"](description, 'round_info', null));
                                timeout = 10000;
                            }
                            else {
                                if (this.yourTurn && this.isLeading) {
                                    setTimeout(() => {
                                        this.turn = this.snackBar.open("You Lead", null, {
                                            duration: 0,
                                        });
                                    }, timeout);
                                }
                            }
                        }
                        console.log('bids');
                        console.log(round.bids);
                        //for rendering the player hands
                        this.playerInfo = {
                            "playerNames": this.playerNames,
                            "playedCards": this.playedCards,
                            "currentPlayer": this.currentPlayerIndex,
                            "playing": this.playing,
                            "hands": this.hands,
                            "bidWinner": (this.rounds[this.rounds.length - 1].bidWinner - this.index + this.numberOfPlayers) % this.numberOfPlayers,
                            "bids": round.bids,
                            "roundState": round.roundState,
                            "bidders": round.bidders
                        };
                    }, timeout);
                });
            }
            else if (game === null) {
                setTimeout(() => {
                    this.playedCards = [null, null, null, null];
                    this.currentPlayerIndex = null;
                }, 2000);
            }
            /*
            if(game && game['gameFinished']){
              this.authService.user.subscribe(user => {
                this.socketService.emit("game_done",{game_id: this.game_id, player_id: user.id})
              })
    
            }
            */
        });
        this.gameService.kitty.subscribe(kitty => {
            this.kitty = kitty;
        });
        this.bidSubscription = this.gameService.bidRequest.subscribe((bid) => {
            console.log(bid);
            const dialogRef = this.dialog.open(_bid_bid_component__WEBPACK_IMPORTED_MODULE_1__["BidComponent"], {
                width: '400px',
                height: '400px',
                data: {
                    bid: bid
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (this.gameService.bidding) {
                    this.gameService.bidDialogClosedStillBidding.next(bid);
                }
            });
            this.gameService.bidding = true;
        });
    }
    ngOnDestroy() {
        this.bidSubscription.unsubscribe();
    }
    //sort cards in hand
    sort(cards) {
        cards.sort((a, b) => {
            if (a.value === 1) {
                return -1;
            }
            else if (b.value === 1) {
                return 1;
            }
            else {
                return b.value - a.value;
            }
        });
        cards.sort((a, b) => { return a.color - b.color; });
        cards.sort((a, b) => {
            if (a.color == _services_models_color_model__WEBPACK_IMPORTED_MODULE_5__["Color"].UNDETERMINED) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    cardClicked(card) {
        console.log('round state');
        console.log(this.gameStage);
        if (this.yourTurn && this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].DISCARDING) {
            if (card.kitty) {
                card.kitty = false;
                this.kitty.splice(this.kitty.indexOf(card), 1);
                this.cards.push(card);
                this.sort(this.cards);
            }
            else {
                if (card.points == 0 || card.points == null || this.throwOutPoints) {
                    card.kitty = true;
                    this.cards.splice(this.cards.indexOf(card), 1);
                    this.kitty.push(card);
                }
                else {
                    this.snackBar.open("🤦‍♀️ You cannot discard pointer cards", null, {
                        duration: 2000,
                    });
                }
            }
            this.checkForDiscard();
        }
        else if (this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].CHOOSING_TRUMP && this.yourTurn) {
            this.authService.user.subscribe(user => {
                this.socketService.emit('play', { player_id: user.id, game_id: this.game_id, play: new _services_models_play_model__WEBPACK_IMPORTED_MODULE_6__["Play"](_services_models_move_type_model__WEBPACK_IMPORTED_MODULE_7__["MoveType"].SET_TRUMP, user.id, card.color) });
            });
            this.trumpSnackBar = null;
        }
        else if (this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].PLAYING && this.yourTurn) {
            var hasTrickColor = false;
            if (this.turn !== null) {
                this.turn.dismiss();
            }
            for (let c of this.cards) {
                if (c.color === this.currentTrickColor) {
                    hasTrickColor = true;
                }
            }
            if (hasTrickColor && card.color !== this.currentTrickColor) {
                this.snackBar.open("You must follow suit if you can", null, {
                    duration: 2000,
                });
            }
            else {
                this.authService.user.subscribe(user => {
                    this.socketService.emit('play', { player_id: user.id, game_id: this.game_id, play: new _services_models_play_model__WEBPACK_IMPORTED_MODULE_6__["Play"](_services_models_move_type_model__WEBPACK_IMPORTED_MODULE_7__["MoveType"].PLAY, user.id, { card: card, index: this.index }) });
                });
            }
        }
    }
    checkForDiscard() {
        var kittyLength = this.kitty.length;
        if (kittyLength != 5 && this.numberOfPlayers === 4 || kittyLength != 6 && this.numberOfPlayers === 3 || kittyLength != 3 && this.numberOfPlayers === 6 || kittyLength !== 2 && this.numberOfPlayers === 5) {
            console.log(this.snack);
            if (this.snackMove != null) {
                this.snackMove.dismiss();
            }
            return;
        }
        for (let card of this.kitty) {
            console.log(card);
            if (card.points != 0 && card.points != null && !this.throwOutPoints) {
                if (this.snack != null) {
                    this.snackMove.dismiss();
                }
                return;
            }
        }
        //display custom snackBar for discard
        this.snackInput(new _snack_data__WEBPACK_IMPORTED_MODULE_3__["SnackData"]("Would you like to discard?", 'discard', null));
    }
    //call when you needing a little dialog for input (bidding, discarding) Just use normal snackBar for game advice
    snackInput(snackData) {
        this.snackMove = this.snackBar.openFromComponent(_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"], {
            duration: 0,
            data: snackData
        });
        //subscribe to get the payload back from snackBar custom component
        this.snackMove.instance.action.subscribe((data) => {
            // handle submission here Depends on action taken
            if (data.action === 'bid') {
                this.authService.user.subscribe(user => {
                    this.socketService.emit('play', { player_id: user.id, game_id: this.game_id, play: new _services_models_play_model__WEBPACK_IMPORTED_MODULE_6__["Play"](_services_models_move_type_model__WEBPACK_IMPORTED_MODULE_7__["MoveType"].BID, user.id, data.payload) });
                });
            }
            else if (data.action === 'discard') {
                console.log('discarding');
                this.authService.user.subscribe(user => {
                    for (let card of this.kitty) {
                        card.state = 'flipped';
                    }
                    this.socketService.emit('play', { player_id: user.id, game_id: this.game_id, play: new _services_models_play_model__WEBPACK_IMPORTED_MODULE_6__["Play"](_services_models_move_type_model__WEBPACK_IMPORTED_MODULE_7__["MoveType"].DISCARD, user.id, { hand: this.cards, kitty: this.kitty }) });
                });
            }
            else if (data.action === 'redeal') {
                if (data.payload) {
                    this.authService.user.subscribe(user => {
                        this.socketService.emit('play', { player_id: user.id, game_id: this.game_id, play: new _services_models_play_model__WEBPACK_IMPORTED_MODULE_6__["Play"](_services_models_move_type_model__WEBPACK_IMPORTED_MODULE_7__["MoveType"].CORRECTING_MISDEAL, user.id, { index: this.index, redeal: data.payload }) });
                    });
                }
                if (this.gameStage === _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].BIDDING && this.yourTurn) {
                    console.log('this is your turn');
                    console.log(this.rounds[this.rounds.length - 1].bid);
                    this.snackMove.instance.action.unsubscribe();
                    this.snackMove.dismiss();
                    this.snackInput(new _snack_data__WEBPACK_IMPORTED_MODULE_3__["SnackData"]("", 'bid', this.rounds[this.rounds.length - 1].bid + 5));
                    return;
                }
            }
            else if (data.action === 'choose_partner') {
                if (data.payload) {
                    this.authService.user.subscribe(user => {
                        console.log(data.payload);
                        this.socketService.emit('play', { player_id: user.id, game_id: this.game_id, play: new _services_models_play_model__WEBPACK_IMPORTED_MODULE_6__["Play"](_services_models_move_type_model__WEBPACK_IMPORTED_MODULE_7__["MoveType"].CHOOSE_PARTNER, user.id, { index: this.index, card: data.payload }) });
                    });
                }
            }
            else if (data.action === 'round_info' && this.isLeading && this.rounds[this.rounds.length - 1].tricks.length === 1) {
                if (this.yourTurn && _services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_4__["RoundState"].PLAYING) {
                    this.turn = this.snackBar.open("You Lead", null, {
                        duration: 0,
                    });
                }
            }
            this.snackMove.instance.action.unsubscribe();
            this.snackMove.dismiss();
        });
    }
}
GameroomComponent.ɵfac = function GameroomComponent_Factory(t) { return new (t || GameroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_games_service__WEBPACK_IMPORTED_MODULE_10__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_13__["WebSocketService"])); };
GameroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameroomComponent, selectors: [["app-gameroom"]], decls: 14, vars: 16, consts: [[1, "table"], ["class", "top-players", 4, "ngIf"], [1, "flex-row", "side-players"], [3, "playerInfo", "playerIndex", "globalIndex"], ["class", "playing-table", 4, "ngIf"], ["class", "kitty", 4, "ngIf"], [1, "cards"], ["class", "played-card-bottom", 4, "ngIf"], [3, "card", "click", 4, "ngFor", "ngForOf"], [3, "ngClass"], [4, "ngIf"], [1, "top-players"], [3, "playerInfo", "playerIndex", "globalIndex", 4, "ngFor", "ngForOf"], [1, "playing-table"], [1, "kitty"], [3, "card", "click"], [1, "played-card-bottom"], [4, "ngFor", "ngForOf"], [1, "dot", 3, "ngStyle"]], template: function GameroomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameroomComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameroomComponent_div_4_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameroomComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GameroomComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GameroomComponent_app_rook_card_9_Template, 1, 1, "app-rook-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-info-snack", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameroomComponent_table_11_Template, 13, 1, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GameroomComponent_table_12_Template, 18, 3, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-chat");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerNames.length > 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playerInfo", ctx.playerInfo)("playerIndex", 1)("globalIndex", (ctx.index + 1) % ctx.numberOfPlayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playerInfo", ctx.playerInfo)("playerIndex", ctx.numberOfPlayers - 1)("globalIndex", (ctx.index + ctx.numberOfPlayers - 1) % ctx.numberOfPlayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playing && ctx.playedCards[0] !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.currentPlayerIndex === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberOfPlayers === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberOfPlayers !== 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _player_player_component__WEBPACK_IMPORTED_MODULE_15__["PlayerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _info_snack_info_snack_component__WEBPACK_IMPORTED_MODULE_16__["InfoSnackComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_17__["ChatComponent"], _rook_card_rook_card_component__WEBPACK_IMPORTED_MODULE_18__["RookCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"]], pipes: [_bid_display_pipe__WEBPACK_IMPORTED_MODULE_19__["BidDisplayPipe"], _score_table_pipe__WEBPACK_IMPORTED_MODULE_20__["TableColorPipe"]], styles: ["[_nghost-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    margin-bottom: 20px;\n    \n    -webkit-user-select: none;\n    \n    -khtml-user-select: none;\n    \n    -moz-user-select: none;\n    \n    -ms-user-select: none;\n    \n}\n\n.cards[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n    height: 300px;\n    display: flex;\n    align-content: center;\n    margin-top: 20px;\n    position: relative;\n}\n\n.cards[_ngcontent-%COMP%]   app-rook-card[_ngcontent-%COMP%] {\n    flex: 1;\n    max-width: 230px;\n}\n\n.cards[_ngcontent-%COMP%]   app-rook-card[_ngcontent-%COMP%]:hover {\n    transform: translate(-1rem, -3rem);\n}\n\n.table[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    width: 100%;\n    position: relative;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    flex: 1;\n}\n\n.kitty[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    flex: 1;\n}\n\n.playing-table[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    position: relative;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n    height: 100%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n.flex-center-h[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n.flex-absolute-container[_ngcontent-%COMP%] {\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.kitty-card[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: -10rem!important;\n}\n\n.top-player[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n}\n\n.player[_ngcontent-%COMP%] {\n    height: 72px;\n    width: 115px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.left-player[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.played-card-bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 168px;\n    top: -176px;\n    padding-right: 0px;\n}\n\n.player[_ngcontent-%COMP%]   app-rook-card[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: -40px!important;\n}\n\n.current-player[_ngcontent-%COMP%] {\n    border: 2px solid rgb(77, 255, 77)!important;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    padding: 15px;\n    text-align: center;\n}\n\n.dot[_ngcontent-%COMP%] {\n    height: 17px;\n    width: 17px;\n    border-radius: 50%;\n    display: inline-block;\n}\n\n.top-players[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    justify-content: space-around\n}\n\n.side-players[_ngcontent-%COMP%] {\n    margin-top: 68px;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border: none!important;\n}\n\ntr[_ngcontent-%COMP%] {\n    border-top: 1px solid rgb(119, 119, 119)\n}\n\ntfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border: none;\n    border-top: 1px solid rgb(255, 255, 255);\n    font-weight: bold;\n}\n\nth[_ngcontent-%COMP%] {\n    font-weight: 500!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXJvb20vZ2FtZXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9nYW1lcm9vbS9nYW1lcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIFNhZmFyaSAqL1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogRmlyZWZveCAqL1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG59XG5cbi5jYXJkcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmRzIGFwcC1yb29rLWNhcmQge1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAyMzBweDtcbn1cblxuLmNhcmRzIGFwcC1yb29rLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcmVtLCAtM3JlbSk7XG59XG5cbi50YWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG59XG5cbi5raXR0eSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4OiAxO1xufVxuXG4ucGxheWluZy10YWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4uZmxleC1jZW50ZXItaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4uZmxleC1hYnNvbHV0ZS1jb250YWluZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ua2l0dHktY2FyZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHJlbSFpbXBvcnRhbnQ7XG59XG5cbi50b3AtcGxheWVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ucGxheWVyIHtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGVmdC1wbGF5ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBsYXllZC1jYXJkLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTY4cHg7XG4gICAgdG9wOiAtMTc2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4ucGxheWVyIGFwcC1yb29rLWNhcmQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweCFpbXBvcnRhbnQ7XG59XG5cbi5jdXJyZW50LXBsYXllciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDc3LCAyNTUsIDc3KSFpbXBvcnRhbnQ7XG59XG5cbnRoLFxudGQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZG90IHtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvcC1wbGF5ZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXG59XG5cbi5zaWRlLXBsYXllcnMge1xuICAgIG1hcmdpbi10b3A6IDY4cHg7XG59XG5cbnRoZWFkIHRyIHtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xufVxuXG50ciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxMTksIDExOSwgMTE5KVxufVxuXG50Zm9vdCB0ciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRoIHtcbiAgICBmb250LXdlaWdodDogNTAwIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameroomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gameroom',
                templateUrl: './gameroom.component.html',
                styleUrls: ['./gameroom.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _services_games_service__WEBPACK_IMPORTED_MODULE_10__["GamesService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }, { type: _web_socket_service__WEBPACK_IMPORTED_MODULE_13__["WebSocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gameroom/info-snack/info-snack.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/gameroom/info-snack/info-snack.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoSnackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSnackComponent", function() { return InfoSnackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "hidden": a0 }; };
const _c1 = ["*"];
class InfoSnackComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.visible = false;
    }
    clickout(event) {
        if (this.eRef.nativeElement.contains(event.target)) {
        }
        else {
            this.visible = false;
        }
    }
    ngOnInit() {
    }
    openInfo() {
        if (this.visible == false) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    }
}
InfoSnackComponent.ɵfac = function InfoSnackComponent_Factory(t) { return new (t || InfoSnackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
InfoSnackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoSnackComponent, selectors: [["app-info-snack"]], hostBindings: function InfoSnackComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoSnackComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [[1, "circle-button", 3, "click"], [1, "circle-icon"], [1, "info-box", 3, "ngClass"]], template: function InfoSnackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoSnackComponent_Template_div_click_0_listener() { return ctx.openInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx.visible));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".circle-button[_ngcontent-%COMP%] {\n    position: fixed;\n    right: 50px;\n    bottom: 50px;\n    background: rgb(233, 233, 233);\n    border-radius: 50%;\n    display: flex;\n    width: 50px;\n    height: 50px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid rgb(200, 200, 200);\n    cursor: pointer;\n}\n\n\n\n.circle-icon[_ngcontent-%COMP%] {\n    background-image: url('trophy.svg');\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n    background-size: contain;\n    background-position: center center;\n    position: relative;\n}\n\n\n\n.info-box[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 41px;\n    right: 0px;\n    background: #484848;\n    color: white;\n    border-radius: 5px;\n    padding: 15px;\n    user-select: none;\n    \n    -webkit-user-select: none;\n    \n    -khtml-user-select: none;\n    \n    -moz-user-select: none;\n    \n    -ms-user-select: none;\n    \n}\n\n\n\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXJvb20vaW5mby1zbmFjay9pbmZvLXNuYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLG1DQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2dhbWVyb29tL2luZm8tc25hY2svaW5mby1zbmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogNTBweDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4uY2lyY2xlLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvdHJvcGh5LnN2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5mby1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQxcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDg0ODQ4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogU2FmYXJpICovXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBGaXJlZm94ICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoSnackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-snack',
                templateUrl: './info-snack.component.html',
                styleUrls: ['./info-snack.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/gameroom/player/player.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/gameroom/player/player.component.ts ***!
  \*****************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/models/round-stage.model */ "./src/app/services/models/round-stage.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _rook_card_rook_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rook-card/rook-card.component */ "./src/app/gameroom/rook-card/rook-card.component.ts");





function PlayerComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "current-player": a0 }; };
function PlayerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_div_2_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.currentPlayer === ctx_r0.playerIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bidWinner === ctx_r0.playerIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.playerNames[ctx_r0.playerIndex], "");
} }
function PlayerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.description);
} }
function PlayerComponent_app_rook_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-rook-card", 10);
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r5);
} }
function PlayerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rook-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r3.playedCards[ctx_r3.playerIndex]);
} }
class PlayerComponent {
    constructor() {
        this.hands = null;
        this.playerNames = null;
        this.playing = null;
        this.playedCards = null;
        this.currentPlayer = null;
        this.bidWinner = null;
        this.bids = null;
        this.roundState = null;
        this.bid = 0;
        this.notYetBid = true;
        this.bidders = [];
        this.hasBid = false;
    }
    ngOnInit() {
        this.playing = this.playerInfo["playing"];
        this.hands = this.playerInfo["hands"];
        this.playerNames = this.playerInfo["playerNames"];
        this.playing = this.playerInfo["playing"];
        this.playedCards = this.playerInfo["playedCards"];
        this.currentPlayer = this.playerInfo["currentPlayer"];
        this.bidWinner = this.playerInfo["bidWinner"];
        this.bids = this.playerInfo["bids"];
        this.roundState = this.playerInfo['roundState'] === src_app_services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_1__["RoundState"].BIDDING;
        this.bid = this.bids[this.globalIndex];
        this.bidders = this.playerInfo['bidders'];
        if (this.bidders.includes(this.globalIndex) && this.bid < 80) {
            this.hasBid = false;
            this.description = "Not yet bid";
        }
        else if (this.bid < 80) {
            this.description = "pass";
        }
        else {
            this.description = this.bid + "";
        }
        console.log(this.description);
    }
    ngOnChanges() {
        this.hands = this.playerInfo["hands"];
        this.playerNames = this.playerInfo["playerNames"];
        this.playing = this.playerInfo["playing"];
        this.playedCards = this.playerInfo["playedCards"];
        this.currentPlayer = this.playerInfo["currentPlayer"];
        this.bidWinner = this.playerInfo["bidWinner"];
        this.bids = this.playerInfo["bids"];
        this.roundState = this.playerInfo['roundState'] === src_app_services_models_round_stage_model__WEBPACK_IMPORTED_MODULE_1__["RoundState"].BIDDING;
        this.bid = this.bids[this.globalIndex];
        this.bidders = this.playerInfo['bidders'];
        if (this.bidders.includes(this.globalIndex) && this.bid < 80) {
            this.hasBid = false;
            this.description = "Not yet bid";
        }
        else if (this.bid < 80) {
            this.description = "pass";
        }
        else {
            this.description = this.bid + "";
        }
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], inputs: { playerInfo: "playerInfo", playerIndex: "playerIndex", globalIndex: "globalIndex" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 4, consts: [[1, "player-container"], [1, "name-bid"], ["class", "circle-name", 3, "ngClass", 4, "ngIf"], ["class", "bid", 4, "ngIf"], [1, "top-player", "player"], [3, "card", 4, "ngFor", "ngForOf"], ["class", "played-card", 4, "ngIf"], [1, "circle-name", 3, "ngClass"], [4, "ngIf"], [1, "bid"], [3, "card"], [1, "played-card"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerComponent_div_2_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayerComponent_app_rook_card_5_Template, 1, 1, "app-rook-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerNames[ctx.playerIndex] !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roundState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hands[ctx.playerIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playing && ctx.playedCards[ctx.playerIndex] !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _rook_card_rook_card_component__WEBPACK_IMPORTED_MODULE_3__["RookCardComponent"]], styles: [".played-card[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 168px;\n    bottom: -117px;\n    left: 57px;\n    transform: scale(.7);\n}\n\n.circle-name[_ngcontent-%COMP%] {\n    vertical-align: top;\n    border-radius: 30px;\n    padding-left: 6px;\n    padding-right: 6px;\n    padding: 4px;\n    border: 2px solid rgb(200, 200, 200);\n    font-weight: bold;\n    font-size: 12px;\n    text-align: center;\n    background: rgb(233, 233, 233);\n    display: inline-block;\n}\n\n.current-player[_ngcontent-%COMP%] {\n    border: 2px solid rgb(77, 255, 77)!important;\n}\n\n.player[_ngcontent-%COMP%] {\n    height: 72px;\n    width: 115px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.top-player[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n}\n\n.player[_ngcontent-%COMP%]   app-rook-card[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: -40px!important;\n}\n\n.name-bid[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.bid[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-align: center;\n}\n\n.player[_ngcontent-%COMP%]   app-rook-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXJvb20vcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2dhbWVyb29tL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZWQtY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTY4cHg7XG4gICAgYm90dG9tOiAtMTE3cHg7XG4gICAgbGVmdDogNTdweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43KTtcbn1cblxuLmNpcmNsZS1uYW1lIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY3VycmVudC1wbGF5ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3NywgMjU1LCA3NykhaW1wb3J0YW50O1xufVxuXG4ucGxheWVyIHtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9wLXBsYXllciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnBsYXllciBhcHAtcm9vay1jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDogLTQwcHghaW1wb3J0YW50O1xufVxuXG4ubmFtZS1iaWQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYmlkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXIgYXBwLXJvb2stY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: ['./player.component.css']
            }]
    }], function () { return []; }, { playerInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], globalIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/gameroom/rook-action.ts":
/*!*****************************************!*\
  !*** ./src/app/gameroom/rook-action.ts ***!
  \*****************************************/
/*! exports provided: RookAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RookAction", function() { return RookAction; });
class RookAction {
    constructor(action, payload) {
        this.action = action;
        this.payload = payload;
    }
}


/***/ }),

/***/ "./src/app/gameroom/rook-card/rook-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/gameroom/rook-card/rook-card.component.ts ***!
  \***********************************************************/
/*! exports provided: RookCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RookCardComponent", function() { return RookCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/models/color.model */ "./src/app/services/models/color.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function RookCardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "B i r d");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.color);
} }
function RookCardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "B i r d");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r1.color);
} }
function RookCardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.card.value);
} }
function RookCardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.card.points);
} }
function RookCardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.card.value);
} }
function RookCardComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function RookCardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r6.color)("background-color", ctx_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.card.value);
} }
const _c0 = function (a0) { return { "left-20": a0 }; };
class RookCardComponent {
    constructor() { }
    ngOnChanges() {
        this.setColor();
    }
    ngOnInit() {
        this.setColor();
    }
    setColor() {
        switch (this.card.color) {
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].BLACK:
                this.color = 'black';
                break;
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].RED:
                this.color = 'red';
                break;
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].YELLOW:
                this.color = 'blue';
                break;
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].GREEN:
                this.color = 'green';
                break;
        }
    }
    cardClicked() {
        if (this.card.state === "face") {
            this.card.state = "flipped";
        }
        else {
            this.card.state = "face";
        }
    }
}
RookCardComponent.ɵfac = function RookCardComponent_Factory(t) { return new (t || RookCardComponent)(); };
RookCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RookCardComponent, selectors: [["app-rook-card"]], inputs: { card: "card" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 19, vars: 16, consts: [["src", "../../../assets/img/card.gif", 1, "aspect-img"], [1, "back", "faces"], [1, "back-card"], [1, "crow"], [1, "front", "faces"], ["class", "penguin-text", 3, "color", 4, "ngIf"], ["class", "penguin-text penguin-text-bottom", 3, "color", 4, "ngIf"], ["href", "#0"], [1, "top-left-content", 3, "ngClass"], ["class", "number_top_left", 3, "color", 4, "ngIf"], [1, "right-of-number"], [1, "card_color"], ["class", "number_of_points", 3, "backgroundColor", 4, "ngIf"], ["class", "number_bottom_right", 3, "color", 4, "ngIf"], [1, "flex-absolute-container"], ["class", "crow", 4, "ngIf"], ["class", "number_middle", 3, "color", "backgroundColor", 4, "ngIf"], [1, "penguin-text"], [1, "penguin-text", "penguin-text-bottom"], [1, "number_top_left"], [1, "number_of_points"], [1, "number_bottom_right"], [1, "number_middle"]], template: function RookCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RookCardComponent_div_6_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RookCardComponent_div_7_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RookCardComponent_div_10_Template, 2, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RookCardComponent_div_14_Template, 2, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RookCardComponent_div_15_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RookCardComponent_div_17_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RookCardComponent_div_18_Template, 2, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card ", ctx.card.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.card.value == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.value != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.value != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.value != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n    position: relative;\n    height: 100%;\n    width: auto;\n    perspective: 600px;\n    transform-style: preserve-3d;\n    transition: 0.2s;\n    display: inline-block;\n    overflow: hidden;\n}\n\n.face[_ngcontent-%COMP%] {\n    transform: rotateY(180.1deg);\n    -webkit-transform: rotateY(180.1deg);\n}\n\n.aspect-img[_ngcontent-%COMP%] {\n    height: 100%;\n    display: block;\n}\n\n.card[_ngcontent-%COMP%] {\n    cursor: pointer;\n    top: 0;\n    border-color: rgb(208, 208, 208);\n    opacity: 1;\n    border-width: 1px;\n    border-style: solid;\n    color: black;\n    background-color: white;\n    font-size: 30pt;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 1px rgba(232, 232, 232, 0.2);\n    transition: 0.2s;\n    transform-style: preserve-3d;\n    -webkit-transform-style: preserve-3d;\n}\n\n.faces[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n\n.front[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n\n.back-card[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: 4.2%;\n    background: rgba(29, 108, 255, 0.644);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.kitty-card[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: -10rem!important;\n}\n\n.crow[_ngcontent-%COMP%] {\n    color: white;\n    background-repeat: no-repeat;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center center;\n    background-image: url('penguin.svg');\n}\n\n[_nghost-%COMP%]:not(:first-child) {\n    margin-left: -3%;\n}\n\n[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus {\n    transform: translateX(4rem);\n}\n\n[_nghost-%COMP%]:hover {\n    transform: translateY(-1rem);\n}\n\n.inner_boarder[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    height: 50%;\n}\n\n.card_color[_ngcontent-%COMP%] {\n    font-size: 40%;\n    left: 2.2em;\n    top: 0.3em;\n    text-align: center;\n}\n\n.number_of_points[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: white;\n    background-color: black;\n    font-size: 40%;\n    left: 2.3em;\n    top: 1.3em;\n    text-align: center;\n    width: 25px;\n    border-radius: 5px;\n}\n\n.front[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    color: #000000;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.right-of-number[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: column;\n    justify-content: center;\n    vertical-align: top;\n    margin-top: 10px;\n    margin-left: 5px;\n    font-size: 30px;\n    font-weight: 500;\n}\n\n.number_top_left[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: 100%;\n    color: black;\n    font-weight: bold;\n    text-align: center;\n    left: 10px;\n}\n\n.top-left-content[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 10px;\n    top: 0px;\n}\n\n.number_bottom_right[_ngcontent-%COMP%] {\n    font-size: 100%;\n    color: black;\n    font-weight: bold;\n    text-align: center;\n    position: absolute;\n    right: 10px;\n    bottom: 0px;\n}\n\n.number_middle[_ngcontent-%COMP%] {\n    font-size: 150%;\n    color: white!important;\n    font-weight: bold;\n    text-align: center;\n    right: 35%;\n    bottom: 35%;\n    border-radius: 50%;\n    width: 90px;\n    height: 90px;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n    height: 100%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n.flex-center-h[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%\n}\n\n.flex-absolute-container[_ngcontent-%COMP%] {\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.select-card[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 10px;\n    left: 10px;\n    height: 20px;\n    width: 20px;\n}\n\n.penguin-text[_ngcontent-%COMP%] {\n    position: absolute;\n    font-size: 12px;\n    width: 8px;\n    left: 10px;\n    top: 10px;\n    line-height: 13px;\n    text-align: center;\n    font-weight: bold;\n    text-transform: uppercase;\n}\n\n.left-20[_ngcontent-%COMP%] {\n    left: 20px!important;\n}\n\n.penguin-text-bottom[_ngcontent-%COMP%] {\n    left: auto!important;\n    top: auto!important;\n    right: 10px;\n    bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXJvb20vcm9vay1jYXJkL3Jvb2stY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFDcEQsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxvQ0FBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dhbWVyb29tL3Jvb2stY2FyZC9yb29rLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mYWNlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwLjFkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MC4xZGVnKTtcbn1cblxuLmFzcGVjdC1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjA4LCAyMDgsIDIwOCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZhY2VzIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmJhY2stY2FyZCB7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiA0LjIlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjksIDEwOCwgMjU1LCAwLjY0NCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmtpdHR5LWNhcmQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTByZW0haW1wb3J0YW50O1xufVxuXG4uY3JvdyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9wZW5ndWluLnN2Zyk7XG59XG5cbjpob3N0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDogLTMlO1xufVxuXG46aG9zdDpob3Zlcixcbjpob3N0OmZvY3VzIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHJlbSk7XG59XG5cbjpob3N0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xufVxuXG4uaW5uZXJfYm9hcmRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLmNhcmRfY29sb3Ige1xuICAgIGZvbnQtc2l6ZTogNDAlO1xuICAgIGxlZnQ6IDIuMmVtO1xuICAgIHRvcDogMC4zZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubnVtYmVyX29mX3BvaW50cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogNDAlO1xuICAgIGxlZnQ6IDIuM2VtO1xuICAgIHRvcDogMS4zZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZyb250IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yaWdodC1vZi1udW1iZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5udW1iZXJfdG9wX2xlZnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4udG9wLWxlZnQtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5udW1iZXJfYm90dG9tX3JpZ2h0IHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm90dG9tOiAwcHg7XG59XG5cbi5udW1iZXJfbWlkZGxlIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcmlnaHQ6IDM1JTtcbiAgICBib3R0b206IDM1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uZmxleC1jZW50ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5mbGV4LWNlbnRlci1oIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5mbGV4LWFic29sdXRlLWNvbnRhaW5lciB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWxlY3QtY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLnBlbmd1aW4tdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubGVmdC0yMCB7XG4gICAgbGVmdDogMjBweCFpbXBvcnRhbnQ7XG59XG5cbi5wZW5ndWluLXRleHQtYm90dG9tIHtcbiAgICBsZWZ0OiBhdXRvIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG8haW1wb3J0YW50O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvdHRvbTogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RookCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rook-card',
                templateUrl: './rook-card.component.html',
                styleUrls: ['./rook-card.component.css'],
            }]
    }], function () { return []; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/gameroom/score-table.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/gameroom/score-table.pipe.ts ***!
  \**********************************************/
/*! exports provided: TableColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColorPipe", function() { return TableColorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/models/color.model */ "./src/app/services/models/color.model.ts");



class TableColorPipe {
    transform(value) {
        console.log(value);
        switch (value) {
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].BLACK:
                return 'black';
                break;
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].RED:
                return 'red';
                break;
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].YELLOW:
                return 'blue';
                break;
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].GREEN:
                return 'green';
                break;
            case _services_models_color_model__WEBPACK_IMPORTED_MODULE_1__["Color"].UNDETERMINED:
                return 'transparent';
                break;
        }
    }
}
TableColorPipe.ɵfac = function TableColorPipe_Factory(t) { return new (t || TableColorPipe)(); };
TableColorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableColor", type: TableColorPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableColorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableColor'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/gameroom/snack-data.ts":
/*!****************************************!*\
  !*** ./src/app/gameroom/snack-data.ts ***!
  \****************************************/
/*! exports provided: SnackData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackData", function() { return SnackData; });
class SnackData {
    constructor(message, action, payload) {
        this.message = message;
        this.action = action;
        this.payload = payload;
    }
}


/***/ }),

/***/ "./src/app/games/create-game/create-game.component.ts":
/*!************************************************************!*\
  !*** ./src/app/games/create-game/create-game.component.ts ***!
  \************************************************************/
/*! exports provided: CreateGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGameComponent", function() { return CreateGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function CreateGameComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class CreateGameComponent {
    constructor(gameService, fb, dialogRef) {
        this.gameService = gameService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.numberOfPlayers = 4;
        this.createdGame = false;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            numberOfPlayers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            throwOutPoints: [false],
            mostCards: [false],
            lastTrick: [false],
        });
    }
    enterGame() {
        console.log(this.myForm.value);
        if (this.myForm.valid) {
            const formValue = this.myForm.value;
            if (formValue.numberOfPlayers >= 3 && formValue.numberOfPlayers <= 6) {
                this.gameService.addGame(formValue.numberOfPlayers, formValue.name, formValue.lastTrick, formValue.mostCards, formValue.throwOutPoints);
                this.createdGame = true;
                this.dialogRef.close();
            }
            else {
                this.errorMessage = "We only support four player games at the moment";
            }
        }
    }
}
CreateGameComponent.ɵfac = function CreateGameComponent_Factory(t) { return new (t || CreateGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
CreateGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateGameComponent, selectors: [["app-create-game"]], decls: 25, vars: 3, consts: [[1, "form-flex", 3, "formGroup", "ngSubmit"], ["class", "row", 4, "ngIf"], [1, "row", "top"], [1, "col-sm"], ["matInput", "", "placeholder", "Game Name", "formControlName", "name"], [1, "row", "flex-row"], [1, "col-sm", "wrap"], [1, "w-100"], ["type", "number", "autocomplete", "off", "placeholder", "Number of Players", "matInput", "", "formControlName", "numberOfPlayers"], [1, "row"], ["formControlName", "lastTrick", 1, "tp-margin"], ["formControlName", "mostCards", 1, "tp-margin"], ["formControlName", "throwOutPoints", 1, "tp-margin"], [1, "col-sm-2", "wrap"], ["mat-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "col-sm-6"], [1, "alert", "alert-danger"]], template: function CreateGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateGameComponent_Template_form_ngSubmit_0_listener() { return ctx.enterGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateGameComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Trick 10 pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Most Cards 10 pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Throw Out Points Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Create Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2NyZWF0ZS1nYW1lL2NyZWF0ZS1nYW1lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-game',
                templateUrl: './create-game.component.html',
                styleUrls: ['./create-game.component.css']
            }]
    }], function () { return [{ type: src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/games/game-display.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/games/game-display.pipe.ts ***!
  \********************************************/
/*! exports provided: DisplayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPipe", function() { return DisplayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DisplayPipe {
    transform(value) {
        if (value === 0) {
            return 'This room is full';
        }
        else if (value === 1) {
            return `This room needs 1 player`;
        }
        else {
            return `This room needs ${value} player`;
        }
    }
}
DisplayPipe.ɵfac = function DisplayPipe_Factory(t) { return new (t || DisplayPipe)(); };
DisplayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "display", type: DisplayPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'display'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _create_game_create_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-game/create-game.component */ "./src/app/games/create-game/create-game.component.ts");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _game_display_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-display.pipe */ "./src/app/games/game-display.pipe.ts");








function GamesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function GamesComponent_div_4_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r10);
} }
function GamesComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, game_r2.numberOfPlayers - game_r2.playerNames.length), " ");
} }
function GamesComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Game is no longer active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GamesComponent_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can throw out points and last trick will get them ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GamesComponent_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You cannot throw out points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GamesComponent_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You get 10 points for last trick ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GamesComponent_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You get 10 points for most cards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GamesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const game_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.joinGame(game_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GamesComponent_div_4_li_10_Template, 2, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GamesComponent_div_4_div_11_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GamesComponent_div_4_div_12_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GamesComponent_div_4_div_15_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GamesComponent_div_4_div_16_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GamesComponent_div_4_div_17_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GamesComponent_div_4_div_18_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Game: ", game_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.slectedGame && game_r2.id === ctx_r1.selectedGame.id || game_r2.finished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", game_r2.playerNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !game_r2.finished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r2.finished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r2.throwOutPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !game_r2.throwOutPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r2.lastTrick);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r2.mostCards);
} }
class GamesComponent {
    constructor(gameService, dialog) {
        this.gameService = gameService;
        this.dialog = dialog;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.games = this.gameService.games;
        this.sortGames();
        this.gameService.gamesChanged.subscribe((games) => {
            this.games = games;
            this.sortGames();
        });
        this.gameService.errorMessage.subscribe((msg) => {
            this.errorMessage = msg;
        });
        this.gameService.fetchGames();
    }
    sortGames() {
        this.games.sort((a, b) => {
            if (a.finished && !b.finished) {
                return 1;
            }
            else if (!a.finished && b.finished) {
                return -1;
            }
            else {
                return 0;
            }
        });
    }
    openDialog() {
        this.dialogRef = this.dialog.open(_create_game_create_game_component__WEBPACK_IMPORTED_MODULE_1__["CreateGameComponent"], {
            width: '50%',
            height: '50%'
        });
        this.dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }
    joinGame(game) {
        if (!game.finished) {
            this.gameService.joinGame(game);
        }
    }
}
GamesComponent.ɵfac = function GamesComponent_Factory(t) { return new (t || GamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesComponent, selectors: [["app-games"]], decls: 5, vars: 2, consts: [[1, "btn", "btn-primary", 3, "click"], ["class", "row", 4, "ngIf"], ["class", "list-group", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-sm-6"], [1, "alert", "alert-danger"], [1, "list-group"], [1, "list-group-item", 2, "cursor", "pointer"], [1, "col-sm-4"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["class", "col-sm-4", 4, "ngIf"], [1, "list-group-item"]], template: function GamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_button_click_0_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GamesComponent_div_2_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GamesComponent_div_4_Template, 19, 10, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_game_display_pipe__WEBPACK_IMPORTED_MODULE_6__["DisplayPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-games',
                templateUrl: './games.component.html',
                styleUrls: ['./games.component.css']
            }]
    }], function () { return [{ type: _services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_15_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_15_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_15_a_1_Template, 2, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.authenticated);
} }
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.collapsed = true;
        this.authenticated = false;
        this.biddingBoxRequired = false;
        this.bid = null;
    }
    ngOnInit() {
        this.loggedInSubscription = this.authService.user.subscribe(user => {
            if (user) {
                this.authenticated = true;
            }
        });
    }
    ngOnDestroy() {
        this.loggedInSubscription.unsubscribe();
    }
    logout() {
        this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 6, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", 1, "navbar-toggle", 3, "click"], [1, "icon-bar"], [1, "navbar-brand"], [1, "navbar-collapse", 3, "resize"], [1, "nav", "navbar-nav"], [4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right"], ["routerLink", "/games", 2, "cursor", "pointer"], ["routerLink", "/register", 2, "cursor", "pointer"], ["routerLink", "/login", 2, "cursor", "pointer"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.collapsed = !ctx.collapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_Template_div_resize_9_listener() { return ctx.collapsed = true; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 2, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapse", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(player_id, player_name) {
        this.player_id = player_id;
        this.player_name = player_name;
    }
}


/***/ }),

/***/ "./src/app/router.module.ts":
/*!**********************************!*\
  !*** ./src/app/router.module.ts ***!
  \**********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _games_create_game_create_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games/create-game/create-game.component */ "./src/app/games/create-game/create-game.component.ts");
/* harmony import */ var _gameroom_gameroom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameroom/gameroom.component */ "./src/app/gameroom/gameroom.component.ts");
/* harmony import */ var _gameroom_gameroom_gaurd_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameroom/gameroom-gaurd.service */ "./src/app/gameroom/gameroom-gaurd.service.ts");











const appRoutes = [
    { path: '', redirectTo: 'games', pathMatch: 'full' },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_1__["GamesComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]], children: [
            { path: 'create', component: _games_create_game_create_game_component__WEBPACK_IMPORTED_MODULE_6__["CreateGameComponent"] },
        ] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'gameroom/:id', component: _gameroom_gameroom_component__WEBPACK_IMPORTED_MODULE_7__["GameroomComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"], _gameroom_gameroom_gaurd_service__WEBPACK_IMPORTED_MODULE_8__["GameroomGaurdService"]] }
];
class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/game-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/game-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: GameInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInterceptor", function() { return GameInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games.service */ "./src/app/services/games.service.ts");





class GameInterceptor {
    constructor(gameService) {
        this.gameService = gameService;
    }
    intercept(req, next) {
        return this.gameService.game.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(game => {
            if (!game) {
                console.log('game is not initalized');
                return next.handle(req);
            }
            else {
                console.log('game is inatlized');
                console.log(game);
                console.log(req.headers.get('auth-token'));
                const modifiedReq = req.clone({ headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'auth-token': req.headers.get('auth-token'), 'game-token': game.id, }) });
                return next.handle(modifiedReq);
            }
        }));
    }
}
GameInterceptor.ɵfac = function GameInterceptor_Factory(t) { return new (t || GameInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"])); };
GameInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameInterceptor, factory: GameInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_play_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/play.model */ "./src/app/services/models/play.model.ts");
/* harmony import */ var _models_move_type_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/move-type.model */ "./src/app/services/models/move-type.model.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../web-socket.service */ "./src/app/web-socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











class GamesService {
    constructor(http, authService, socketService, router) {
        this.http = http;
        this.authService = authService;
        this.socketService = socketService;
        this.router = router;
        this.gamesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.games = [];
        this.errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.game = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.hand = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.bidRequest = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.bidDialogClosedStillBidding = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.bidding = false;
        this.kitty = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.yourIndex = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.gameState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.socketService.listen('game_state').subscribe(data => {
            console.log(data);
            this.gameState.next(data);
        });
        this.gameState.subscribe(data => {
            if (data !== null) {
                this.yourIndex.subscribe(index => {
                    if (index === null) {
                        console.log(data);
                        var players = data['players'];
                        if (players) {
                            this.authService.user.subscribe(user => {
                                if (user !== null) {
                                    for (let i = 0; i < players.length; i++) {
                                        if (players[i] !== null && players[i].player_id === user.id) {
                                            this.yourIndex.next(i);
                                        }
                                    }
                                }
                            });
                        }
                    }
                });
            }
        });
        this.authService.user.subscribe(user => {
            if (user === null) {
                this.game.next(null);
                this.gamesChanged.next(null);
                this.yourIndex.next(null);
            }
        });
        this.socketService.listen('game_state_changed').subscribe(data => {
            if (data) {
                const finished = data['finished'];
                console.log('finished');
                console.log(finished);
                this.game.subscribe(game => {
                    this.authService.user.subscribe(user => {
                        this.socketService.emit('get_game_state', { game_id: game.id, player_id: user.id });
                        if (finished) {
                            this.socketService.emit('game_done', { game_id: game.id, player_id: user.id });
                            this.game.next(null);
                            this.gameState.next(null);
                        }
                    });
                });
            }
        });
        this.game.subscribe(game => {
            if (game !== null) {
                this.authService.user.subscribe(user => {
                    if (user !== null) {
                        this.router.navigate(['/gameroom/', game.id]);
                        this.socketService.emit('get_game_state', { game_id: game.id, player_id: user.id });
                    }
                });
            }
        });
        this.gamesChanged.subscribe(games => {
            this.authService.user.subscribe(user => {
                if (user !== null) {
                    for (let game of games) {
                        if (!game['finished']) {
                            for (let id of game['playerIds']) {
                                if (id === user.id) {
                                    this.game.next(game);
                                    this.socketService.emit('get_game_state', { game_id: game.id });
                                }
                            }
                        }
                    }
                }
            });
        });
    }
    fetchGames() {
        return this.http.get('api/games').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(games => {
            this.games = games;
        })).subscribe(resData => {
            this.gamesChanged.next(this.games);
        }, error => {
            this.errorMessage.next(error);
        });
    }
    addGame(numberOfPlayers, name, lastTrick, mostCards, throwOutPoints) {
        return this.http.post('api/games/game', { numberOfPlayers: numberOfPlayers, name: name, throwOutPoints: throwOutPoints, mostCards: mostCards, lastTrick: lastTrick }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(game => {
            this.games.push(game);
            this.game.next(game);
            this.authService.user.subscribe((user) => {
                this.socketService.emit('play', { player_id: user.id, game_id: game.id, play: new _models_play_model__WEBPACK_IMPORTED_MODULE_3__["Play"](_models_move_type_model__WEBPACK_IMPORTED_MODULE_4__["MoveType"].INITALIZE_GAME, user.id, { player: new _models_player_model__WEBPACK_IMPORTED_MODULE_5__["Player"](user.id, user.name), lastTrick: lastTrick, mostCards: mostCards, throwOutPoints: throwOutPoints }) });
            });
        })).subscribe(resData => {
            this.gamesChanged.next(this.games);
        }, error => {
            this.errorMessage.next(error);
        });
    }
    joinGame(game) {
        this.game.next(game);
        return this.http.put('api/games/game', { game_id: game.id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(changedGame => {
            for (var i = 0; i < this.games.length; i++) {
                if (this.games[i].id === changedGame.id) {
                    this.games[i] = changedGame;
                }
            }
            this.gamesChanged.next(this.games);
            this.authService.user.subscribe((user) => {
                console.log(user);
                this.socketService.emit('play', { player_id: user.id, game_id: changedGame.id, play: new _models_play_model__WEBPACK_IMPORTED_MODULE_3__["Play"](_models_move_type_model__WEBPACK_IMPORTED_MODULE_4__["MoveType"].ADD_PLAYER, user.id, new _models_player_model__WEBPACK_IMPORTED_MODULE_5__["Player"](user.id, user.name)) });
            });
        })).subscribe(changedGame => {
            console.log(changedGame);
        }, error => {
            this.errorMessage.next(error);
        });
    }
    handleErrors(errorRes) {
        let errorMessage = errorRes.error;
        let message = 'an unkown error has occured';
        console.log(errorRes);
        switch (errorMessage) {
            case 'ALREADY_IN_GAME':
                message = "You are already in this game";
                break;
            case 'HOSTING_ALREADY':
                message = 'You are already hosting a game';
                break;
            case 'INVALID_TOKEN':
                message = 'your token is invalid';
                break;
            case 'NO_TOKEN':
                message = 'you have no token';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(message);
    }
}
GamesService.ɵfac = function GamesService_Factory(t) { return new (t || GamesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_8__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
GamesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GamesService, factory: GamesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _web_socket_service__WEBPACK_IMPORTED_MODULE_8__["WebSocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/models/color.model.ts":
/*!************************************************!*\
  !*** ./src/app/services/models/color.model.ts ***!
  \************************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLACK"] = 1] = "BLACK";
    Color[Color["YELLOW"] = 2] = "YELLOW";
    Color[Color["GREEN"] = 3] = "GREEN";
    Color[Color["UNDETERMINED"] = 4] = "UNDETERMINED";
})(Color || (Color = {}));


/***/ }),

/***/ "./src/app/services/models/move-type.model.ts":
/*!****************************************************!*\
  !*** ./src/app/services/models/move-type.model.ts ***!
  \****************************************************/
/*! exports provided: MoveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveType", function() { return MoveType; });
var MoveType;
(function (MoveType) {
    MoveType[MoveType["ADD_PLAYER"] = 0] = "ADD_PLAYER";
    MoveType[MoveType["BID"] = 1] = "BID";
    MoveType[MoveType["DISCARD"] = 2] = "DISCARD";
    MoveType[MoveType["PLAY"] = 3] = "PLAY";
    MoveType[MoveType["SET_TRUMP"] = 4] = "SET_TRUMP";
    MoveType[MoveType["INITALIZE_GAME"] = 5] = "INITALIZE_GAME";
    MoveType[MoveType["CHOOSE_PARTNER"] = 6] = "CHOOSE_PARTNER";
    MoveType[MoveType["CORRECTING_MISDEAL"] = 7] = "CORRECTING_MISDEAL";
})(MoveType || (MoveType = {}));


/***/ }),

/***/ "./src/app/services/models/play.model.ts":
/*!***********************************************!*\
  !*** ./src/app/services/models/play.model.ts ***!
  \***********************************************/
/*! exports provided: Play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Play", function() { return Play; });
class Play {
    constructor(moveType, player_id, payload) {
        this.moveType = moveType;
        this.player_id = player_id;
        this.payload = payload;
    }
}


/***/ }),

/***/ "./src/app/services/models/round-stage.model.ts":
/*!******************************************************!*\
  !*** ./src/app/services/models/round-stage.model.ts ***!
  \******************************************************/
/*! exports provided: RoundState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundState", function() { return RoundState; });
var RoundState;
(function (RoundState) {
    RoundState[RoundState["WAITING_ON_PLAYERS"] = 0] = "WAITING_ON_PLAYERS";
    RoundState[RoundState["DISCARDING"] = 1] = "DISCARDING";
    RoundState[RoundState["CHOOSING_TRUMP"] = 2] = "CHOOSING_TRUMP";
    RoundState[RoundState["BIDDING"] = 3] = "BIDDING";
    RoundState[RoundState["LEADING"] = 4] = "LEADING";
    RoundState[RoundState["PLAYING"] = 5] = "PLAYING";
    RoundState[RoundState["CHOOSING_PARTNER"] = 6] = "CHOOSING_PARTNER";
    RoundState[RoundState["DONE"] = 7] = "DONE";
})(RoundState || (RoundState = {}));


/***/ }),

/***/ "./src/app/web-socket.service.ts":
/*!***************************************!*\
  !*** ./src/app/web-socket.service.ts ***!
  \***************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client/dist/socket.io */ "./node_modules/socket.io-client/dist/socket.io.js");
/* harmony import */ var socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_2__);




class WebSocketService {
    constructor() {
        this.uri = 'ws://ec2-52-24-67-171.us-west-2.compute.amazonaws.com/games/socket';
        console.log(this.uri);
        this.socket = socket_io_client_dist_socket_io__WEBPACK_IMPORTED_MODULE_2__(this.uri);
    }
    listen(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((subscriber) => {
            this.socket.on(eventName, data => {
                subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        this.socket.emit(eventName, data);
    }
}
WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(); };
WebSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebSocketService, factory: WebSocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebSocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/micahkillick/Rook-App/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map