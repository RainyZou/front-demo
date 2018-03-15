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
var para_service_1 = require("../../../service/para.service");
var para_vo_1 = require("../../../vo/para.vo");
var ParaComponent = /** @class */ (function () {
    function ParaComponent(route, paraService) {
        this.route = route;
        this.paraService = paraService;
        //命令详情id
        this.commandDetailId = null;
        this.paras = new Array();
    }
    ParaComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    //新增
    ParaComponent.prototype.create = function () {
        var self = this;
        var commandId = self.commandDetailId;
        var paraName = document.getElementById("paraName").value;
        var dataType = document.getElementById("dataType").value;
        var required = document.getElementById("required").value;
        var min = document.getElementById("min").value;
        var max = document.getElementById("max").value;
        var step = document.getElementById("step").value;
        var maxLength = document.getElementById("maxLength").value;
        var unit = document.getElementById("unit").value;
        var enumList = document.getElementById("enumList").value;
        self.paraService.create(commandId, paraName, dataType, required, min, max, step, maxLength, unit, enumList, function (obj) {
            //新增后刷新
            self.page(commandId);
        });
    };
    //分页
    ParaComponent.prototype.page = function (commandId) {
        var self = this;
        self.paras = [];
        this.paraService.page(commandId, function (obj) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _para = new para_vo_1.ParaVo();
                _para.paraId = item.paraId;
                _para.commandId = item.commandId;
                _para.paraName = item.paraName;
                _para.dataType = item.dataType;
                _para.required = item.required;
                _para.min = item.min;
                _para.max = item.max;
                _para.step = item.step;
                _para.maxLength = item.maxLength;
                _para.unit = item.unit;
                _para.enumList = item.enumList;
                self.paras.push(_para);
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ParaComponent.prototype, "commandDetailId", void 0);
    ParaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Para',
            templateUrl: 'para.component.html',
            styleUrls: ['para.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, para_service_1.ParaService])
    ], ParaComponent);
    return ParaComponent;
}());
exports.ParaComponent = ParaComponent;
//# sourceMappingURL=para.component.js.map