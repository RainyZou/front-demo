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
import {UplinkService} from "../../../service/uplink.service";
import {UplinkVo} from "../../../vo/uplink.vo";

@Component({
    moduleId: module.id,
    selector: 'Uplink',
    templateUrl: 'uplink.component.html',
    styleUrls: ['uplink.component.css']
})
export class UplinkComponent implements OnInit {

    constructor(private route: ActivatedRoute, private uplinkService: UplinkService) {
    }

    ngOnInit(): void {
        var self = this;
    }

    private uplinks: Array<UplinkVo> = new Array<UplinkVo>();

    //分页
    public page(): void {
        var self = this;
        self.uplinks = [];
        this.uplinkService.page(function (obj: any) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _uplink: UplinkVo = new UplinkVo();
                _uplink.uplinkId = item.uplinkId;
                _uplink.deviceId = item.deviceId;
                _uplink.devEui = item.devEui;
                _uplink.appId = item.appId;
                _uplink.appEui = item.appEui;
                _uplink.payload = item.payload;
                _uplink.dataModel = item.dataModel;
                _uplink.dataPayload = item.dataPayload;
                _uplink.dataMerge = item.dataMerge;
                _uplink.createDate = item.createDate;
                self.uplinks.push(_uplink);
            });
        });
    }

}
