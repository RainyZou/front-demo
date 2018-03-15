import {ActivatedRoute} from "@angular/router";
import {Component, OnInit, ViewChild} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {ProductService} from "../../../service/product.service";
import {ProductVo} from "../../../vo/product.vo";
import {ModelDataService} from "../../../service/model-data.service";
import {PropertyComponent} from "../property/property.component";
import {ServiceComponent} from "../service/service.component";

@Component({
    moduleId: module.id,
    selector: 'Product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {

    constructor(private route: ActivatedRoute, private productService: ProductService, private modelDataService: ModelDataService) {
    }

    ngOnInit(): void {
        var self = this;
    }

    private products: Array<ProductVo> = new Array<ProductVo>();

    //新增
    private create(): void {
        var self = this;
        var manufacturerId = (<HTMLInputElement>document.getElementById("manufacturerId")).value;
        var manufacturerName = (<HTMLInputElement>document.getElementById("manufacturerName")).value;
        var model = (<HTMLInputElement>document.getElementById("model")).value;
        var protocolType = (<HTMLInputElement>document.getElementById("protocolType")).value;
        var productType = (<HTMLInputElement>document.getElementById("productType")).value;
        var description = (<HTMLInputElement>document.getElementById("description")).value;

        self.productService.create(manufacturerId, manufacturerName, model, protocolType, productType, description, function (obj: any) {
            //新增后刷新
            self.page();
        });
    }

    //分页
    private page(): void {
        var self = this;
        self.products = [];
        self.productService.page(function (obj: any) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _product: ProductVo = new ProductVo();
                _product.productId = item.productId;
                _product.manufacturerId = item.manufacturerId;
                _product.manufacturerName = item.manufacturerName;
                _product.model = item.model;
                _product.protocolType = item.protocolType;
                _product.productType = item.productType;
                _product.imagePath = item.imagePath;
                _product.description = item.description;
                _product.lastDate = item.lastDate;
                self.products.push(_product);
            });
        });
    }

    //服务视图
    @ViewChild(ServiceComponent) serviceView: ServiceComponent;

    //产品详情id
    private productDetailId: string = "";

    //服务详情
    private detialShow(productId: string): void {
        var self = this;
        self.productDetailId = productId;
        self.serviceView.page(productId);
    }

    //刷新
    private refresh(productId: string): void {
        var self = this;
        self.modelDataService.refresh(productId, function (obj: any) {
            console.log(obj);
        });
    }


}
