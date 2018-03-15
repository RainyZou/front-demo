import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";
import {
    DEVICE_DOWNMETA_URL,
    DEVICE_INIT_URL,
    DEVICE_PAGE_URL,
    SUCCESS
} from "../core/global.context";

@Injectable()
export class DeviceService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        super(paramHttp, authGuard);
    }

    //新增
    public init(_productId: string, _devName: string, _devEui: string, _providerType: string,
                _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = DEVICE_INIT_URL;
        var _data = {
            "productId": _productId,
            "devName": _devName,
            "devEui": _devEui,
            "providerType": _providerType
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
        var _reqUrl = DEVICE_PAGE_URL;
        var _data = {"pageSize": "20", "pageNum": "1"};
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

    //设备拥有的服务命令列表
    public downMeta(deviceId: string, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = DEVICE_DOWNMETA_URL;
        var _data = {"deviceId": deviceId};
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