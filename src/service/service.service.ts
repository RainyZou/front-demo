import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";
import {PRODUCT_CREATE_URL, SERVICE_CREATE_URL, SERVICE_PAGE_URL, SUCCESS} from "../core/global.context";

@Injectable()
export class ServiceService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        super(paramHttp, authGuard);
    }

    //新增
    public create(_productId: string, _serviceType: string, _description: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = SERVICE_CREATE_URL;
        var _data = {
            "productId": _productId,
            "serviceType": _serviceType,
            "description": _description
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
    public page(productId: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = SERVICE_PAGE_URL;
        var _data = {"pageSize": "20", "pageNum": "1", "productId": productId};
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