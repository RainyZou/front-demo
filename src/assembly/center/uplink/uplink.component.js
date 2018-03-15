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
var uplink_service_1 = require("../../../service/uplink.service");
var uplink_vo_1 = require("../../../vo/uplink.vo");
var UplinkComponent = /** @class */ (function () {
    function UplinkComponent(route, uplinkService) {
        this.route = route;
        this.uplinkService = uplinkService;
        this.uplinks = new Array();
    }
    UplinkComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    //分页
    UplinkComponent.prototype.page = function () {
        var self = this;
        self.uplinks = [];
        this.uplinkService.page(function (obj) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _uplink = new uplink_vo_1.UplinkVo();
                _uplink.uplinkId = item.uplinkId;
                _uplink.deviceId = item.deviceId;
                _uplink.devEui = item.devEui;
                _uplink.appId = item.appId;
                _uplink.appEui = item.appEui;
                _uplink.payload = item.payload;
                _uplink.dataModel = item.dataModel;
                _uplink.dataPayload = item.dataPayload;
                _uplink.dataMerge = item.dataMerge;
                _uplink.createDate = item.createDate;
                self.uplinks.push(_uplink);
            });
        });
    };
    UplinkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Uplink',
            templateUrl: 'uplink.component.html',
            styleUrls: ['uplink.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, uplink_service_1.UplinkService])
    ], UplinkComponent);
    return UplinkComponent;
}());
exports.UplinkComponent = UplinkComponent;
//# sourceMappingURL=uplink.component.js.map