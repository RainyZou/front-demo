import {ActivatedRoute} from "@angular/router";
import {Component, Input, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {ParaService} from "../../../service/para.service";
import {ParaVo} from "../../../vo/para.vo";

@Component({
    moduleId: module.id,
    selector: 'Para',
    templateUrl: 'para.component.html',
    styleUrls: ['para.component.css']
})
export class ParaComponent implements OnInit {

    constructor(private route: ActivatedRoute, private paraService: ParaService) {
    }

    //命令详情id
    @Input() commandDetailId: string = null;

    ngOnInit(): void {
        var self = this;
    }

    private paras: Array<ParaVo> = new Array<ParaVo>();

    //新增
    private create(): void {
        var self = this;
        var commandId = self.commandDetailId;
        var paraName = (<HTMLInputElement>document.getElementById("paraName")).value;
        var dataType = (<HTMLInputElement>document.getElementById("dataType")).value;
        var required = (<HTMLInputElement>document.getElementById("required")).value;
        var min = (<HTMLInputElement>document.getElementById("min")).value;
        var max = (<HTMLInputElement>document.getElementById("max")).value;
        var step = (<HTMLInputElement>document.getElementById("step")).value;
        var maxLength = (<HTMLInputElement>document.getElementById("maxLength")).value;
        var unit = (<HTMLInputElement>document.getElementById("unit")).value;
        var enumList = (<HTMLInputElement>document.getElementById("enumList")).value;

        self.paraService.create(commandId, paraName, dataType, required, min, max, step, maxLength, unit, enumList, function (obj: any) {
            //新增后刷新
            self.page(commandId);
        });
    }

    //分页
    public page(commandId: string): void {
        var self = this;
        self.paras = [];
        this.paraService.page(commandId, function (obj: any) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _para: ParaVo = new ParaVo();
                _para.paraId = item.paraId;
                _para.commandId = item.commandId;
                _para.paraName = item.paraName;
                _para.dataType = item.dataType;
                _para.required = item.required;
                _para.min = item.min;
                _para.max = item.max;
                _para.step = item.step;
                _para.maxLength = item.maxLength;
                _para.unit = item.unit;
                _para.enumList = item.enumList;
                self.paras.push(_para);
            });
        });
    }
}
