import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { baseInfo } from './base-info';
import { baseCard } from './base-card.component';
import { newBase } from './new-base.component';


let BASES: baseInfo[] = [
    { currentScore: 5, scoreThreshold: 6, name: 'Base iii' },
    { currentScore: 1, scoreThreshold: 27, name: 'Base1' },
    { currentScore: 3, scoreThreshold: 13, name: 'Base Two' },
    { currentScore: 9, scoreThreshold: 43432, name: 'Base quad' },
    { currentScore: 10, scoreThreshold: 30, name: 'Base 5' }
];

@Component({
    selector: 'bases',
    template: ` <h1 id = "active-bases">{{title}}</h1>
    <div>
         <button id= "bases-add-btn" class="base-button" enabled="!inAddMode()" (click)="baseAddClicked($event)">
          Add Base
          </button>
    </div>
    <div *ngIf="inAddMode()" id = "base-add-screen">
    <new-base></new-base>
    <div>
         <button id= "bases-add-btn" class="base-button" (click)="baseCreateClicked($event)">
          Create!
          </button>
          <button id= "bases-add-btn" class="base-button base-button-right" (click)="baseCancelClicked($event)">
          Cancel
          </button>
    </div>
    <hr>
    </div>
    <base-card id="base-list" *ngFor="let base of bases"
        [base]="base" >
    </base-card>
     `
})
export class bases {
    title = 'Active Bases';
    bases: baseInfo[] = BASES;
    _showBaseAdd: boolean = false;

    _newBaseName: string;
    _newBaseScoreThreshold: number;
    protected setBases(pbases: baseInfo[]): void {
        this.bases = pbases;
    }

    baseAddClicked(event: any): void {
        this._showBaseAdd = true;
    }

    baseCreateClicked(event: any): void {
        this._showBaseAdd = false;
        const newBase: baseInfo =
            {
                name: this._newBaseName,
                currentScore: 0,
                scoreThreshold: this._newBaseScoreThreshold
            };
        this.bases.push(newBase)
    }

    baseCancelClicked(event: any): void {
        this._showBaseAdd = false;
    }

    inAddMode(): boolean {
        if (this._showBaseAdd) {
            return true;
        }
        return false;
    }



}
