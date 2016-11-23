import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { playArea } from './play-area.component';
import { bases } from './bases.component';
import { baseCard } from './base-card.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, playArea, bases, baseCard],
  bootstrap: [AppComponent]
})
export class AppModule { }
