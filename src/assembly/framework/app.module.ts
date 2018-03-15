// import 'reflect-metadata/Reflect';
// import 'zone.js/dist/zone.js';

import {BrowserModule} from "@angular/platform-browser";
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "../app/app.component";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ErrorComponent} from "../error/error.component";
import {CenterComponent} from "../center/center.component";
import {LeftComponent} from "../left/left.component";
import {RightComponent} from "../right/right.component";
import {ProductComponent} from "../center/product/product.component";
import {AuthGuard} from "../auth/auth-guard";
import {LoginEnterpriseComponent} from "../login/enterprise/login-enterprise.component";
import {LoginAdminComponent} from "../login/admin/login-admin.component";
import {LeftSubject} from "../../subject/left.subject";
import {RightSubject} from "../../subject/right.subject";
import {ProductService} from "../../service/product.service";
import {LoginService} from "../../service/login.service";
import {DeviceComponent} from "../center/device/device.component";
import {DeviceService} from "../../service/device.service";
import {CommonModule} from "@angular/common";
import {FileUploadModule} from 'ng2-file-upload';
import {PluginsComponent} from "../center/plugins/plugins.component";
import {PluginsService} from "../../service/plugins.service";
import {ModelDataService} from "../../service/model-data.service";
import {ServiceComponent} from "../center/service/service.component";
import {ServiceService} from "../../service/service.service";
import {PropertyComponent} from "../center/property/property.component";
import {PropertyService} from "../../service/property.service";
import {CommandComponent} from "../center/command/command.component";
import {ParaComponent} from "../center/para/para.component";
import {CommandService} from "../../service/command.service";
import {ParaService} from "../../service/para.service";
import {DownlinkComponent} from "../center/downlink/downlink.component";
import {DownlinkService} from "../../service/downlink.service";
import {UplinkComponent} from "../center/uplink/uplink.component";
import {UplinkService} from "../../service/uplink.service";

@NgModule({
    declarations: [
        AppComponent, ErrorComponent, DashboardComponent, CenterComponent, LeftComponent, RightComponent, LoginAdminComponent, LoginEnterpriseComponent,
        ProductComponent, PluginsComponent, DeviceComponent, ServiceComponent, PropertyComponent, CommandComponent, ParaComponent, DownlinkComponent, UplinkComponent
    ],
    imports: [
        CommonModule, FileUploadModule, BrowserModule, HttpModule, AppRoutingModule
    ],
    providers: [AuthGuard, LeftSubject, RightSubject, LoginService,
        ProductService, PluginsService, DeviceService, ModelDataService, ServiceService, PropertyService, CommandService, ParaService, DownlinkService, UplinkService
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
