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
            {{progressPercent(base.currentScore, base.scoreThreshold)}}%
        </div>
      </li>
    </ul>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .bases {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .base-header {
        background-color: blue;
    }
    .bases li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      height: 3.5em;

    }
    .bases li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .bases li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .2em;
    }
    .bases .text {
      position: relative;
      top: -3px;
    }
    .bases .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: .8em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.9em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .base-complete-info {
        text-align: center;
    }
}
  `]
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
