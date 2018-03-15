import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";
import {DOWNLINK_PAGE_URL, DOWNLINK_URL} from "../core/global.context";

@Injectable()
export class DownlinkService extends BaseService {

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        super(paramHttp, authGuard);
    }

    //下发命令
    public downlink(deviceId: string, productId: string, serviceId: string, commandId: string, paraMap: any, _successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = DOWNLINK_URL;

        //测试
        // var deviceId = "cd298619-9484-4708-aacc-ada2bf75c61a";
        // var productId = "093feba1-cd88-4ceb-8126-744b3fc1159d";
        // var serviceId = "fe3daa91-bd4b-4fb1-9be1-d04d07b293e8";
        // var commandId = "2dbbfb90-a8f1-4fe7-a12b-eac5b4f2ab68";
        // var paraMap: any = {"e6695c36-fb02-4a05-8def-18e6713eae6f": "22", "1086b3fb-7594-4106-94d2-f019792548fe": "33"};

        var _data = {
            "deviceId": deviceId,
            "productId": productId,
            "serviceId": serviceId,
            "commandId": commandId,
            "paraMap": paraMap
        };

        console.log(_data);

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


    //分页
    public page(_successCallback: Function, _errorCallback: Function = null) {
        var _reqUrl = DOWNLINK_PAGE_URL;
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
}