// import modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import components
import { AppComponent }  from './components/app.component/app.component';
import { AngComponent }  from './components/ang2.component/ang2.component';
import { CounterComponent }  from './components/counter.component/counter.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AngComponent, CounterComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
