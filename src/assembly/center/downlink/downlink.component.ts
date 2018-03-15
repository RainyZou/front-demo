import {ActivatedRoute} from "@angular/router";
import {Component, Input, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {ServiceService} from "../../../service/service.service";
import {ServiceVo} from "../../../vo/service.vo";
import {PropertyService} from "../../../service/property.service";
import {PropertyVo} from "../../../vo/property.vo";
import {DownlinkService} from "../../../service/downlink.service";
import {DownlinkVo} from "../../../vo/downlink.vo";

@Component({
    moduleId: module.id,
    selector: 'Downlink',
    templateUrl: 'downlink.component.html',
    styleUrls: ['downlink.component.css']
})
export class DownlinkComponent implements OnInit {

    constructor(private route: ActivatedRoute, private downlinkService: DownlinkService) {
    }

    ngOnInit(): void {
        var self = this;
    }

    private downlinks: Array<DownlinkVo> = new Array<DownlinkVo>();

    //分页
    public page(): void {
        var self = this;
        self.downlinks = [];
        this.downlinkService.page(function (obj: any) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _downlink: DownlinkVo = new DownlinkVo();
                _downlink.downlinkId = item.downlinkId;
                _downlink.orderNum = item.orderNum;
                _downlink.deviceId = item.deviceId;
                _downlink.devEui = item.devEui;
                _downlink.appId = item.appId;
                _downlink.appEui = item.appEui;
                _downlink.payload = item.payload;
                _downlink.status = item.status;
                _downlink.sendDate = item.sendDate;
                _downlink.backDate = item.backDate;
                self.downlinks.push(_downlink);
            });
        });
    }

}
