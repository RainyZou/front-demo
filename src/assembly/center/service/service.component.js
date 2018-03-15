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
var service_service_1 = require("../../../service/service.service");
var service_vo_1 = require("../../../vo/service.vo");
var property_component_1 = require("../property/property.component");
var command_component_1 = require("../command/command.component");
var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(route, serviceService) {
        this.route = route;
        this.serviceService = serviceService;
        this.services = new Array();
        //服务详情id
        this.serviceDetailId = "";
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    //新增
    ServiceComponent.prototype.create = function () {
        var self = this;
        var productId = self.productDetailId;
        var serviceType = document.getElementById("serviceType").value;
        var description = document.getElementById("description").value;
        self.serviceService.create(productId, serviceType, description, function (obj) {
            //新增后刷新
            self.page(productId);
        });
    };
    //分页
    ServiceComponent.prototype.page = function (productId) {
        var self = this;
        self.services = [];
        this.serviceService.page(productId, function (obj) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _service = new service_vo_1.ServiceVo();
                _service.serviceId = item.serviceId;
                _service.productId = item.productId;
                _service.serviceType = item.serviceType;
                _service.description = item.description;
                _service.lastDate = item.lastDate;
                self.services.push(_service);
            });
        });
    };
    //服务详情
    ServiceComponent.prototype.detialShow = function (serviceId) {
        var self = this;
        self.serviceDetailId = serviceId;
        self.propertyView.page(serviceId);
        self.commandView.page(serviceId);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", void 0)
    ], ServiceComponent.prototype, "productDetailId", void 0);
    __decorate([
        core_1.ViewChild(property_component_1.PropertyComponent),
        __metadata("design:type", property_component_1.PropertyComponent)
    ], ServiceComponent.prototype, "propertyView", void 0);
    __decorate([
        core_1.ViewChild(command_component_1.CommandComponent),
        __metadata("design:type", command_component_1.CommandComponent)
    ], ServiceComponent.prototype, "commandView", void 0);
    ServiceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Service',
            templateUrl: 'service.component.html',
            styleUrls: ['service.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, service_service_1.ServiceService])
    ], ServiceComponent);
    return ServiceComponent;
}());
exports.ServiceComponent = ServiceComponent;
//# sourceMappingURL=service.component.js.map