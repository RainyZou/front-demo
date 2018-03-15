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
var auth_guard_1 = require("../auth/auth-guard");
var left_subject_1 = require("../../subject/left.subject");
var LeftComponent = /** @class */ (function () {
    function LeftComponent(router, route, leftSubject, authGuard) {
        this.router = router;
        this.route = route;
        this.leftSubject = leftSubject;
        this.authGuard = authGuard;
        this.appIds = new Array();
    }
    LeftComponent.prototype.ngOnInit = function () {
        var self = this;
        this.leftSubject.leftSubscribe(function (msg) {
            alert("left:" + msg);
        });
        console.log(self.authGuard.loginUser);
        //遍历获取该权限拥有的app权限应用
        var mapApp = self.authGuard.loginUser.mapApp;
        for (var i in mapApp) {
            self.appIds.push(i);
        }
        console.log(self.authGuard.loginApp);
    };
    LeftComponent.prototype.show = function (msg) {
        alert(msg);
        console.log(this.authGuard.loginUser);
    };
    LeftComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Left',
            templateUrl: 'left.component.html',
            styleUrls: ['left.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, left_subject_1.LeftSubject, auth_guard_1.AuthGuard])
    ], LeftComponent);
    return LeftComponent;
}());
exports.LeftComponent = LeftComponent;
//# sourceMappingURL=left.component.js.map