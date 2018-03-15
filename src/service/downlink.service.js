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
var DownlinkService = /** @class */ (function (_super) {
    __extends(DownlinkService, _super);
    function DownlinkService(paramHttp, authGuard) {
        var _this = _super.call(this, paramHttp, authGuard) || this;
        _this.paramHttp = paramHttp;
        _this.authGuard = authGuard;
        return _this;
    }
    //下发命令
    DownlinkService.prototype.downlink = function (deviceId, productId, serviceId, commandId, paraMap, _successCallback, _errorCallback) {
        if (_errorCallback === void 0) { _errorCallback = null; }
        var _reqUrl = global_context_1.DOWNLINK_URL;
        //测试
        // var deviceId = "cd298619-9484-4708-aacc-ada2bf75c61a";
        // var productId = "093feba1-cd88-4ceb-8126-744b3fc1159d";
        // var serviceId = "fe3daa91-bd4b-4fb1-9be1-d04d07b293e8";
        // var commandId = "2dbbfb90-a8f1-4fe7-a12b-eac5b4f2ab68";
        // var paraMap: any = {"e6695c36-fb02-4a05-8def-18e6713eae6f": "22", "1086b3fb-7594-4106-94d2-f019792548fe": "33"};
        var _data = {
            "deviceId": deviceId,
            "productId": productId,
            "serviceId": serviceId,
            "commandId": commandId,
            "paraMap": paraMap
        };
        console.log(_data);
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
    //分页
    DownlinkService.prototype.page = function (_successCallback, _errorCallback) {
        if (_errorCallback === void 0) { _errorCallback = null; }
        var _reqUrl = global_context_1.DOWNLINK_PAGE_URL;
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
    DownlinkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, auth_guard_1.AuthGuard])
    ], DownlinkService);
    return DownlinkService;
}(base_service_1.BaseService));
exports.DownlinkService = DownlinkService;
//# sourceMappingURL=downlink.service.js.map