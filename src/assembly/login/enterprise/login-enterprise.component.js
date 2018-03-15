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
var LoginEnterpriseComponent = /** @class */ (function () {
    function LoginEnterpriseComponent(authGuard, router, route, loginService) {
        this.authGuard = authGuard;
        this.router = router;
        this.route = route;
        this.loginService = loginService;
    }
    LoginEnterpriseComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    LoginEnterpriseComponent.prototype.login = function () {
        var self = this;
        var loginAccount = document.getElementById("loginAccount").value;
        var loginPwd = document.getElementById("loginPwd").value;
        console.log("LoginEnterpriseComponent");
        console.log("loginAccount:" + loginAccount + ";" + "loginPwd:" + loginPwd + ";");
        //登录成功处理
        self.loginService.loginEnterprise(loginAccount, loginPwd, function (res) {
            self.authGuard.loginSuccess = true;
            self.authGuard.loginUser = res.content;
            //TODO 遍历获取该权限拥有的app权限应用
            var mapApp = self.authGuard.loginUser.mapApp;
            for (var i in mapApp) {
                self.authGuard.loginApp = mapApp[i];
                break;
            }
            //TODO 默认app应用
            self.authGuard.loginApp = mapApp['8a4fd12a-cf60-4031-8b35-d3e796068415'];
            self.router.navigate(['']);
        });
    };
    LoginEnterpriseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'LoginEnterprise',
            templateUrl: 'login-enterprise.component.html',
            styleUrls: ['login-enterprise.component.css']
        }),
        __metadata("design:paramtypes", [auth_guard_1.AuthGuard, router_1.Router, router_1.ActivatedRoute, login_service_1.LoginService])
    ], LoginEnterpriseComponent);
    return LoginEnterpriseComponent;
}());
exports.LoginEnterpriseComponent = LoginEnterpriseComponent;
//# sourceMappingURL=login-enterprise.component.js.map