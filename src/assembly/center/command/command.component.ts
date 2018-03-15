import {ActivatedRoute} from "@angular/router";
import {Component, Input, OnInit, ViewChild} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {CommandService} from "../../../service/command.service";
import {CommandVo} from "../../../vo/command.vo";
import {ServiceComponent} from "../service/service.component";
import {ParaComponent} from "../para/para.component";

@Component({
    moduleId: module.id,
    selector: 'Command',
    templateUrl: 'command.component.html',
    styleUrls: ['command.component.css']
})
export class CommandComponent implements OnInit {

    constructor(private route: ActivatedRoute, private commandService: CommandService) {
    }

    //服务详情id
    @Input() serviceDetailId:string= null;

    ngOnInit(): void {
        var self = this;
    }

    private commands: Array<CommandVo> = new Array<CommandVo>();

    //新增
    private create(): void {
        var self = this;
        var serviceId = self.serviceDetailId;
        var commandName = (<HTMLInputElement>document.getElementById("commandName")).value;

        self.commandService.create(serviceId, commandName, function (obj: any) {
            //新增后刷新
            self.page(serviceId);
        });
    }

    //分页
    public page(serviceId: string): void {
        var self = this;
        self.commands = [];
        this.commandService.page(serviceId, function (obj: any) {
            var data = obj.content.data;
            data.forEach(function (item) {
                var _command: CommandVo = new CommandVo();
                _command.commandId = item.commandId;
                _command.serviceId = item.serviceId;
                _command.commandName = item.commandName;
                self.commands.push(_command);
            });
        });
    }

    //参数视图
    @ViewChild(ParaComponent) paraView: ParaComponent;

    //命令详情id
    private commandDetailId:string = "";

    //参数详情
    private detialShow(commandId: string): void {
        var self = this;
        self.commandDetailId = commandId;
        self.paraView.page(commandId);
    }

}
