import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";
import {PARA_CREATE_URL, PARA_PAGE_URL, SUCCESS} from "../core/global.context";

@Injectable()
export class ParaService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        super(paramHttp, authGuard);
    }

    //新增
    public create(_commandId: string, _paraName: string, _dataType: string, _required, _min,
                  _max, _step, _maxLength, _unit: string, _enumList: string,
                  _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = PARA_CREATE_URL;
        var _data = {
            "commandId": _commandId,
            "paraName": _paraName,
            "dataType": _dataType,
            "required": _required,
            "min": _min,
            "max": _max,
            "step": _step,
            "maxLength": _maxLength,
            "unit": _unit,
            "enumList": _enumList,
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
    public page(commandId: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = PARA_PAGE_URL;
        var _data = {"pageSize": "20", "pageNum": "1", "commandId": commandId};
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