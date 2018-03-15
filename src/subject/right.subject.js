"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var RightSubject = /** @class */ (function () {
    function RightSubject() {
        this.rightSubject = new Subject_1.Subject();
    }
    RightSubject.prototype.rightNext = function (msg) {
        var message = msg;
        this.rightSubject.next(message);
        console.log(this.rightSubject);
    };
    RightSubject.prototype.rightSubscribe = function (paramCallback) {
        this.rightSubject.subscribe({
            next: function (msg) {
                console.log(msg);
                paramCallback(msg);
                return true;
            }
        });
    };
    return RightSubject;
}());
exports.RightSubject = RightSubject;
//# sourceMappingURL=right.subject.js.map