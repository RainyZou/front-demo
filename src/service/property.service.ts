import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";
import {PROPERTY_CREATE_URL, PROPERTY_PAGE_URL, SUCCESS} from "../core/global.context";

@Injectable()
export class PropertyService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        super(paramHttp, authGuard);
    }

    //新增
    public create(_serviceId: string, _propertyName: string, _dataType: string, _required, _min,
                  _max, _step, _maxLength, _method: string, _unit: string, _enumList: string,
                  _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = PROPERTY_CREATE_URL;
        var _data = {
            "serviceId": _serviceId,
            "propertyName": _propertyName,
            "dataType": _dataType,
            "required": _required,
            "min": _min,
            "max": _max,
            "step": _step,
            "maxLength": _maxLength,
            "method": _method,
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
    public page(serviceId: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = PROPERTY_PAGE_URL;
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