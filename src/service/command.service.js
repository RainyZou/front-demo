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
var CommandService = /** @class */ (function (_super) {
    __extends(CommandService, _super);
    function CommandService(paramHttp, authGuard) {
        var _this = _super.call(this, paramHttp, authGuard) || this;
        _this.paramHttp = paramHttp;
        _this.authGuard = authGuard;
        return _this;
    }
    //新增
    CommandService.prototype.create = function (_serviceId, _commandName, _successCallback, _errorCallback) {
        if (_errorCallback === void 0) { _errorCallback = null; }
        var _reqUrl = global_context_1.COMMAND_CREATE_URL;
        var _data = {
            "serviceId": _serviceId,
            "commandName": _commandName
        };
        _super.prototype.post.call(this, _reqUrl, _data, function (_res) {
            console.log(_res);
            var _code = _res.code;
            if (_code === global_context_1.SUCCESS) {
                _successCallback(_res);
            }
            else {
                if (_errorCallback != null) {
                    _errorCallback(_res);
                }
            }
        });
    };
    //分页
    CommandService.prototype.page = function (serviceId, _successCallback, _errorCallback) {
        if (_errorCallback === void 0) { _errorCallback = null; }
        var _reqUrl = global_context_1.COMMAND_PAGE_URL;
        var _data = { "pageSize": "20", "pageNum": "1", "serviceId": serviceId };
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
    CommandService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, auth_guard_1.AuthGuard])
    ], CommandService);
    return CommandService;
}(base_service_1.BaseService));
exports.CommandService = CommandService;
//# sourceMappingURL=command.service.js.map