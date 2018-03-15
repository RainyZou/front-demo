"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var product_component_1 = require("../center/product/product.component");
var auth_guard_1 = require("../auth/auth-guard");
var login_enterprise_component_1 = require("../login/enterprise/login-enterprise.component");
var login_admin_component_1 = require("../login/admin/login-admin.component");
var device_component_1 = require("../center/device/device.component");
var plugins_component_1 = require("../center/plugins/plugins.component");
var service_component_1 = require("../center/service/service.component");
var property_component_1 = require("../center/property/property.component");
var command_component_1 = require("../center/command/command.component");
var para_component_1 = require("../center/para/para.component");
var downlink_component_1 = require("../center/downlink/downlink.component");
var uplink_component_1 = require("../center/uplink/uplink.component");
// http://www.jb51.net/article/109406.htm
var routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login/admin', component: login_admin_component_1.LoginAdminComponent },
    { path: 'login', component: login_enterprise_component_1.LoginEnterpriseComponent },
    {
        path: '', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: 'device',
                component: device_component_1.DeviceComponent, canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'downlink',
                component: downlink_component_1.DownlinkComponent, canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'uplink',
                component: uplink_component_1.UplinkComponent, canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'product',
                component: product_component_1.ProductComponent, canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'plugins',
                component: plugins_component_1.PluginsComponent, canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'service',
                component: service_component_1.ServiceComponent, canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'property',
                component: property_component_1.PropertyComponent, canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'command',
                component: command_component_1.CommandComponent, canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'para',
                component: para_component_1.ParaComponent, canActivate: [auth_guard_1.AuthGuard]
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map