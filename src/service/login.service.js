"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_service_1 = require("./base.service");
var http_1 = require("@angular/http");
var auth_guard_1 = require("../assembly/auth/auth-guard");
var LoginService = /** @class */ (function (_super) {
    __extends(LoginService, _super);
    function LoginService(paramHttp, authGuard) {
        var _this = _super.call(this, paramHttp, authGuard) || this;
        _this.paramHttp = paramHttp;
        _this.authGuard = authGuard;
        return _this;
    }
    LoginService.prototype.loginAdmin = function (_username, _password, _successCallback, _errorCallback) {
        if (_errorCallback === void 0) { _errorCallback = null; }
        var _reqUrl = "http://localhost:8380/iot-web/rs/ws/iot/auth/login/admin";
        var _data = { "username": _username, "password": _password };
        _super.prototype.post.call(this, _reqUrl, _data, function (res) {
            console.log(res);
            var code = res.code;
            if (code === "000000") {
                _successCallback(res);
            }
            else {
                if (_errorCallback != null) {
                    _errorCallback(res);
                }
            }
        });
    };
    LoginService.prototype.loginEnterprise = function (_username, _password, _successCallback, _errorCallback) {
        if (_errorCallback === void 0) { _errorCallback = null; }
        var _reqUrl = "http://localhost:8380/iot-web/rs/ws/iot/auth/login/enterprise";
        var _data = { "username": _username, "password": _password };
        _super.prototype.post.call(this, _reqUrl, _data, function (res) {
            console.log(res);
            var code = res.code;
            if (code === "000000") {
                _successCallback(res);
            }
            else {
                if (_errorCallback != null) {
                    _errorCallback(res);
                }
            }
        });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, auth_guard_1.AuthGuard])
    ], LoginService);
    return LoginService;
}(base_service_1.BaseService));
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map