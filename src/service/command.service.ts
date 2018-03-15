import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";
import {COMMAND_CREATE_URL, COMMAND_PAGE_URL, SUCCESS} from "../core/global.context";

@Injectable()
export class CommandService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        super(paramHttp, authGuard);
    }

    //新增
    public create(_serviceId: string, _commandName: string,
                  _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = COMMAND_CREATE_URL;
        var _data = {
            "serviceId": _serviceId,
            "commandName": _commandName
        };
        super.post(_reqUrl, _data, function (_res) {
            console.log(_res);
            var _code = _res.code;
            if (_code === SUCCESS) {
                _successCallback(_res);
            } else {
                if (_errorCallback != null) {
                    _errorCallback(_res);
                }
            }
        });
    }

    //分页
    public page(serviceId: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = COMMAND_PAGE_URL;
        var _data = {"pageSize": "20", "pageNum": "1", "serviceId": serviceId};
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