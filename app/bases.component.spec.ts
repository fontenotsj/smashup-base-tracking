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

    it('should display an Add Bases button', () => {
        let fixture = TestBed.createComponent(bases);

        var addBasesButton = document.getElementById("bases-add-btn");
        expect(addBasesButton).toBeTruthy("expected Add Bases Button to exist");

    });

    it('should display a bases add secton when Add Bases button clicked', () => {
        let fixture = TestBed.createComponent(bases);
        var addBasesButton = document.getElementById("bases-add-btn");

        const comp: any = fixture.componentInstance
        const baseList = Any.bases(Any.int(2, 5));
        comp.setBases(baseList);
        fixture.detectChanges();

        var baseAddComponent = document.getElementById("base-add-screen");
        expect(baseAddComponent).toBeFalsy();

        addBasesButton.click();
        fixture.detectChanges();

        baseAddComponent = document.getElementById("base-add-screen");
        expect(baseAddComponent).toBeTruthy();

    });



});