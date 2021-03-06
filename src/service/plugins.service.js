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
var global_context_1 = require("../core/global.context");
var PluginsService = /** @class */ (function (_super) {
    __extends(PluginsService, _super);
    function PluginsService(paramHttp, authGuard) {
        var _this = _super.call(this, paramHttp, authGuard) || this;
        _this.paramHttp = paramHttp;
        _this.authGuard = authGuard;
        return _this;
    }
    //分页
    PluginsService.prototype.page = function (_successCallback, _errorCallback) {
        if (_errorCallback === void 0) { _errorCallback = null; }
        var _reqUrl = global_context_1.PLUGINS_PAGE_URL;
        var _data = { "pageSize": "20", "pageNum": "1" };
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
    PluginsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, auth_guard_1.AuthGuard])
    ], PluginsService);
    return PluginsService;
}(base_service_1.BaseService));
exports.PluginsService = PluginsService;
//# sourceMappingURL=plugins.service.js.map