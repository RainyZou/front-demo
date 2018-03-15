"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var BaseService = /** @class */ (function () {
    function BaseService(paramHttp, authGuard) {
        this.paramHttp = paramHttp;
        this.authGuard = authGuard;
        this.http = paramHttp;
    }
    // http://www.ruanyifeng.com/blog/2016/04/cors.html
    BaseService.prototype.post = function (_reqUrl, _data, _successCallback) {
        var self = this;
        // let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://localhost:9091/'});
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8090');
        headers.append('Access-Control-Allow-Credentials', 'false');
        var options = new http_1.RequestOptions({ headers: headers });
        if (self.authGuard.loginApp != null) {
            // var appId = self.authGuard.loginApp.appId;
            // var userId = self.authGuard.loginUser.userId;
            // var oid = self.authGuard.loginUser.oid;
            _data.appId = self.authGuard.loginApp.appId;
            _data.userId = self.authGuard.loginUser.userId;
            _data.oid = self.authGuard.loginUser.oid;
        }
        var body = JSON.stringify(_data);
        console.log(body);
        return this.http.post(_reqUrl, body, options).subscribe(function (_res) {
            if (_res.status == 200) {
                _successCallback(_res.json());
            }
            else {
                //TODO 请求失败处理
                console.log(_res);
            }
        });
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map