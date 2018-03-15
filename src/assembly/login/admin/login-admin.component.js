"use strict";
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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/map");
var auth_guard_1 = require("../../auth/auth-guard");
var login_service_1 = require("../../../service/login.service");
var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent(authGuard, router, route, loginService) {
        this.authGuard = authGuard;
        this.router = router;
        this.route = route;
        this.loginService = loginService;
    }
    LoginAdminComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    LoginAdminComponent.prototype.login = function () {
        var self = this;
        var loginAccount = document.getElementById("loginAccount").value;
        var loginPwd = document.getElementById("loginPwd").value;
        console.log("LoginAdminComponent");
        console.log("loginAccount:" + loginAccount + ";" + "loginPwd:" + loginPwd + ";");
        this.loginService.loginAdmin(loginAccount, loginPwd, function (res) {
            self.authGuard.loginSuccess = true;
            self.authGuard.loginUser = res.content;
            var mapApp = self.authGuard.loginUser.mapApp;
            for (var i in mapApp) {
                self.authGuard.loginApp = mapApp[i];
                break;
            }
            self.router.navigate(['']);
        });
    };
    LoginAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'LoginAdmin',
            templateUrl: 'login-admin.component.html',
            styleUrls: ['login-admin.component.css']
        }),
        __metadata("design:paramtypes", [auth_guard_1.AuthGuard, router_1.Router, router_1.ActivatedRoute, login_service_1.LoginService])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());
exports.LoginAdminComponent = LoginAdminComponent;
//# sourceMappingURL=login-admin.component.js.map