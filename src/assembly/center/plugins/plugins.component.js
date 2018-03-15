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
//https://segmentfault.com/a/1190000007886391
// A: 引入FileUpload模块
var ng2_file_upload_1 = require("ng2-file-upload");
var auth_guard_1 = require("../../auth/auth-guard");
var plugins_service_1 = require("../../../service/plugins.service");
var plugins_vo_1 = require("../../../vo/plugins.vo");
var PluginsComponent = /** @class */ (function () {
    function PluginsComponent(route, authGuard, pluginsService) {
        this.route = route;
        this.authGuard = authGuard;
        this.pluginsService = pluginsService;
        // B: 初始化定义uploader变量,用来配置input中的uploader属性
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: "http://localhost:8380/iot-web/rs/ws/iot/management/plugins/upload",
            method: "POST",
            itemAlias: "uploadedfile",
        });
        this.plugins = new Array();
    }
    PluginsComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    // C: 定义事件，选择文件
    PluginsComponent.prototype.selectedFileOnChanged = function (event) {
        // 打印文件选择名称
        console.log(event.target.value);
        this.uploadFile();
    };
    // D: 定义事件，上传文件
    PluginsComponent.prototype.uploadFile = function () {
        var productId = document.getElementById("productId").value;
        var self = this;
        // 上传
        this.uploader.queue[0].withCredentials = false;
        this.uploader.queue[0].onBuildForm = function (form) {
            var appId = self.authGuard.loginApp.appId;
            var userId = self.authGuard.loginUser.userId;
            var oid = self.authGuard.loginUser.oid;
            form.append("appId", appId);
            form.append("userId", userId);
            form.append("oid", oid);
            form.append("productId", productId);
        };
        console.log(this.uploader.queue[0].formData);
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                //let tempRes = JSON.parse(response);
                console.log(response);
            }
            else {
                // 上传文件后获取服务器返回的数据错误
                alert("");
            }
            this.uploader.queue[0].remove();
        };
        this.uploader.queue[0].upload(); // 开始上传
    };
    //分页
    PluginsComponent.prototype.page = function () {
        var self = this;
        self.plugins = [];
        this.pluginsService.page(function (obj) {
            var _data = obj.content.data;
            _data.forEach(function (item) {
                var _plugins = new plugins_vo_1.PluginsVo();
                _plugins.pluginsId = item.pluginsId;
                _plugins.productId = item.productId;
                _plugins.pluginsName = item.pluginsName;
                _plugins.fileName = item.fileName;
                _plugins.filePath = item.filePath;
                _plugins.isUse = item.isUse;
                self.plugins.push(_plugins);
            });
        });
    };
    //部署
    PluginsComponent.prototype.deploy = function (pluginsId) {
        var self = this;
        // this.pluginsService.deploy(pluginsId,function (obj: any) {
        // });
    };
    PluginsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Plugins',
            templateUrl: 'plugins.component.html',
            styleUrls: ['plugins.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, auth_guard_1.AuthGuard, plugins_service_1.PluginsService])
    ], PluginsComponent);
    return PluginsComponent;
}());
exports.PluginsComponent = PluginsComponent;
//# sourceMappingURL=plugins.component.js.map