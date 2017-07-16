import { Component } from '@angular/core'

@Component({
  selector:'ang',
  template:`
    <h1>{{message}}</h1>
    <h2 [class]="className">Azazazaz</h2>
    <button (click)="changeColor()">Change Color</button>    
    <button (click)="setMessage()" [disabled]="isDisabled">Set Message</button>
    <input type="text" [(ngModel)]="message" [disabled]="isDisabled" />
    <input type="checkbox" [(ngModel)]="isDisabled" />
    <tr><td [attr.colspan]="1+1">One-Two</td></tr>
  `,
  styles:[`
    .red {color:red}
    .green {color:green}
  `]
})

export class AngComponent { 

  private message: string = 'my message';
  public isDisabled: boolean = true;

  public className: string = 'red';

  public setMessage():void{
    this.message = 'new message';
  }

  public getMessage():string{
    return this.message = 'My super message'
  }

  public changeColor():void{
    this.className = this.className === 'red' ? this.className = 'green' : this.className = 'red';
  }
};