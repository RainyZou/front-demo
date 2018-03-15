import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ProductComponent} from "../center/product/product.component";
import {AuthGuard} from "../auth/auth-guard";
import {LoginEnterpriseComponent} from "../login/enterprise/login-enterprise.component";
import {LoginAdminComponent} from "../login/admin/login-admin.component";
import {DeviceComponent} from "../center/device/device.component";
import {PluginsComponent} from "../center/plugins/plugins.component";
import {ServiceComponent} from "../center/service/service.component";
import {PropertyComponent} from "../center/property/property.component";
import {CommandComponent} from "../center/command/command.component";
import {ParaComponent} from "../center/para/para.component";
import {DownlinkComponent} from "../center/downlink/downlink.component";
import {UplinkComponent} from "../center/uplink/uplink.component";

// http://www.jb51.net/article/109406.htm
const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login/admin', component: LoginAdminComponent},
    {path: 'login', component: LoginEnterpriseComponent},
    {
        path: '', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'device',
                component: DeviceComponent, canActivate: [AuthGuard]
            },
            {
                path: 'downlink',
                component: DownlinkComponent, canActivate: [AuthGuard]
            },
            {
                path: 'uplink',
                component: UplinkComponent, canActivate: [AuthGuard]
            },
            {
                path: 'product',
                component: ProductComponent, canActivate: [AuthGuard]
            },
            {
                path: 'plugins',
                component: PluginsComponent, canActivate: [AuthGuard]
            },
            {
                path: 'service',
                component: ServiceComponent, canActivate: [AuthGuard]
            },
            {
                path: 'property',
                component: PropertyComponent, canActivate: [AuthGuard]
            },
            {
                path: 'command',
                component: CommandComponent, canActivate: [AuthGuard]
            },
            {
                path: 'para',
                component: ParaComponent, canActivate: [AuthGuard]
            },
        ]
    },
    // {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
    // {path: 'product', component: ProductComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
