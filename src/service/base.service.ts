import {Headers, Http, RequestOptions} from "@angular/http";
import {AuthGuard} from "../assembly/auth/auth-guard";

export class BaseService {

    protected http: Http;

    constructor(public paramHttp: Http, public authGuard: AuthGuard) {
        this.http = paramHttp;
    }

    // http://www.ruanyifeng.com/blog/2016/04/cors.html
    protected post(_reqUrl: string, _data: any, _successCallback: Function) {
        var self = this;
        // let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://localhost:9091/'});
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8090');
        headers.append('Access-Control-Allow-Credentials', 'false');
        let options = new RequestOptions({headers: headers});
        if (self.authGuard.loginApp != null) {
            // var appId = self.authGuard.loginApp.appId;
            // var userId = self.authGuard.loginUser.userId;
            // var oid = self.authGuard.loginUser.oid;
            _data.appId = self.authGuard.loginApp.appId;
            _data.userId = self.authGuard.loginUser.userId;
            _data.oid = self.authGuard.loginUser.oid;
        }
        let body = JSON.stringify(_data);
        console.log(body);
        return this.http.post(_reqUrl, body, options).subscribe(function (_res) {
            if (_res.status == 200) {
                _successCallback(_res.json());
            } else {
                //TODO 请求失败处理
                console.log(_res);
            }
        });
    }
}
