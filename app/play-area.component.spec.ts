import { playArea } from './play-area.component';
import { baseInfo } from './base-info';
import { TestBed } from '@angular/core/testing';

describe('Play Area Component', function () {

    const testBases: baseInfo[] = [
        { currentScore: 0, scoreThreshold: 0, name: 'a' },
        { currentScore: 0, scoreThreshold: 0, name: 'b' }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [playArea] });
    });

    it('should instantiate component', () => {
        let fixture = TestBed.createComponent(playArea);
        expect(fixture.componentInstance instanceof playArea).toBe(true, 'should create AppComponent');
    });

    it('should contain base container', () => {
        let fixture = TestBed.createComponent(playArea);
        fixture.detectChanges();

        expect(document.getElementById("base-list")).toBeTruthy('should have a base list');

    });

    it('should display bases', () => {

        let fixture = TestBed.createComponent(playArea);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(testBases);
        fixture.detectChanges();

        var baseHeaders = document.getElementsByClassName("base-header");
        expect(baseHeaders.length).toEqual(2, 'should have two bases');
    });

    it('should highlight selected base', () => {
        let fixture = TestBed.createComponent(playArea);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(testBases);
        fixture.detectChanges();

        const baseToClick = document.getElementById("base-list-item");
        expect(baseToClick.classList.contains("selected")).toBeFalsy("should NOT be selected yet");

        baseToClick.click();
        fixture.detectChanges();

        expect(baseToClick.classList.contains("selected")).toBeTruthy("should NOW be selected yet");


    });



});