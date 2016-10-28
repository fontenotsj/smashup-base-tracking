import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { playArea } from './play-area.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, playArea ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
