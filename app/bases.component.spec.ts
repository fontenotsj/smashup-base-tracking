import { bases } from './bases.component';
import { baseInfo } from './base-info';
import { TestBed, async } from '@angular/core/testing';
import { Any } from '../testing/any';
import { baseCard } from './base-card.component'

describe('Bases Component', function() {

    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [bases, baseCard] });
        TestBed.compileComponents();

    }));


    it('should instantiate component', () => {
        let fixture = TestBed.createComponent(bases);
        expect(fixture.componentInstance instanceof bases).toBe(true, 'should create AppComponent');
    });

    it('should contain base container', () => {
        let fixture = TestBed.createComponent(bases);
        const comp: any = fixture.componentInstance;
        comp.setBases(Any.bases());

        fixture.detectChanges();

        expect(document.getElementById("base-list")).toBeTruthy('should have a base list');

    });

    it('should display bases', () => {

        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        const baseList = Any.bases(Any.int(2, 5));
        comp.setBases(baseList);
        fixture.detectChanges();

        var baseHeaders = document.getElementsByClassName("base-header");
        expect(baseHeaders.length).toEqual(baseList.length, `should have ${baseList.length} bases`);
    });

    it('should highlight selected base', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        const baseList = Any.bases(Any.int(2, 5));
        comp.setBases(baseList);
        fixture.detectChanges();

        const baseToClick = document.getElementById(baseList[0].name);
        expect(baseToClick.classList.contains("selected")).toBeFalsy("should NOT be selected yet");

        baseToClick.click();
        fixture.detectChanges();

        expect(baseToClick.classList.contains("selected")).toBeTruthy("should NOW be selected yet");
    });

    it('should receive base selected event when a base is selected', () => { });

    it('should tell all other child bases selected is false when a selection is made', () => { });


});