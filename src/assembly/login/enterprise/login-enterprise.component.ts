import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {AuthGuard} from "../../auth/auth-guard";
import {LoginService} from "../../../service/login.service";


@Component({
    moduleId: module.id,
    selector: 'LoginEnterprise',
    templateUrl: 'login-enterprise.component.html',
    styleUrls: ['login-enterprise.component.css']
})
export class LoginEnterpriseComponent implements OnInit {

    public errorMsg: string;

    constructor(private authGuard: AuthGuard, private router: Router, private route: ActivatedRoute, private loginService: LoginService) {
    }

    ngOnInit(): void {
        var self = this;
    }

    public login(): void {
        var self = this;
        var loginAccount = (<HTMLInputElement>document.getElementById("loginAccount")).value;
        var loginPwd = (<HTMLInputElement>document.getElementById("loginPwd")).value;
        console.log("LoginEnterpriseComponent");
        console.log("loginAccount:" + loginAccount + ";" + "loginPwd:" + loginPwd + ";");

        //登录成功处理
        self.loginService.loginEnterprise(loginAccount, loginPwd, function (res) {
            self.authGuard.loginSuccess = true;
            self.authGuard.loginUser = res.content;

            //TODO 遍历获取该权限拥有的app权限应用
            var mapApp = self.authGuard.loginUser.mapApp;
            for (var i in mapApp) {
                self.authGuard.loginApp = mapApp[i];
                break;
            }
            //TODO 默认app应用
            self.authGuard.loginApp = mapApp['8a4fd12a-cf60-4031-8b35-d3e796068415'];

            self.router.navigate(['']);
        });
    }

}
