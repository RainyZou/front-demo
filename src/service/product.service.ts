import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";
import {DEVICE_PAGE_URL, PRODUCT_CREATE_URL, PRODUCT_PAGE_URL, SUCCESS} from "../core/global.context";

@Injectable()
export class ProductService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        super(paramHttp, authGuard);
    }

    //新增
    public create(_manufacturerId: string, _manufacturerName: string, _model: string, _protocolType: string, _productType: string, _description: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = PRODUCT_CREATE_URL;
        var _data = {
            "manufacturerId": _manufacturerId,
            "manufacturerName": _manufacturerName,
            "model": _model,
            "protocolType": _protocolType,
            "productType": _productType,
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
    public page(_successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = PRODUCT_PAGE_URL;
        var _data = {"pageSize": "20", "pageNum": "1"};
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
}