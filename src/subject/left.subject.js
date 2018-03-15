"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var LeftSubject = /** @class */ (function () {
    function LeftSubject() {
        this.leftSubject = new Subject_1.Subject();
    }
    LeftSubject.prototype.leftNext = function (msg) {
        var message = msg;
        this.leftSubject.next(message);
        console.log(this.leftSubject);
    };
    LeftSubject.prototype.leftSubscribe = function (paramCallback) {
        this.leftSubject.subscribe({
            next: function (msg) {
                console.log(msg);
                paramCallback(msg);
                return true;
            }
        });
    };
    return LeftSubject;
}());
exports.LeftSubject = LeftSubject;
//# sourceMappingURL=left.subject.js.map