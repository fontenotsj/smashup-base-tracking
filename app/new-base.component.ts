import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { baseInfo } from './base-info';

@Component({
    selector: 'new-base',
    templateUrl: 'new-base.component.html'
})
export class newBase {
    newBase: baseInfo;
    @Output() createdBase = new EventEmitter();

    save(): void {
        this.createdBase.emit({ value: newBase });

    }
    cancel(): void {
        this.createdBase.emit({ value: null });
    }
}
