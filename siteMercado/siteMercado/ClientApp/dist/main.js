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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./produtos/produtos.component */ "./src/app/produtos/produtos.component.ts");
/* harmony import */ var _produtos_cadastro_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./produtos/cadastro/cadastro-produto.component */ "./src/app/produtos/cadastro/cadastro-produto.component.ts");
/* harmony import */ var _produtos_edicao_edicao_produto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./produtos/edicao/edicao-produto.component */ "./src/app/produtos/edicao/edicao-produto.component.ts");
/* harmony import */ var _produtos_detalhes_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./produtos/detalhes/detalhes-produto.component */ "./src/app/produtos/detalhes/detalhes-produto.component.ts");
/* harmony import */ var _core_auth_request_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/auth/request.interceptor */ "./src/app/core/auth/request.interceptor.ts");
/* harmony import */ var _produtos_exclusao_exclusao_produto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./produtos/exclusao/exclusao-produto.component */ "./src/app/produtos/exclusao/exclusao-produto.component.ts");
/* harmony import */ var _home_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "./src/app/errors/not-found/not-found.component.ts");
/* harmony import */ var _errors_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./errors/not-authorized/not-authorized.component */ "./src/app/errors/not-authorized/not-authorized.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"],
                _home_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_10__["ProdutosComponent"],
                _produtos_cadastro_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_11__["CadastroProduto"],
                _produtos_edicao_edicao_produto_component__WEBPACK_IMPORTED_MODULE_12__["EdicaoProduto"],
                _produtos_detalhes_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_13__["DetalhesProduto"],
                _produtos_exclusao_exclusao_produto_component__WEBPACK_IMPORTED_MODULE_15__["ExclusaoProduto"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _home_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
                    { path: 'produtos', component: _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_10__["ProdutosComponent"] },
                    { path: 'not-found', component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"] },
                    { path: 'not-authorized', component: _errors_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_18__["NotAuthorizedComponent"] },
                    { path: '**', redirectTo: 'not-found' }
                ])
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core_auth_request_interceptor__WEBPACK_IMPORTED_MODULE_14__["RequestInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL_API = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ApiUrl;
// Define o cabeçalho da chamada
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    // Faz uma requisição para a API enviando os dados
    AuthService.prototype.autenticacao = function (userID, accessKey) {
        var _this = this;
        return this.http
            .post(URL_API + '/login', { userID: userID, accessKey: accessKey, grantType: 'password' }, { headers: httpOptions.headers, observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            var responseModel = res.body.valueOf();
            // Obtém o retorno
            if (responseModel.autenticated != false) {
                // Salva o token
                _this.userService.setToken(responseModel.accessToken);
                _this.userService.setRefreshToken(responseModel.refreshToken);
            }
        }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/auth/request.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/core/auth/request.interceptor.ts ***!
  \**************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../token/token.service */ "./src/app/core/token/token.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL_API = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ApiUrl;
var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(tokenService, router, userService, http) {
        this.tokenService = tokenService;
        this.router = router;
        this.userService = userService;
        this.http = http;
        // Classe responsável por interceptar todas as requisições e verificar se o token está expirado
        // Caso esteja, enviar para a tela de não autorizado, senão atualiza o token no servidor
        this.isRefreshingToken = false;
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (this.tokenService.hasToken()) {
            var token = this.tokenService.getToken();
            //clonando a requisição e setando o header com o token
            if (token) {
                req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            }
            if (!req.headers.has('Content-Type')) {
                req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            }
            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
            /*
            req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
            req = req.clone({ headers: req.headers.set('Access-Control-Request-Headers', '*') });
            req = req.clone({ headers: req.headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS') });
*/
        }
        //verificando erros do retorno 401 (não autotizado) para fazer ou não uma nova requisição
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status == 401 && error.statusText == "OK") {
                var userId = _this.userService.getUser().unique_name;
                var refreshToken = _this.tokenService.getRefreshToken();
                //refazendo a requisição para o refresh token
                return _this.http.post(URL_API + '/login', { userId: userId, refreshToken: refreshToken, grantType: 'refresh_token', }, //body
                { observe: 'response' })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (res) {
                    var responseModel = res.body.valueOf();
                    //caso o token retornado seja difirente undefined, significa que o token secundario ainda é valido
                    if (responseModel.accessToken != undefined) {
                        _this.userService.setToken(responseModel.accessToken);
                        _this.userService.setRefreshToken(responseModel.refreshToken);
                        //criando e emitindo uma nova requisição requisição com os dados do token atualizado
                        var cloneReq = req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + responseModel.accessToken) });
                        return next.handle(cloneReq);
                    }
                    else {
                        _this.router.navigate(['/not-authorized']);
                        _this.tokenService.deleteToken();
                    }
                }));
            }
            else {
                throw error;
            }
        }));
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/core/token/token.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/token/token.service.ts ***!
  \*********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
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

var KEY = 'authToken';
var refreshToken = 'refreshToken';
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.setToken = function (token) {
        window.localStorage.setItem(KEY, token);
    };
    TokenService.prototype.setRefereshToken = function (refresh) {
        window.localStorage.setItem(refreshToken, refresh);
    };
    TokenService.prototype.getRefreshToken = function () {
        return window.localStorage.getItem(refreshToken);
    };
    TokenService.prototype.getToken = function () {
        return window.localStorage.getItem(KEY);
    };
    TokenService.prototype.deleteToken = function () {
        window.localStorage.removeItem(KEY);
    };
    TokenService.prototype.hasToken = function () {
        return !!this.getToken();
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/core/user/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../token/token.service */ "./src/app/core/token/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(tokenService) {
        this.tokenService = tokenService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tokenService.hasToken() && this.decodeJWT();
    }
    UserService.prototype.setToken = function (token) {
        this.tokenService.setToken(token);
        this.decodeJWT();
    };
    UserService.prototype.setRefreshToken = function (refresh) {
        this.tokenService.setRefereshToken(refresh);
    };
    UserService.prototype.isLogged = function () {
        return this.tokenService.hasToken();
    };
    UserService.prototype.logout = function () {
        this.tokenService.deleteToken();
    };
    UserService.prototype.getUserObservable = function () {
        return this.userSubject.asObservable();
    };
    UserService.prototype.decodeJWT = function () {
        var token = this.tokenService.getToken();
        var user = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token);
        this.user = user;
        this.userSubject.next(user);
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/errors/not-authorized/not-authorized.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/errors/not-authorized/not-authorized.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row icon-color\">\r\n    <div class=\"valign-wrapper m-background-color\">\r\n        <div class=\"col s12 m8 l5 xl5 m-align-center\">\r\n            <div class=\"card z-depth-5\">\r\n                <div class=\"card-image\">\r\n                    <img src=\"../../../assets/401.png\">\r\n                    <span class=\"card-title m-pb-4\">Acesso não autorizado. <br> Sessão expirada.</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row right\">\r\n                <div class=\"col m-pr-0\">\r\n                    <a class=\"waves-effect waves-light col blue darken-4 btn z-depth-5\" [routerLink]=\"['/login']\">Login</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/errors/not-authorized/not-authorized.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/errors/not-authorized/not-authorized.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotAuthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function() { return NotAuthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotAuthorizedComponent = /** @class */ (function () {
    function NotAuthorizedComponent() {
    }
    NotAuthorizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pmo-notauthorized',
            template: __webpack_require__(/*! ./not-authorized.component.html */ "./src/app/errors/not-authorized/not-authorized.component.html")
        })
    ], NotAuthorizedComponent);
    return NotAuthorizedComponent;
}());



/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.html":
/*!***********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>\r\n          Oops!\r\n        </h1>\r\n        <h2>\r\n          404 Not Found\r\n        </h2>\r\n        <div class=\"error-details\">\r\n          Sorry, an error has occured, Requested page not found!\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a href=\"http://www.jquery2dotnet.com\" class=\"btn btn-primary btn-lg\">\r\n            <span class=\"glyphicon glyphicon-home\"></span>\r\n            Take Me Home\r\n          </a><a href=\"http://www.jquery2dotnet.com\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () { };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pmo-notfound',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/errors/not-found/not-found.component.html")
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Olá, mundo!</h1>\r\n<p> SiteMercado é um sistema de gestão de supermercados.\r\n</p>\r\n\r\n<p>A versão 1.0.0 possui as seguintes funcionalidades:</p>\r\n<ul>\r\n  <li><strong>Produtos</strong>: Cadastro/ Visualização/ Edição e Exclusão</li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/home/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (submit)=\"login()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"userID\">Email</label>\r\n    <input #userIDInput formControlName=\"userID\" type=\"email\" class=\"form-control\" id=\"userID\" aria-describedby=\"emailHelp\" placeholder=\"Digite seu email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"accessKey\">Senha</label>\r\n    <input formControlName=\"accessKey\" type=\"password\" class=\"form-control\" id=\"accessKey\" placeholder=\"Senha\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/home/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, render, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.render = render;
        this.toastr = toastr;
    }
    // Dispara ao iniciar o componente
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            userID: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z-_.]+@+[a-z-]+\.[a-z]+\.?([a-z]+)?$/)
                ]
            ],
            accessKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    // Realiza a autenticação
    LoginComponent.prototype.login = function () {
        var _this = this;
        // Obtém usuário e senha informados
        var userID = this.loginForm.get('userID').value;
        var accessKey = this.loginForm.get('accessKey').value;
        // Tenta realizar a autenticação
        this.authService
            .autenticacao(userID, accessKey)
            .subscribe(function (response) {
            // Obtém o retorno
            var responseModel = response.body.valueOf();
            // Define o caminho a ser percorrido
            if (responseModel.message == 'Failed to autheticate') {
                _this.toastr.error('Erro de autenticação, usuário ou senha inválidos.');
            }
            if (responseModel.message == 'OK') {
                _this.router.navigate(['home']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userIDInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "userIDInput", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/home/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3'>\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>siteMercado</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/home\"]'>Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/produtos\"]'>Produtos</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Sair</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/produtos/cadastro/cadastro-produto.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/produtos/cadastro/cadastro-produto.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div id=\"modalCadastrar\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Cadastro de produto</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <form [formGroup]=\"formCadastrar\" (submit)=\"cadastrarProduto(formCadastrar)\">\r\n        <div class=\"modal-body\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Descrição:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"descricao\" formControlName=\"descricao\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Preço:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"preco\" formControlName=\"preco\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Estoque:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"estoque\" formControlName=\"estoque\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\r\n          <button [disabled]=\"formCadastrar.invalid\" type=\"submit\" class=\"btn btn-primary\">Cadastrar</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/produtos/cadastro/cadastro-produto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/produtos/cadastro/cadastro-produto.component.ts ***!
  \*****************************************************************/
/*! exports provided: CadastroProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroProduto", function() { return CadastroProduto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cadastro_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro-produto.service */ "./src/app/produtos/cadastro/cadastro-produto.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroProduto = /** @class */ (function () {
    function CadastroProduto(formBuilder, CadastroProdutoService, toastr) {
        this.formBuilder = formBuilder;
        this.CadastroProdutoService = CadastroProdutoService;
        this.toastr = toastr;
        // Avisa o componente pai que um novo registro foi inserido
        this.atualizarGrid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Dispara ao iniciar o componente
    CadastroProduto.prototype.ngOnInit = function () {
        this.formCadastrar = this.formBuilder.group({
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            preco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    // Exibe o modal
    CadastroProduto.prototype.abrirModal = function () {
        $('#modalCadastrar').modal('show');
    };
    // Oculta o modal
    CadastroProduto.prototype.fecharModal = function () {
        $('#modalCadastrar').modal('hide');
    };
    // Cadastra o produto no banco de dados
    CadastroProduto.prototype.cadastrarProduto = function (event) {
        var _this = this;
        // Cria um objeto Produto e o preenche com os dados do formulário
        var produto;
        produto = event.getRawValue();
        // Define a data em que está ocorrendo o cadastro
        produto.dataCadastro = new Date();
        // Envia os dados para o serviço chamar a API
        this.CadastroProdutoService
            .postProduto(produto)
            .subscribe(function (response) {
            // Obtém a resposta
            var httpResponse = response;
            // Retorna ao usuário o resultado do processamento
            if (httpResponse.status == 400 || httpResponse.status == 401) {
                _this.toastr.error('Não foi possível cadastrar o produto! Tente novamente em instantes.');
            }
            else if (httpResponse.status == 500) {
                _this.toastr.error('Falha na comunicação com o servidor! Tente novamente em instantes.');
            }
            else {
                _this.toastr.success('Produto cadastrado com sucesso!');
                // Fecha o modal e avisa o componente pai para atualizar a grid
                _this.fecharModal();
                _this.atualizarGrid.next();
            }
        }, function (error) {
            console.log(error);
            _this.toastr.error('Erro! Não foi possível cadastrar o produto.');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CadastroProduto.prototype, "atualizarGrid", void 0);
    CadastroProduto = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cadastro-produto',
            template: __webpack_require__(/*! ./cadastro-produto.component.html */ "./src/app/produtos/cadastro/cadastro-produto.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _cadastro_produto_service__WEBPACK_IMPORTED_MODULE_2__["CadastroProdutoService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CadastroProduto);
    return CadastroProduto;
}());



/***/ }),

/***/ "./src/app/produtos/cadastro/cadastro-produto.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/produtos/cadastro/cadastro-produto.service.ts ***!
  \***************************************************************/
/*! exports provided: CadastroProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroProdutoService", function() { return CadastroProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroProdutoService = /** @class */ (function () {
    function CadastroProdutoService(http) {
        this.http = http;
    }
    // Solicita a API a inserção do Produto
    CadastroProdutoService.prototype.postProduto = function (produto) {
        // Define o cabeçalho da chamada
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Converte para JSON o objeto Produto
        var body = JSON.stringify(produto);
        // Chama a API enviando os parâmetros
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ApiUrl + '/Produtos/', body, { headers: httpOptions.headers, observe: "response" });
    };
    CadastroProdutoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CadastroProdutoService);
    return CadastroProdutoService;
}());



/***/ }),

/***/ "./src/app/produtos/detalhes/detalhes-produto.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/produtos/detalhes/detalhes-produto.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div id=\"modalDetalhes\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Edição de produto</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <form [formGroup]=\"formDetalhes\">\r\n        <div class=\"modal-body\">\r\n\r\n          <input type=\"hidden\" formControlName=\"id\">\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Descrição:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"descricao\" formControlName=\"descricao\" >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Preço:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"preco\" formControlName=\"preco\" >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Estoque:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"estoque\" formControlName=\"estoque\" >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Data de cadastro:</label>\r\n            <input type=\"datetime\" class=\"form-control\" id=\"dataCadastro\" formControlName=\"dataCadastro\" >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Data de Atualização:</label>\r\n            <input type=\"datetime\" class=\"form-control\" id=\"dataAtualizacao\" formControlName=\"dataAtualizacao\" >\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/produtos/detalhes/detalhes-produto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/produtos/detalhes/detalhes-produto.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetalhesProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesProduto", function() { return DetalhesProduto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalhesProduto = /** @class */ (function () {
    function DetalhesProduto(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        // Avisa o componente pai que um novo registro foi inserido
        this.atualizarGrid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Dispara ao iniciar o componente
    DetalhesProduto.prototype.ngOnInit = function () {
        this.formDetalhes = this.formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dataCadastro: [''],
            dataAtualizacao: [''],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            preco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            estoque: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    // Exibe o modal
    DetalhesProduto.prototype.abrirModal = function () {
        $('#modalDetalhes').modal('show');
    };
    // Oculta o modal
    DetalhesProduto.prototype.fecharModal = function () {
        $('#modalDetalhes').modal('hide');
    };
    // Preenche o formulário quando o objeto do componente pai chegar
    DetalhesProduto.prototype.ngOnChanges = function (changes) {
        if (this.produto != undefined) {
            this.setarCampos();
        }
    };
    // Preenche os campos do formulário e os desabilita
    DetalhesProduto.prototype.setarCampos = function () {
        this.formDetalhes.get('id').setValue(this.produto.id);
        this.formDetalhes.get('id').disable();
        this.formDetalhes.get('dataCadastro').setValue(this.produto.dataCadastro);
        this.formDetalhes.get('dataCadastro').disable();
        this.formDetalhes.get('dataAtualizacao').setValue(this.produto.dataAtualizacao);
        this.formDetalhes.get('dataAtualizacao').disable();
        this.formDetalhes.get('descricao').setValue(this.produto.descricao);
        this.formDetalhes.get('descricao').disable();
        this.formDetalhes.get('preco').setValue(this.produto.preco);
        this.formDetalhes.get('preco').disable();
        this.formDetalhes.get('estoque').setValue(this.produto.estoque);
        this.formDetalhes.get('estoque').disable();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetalhesProduto.prototype, "produto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DetalhesProduto.prototype, "atualizarGrid", void 0);
    DetalhesProduto = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'detalhes-produto',
            template: __webpack_require__(/*! ./detalhes-produto.component.html */ "./src/app/produtos/detalhes/detalhes-produto.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], DetalhesProduto);
    return DetalhesProduto;
}());



/***/ }),

/***/ "./src/app/produtos/edicao/edicao-produto.component.html":
/*!***************************************************************!*\
  !*** ./src/app/produtos/edicao/edicao-produto.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div id=\"modalEditar\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Edição de produto</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n      </div>\r\n      <form [formGroup]=\"formEditar\" (submit)=\"editarProduto(formEditar)\">\r\n        <div class=\"modal-body\">\r\n          <input type=\"hidden\" formControlName=\"id\">\r\n          <input type=\"hidden\" formControlName=\"dataCadastro\">\r\n          <input type=\"hidden\" formControlName=\"dataAtualizacao\">\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Descrição:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"descricao\" formControlName=\"descricao\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Preço:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"preco\" formControlName=\"preco\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Estoque:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"estoque\" formControlName=\"estoque\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\r\n          <button [disabled]=\"formEditar.invalid\" type=\"submit\" class=\"btn btn-warning\">Editar</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/produtos/edicao/edicao-produto.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/produtos/edicao/edicao-produto.component.ts ***!
  \*************************************************************/
/*! exports provided: EdicaoProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicaoProduto", function() { return EdicaoProduto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edicao_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edicao-produto.service */ "./src/app/produtos/edicao/edicao-produto.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EdicaoProduto = /** @class */ (function () {
    function EdicaoProduto(formBuilder, EdicaoProdutoService, toastr) {
        this.formBuilder = formBuilder;
        this.EdicaoProdutoService = EdicaoProdutoService;
        this.toastr = toastr;
        // Avisa o componente pai que um registro foi editado
        this.atualizarGrid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Dispara ao iniciar o componente
    EdicaoProduto.prototype.ngOnInit = function () {
        this.formEditar = this.formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dataCadastro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dataAtualizacao: [''],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            preco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            estoque: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    // Exibe o modal
    EdicaoProduto.prototype.abrirModal = function () {
        $('#modalEditar').modal('show');
    };
    // Oculta o modal
    EdicaoProduto.prototype.fecharModal = function () {
        $('#modalEditar').modal('hide');
    };
    // Preenche o formulário quando o objeto do componente pai chegar
    EdicaoProduto.prototype.ngOnChanges = function (changes) {
        if (this.produto != undefined) {
            this.setarCampos();
        }
    };
    // Preenche os campos do formulário e os desabilita
    EdicaoProduto.prototype.setarCampos = function () {
        this.formEditar.get('id').setValue(this.produto.id);
        this.formEditar.get('dataCadastro').setValue(this.produto.dataCadastro);
        this.formEditar.get('dataAtualizacao').setValue(this.produto.dataAtualizacao);
        this.formEditar.get('descricao').setValue(this.produto.descricao);
        this.formEditar.get('preco').setValue(this.produto.preco);
        this.formEditar.get('estoque').setValue(this.produto.estoque);
    };
    // Atualiza o produto no banco de dados
    EdicaoProduto.prototype.editarProduto = function (event) {
        var _this = this;
        // Cria um objeto Produto e o preenche com os dados do formulário
        var produto;
        produto = event.getRawValue();
        // Define a data em que está ocorrendo a atualização
        produto.dataAtualizacao = new Date();
        // Envia os dados para o serviço chamar a API
        this.EdicaoProdutoService
            .putProduto(produto)
            .subscribe(function (response) {
            // Obtém a resposta
            var httpResponse = response;
            // Retorna ao usuário o resultado do processamento
            if (httpResponse.status == 400 || httpResponse.status == 401) {
                _this.toastr.error('Não foi possível editar o produto! Tente novamente em instantes.');
            }
            else if (httpResponse.status == 500) {
                _this.toastr.error('Falha na comunicação com o servidor! Tente novamente em instantes.');
            }
            else {
                _this.toastr.success('Produto editado com sucesso!');
                // Fecha o modal e avisa o componente pai para atualizar a grid
                _this.fecharModal();
                _this.atualizarGrid.next();
            }
        }, function (error) {
            console.log(error);
            _this.toastr.error('Erro! Não foi possível editar o produto.');
        });
        console.log('teste');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EdicaoProduto.prototype, "produto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EdicaoProduto.prototype, "atualizarGrid", void 0);
    EdicaoProduto = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edicao-produto',
            template: __webpack_require__(/*! ./edicao-produto.component.html */ "./src/app/produtos/edicao/edicao-produto.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _edicao_produto_service__WEBPACK_IMPORTED_MODULE_2__["EdicaoProdutoService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EdicaoProduto);
    return EdicaoProduto;
}());



/***/ }),

/***/ "./src/app/produtos/edicao/edicao-produto.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/produtos/edicao/edicao-produto.service.ts ***!
  \***********************************************************/
/*! exports provided: EdicaoProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicaoProdutoService", function() { return EdicaoProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EdicaoProdutoService = /** @class */ (function () {
    function EdicaoProdutoService(http) {
        this.http = http;
    }
    // Solicita a API a atualização do Produto
    EdicaoProdutoService.prototype.putProduto = function (produto) {
        // Define o cabeçalho da chamada
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Converte para JSON o objeto Produto
        var body = JSON.stringify(produto);
        // Chama a API enviando os parâmetros
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ApiUrl + ("/Produtos/" + produto.id), body, { headers: httpOptions.headers, observe: "response" });
    };
    EdicaoProdutoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EdicaoProdutoService);
    return EdicaoProdutoService;
}());



/***/ }),

/***/ "./src/app/produtos/exclusao/exclusao-produto.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/produtos/exclusao/exclusao-produto.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div id=\"modalExcluir\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Tem certeza que deseja excluir?</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <form [formGroup]=\"formExcluir\" (submit)=\"excluirProduto(formExcluir)\">\r\n        <div class=\"modal-body\">\r\n\r\n          <input type=\"hidden\" formControlName=\"id\">\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Descrição:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"descricao\" formControlName=\"descricao\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Preço:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"preco\" formControlName=\"preco\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Estoque:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"estoque\" formControlName=\"estoque\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Data de cadastro:</label>\r\n            <input type=\"datetime\" class=\"form-control\" id=\"dataCadastro\" formControlName=\"dataCadastro\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"recipient-name\" class=\"col-form-label\">Data de Atualização:</label>\r\n            <input type=\"datetime\" class=\"form-control\" id=\"dataAtualizacao\" formControlName=\"dataAtualizacao\">\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\r\n            <button type=\"submit\" class=\"btn btn-danger\">Excluir</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/produtos/exclusao/exclusao-produto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/produtos/exclusao/exclusao-produto.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExclusaoProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclusaoProduto", function() { return ExclusaoProduto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _exclusao_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exclusao-produto.service */ "./src/app/produtos/exclusao/exclusao-produto.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExclusaoProduto = /** @class */ (function () {
    function ExclusaoProduto(formBuilder, ExclusaoProdutoService, toastr) {
        this.formBuilder = formBuilder;
        this.ExclusaoProdutoService = ExclusaoProdutoService;
        this.toastr = toastr;
        // Avisa o componente pai que um registro foi editado
        this.atualizarGrid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Dispara ao iniciar o componente
    ExclusaoProduto.prototype.ngOnInit = function () {
        this.formExcluir = this.formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dataCadastro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dataAtualizacao: [''],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            preco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            estoque: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    // Exibe o modal
    ExclusaoProduto.prototype.abrirModal = function () {
        $('#modalExcluir').modal('show');
    };
    // Oculta o modal
    ExclusaoProduto.prototype.fecharModal = function () {
        $('#modalExcluir').modal('hide');
    };
    // Preenche o formulário quando o objeto do componente pai chegar
    ExclusaoProduto.prototype.ngOnChanges = function (changes) {
        if (this.produto != undefined) {
            this.setarCampos();
        }
    };
    // Preenche os campos do formulário e os desabilita
    ExclusaoProduto.prototype.setarCampos = function () {
        this.formExcluir.get('id').setValue(this.produto.id);
        this.formExcluir.get('id').disable();
        this.formExcluir.get('dataCadastro').setValue(this.produto.dataCadastro);
        this.formExcluir.get('dataCadastro').disable();
        this.formExcluir.get('dataAtualizacao').setValue(this.produto.dataAtualizacao);
        this.formExcluir.get('dataAtualizacao').disable();
        this.formExcluir.get('descricao').setValue(this.produto.descricao);
        this.formExcluir.get('descricao').disable();
        this.formExcluir.get('preco').setValue(this.produto.preco);
        this.formExcluir.get('preco').disable();
        this.formExcluir.get('estoque').setValue(this.produto.estoque);
        this.formExcluir.get('estoque').disable();
    };
    // Exclui o produto no banco de dados
    ExclusaoProduto.prototype.excluirProduto = function (event) {
        var _this = this;
        // Cria um objeto Produto e o preenche com os dados do formulário
        var produto;
        produto = event.getRawValue();
        // Envia os dados para o serviço chamar a API
        this.ExclusaoProdutoService
            .deleteProduto(produto)
            .subscribe(function (response) {
            // Obtém a resposta
            var httpResponse = response;
            // Retorna ao usuário o resultado do processamento
            if (httpResponse.status == 400 || httpResponse.status == 401) {
                _this.toastr.error('Não foi possível excluir o produto! Tente novamente em instantes.');
            }
            else if (httpResponse.status == 500) {
                _this.toastr.error('Falha na comunicação com o servidor! Tente novamente em instantes.');
            }
            else {
                _this.toastr.success('Produto excluido com sucesso!');
                // Fecha o modal e avisa o componente pai para atualizar a grid
                _this.fecharModal();
                _this.atualizarGrid.next();
            }
        }, function (error) {
            console.log(error);
            _this.toastr.error('Erro! Não foi possível excluir o produto.');
        });
        console.log('teste');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExclusaoProduto.prototype, "produto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExclusaoProduto.prototype, "atualizarGrid", void 0);
    ExclusaoProduto = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exclusao-produto',
            template: __webpack_require__(/*! ./exclusao-produto.component.html */ "./src/app/produtos/exclusao/exclusao-produto.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _exclusao_produto_service__WEBPACK_IMPORTED_MODULE_2__["ExclusaoProdutoService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ExclusaoProduto);
    return ExclusaoProduto;
}());



/***/ }),

/***/ "./src/app/produtos/exclusao/exclusao-produto.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/produtos/exclusao/exclusao-produto.service.ts ***!
  \***************************************************************/
/*! exports provided: ExclusaoProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclusaoProdutoService", function() { return ExclusaoProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExclusaoProdutoService = /** @class */ (function () {
    function ExclusaoProdutoService(http) {
        this.http = http;
    }
    // Solicita a API a exclusão do Produto
    ExclusaoProdutoService.prototype.deleteProduto = function (produto) {
        // Define o cabeçalho da chamada
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // Chama a API enviando o ID do produto na URL
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ApiUrl + ("/Produtos/" + produto.id), { headers: httpOptions.headers, observe: "response" });
    };
    ExclusaoProdutoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExclusaoProdutoService);
    return ExclusaoProdutoService;
}());



/***/ }),

/***/ "./src/app/produtos/produtos.component.html":
/*!**************************************************!*\
  !*** ./src/app/produtos/produtos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Produtos</h1>\r\n\r\n<p>Lista de produtos cadastrados no banco de dados.</p>\r\n\r\n<p *ngIf=\"!produtos\"><em>Carregando...</em></p>\r\n\r\n<table class='table table-striped' *ngIf=\"produtos\">\r\n  <thead>\r\n    <tr>\r\n      <th>Descrição</th>\r\n      <th>Preço</th>\r\n      <th>Estoque</th>\r\n      <th>Ações</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let produto of produtos\">\r\n      <td>{{ produto.descricao }}</td>\r\n      <td>{{ produto.preco}}</td>\r\n      <td>{{ produto.estoque}}</td>\r\n      <td>\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"VisualizarProduto(produto)\">Ver</button>\r\n          <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"EditarProduto(produto)\">Editar</button>\r\n          <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"ExcluirProduto(produto)\">Excluir</button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<button class=\"btn btn-primary\" (click)=\"CadastrarProduto()\">Cadastrar</button>\r\n\r\n\r\n\r\n<cadastro-produto #CadastroProduto (atualizarGrid)=\"BuscarProdutos()\"></cadastro-produto>\r\n<edicao-produto #EdicaoProduto [produto]=\"InputProduto\" (atualizarGrid)=\"BuscarProdutos()\"></edicao-produto>\r\n<detalhes-produto #DetalhesProduto  [produto]=\"InputProduto\"></detalhes-produto>\r\n<exclusao-produto #ExclusaoProduto [produto]=\"InputProduto\" (atualizarGrid)=\"BuscarProdutos()\"></exclusao-produto>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/produtos/produtos.component.ts":
/*!************************************************!*\
  !*** ./src/app/produtos/produtos.component.ts ***!
  \************************************************/
/*! exports provided: ProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function() { return ProdutosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cadastro_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro/cadastro-produto.component */ "./src/app/produtos/cadastro/cadastro-produto.component.ts");
/* harmony import */ var _edicao_edicao_produto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edicao/edicao-produto.component */ "./src/app/produtos/edicao/edicao-produto.component.ts");
/* harmony import */ var _produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos.service */ "./src/app/produtos/produtos.service.ts");
/* harmony import */ var _detalhes_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detalhes/detalhes-produto.component */ "./src/app/produtos/detalhes/detalhes-produto.component.ts");
/* harmony import */ var _exclusao_exclusao_produto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exclusao/exclusao-produto.component */ "./src/app/produtos/exclusao/exclusao-produto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProdutosComponent = /** @class */ (function () {
    // Importa o serviço responsável pelas chamadas a api
    function ProdutosComponent(ProdutoService) {
        this.ProdutoService = ProdutoService;
    }
    // Dispara ao iniciar o componente
    ProdutosComponent.prototype.ngOnInit = function () {
        this.BuscarProdutos();
    };
    // Busca dados na base
    ProdutosComponent.prototype.BuscarProdutos = function () {
        var _this = this;
        this.ProdutoService.getProdutos().subscribe(function (result) {
            // Preenche a lista de produtos
            _this.produtos = result;
        }, function (error) { return console.error(error); });
        ;
    };
    // Cadastro
    ProdutosComponent.prototype.CadastrarProduto = function () {
        this.cadastro.abrirModal();
    };
    // Edição
    ProdutosComponent.prototype.EditarProduto = function (produto) {
        this.InputProduto = produto;
        this.edicao.abrirModal();
    };
    // Detalhes
    ProdutosComponent.prototype.VisualizarProduto = function (produto) {
        this.InputProduto = produto;
        this.detalhes.abrirModal();
    };
    // Exclusão
    ProdutosComponent.prototype.ExcluirProduto = function (produto) {
        this.InputProduto = produto;
        this.exclusao.abrirModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_cadastro_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_1__["CadastroProduto"]),
        __metadata("design:type", _cadastro_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_1__["CadastroProduto"])
    ], ProdutosComponent.prototype, "cadastro", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_edicao_edicao_produto_component__WEBPACK_IMPORTED_MODULE_2__["EdicaoProduto"]),
        __metadata("design:type", _edicao_edicao_produto_component__WEBPACK_IMPORTED_MODULE_2__["EdicaoProduto"])
    ], ProdutosComponent.prototype, "edicao", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_detalhes_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_4__["DetalhesProduto"]),
        __metadata("design:type", _detalhes_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_4__["DetalhesProduto"])
    ], ProdutosComponent.prototype, "detalhes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_exclusao_exclusao_produto_component__WEBPACK_IMPORTED_MODULE_5__["ExclusaoProduto"]),
        __metadata("design:type", _exclusao_exclusao_produto_component__WEBPACK_IMPORTED_MODULE_5__["ExclusaoProduto"])
    ], ProdutosComponent.prototype, "exclusao", void 0);
    ProdutosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'produtos',
            template: __webpack_require__(/*! ./produtos.component.html */ "./src/app/produtos/produtos.component.html")
        }),
        __metadata("design:paramtypes", [_produtos_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]])
    ], ProdutosComponent);
    return ProdutosComponent;
}());



/***/ }),

/***/ "./src/app/produtos/produtos.service.ts":
/*!**********************************************!*\
  !*** ./src/app/produtos/produtos.service.ts ***!
  \**********************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProdutoService = /** @class */ (function () {
    function ProdutoService(http) {
        this.http = http;
    }
    // Busca na api a lista de produtos
    ProdutoService.prototype.getProdutos = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ApiUrl + '/Produtos/');
    };
    ProdutoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProdutoService);
    return ProdutoService;
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
    production: false,
    ApiUrl: 'https://localhost:44338/api'
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
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\igor\Desktop\Teste Dart Digital\siteMercado\siteMercado\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map