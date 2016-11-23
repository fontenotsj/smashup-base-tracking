import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { baseInfo } from './base-info';
import { baseCard } from './base-card.component';


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
    <base-card id="base-list" *ngFor="let base of bases"
        [base]="base"
        onSelected="onBaseSelected($event)" >
    </base-card>
     `
})
export class bases {
    title = 'Active Bases';
    _selectedBase: baseInfo;
    bases = BASES;

    onBaseSelected(base: baseInfo): void {
        this._selectedBase = base;
    }

    protected setBases(pbases: baseInfo[]): void {
        this.bases = pbases;

    }
}
