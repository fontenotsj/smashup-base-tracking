import { playArea } from './play-area.component';
import { baseInfo } from './base-info';
import { TestBed, async } from '@angular/core/testing';

describe('Play Area Component', function () {

    const testBases: baseInfo[] = [
        { currentScore: 1, scoreThreshold: 10, name: 'a' },
        { currentScore: 5, scoreThreshold: 10, name: 'b' }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [playArea] });
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

    it('should display a bases complete percentage', () => {
        let fixture = TestBed.createComponent(playArea);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(testBases);
        fixture.detectChanges();

        const baseToCheck = document.getElementById("complete-percent");
        let percentage = baseToCheck.textContent;
        // console.log("percentage: ", percentage);

        expect(percentage).toEqual(" 10% ");


    });



});