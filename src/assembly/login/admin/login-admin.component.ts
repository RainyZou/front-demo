import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {AuthGuard} from "../../auth/auth-guard";
import {LoginService} from "../../../service/login.service";

@Component({
    moduleId: module.id,
    selector: 'LoginAdmin',
    templateUrl: 'login-admin.component.html',
    styleUrls: ['login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

    public errorMsg: string;

    constructor(private authGuard: AuthGuard, private router: Router,   private route: ActivatedRoute, private loginService: LoginService) {
    }

    ngOnInit(): void {
        var self = this;
    }

    public login() {
        var self=this;
        var loginAccount = (<HTMLInputElement>document.getElementById("loginAccount")).value;
        var loginPwd = (<HTMLInputElement>document.getElementById("loginPwd")).value;
        console.log("LoginAdminComponent");
        console.log("loginAccount:" + loginAccount + ";" + "loginPwd:" + loginPwd + ";");

        this.loginService.loginAdmin(loginAccount, loginPwd, function (res) {
            self.authGuard.loginSuccess = true;
            self.authGuard.loginUser = res.content;

            var mapApp = self.authGuard.loginUser.mapApp;
            for(var i in mapApp) {
                self.authGuard.loginApp =mapApp[i];
                break;
            }
            self.router.navigate(['']);
        });
    }

}
