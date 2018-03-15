import {ActivatedRoute} from "@angular/router";
import {Component, Input, OnInit, ViewChild} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {ServiceService} from "../../../service/service.service";
import {ServiceVo} from "../../../vo/service.vo";
import {PropertyComponent} from "../property/property.component";
import {CommandComponent} from "../command/command.component";

@Component({
    moduleId: module.id,
    selector: 'Service',
    templateUrl: 'service.component.html',
    styleUrls: ['service.component.css']
})
export class ServiceComponent implements OnInit {

    constructor(private route: ActivatedRoute, private serviceService: ServiceService) {
    }

    //产品详情id
    @Input() productDetailId: null;

    ngOnInit(): void {
        var self = this;
    }

    private services: Array<ServiceVo> = new Array<ServiceVo>();

    //新增
    private create(): void {
        var self = this;
        var productId = self.productDetailId;
        var serviceType = (<HTMLInputElement>document.getElementById("serviceType")).value;
        var description = (<HTMLInputElement>document.getElementById("description")).value;
        self.serviceService.create(productId, serviceType, description, function (obj: any) {
            //新增后刷新
            self.page(productId);
        });
    }

    //分页
    public page(productId: string): void {
        var self = this;
        self.services = [];
        this.serviceService.page(productId, function (obj: any) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _service: ServiceVo = new ServiceVo();
                _service.serviceId = item.serviceId;
                _service.productId = item.productId;
                _service.serviceType = item.serviceType;
                _service.description = item.description;
                _service.lastDate = item.lastDate;
                self.services.push(_service);
            });
        });
    }

    //属性视图
    @ViewChild(PropertyComponent) propertyView: PropertyComponent;
    //属性视图
    @ViewChild(CommandComponent) commandView: CommandComponent;

    //服务详情id
    private serviceDetailId = "";

    //服务详情
    private detialShow(serviceId: string): void {
        var self = this;
        self.serviceDetailId = serviceId;
        self.propertyView.page(serviceId);
        self.commandView.page(serviceId);
    }
}
