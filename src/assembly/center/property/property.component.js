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
var property_service_1 = require("../../../service/property.service");
var property_vo_1 = require("../../../vo/property.vo");
var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(route, propertyService) {
        this.route = route;
        this.propertyService = propertyService;
        this.propertys = new Array();
    }
    PropertyComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    //新增
    PropertyComponent.prototype.create = function () {
        var self = this;
        var serviceId = self.serviceDetailId;
        var propertyName = document.getElementById("propertyName").value;
        var dataType = document.getElementById("dataType").value;
        var required = document.getElementById("required").value;
        var min = document.getElementById("min").value;
        var max = document.getElementById("max").value;
        var step = document.getElementById("step").value;
        var maxLength = document.getElementById("maxLength").value;
        var method = document.getElementById("method").value;
        var unit = document.getElementById("unit").value;
        var enumList = document.getElementById("enumList").value;
        self.propertyService.create(serviceId, propertyName, dataType, required, min, max, step, maxLength, method, unit, enumList, function (obj) {
            //新增后刷新
            self.page(serviceId);
        });
    };
    //分页
    PropertyComponent.prototype.page = function (serviceId) {
        var self = this;
        self.propertys = [];
        this.propertyService.page(serviceId, function (obj) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _property = new property_vo_1.PropertyVo();
                _property.propertyId = item.propertyId;
                _property.serviceId = item.serviceId;
                _property.propertyName = item.propertyName;
                _property.dataType = item.dataType;
                _property.required = item.required;
                _property.min = item.min;
                _property.max = item.max;
                _property.step = item.step;
                _property.maxLength = item.maxLength;
                _property.method = item.method;
                _property.unit = item.unit;
                _property.enumList = item.enumList;
                self.propertys.push(_property);
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", void 0)
    ], PropertyComponent.prototype, "serviceDetailId", void 0);
    PropertyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Property',
            templateUrl: 'property.component.html',
            styleUrls: ['property.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, property_service_1.PropertyService])
    ], PropertyComponent);
    return PropertyComponent;
}());
exports.PropertyComponent = PropertyComponent;
//# sourceMappingURL=property.component.js.map