"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AngComponent = (function () {
    function AngComponent() {
        this.message = 'my message';
        this.isDisabled = true;
        this.className = 'red';
    }
    AngComponent.prototype.setMessage = function () {
        this.message = 'new message';
    };
    AngComponent.prototype.getMessage = function () {
        return this.message = 'My super message';
    };
    AngComponent.prototype.changeColor = function () {
        this.className = this.className === 'red' ? this.className = 'green' : this.className = 'red';
    };
    return AngComponent;
}());
AngComponent = __decorate([
    core_1.Component({
        selector: 'ang',
        template: "\n    <h1>{{message}}</h1>\n    <h2 [class]=\"className\">Azazazaz</h2>\n    <button (click)=\"changeColor()\">Change Color</button>    \n    <button (click)=\"setMessage()\" [disabled]=\"isDisabled\">Set Message</button>\n    <input type=\"text\" [(ngModel)]=\"message\" [disabled]=\"isDisabled\" />\n    <input type=\"checkbox\" [(ngModel)]=\"isDisabled\" />\n    <tr><td [attr.colspan]=\"1+1\">One-Two</td></tr>\n  ",
        styles: ["\n    .red {color:red}\n    .green {color:green}\n  "]
    })
], AngComponent);
exports.AngComponent = AngComponent;
;
//# sourceMappingURL=ang2.component.js.map