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
var downlink_service_1 = require("../../../service/downlink.service");
var downlink_vo_1 = require("../../../vo/downlink.vo");
var DownlinkComponent = /** @class */ (function () {
    function DownlinkComponent(route, downlinkService) {
        this.route = route;
        this.downlinkService = downlinkService;
        this.downlinks = new Array();
    }
    DownlinkComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    //分页
    DownlinkComponent.prototype.page = function () {
        var self = this;
        self.downlinks = [];
        this.downlinkService.page(function (obj) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _downlink = new downlink_vo_1.DownlinkVo();
                _downlink.downlinkId = item.downlinkId;
                _downlink.orderNum = item.orderNum;
                _downlink.deviceId = item.deviceId;
                _downlink.devEui = item.devEui;
                _downlink.appId = item.appId;
                _downlink.appEui = item.appEui;
                _downlink.payload = item.payload;
                _downlink.status = item.status;
                _downlink.sendDate = item.sendDate;
                _downlink.backDate = item.backDate;
                self.downlinks.push(_downlink);
            });
        });
    };
    DownlinkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Downlink',
            templateUrl: 'downlink.component.html',
            styleUrls: ['downlink.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, downlink_service_1.DownlinkService])
    ], DownlinkComponent);
    return DownlinkComponent;
}());
exports.DownlinkComponent = DownlinkComponent;
//# sourceMappingURL=downlink.component.js.map