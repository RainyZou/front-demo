import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    // 登录状态
    public loginSuccess: boolean = false;
    //登录用户
    public loginUser:any=null;
    //登录app
    public loginApp:any=null;

    constructor(private router:Router) {
    }

    canActivate() {
        if (this.loginSuccess) { return true; }
        this.router.navigate(['/login']);
        return false;
    }

}