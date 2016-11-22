import { Component, Input } from '@angular/core';
import { baseInfo } from './base-info';


let BASES: baseInfo[] = [
    { currentScore: 1, scoreThreshold: 10, name: 'Base1' },
    { currentScore: 3, scoreThreshold: 10, name: 'Base Two' },
    { currentScore: 5, scoreThreshold: 10, name: 'Base iii' },
    { currentScore: 9, scoreThreshold: 10, name: 'Base quad' },
    { currentScore: 10, scoreThreshold: 10, name: 'Base 5' }
];

@Component({
    selector: 'bases',
    template: ` <h1 id = "active-bases">{{title}}</h1>
    <ul id = "base-list" class="bases">
      <li id = "base-list-item" *ngFor="let base of bases"
        [class.selected]="base === _selectedBase"
        (click)="onSelect(base)">
        <div class="base-header" >
          <button id= "base-minus-button" class="base-button" (click)="baseBtnClicked($event,base.name, '-')">
          -
          </button>  {{base.name}}
           <button id= "base-plus-button" class="base-button base-button-right" (click)="baseBtnClicked($event,base.name, '+')">
          +
          </button>
        </div>
        <div *ngIf="!isNotComplete(base.currentScore, base.scoreThreshold)" class="base-scored" >
        SCORED!!!
        </div>
        <div *ngIf="isNotComplete(base.currentScore, base.scoreThreshold)" class="base-complete-info" >
            0
            <progress max={{base.scoreThreshold}} value={{base.currentScore}}>
            </progress>
            {{base.scoreThreshold}}
            <br>
           <span id = "complete-percent"> {{progressPercent(base.currentScore, base.scoreThreshold)}}% </span>
        </div>


      </li>
    </ul> `
    ,
    styleUrls: ['app/bases.component.css']
})
export class bases {
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

    isNotComplete(current: number, max: number): boolean {
        if (this.progressPercent(current, max) < 100) {
            return true;
        }
        return false;
    }

    baseBtnClicked(event: any, baseSelected: string, plusMinus: string): void {
        const baseToUpdate = this.bases.find(b => b.name == baseSelected);
        if (plusMinus === '+' && baseToUpdate.currentScore < baseToUpdate.scoreThreshold) {
            baseToUpdate.currentScore += 1;
        }
        else if (plusMinus === '-' && baseToUpdate.currentScore > 0) {
            baseToUpdate.currentScore -= 1;
        }
    }
}
