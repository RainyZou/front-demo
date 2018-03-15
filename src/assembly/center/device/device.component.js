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
var device_service_1 = require("../../../service/device.service");
var device_vo_1 = require("../../../vo/device.vo");
var down_meta_1 = require("../../../meta/down.meta");
var service_meta_1 = require("../../../meta/service.meta");
var command_meta_1 = require("../../../meta/command.meta");
var para_meta_1 = require("../../../meta/para.meta");
var downlink_service_1 = require("../../../service/downlink.service");
var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(route, deviceService, downlinkService) {
        this.route = route;
        this.deviceService = deviceService;
        this.downlinkService = downlinkService;
        this.downlinkDisplay = false;
        this.devices = new Array();
        this.downMeta = new down_meta_1.DownMeta();
    }
    DeviceComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    //新增
    DeviceComponent.prototype.create = function () {
        var self = this;
        var productId = document.getElementById("productId").value;
        var devName = document.getElementById("devName").value;
        var devEui = document.getElementById("devEui").value;
        var providerType = document.getElementById("providerType").value;
        self.deviceService.init(productId, devName, devEui, providerType, function (obj) {
            //新增后刷新
            self.page();
        });
    };
    //分页
    DeviceComponent.prototype.page = function () {
        var self = this;
        self.devices = [];
        self.deviceService.page(function (obj) {
            var _data = obj.content.data;
            _data.forEach(function (item) {
                var _device = new device_vo_1.DeviceVo();
                _device.deviceId = item.deviceId;
                _device.devName = item.devName;
                _device.devId = item.devId;
                _device.devEui = item.devEui;
                _device.psk = item.psk;
                _device.status = item.status;
                _device.providerType = item.providerType;
                self.devices.push(_device);
            });
        });
    };
    //下发命令列表
    DeviceComponent.prototype.downlinkShow = function (deviceId) {
        var self = this;
        self.downlinkDisplay = !self.downlinkDisplay;
        if (self.downlinkDisplay) {
            self.downMeta = new down_meta_1.DownMeta();
            //如果显示，需要刷新该设备拥有的命令列表
            this.deviceService.downMeta(deviceId, function (obj) {
                var _data = obj.content;
                self.downMeta.devEui = _data.devEui;
                self.downMeta.deviceId = _data.deviceId;
                self.downMeta.productId = _data.productId;
                _data.services.forEach(function (service) {
                    var _serviceMeta = new service_meta_1.ServiceMeta();
                    _serviceMeta.serviceId = service.serviceId;
                    _serviceMeta.serviceType = service.serviceType;
                    self.downMeta.services.push(_serviceMeta);
                    service.commands.forEach(function (command) {
                        var _commandMeta = new command_meta_1.CommandMeta();
                        _commandMeta.commandId = command.commandId;
                        _commandMeta.commandName = command.commandName;
                        _serviceMeta.commands.push(_commandMeta);
                        command.paras.forEach(function (para) {
                            var _paraMeta = new para_meta_1.ParaMeta();
                            _paraMeta.paraId = para.paraId;
                            _paraMeta.paraName = para.paraName;
                            _paraMeta.dataType = para.dataType;
                            _paraMeta.required = para.required;
                            _paraMeta.min = para.min;
                            _paraMeta.max = para.max;
                            _paraMeta.step = para.step;
                            _paraMeta.maxLength = para.maxLength;
                            _paraMeta.unit = para.unit;
                            _paraMeta.enumList = para.enumList;
                            _commandMeta.paras.push(_paraMeta);
                        });
                    });
                });
                var a = new Array(0);
                console.log(self.downMeta);
            });
        }
    };
    //下发命令
    DeviceComponent.prototype.downlink = function () {
        var self = this;
        //TODO 测试
        var deviceId = document.getElementById("deviceId").value;
        var productId = document.getElementById("productId").value;
        var serviceId = document.getElementById("serviceId").value;
        var commandId = document.getElementById("commandId").value;
        var paraId = document.getElementById("paraId").value;
        var paraValue = document.getElementById("paraValue").value;
        var paraMap = new Map();
        paraMap.set(paraId, paraValue);
        ////http://blog.csdn.net/qq_32014215/article/details/68063852
        //map转换json格式
        var paraObj = Object.create(null);
        paraMap.forEach(function (v, k) {
            paraObj[k] = v;
        });
        paraMap = paraObj;
        ////
        //测试
        // var deviceId = "cd298619-9484-4708-aacc-ada2bf75c61a";
        // var productId = "093feba1-cd88-4ceb-8126-744b3fc1159d";
        // var serviceId = "fe3daa91-bd4b-4fb1-9be1-d04d07b293e8";
        // var commandId = "2dbbfb90-a8f1-4fe7-a12b-eac5b4f2ab68";
        // var paraMap: any = {"e6695c36-fb02-4a05-8def-18e6713eae6f": "22", "1086b3fb-7594-4106-94d2-f019792548fe": "33"};
        //var dictionary:Dictionary=null;
        // console.log(paraMap);
        this.downlinkService.downlink(deviceId, productId, serviceId, commandId, paraMap, function (obj) {
        });
    };
    DeviceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Device',
            templateUrl: 'device.component.html',
            styleUrls: ['device.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, device_service_1.DeviceService, downlink_service_1.DownlinkService])
    ], DeviceComponent);
    return DeviceComponent;
}());
exports.DeviceComponent = DeviceComponent;
//# sourceMappingURL=device.component.js.map