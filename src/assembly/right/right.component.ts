import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {LeftSubject} from "../../subject/left.subject";

@Component({
    moduleId: module.id,
    selector: 'Right',
    templateUrl: 'right.component.html',
    styleUrls: ['right.component.css']
})
export class RightComponent implements OnInit {


    constructor(private leftSubject: LeftSubject) {
    }

    ngOnInit(): void {
        var self = this;
    }

    show(msg): void {
        alert("right:" + msg);
        this.leftSubject.leftNext(msg);
    }
}
