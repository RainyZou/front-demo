import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";

@Injectable()
export class LoginService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
       super(paramHttp,authGuard);
    }

    public loginAdmin(_username: string, _password: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = "http://localhost:8380/iot-web/rs/ws/iot/auth/login/admin";
        var _data = {"username": _username, "password": _password};
        super.post(_reqUrl, _data, function (res) {
            console.log(res);
            var code = res.code;
            if (code === "000000") {
                _successCallback(res);
            } else {
                if (_errorCallback != null) {
                    _errorCallback(res);
                }
            }
        });
    }

    public loginEnterprise(_username: string, _password: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = "http://localhost:8380/iot-web/rs/ws/iot/auth/login/enterprise";
        var _data = {"username": _username, "password": _password};
        super.post(_reqUrl, _data, function (res) {
            console.log(res);
            var code = res.code;
            if (code === "000000") {
                _successCallback(res);
            } else {
                if (_errorCallback != null) {
                    _errorCallback(res);
                }
            }
        });
    }
}