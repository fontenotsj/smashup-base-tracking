import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { baseInfo } from './base-info';


@Component({
    selector: 'base-card',
    template: `
    <div id = {{_base.name}}
        [class.selected]="_selected"
        class="base"
        (click)="onSelect(_base)">
        <div class="base-header" >
          <button id= "base-minus-button" class="base-button" (click)="baseBtnClicked($event, '-')">
          -
          </button>  {{_base.name}}
           <button id= "base-plus-button" class="base-button base-button-right" (click)="baseBtnClicked($event, '+')">
          +
          </button>
        </div>
        <div id = "base-scored" *ngIf="!isNotComplete()"
        class="base-scored" >SCORED!!!</div>
        <div *ngIf="isNotComplete()" class="base-complete-info" >
            0
            <progress max={{_base.scoreThreshold}} value={{_base.currentScore}}>
            </progress>
            {{_base.scoreThreshold}}
            <br>
           <span id = "complete-percent"> {{progressPercent()}}% </span>
        </div>
</div> `
    ,
    styleUrls: ['app/base-card.component.css']
})
export class baseCard {
    @Input() base: baseInfo;
    @Output() onSelected = new EventEmitter<baseInfo>();

    _selected: boolean;
    _base: baseInfo;

    ngOnInit() {
        this._base = this.base;
    }


    public setSelected(selectedFlag: boolean): void {
        this._selected = selectedFlag;
    }

    onSelect(): void {
        this._selected = true;
        this.onSelected.emit(this._base);
    }
    onUnselect(): void {
        this._selected = false;
        this.onSelected.emit(this._base);
    }

    progressPercent(): number {
        return this._base.currentScore / this._base.scoreThreshold * 100
    }

    protected setBase(pbase: baseInfo): void {
        this._base = pbase;

    }

    isNotComplete(): boolean {
        if (this.progressPercent() < 100) {
            return true;
        }
        return false;
    }

    baseBtnClicked(event: any, plusMinus: string): void {

        if (plusMinus === '+' && this._base.currentScore < this._base.scoreThreshold) {
            this._base.currentScore += 1;
        }
        else if (plusMinus === '-' && this._base.currentScore > 0) {
            this._base.currentScore -= 1;
        }
    }
}
