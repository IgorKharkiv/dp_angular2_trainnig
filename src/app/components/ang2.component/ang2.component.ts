import { Component } from '@angular/core'

@Component({
  selector: 'ang',
  templateUrl: './ang2.component.html',
  styles: [`
    .red {color:blue}
    .green {color:green}
  `]
})

export class AngComponent {

  private message: string = 'my message';
  public isDisabled: boolean = true;

  public className: string = 'red';

  public setMessage(): void {
    this.message = 'new message';
  }

  public getMessage(): string {
    return this.message = 'My super message'
  }

  public changeColor(): void {
    this.className = this.className === 'red' ? this.className = 'green' : this.className = 'red';
  }
};
