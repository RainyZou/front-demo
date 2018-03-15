"use strict";
// import 'reflect-metadata/Reflect';
// import 'zone.js/dist/zone.js';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("../app/app.component");
var app_routing_module_1 = require("./app-routing.module");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var error_component_1 = require("../error/error.component");
var center_component_1 = require("../center/center.component");
var left_component_1 = require("../left/left.component");
var right_component_1 = require("../right/right.component");
var product_component_1 = require("../center/product/product.component");
var auth_guard_1 = require("../auth/auth-guard");
var login_enterprise_component_1 = require("../login/enterprise/login-enterprise.component");
var login_admin_component_1 = require("../login/admin/login-admin.component");
var left_subject_1 = require("../../subject/left.subject");
var right_subject_1 = require("../../subject/right.subject");
var product_service_1 = require("../../service/product.service");
var login_service_1 = require("../../service/login.service");
var device_component_1 = require("../center/device/device.component");
var device_service_1 = require("../../service/device.service");
var common_1 = require("@angular/common");
var ng2_file_upload_1 = require("ng2-file-upload");
var plugins_component_1 = require("../center/plugins/plugins.component");
var plugins_service_1 = require("../../service/plugins.service");
var model_data_service_1 = require("../../service/model-data.service");
var service_component_1 = require("../center/service/service.component");
var service_service_1 = require("../../service/service.service");
var property_component_1 = require("../center/property/property.component");
var property_service_1 = require("../../service/property.service");
var command_component_1 = require("../center/command/command.component");
var para_component_1 = require("../center/para/para.component");
var command_service_1 = require("../../service/command.service");
var para_service_1 = require("../../service/para.service");
var downlink_component_1 = require("../center/downlink/downlink.component");
var downlink_service_1 = require("../../service/downlink.service");
var uplink_component_1 = require("../center/uplink/uplink.component");
var uplink_service_1 = require("../../service/uplink.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, error_component_1.ErrorComponent, dashboard_component_1.DashboardComponent, center_component_1.CenterComponent, left_component_1.LeftComponent, right_component_1.RightComponent, login_admin_component_1.LoginAdminComponent, login_enterprise_component_1.LoginEnterpriseComponent,
                product_component_1.ProductComponent, plugins_component_1.PluginsComponent, device_component_1.DeviceComponent, service_component_1.ServiceComponent, property_component_1.PropertyComponent, command_component_1.CommandComponent, para_component_1.ParaComponent, downlink_component_1.DownlinkComponent, uplink_component_1.UplinkComponent
            ],
            imports: [
                common_1.CommonModule, ng2_file_upload_1.FileUploadModule, platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule
            ],
            providers: [auth_guard_1.AuthGuard, left_subject_1.LeftSubject, right_subject_1.RightSubject, login_service_1.LoginService,
                product_service_1.ProductService, plugins_service_1.PluginsService, device_service_1.DeviceService, model_data_service_1.ModelDataService, service_service_1.ServiceService, property_service_1.PropertyService, command_service_1.CommandService, para_service_1.ParaService, downlink_service_1.DownlinkService, uplink_service_1.UplinkService
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map