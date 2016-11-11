import { Component, Input } from '@angular/core';
import { baseInfo } from './base-info';


const BASES: baseInfo[] = [
  { currentScore: 1, scoreThreshold: 10, name: 'Base1' },
  { currentScore: 3, scoreThreshold: 10, name: 'Base Two' },
  { currentScore: 5, scoreThreshold: 10, name: 'Base iii' },
  { currentScore: 9, scoreThreshold: 10, name: 'Base quad' },
  { currentScore: 10, scoreThreshold: 10, name: 'Base 5' }
];


@Component({
  selector: 'play-area',
  template: `
    <h1 id = "active-bases">{{title}}</h1>
    <ul id = "base-list" class="bases">
      <li id = "base-list-item" *ngFor="let base of bases"
        [class.selected]="base === _selectedBase"
        (click)="onSelect(base)">
        <div class="base-header" >
            {{base.name}}
        </div>
        <div class="base-complete-info" >
            0
            <progress max={{base.scoreThreshold}} value={{base.currentScore}}>
            </progress>
            {{base.scoreThreshold}}
            <br>
           <span id = "complete-percent"> {{progressPercent(base.currentScore, base.scoreThreshold)}}% </span>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['app/play-area.component.css']

})
export class playArea {
  title = 'Active Bases';
  _selectedBase: baseInfo;
  bases = BASES;

  onSelect(base: baseInfo): void {
    this._selectedBase = base;
  }
  progressPercent(current: number, max: number): number {
    return current / max * 100;
  }

  protected setBases(pbases: baseInfo[]): void {
    this.bases = pbases;

  }
}
