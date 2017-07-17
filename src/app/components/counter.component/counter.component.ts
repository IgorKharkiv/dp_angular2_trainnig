import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],

})

export class CounterComponent {

  // config
  public configCurrentValue: number = 0;
  public configCounterStep: number = 1;
  public configTimeout: number = 20000;
  public configInterval: number = 20000;

  // couner step
  public counterStep: number = this.configCounterStep;

  // interval id
  private couterIntervalId: number;
  private couterTimeOutId: number;

  // state properties
  public isStopped: boolean = false;

  // classes modoficators
  public autoIncrementClass: string = '';

  public playPause: string = this.isStopped ? 'Play' : 'Pause';
  public playPauseClass: string = '-state_play';

  // array of logs
  public logs: Array<string> = [];


  constructor() {
    this.counterTimeOut();
  }

  // increment method
  public increment(notClear: boolean): void {
    if ( notClear ) {
      this.autoIncrementClass = '-state_auto';
      this.configCurrentValue += this.counterStep;
      this.log('Counter value was incremented on ' + this.configCounterStep + ' automatically');
    } else {
      this.autoIncrementClass = '';
      this.killInterval();
      this.configCurrentValue += this.counterStep;
      this.log('Counter value was incremented on ' + this.configCounterStep + ' manually');
      this.playPauseMethod(true);
    }
  }

  // decrement method
  public decrement(): void {
    this.killInterval();
    this.autoIncrementClass = '';
    this.configCurrentValue -= this.counterStep;
    this.log('Counter value was decremented on ' + this.configCounterStep);
    this.playPauseMethod(true);
  }

  public incrementStep(): void {
    this.configCounterStep++;
    this.log('Counter step was incremented on 1 and equals ' + this.configCounterStep);
  }

  public decrementStep(): void {
    this.configCounterStep--;
    this.log('Counter step was decremented on 1 and equals ' + this.configCounterStep);
  }
  public setCounterStep(): void {
    this.counterStep = this.configCounterStep;
    this.log('Counter\'s step was settled to ' + this.configCounterStep);
  }

  // auto increment delay timeOut
  public counterTimeOut(): void {
    this.couterTimeOutId = window.setTimeout(() => {
      this.autoIncrement();
    }, this.configTimeout);
  }

  // auto increment method
  public autoIncrement(): void {

    this.killInterval(this.couterTimeOutId);

    this.couterIntervalId = window.setInterval(() => {
      this.increment(true);
    }, this.configInterval);

  }

  // interval killer
  public killInterval(id?: number): void {

    let _id: number | undefined = id;
    let intervals: Array<number> = [ this.couterIntervalId, this.couterTimeOutId ];

    if ( _id ) {
      clearInterval( id );
    } else {
      for (let intervalId of intervals){
        clearInterval( intervalId );
      }
    }
  }

  // clear method
  public clear(): void {
    if (!this.isStopped) {
      this.killInterval();
      this.configCurrentValue = 0;
      this.autoIncrementClass = '';
      this.playPause = 'Play';
      this.playPauseClass = '-state_pause';
      this.log('Counter was stopped and cleared');
    }
    this.isStopped = true;
  }

  public playPauseMethod(play?: boolean ): void {
    if (!this.isStopped && !play) {
      this.playPause = 'Play';
      this.playPauseClass = '-state_pause';
      this.killInterval();
      this.log('Counter was paused');
    } else {
      this.playPause = 'Pause';
      this.playPauseClass = '-state_play';
      this.counterTimeOut();
      !play && this.log('Counter was turned on');
    }
    this.isStopped = this.isStopped ? false : true;
  }

  public log(msg?: string): void {
    let now: number = Date.now();
    let date: string = new DatePipe('en-US').transform(now, 'dd/MM/yyyy hh:mm:ss');
    this.logs.unshift(date + ' ' + msg);
  }

}
