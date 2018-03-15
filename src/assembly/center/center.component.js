"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/map");
var CenterComponent = /** @class */ (function () {
    function CenterComponent() {
        this.center_show = true;
    }
    CenterComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    CenterComponent.prototype.show = function () {
        var self = this;
        self.center_show = !self.center_show;
    };
    CenterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Centers',
            templateUrl: 'center.component.html',
            styleUrls: ['center.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CenterComponent);
    return CenterComponent;
}());
exports.CenterComponent = CenterComponent;
//# sourceMappingURL=center.component.js.map