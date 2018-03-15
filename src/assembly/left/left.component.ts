import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {AuthGuard} from "../auth/auth-guard";
import {LeftSubject} from "../../subject/left.subject";

@Component({
    moduleId: module.id,
    selector: 'Left',
    templateUrl: 'left.component.html',
    styleUrls: ['left.component.css']
})
export class LeftComponent implements OnInit {


    public appIds: Array<string> = new Array<string>();

    constructor(  private router: Router, private route: ActivatedRoute, private leftSubject: LeftSubject, private authGuard: AuthGuard) {
    }

    ngOnInit(): void {
        var self = this;
        this.leftSubject.leftSubscribe(function (msg: string) {
            alert("left:" + msg);
        });

        console.log(self.authGuard.loginUser);

        //遍历获取该权限拥有的app权限应用
        var mapApp = self.authGuard.loginUser.mapApp;
        for(var i in mapApp) {
            self.appIds.push(i);
        }
        console.log( self.authGuard.loginApp);
    }

    show(msg): void {
        alert(msg);
        console.log(this.authGuard.loginUser);
    }


}
