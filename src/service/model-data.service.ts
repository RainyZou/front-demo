import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";
import {MODELDATA_REFRESH_URL} from "../core/global.context";

@Injectable()
export class ModelDataService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        super(paramHttp, authGuard);
    }

    //分页
    public refresh(productId:string,_successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = MODELDATA_REFRESH_URL;
        var _data = {"productId": productId};
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