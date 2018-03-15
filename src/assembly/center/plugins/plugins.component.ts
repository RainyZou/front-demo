import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
//https://segmentfault.com/a/1190000007886391
// A: 引入FileUpload模块
import {FileUploader} from "ng2-file-upload";
import {AuthGuard} from "../../auth/auth-guard";
import {DeviceVo} from "../../../vo/device.vo";
import {PluginsService} from "../../../service/plugins.service";
import {PluginsVo} from "../../../vo/plugins.vo";

@Component({
    moduleId: module.id,
    selector: 'Plugins',
    templateUrl: 'plugins.component.html',
    styleUrls: ['plugins.component.css']
})
export class PluginsComponent implements OnInit {


    constructor(private route: ActivatedRoute, private authGuard: AuthGuard, private pluginsService: PluginsService) {
    }

    ngOnInit(): void {
        var self = this;
    }

    // B: 初始化定义uploader变量,用来配置input中的uploader属性
    public uploader: FileUploader = new FileUploader({
        url: "http://localhost:8380/iot-web/rs/ws/iot/management/plugins/upload",
        method: "POST",
        itemAlias: "uploadedfile",
    });

    // C: 定义事件，选择文件
    public selectedFileOnChanged(event: any) {
        // 打印文件选择名称
        console.log(event.target.value);
        this.uploadFile();
    }

    // D: 定义事件，上传文件
    private uploadFile() {
        var productId = (<HTMLInputElement>document.getElementById("productId")).value;

        var self = this;
        // 上传
        this.uploader.queue[0].withCredentials = false;
        this.uploader.queue[0].onBuildForm = function (form: any) {
            var appId = self.authGuard.loginApp.appId;
            var userId = self.authGuard.loginUser.userId;
            var oid = self.authGuard.loginUser.oid;
            form.append("appId", appId);
            form.append("userId", userId);
            form.append("oid", oid);
            form.append("productId", productId);
        }
        console.log(this.uploader.queue[0].formData);
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                //let tempRes = JSON.parse(response);
                console.log(response);
            } else {
                // 上传文件后获取服务器返回的数据错误
                alert("");
            }
            this.uploader.queue[0].remove();
        };
        this.uploader.queue[0].upload(); // 开始上传
    }

    public plugins: Array<PluginsVo> = new Array<PluginsVo>();

    //分页
    public page(): void {
        var self = this;
        self.plugins = [];
        this.pluginsService.page(function (obj: any) {
            var _data = obj.content.data;
            _data.forEach(function (item) {
                var _plugins: PluginsVo = new PluginsVo();
                _plugins.pluginsId = item.pluginsId;
                _plugins.productId = item.productId;
                _plugins.pluginsName = item.pluginsName;
                _plugins.fileName = item.fileName;
                _plugins.filePath = item.filePath;
                _plugins.isUse = item.isUse;
                self.plugins.push(_plugins);
            });
        });
    }


    //部署
    public deploy(pluginsId:string):void{
        var self = this;
        // this.pluginsService.deploy(pluginsId,function (obj: any) {
        // });
    }
}
