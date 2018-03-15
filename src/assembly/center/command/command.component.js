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
var command_service_1 = require("../../../service/command.service");
var command_vo_1 = require("../../../vo/command.vo");
var para_component_1 = require("../para/para.component");
var CommandComponent = /** @class */ (function () {
    function CommandComponent(route, commandService) {
        this.route = route;
        this.commandService = commandService;
        //服务详情id
        this.serviceDetailId = null;
        this.commands = new Array();
        //命令详情id
        this.commandDetailId = "";
    }
    CommandComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    //新增
    CommandComponent.prototype.create = function () {
        var self = this;
        var serviceId = self.serviceDetailId;
        var commandName = document.getElementById("commandName").value;
        self.commandService.create(serviceId, commandName, function (obj) {
            //新增后刷新
            self.page(serviceId);
        });
    };
    //分页
    CommandComponent.prototype.page = function (serviceId) {
        var self = this;
        self.commands = [];
        this.commandService.page(serviceId, function (obj) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _command = new command_vo_1.CommandVo();
                _command.commandId = item.commandId;
                _command.serviceId = item.serviceId;
                _command.commandName = item.commandName;
                self.commands.push(_command);
            });
        });
    };
    //参数详情
    CommandComponent.prototype.detialShow = function (commandId) {
        var self = this;
        self.commandDetailId = commandId;
        self.paraView.page(commandId);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CommandComponent.prototype, "serviceDetailId", void 0);
    __decorate([
        core_1.ViewChild(para_component_1.ParaComponent),
        __metadata("design:type", para_component_1.ParaComponent)
    ], CommandComponent.prototype, "paraView", void 0);
    CommandComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Command',
            templateUrl: 'command.component.html',
            styleUrls: ['command.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, command_service_1.CommandService])
    ], CommandComponent);
    return CommandComponent;
}());
exports.CommandComponent = CommandComponent;
//# sourceMappingURL=command.component.js.map