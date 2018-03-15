import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";

@Component({
    moduleId: module.id,
    selector: 'Centers',
    templateUrl: 'center.component.html',
    styleUrls: ['center.component.css']
})
export class CenterComponent implements OnInit {

    center_show: boolean = true;

    constructor() {
    }

    ngOnInit(): void {
        var self = this;


    }

    show(): void {
        var self = this;
        self.center_show = !self.center_show;
    }
}
