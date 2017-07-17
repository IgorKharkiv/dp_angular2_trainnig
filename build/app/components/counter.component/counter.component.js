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
var common_1 = require("@angular/common");
var CounterComponent = (function () {
    function CounterComponent() {
        // config
        this.configCurrentValue = 0;
        this.configCounterStep = 1;
        this.configTimeout = 20000;
        this.configInterval = 20000;
        // couner step
        this.counterStep = this.configCounterStep;
        // state properties
        this.isStopped = false;
        // classes modoficators
        this.autoIncrementClass = '';
        this.playPause = this.isStopped ? 'Play' : 'Pause';
        this.playPauseClass = '-state_play';
        // array of logs
        this.logs = [];
        this.counterTimeOut();
    }
    // increment method
    CounterComponent.prototype.increment = function (notClear) {
        if (notClear) {
            this.autoIncrementClass = '-state_auto';
            this.configCurrentValue += this.counterStep;
            this.log('Counter value was incremented on ' + this.configCounterStep + ' automatically');
        }
        else {
            this.autoIncrementClass = '';
            this.killInterval();
            this.configCurrentValue += this.counterStep;
            this.log('Counter value was incremented on ' + this.configCounterStep + ' manually');
            this.playPauseMethod(true);
        }
    };
    // decrement method
    CounterComponent.prototype.decrement = function () {
        this.killInterval();
        this.autoIncrementClass = '';
        this.configCurrentValue -= this.counterStep;
        this.log('Counter value was decremented on ' + this.configCounterStep);
        this.playPauseMethod(true);
    };
    CounterComponent.prototype.incrementStep = function () {
        this.configCounterStep++;
        this.log('Counter step was incremented on 1 and equals ' + this.configCounterStep);
    };
    CounterComponent.prototype.decrementStep = function () {
        this.configCounterStep--;
        this.log('Counter step was decremented on 1 and equals ' + this.configCounterStep);
    };
    CounterComponent.prototype.setCounterStep = function () {
        this.counterStep = this.configCounterStep;
        this.log('Counter\'s step was settled to ' + this.configCounterStep);
    };
    // auto increment delay timeOut
    CounterComponent.prototype.counterTimeOut = function () {
        var _this = this;
        this.couterTimeOutId = window.setTimeout(function () {
            _this.autoIncrement();
        }, this.configTimeout);
    };
    // auto increment method
    CounterComponent.prototype.autoIncrement = function () {
        var _this = this;
        this.killInterval(this.couterTimeOutId);
        this.couterIntervalId = window.setInterval(function () {
            _this.increment(true);
        }, this.configInterval);
    };
    // interval killer
    CounterComponent.prototype.killInterval = function (id) {
        var _id = id;
        var intervals = [this.couterIntervalId, this.couterTimeOutId];
        if (_id) {
            clearInterval(id);
        }
        else {
            for (var _i = 0, intervals_1 = intervals; _i < intervals_1.length; _i++) {
                var intervalId = intervals_1[_i];
                clearInterval(intervalId);
            }
        }
    };
    // clear method
    CounterComponent.prototype.clear = function () {
        if (!this.isStopped) {
            this.killInterval();
            this.configCurrentValue = 0;
            this.autoIncrementClass = '';
            this.playPause = 'Play';
            this.playPauseClass = '-state_pause';
            this.log('Counter was stopped and cleared');
        }
        this.isStopped = true;
    };
    CounterComponent.prototype.playPauseMethod = function (play) {
        if (!this.isStopped && !play) {
            this.playPause = 'Play';
            this.playPauseClass = '-state_pause';
            this.killInterval();
            this.log('Counter was paused');
        }
        else {
            this.playPause = 'Pause';
            this.playPauseClass = '-state_play';
            this.counterTimeOut();
            !play && this.log('Counter was turned on');
        }
        this.isStopped = this.isStopped ? false : true;
    };
    CounterComponent.prototype.log = function (msg) {
        var now = Date.now();
        var date = new common_1.DatePipe('en-US').transform(now, 'dd/MM/yyyy hh:mm:ss');
        this.logs.unshift(date + ' ' + msg);
    };
    return CounterComponent;
}());
CounterComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        templateUrl: './counter.component.html',
        styleUrls: ['./counter.component.css'],
    }),
    __metadata("design:paramtypes", [])
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map