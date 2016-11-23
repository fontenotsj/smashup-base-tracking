import { Component, Input } from '@angular/core';
import { baseInfo } from './base-info';
import { bases } from './bases.component';


@Component({
  selector: 'play-area',
  template: `
    <h1 id = "play-area"></h1>
    <bases>Loading bases...</bases>
    <div> Loading players ... </div>
  `

})
export class playArea {

}
