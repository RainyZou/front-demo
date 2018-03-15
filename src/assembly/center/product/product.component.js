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
var product_service_1 = require("../../../service/product.service");
var product_vo_1 = require("../../../vo/product.vo");
var model_data_service_1 = require("../../../service/model-data.service");
var service_component_1 = require("../service/service.component");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, productService, modelDataService) {
        this.route = route;
        this.productService = productService;
        this.modelDataService = modelDataService;
        this.products = new Array();
        //产品详情id
        this.productDetailId = "";
    }
    ProductComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    //新增
    ProductComponent.prototype.create = function () {
        var self = this;
        var manufacturerId = document.getElementById("manufacturerId").value;
        var manufacturerName = document.getElementById("manufacturerName").value;
        var model = document.getElementById("model").value;
        var protocolType = document.getElementById("protocolType").value;
        var productType = document.getElementById("productType").value;
        var description = document.getElementById("description").value;
        self.productService.create(manufacturerId, manufacturerName, model, protocolType, productType, description, function (obj) {
            //新增后刷新
            self.page();
        });
    };
    //分页
    ProductComponent.prototype.page = function () {
        var self = this;
        self.products = [];
        self.productService.page(function (obj) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _product = new product_vo_1.ProductVo();
                _product.productId = item.productId;
                _product.manufacturerId = item.manufacturerId;
                _product.manufacturerName = item.manufacturerName;
                _product.model = item.model;
                _product.protocolType = item.protocolType;
                _product.productType = item.productType;
                _product.imagePath = item.imagePath;
                _product.description = item.description;
                _product.lastDate = item.lastDate;
                self.products.push(_product);
            });
        });
    };
    //服务详情
    ProductComponent.prototype.detialShow = function (productId) {
        var self = this;
        self.productDetailId = productId;
        self.serviceView.page(productId);
    };
    //刷新
    ProductComponent.prototype.refresh = function (productId) {
        var self = this;
        self.modelDataService.refresh(productId, function (obj) {
            console.log(obj);
        });
    };
    __decorate([
        core_1.ViewChild(service_component_1.ServiceComponent),
        __metadata("design:type", service_component_1.ServiceComponent)
    ], ProductComponent.prototype, "serviceView", void 0);
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Product',
            templateUrl: 'product.component.html',
            styleUrls: ['product.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService, model_data_service_1.ModelDataService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map