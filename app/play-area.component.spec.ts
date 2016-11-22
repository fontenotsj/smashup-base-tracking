import { playArea } from './play-area.component';
import { baseInfo } from './base-info';
import { TestBed, async } from '@angular/core/testing';
import { bases } from './bases.component'

describe('Play Area Component', function () {

    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [playArea, bases] });
        TestBed.compileComponents();
    }));


    it('should instantiate component', () => {
        let fixture = TestBed.createComponent(playArea);
        expect(fixture.componentInstance instanceof playArea).toBe(true, 'should create AppComponent');
    });

    it('should contain base container', () => {
        let fixture = TestBed.createComponent(playArea);
        fixture.detectChanges();

        expect(document.getElementById("base-list")).toBeTruthy('should have a base list');

    });

});