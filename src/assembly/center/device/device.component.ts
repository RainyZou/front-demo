import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {DeviceService} from "../../../service/device.service";
import {DeviceVo} from "../../../vo/device.vo";
import {DownMeta} from "../../../meta/down.meta";
import {ServiceMeta} from "../../../meta/service.meta";
import {CommandMeta} from "../../../meta/command.meta";
import {ParaMeta} from "../../../meta/para.meta";
import {DownlinkService} from "../../../service/downlink.service";

@Component({
    moduleId: module.id,
    selector: 'Device',
    templateUrl: 'device.component.html',
    styleUrls: ['device.component.css']
})
export class DeviceComponent implements OnInit {

    public downlinkDisplay: boolean = false;

    constructor(private route: ActivatedRoute, private deviceService: DeviceService, private downlinkService: DownlinkService) {
    }

    ngOnInit(): void {
        var self = this;
    }

    private devices: Array<DeviceVo> = new Array<DeviceVo>();
    private downMeta: DownMeta = new DownMeta();

    //新增
    private create(): void {
        var self = this;
        var productId = (<HTMLInputElement>document.getElementById("productId")).value;
        var devName = (<HTMLInputElement>document.getElementById("devName")).value;
        var devEui = (<HTMLInputElement>document.getElementById("devEui")).value;
        var providerType = (<HTMLInputElement>document.getElementById("providerType")).value;

        self.deviceService.init(productId, devName, devEui, providerType, function (obj: any) {
            //新增后刷新
            self.page();
        });
    }

    //分页
    private page(): void {
        var self = this;
        self.devices = [];
        self.deviceService.page(function (obj: any) {
            var _data = obj.content.data;
            _data.forEach(function (item) {
                var _device: DeviceVo = new DeviceVo();
                _device.deviceId = item.deviceId;
                _device.devName = item.devName;
                _device.devId = item.devId;
                _device.devEui = item.devEui;
                _device.psk = item.psk;
                _device.status = item.status;
                _device.providerType = item.providerType;
                self.devices.push(_device);
            });
        });
    }

    //下发命令列表
    private downlinkShow(deviceId: string): void {
        var self = this;
        self.downlinkDisplay = !self.downlinkDisplay;
        if (self.downlinkDisplay) {
            self.downMeta = new DownMeta();
            //如果显示，需要刷新该设备拥有的命令列表
            this.deviceService.downMeta(deviceId, function (obj: any) {
                var _data = obj.content;
                self.downMeta.devEui = _data.devEui
                self.downMeta.deviceId = _data.deviceId;
                self.downMeta.productId = _data.productId;
                _data.services.forEach(function (service) {
                    var _serviceMeta: ServiceMeta = new ServiceMeta();
                    _serviceMeta.serviceId = service.serviceId;
                    _serviceMeta.serviceType = service.serviceType;
                    self.downMeta.services.push(_serviceMeta);
                    service.commands.forEach(function (command) {
                        var _commandMeta: CommandMeta = new CommandMeta();
                        _commandMeta.commandId = command.commandId;
                        _commandMeta.commandName = command.commandName;
                        _serviceMeta.commands.push(_commandMeta);
                        command.paras.forEach(function (para) {
                            var _paraMeta: ParaMeta = new ParaMeta();
                            _paraMeta.paraId = para.paraId;
                            _paraMeta.paraName = para.paraName;
                            _paraMeta.dataType = para.dataType;
                            _paraMeta.required = para.required;
                            _paraMeta.min = para.min;
                            _paraMeta.max = para.max;
                            _paraMeta.step = para.step;
                            _paraMeta.maxLength = para.maxLength;
                            _paraMeta.unit = para.unit;
                            _paraMeta.enumList = para.enumList;
                            _commandMeta.paras.push(_paraMeta);
                        });
                    });
                });
                var a: Array<string> = new Array<string>(0);

                console.log(self.downMeta);
            });
        }
    }

    //下发命令
    private downlink(): void {
        var self = this;

        //TODO 测试
        var deviceId = (<HTMLInputElement>document.getElementById("deviceId")).value;
        var productId = (<HTMLInputElement>document.getElementById("productId")).value;
        var serviceId = (<HTMLInputElement>document.getElementById("serviceId")).value;
        var commandId = (<HTMLInputElement>document.getElementById("commandId")).value;
        var paraId = (<HTMLInputElement>document.getElementById("paraId")).value;
        var paraValue = (<HTMLInputElement>document.getElementById("paraValue")).value;

        var paraMap: Map<string, string> = new Map<string, string>();
        paraMap.set(paraId, paraValue);

        ////http://blog.csdn.net/qq_32014215/article/details/68063852
        //map转换json格式
        let paraObj = Object.create(null);
        paraMap.forEach(function (v, k) {
            paraObj[k] = v;
        });
        paraMap = paraObj;
        ////

        //测试
        // var deviceId = "cd298619-9484-4708-aacc-ada2bf75c61a";
        // var productId = "093feba1-cd88-4ceb-8126-744b3fc1159d";
        // var serviceId = "fe3daa91-bd4b-4fb1-9be1-d04d07b293e8";
        // var commandId = "2dbbfb90-a8f1-4fe7-a12b-eac5b4f2ab68";
        // var paraMap: any = {"e6695c36-fb02-4a05-8def-18e6713eae6f": "22", "1086b3fb-7594-4106-94d2-f019792548fe": "33"};
        //var dictionary:Dictionary=null;
        // console.log(paraMap);

        this.downlinkService.downlink(deviceId, productId, serviceId, commandId, paraMap, function (obj: any) {

        });

    }
}
