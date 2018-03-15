import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {LeftSubject} from "../../subject/left.subject";

@Component({
    moduleId: module.id,
    selector: 'Dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        var self = this;
    }

}
