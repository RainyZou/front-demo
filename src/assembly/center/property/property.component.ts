import {ActivatedRoute} from "@angular/router";
import {Component, Input, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {ServiceService} from "../../../service/service.service";
import {ServiceVo} from "../../../vo/service.vo";
import {PropertyService} from "../../../service/property.service";
import {PropertyVo} from "../../../vo/property.vo";

@Component({
    moduleId: module.id,
    selector: 'Property',
    templateUrl: 'property.component.html',
    styleUrls: ['property.component.css']
})
export class PropertyComponent implements OnInit {

    constructor(private route: ActivatedRoute, private propertyService: PropertyService) {
    }

    //服务详情id
    @Input() serviceDetailId: null;

    ngOnInit(): void {
        var self = this;
    }

    private propertys: Array<PropertyVo> = new Array<PropertyVo>();

    //新增
    private create(): void {
        var self = this;
        var serviceId = self.serviceDetailId;
        var propertyName = (<HTMLInputElement>document.getElementById("propertyName")).value;
        var dataType = (<HTMLInputElement>document.getElementById("dataType")).value;
        var required = (<HTMLInputElement>document.getElementById("required")).value;
        var min = (<HTMLInputElement>document.getElementById("min")).value;
        var max = (<HTMLInputElement>document.getElementById("max")).value;
        var step = (<HTMLInputElement>document.getElementById("step")).value;
        var maxLength = (<HTMLInputElement>document.getElementById("maxLength")).value;
        var method = (<HTMLInputElement>document.getElementById("method")).value;
        var unit = (<HTMLInputElement>document.getElementById("unit")).value;
        var enumList = (<HTMLInputElement>document.getElementById("enumList")).value;

        self.propertyService.create(serviceId, propertyName, dataType, required, min, max, step, maxLength, method, unit, enumList, function (obj: any) {
            //新增后刷新
            self.page(serviceId);
        });
    }

    //分页
    public page(serviceId: string): void {
        var self = this;
        self.propertys = [];
        this.propertyService.page(serviceId, function (obj: any) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _property: PropertyVo = new PropertyVo();
                _property.propertyId = item.propertyId;
                _property.serviceId = item.serviceId;
                _property.propertyName = item.propertyName;
                _property.dataType = item.dataType;
                _property.required = item.required;
                _property.min = item.min;
                _property.max = item.max;
                _property.step = item.step;
                _property.maxLength = item.maxLength;
                _property.method = item.method;
                _property.unit = item.unit;
                _property.enumList = item.enumList;
                self.propertys.push(_property);
            });
        });
    }

}
