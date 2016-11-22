import { bases } from './bases.component';
import { baseInfo } from './base-info';
import { TestBed, async } from '@angular/core/testing';

fdescribe('Bases Component', function () {


    let testBases: baseInfo[];
    let scoredBase: baseInfo[];
    let unscoredBase: baseInfo[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [bases] });
        TestBed.compileComponents();

        testBases = [
            { currentScore: 1, scoreThreshold: 10, name: 'a' },
            { currentScore: 5, scoreThreshold: 10, name: 'b' },
        ];

        scoredBase = [
            { currentScore: 10, scoreThreshold: 10, name: 'c' }
        ];

        unscoredBase = [
            { currentScore: 1, scoreThreshold: 10, name: 'c' }
        ];

    }));


    it('should instantiate component', () => {
        let fixture = TestBed.createComponent(bases);
        expect(fixture.componentInstance instanceof bases).toBe(true, 'should create AppComponent');
    });

    it('should contain base container', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        expect(document.getElementById("base-list")).toBeTruthy('should have a base list');

    });

    it('should display bases', () => {

        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(testBases);
        fixture.detectChanges();

        var baseHeaders = document.getElementsByClassName("base-header");
        expect(baseHeaders.length).toEqual(2, 'should have two bases');
    });

    it('should highlight selected base', () => {
        let fixture = TestBed.createComponent(bases);
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

    it('should display a bases complete percentage if base not scored', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(testBases);
        fixture.detectChanges();

        const baseToCheck = document.getElementById("complete-percent");
        let percentage = baseToCheck.textContent;
        // console.log("percentage: ", percentage);

        expect(percentage).toEqual(" 10% ");
    });

    it('should not display base complete percentage if scored', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(scoredBase);
        fixture.detectChanges();

        const baseToCheck = document.getElementById("complete-percent");
        expect(baseToCheck).toBeFalsy("complete percent should not be shown for scored bases");

    });

    it('should display a base pont minus button', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(testBases);
        fixture.detectChanges();

        const minusBtn = document.getElementById("base-minus-button");
        expect(minusBtn).toBeTruthy("minus button does not exist");


    });

    it('should display a base pont plus button', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(testBases);
        fixture.detectChanges();

        const plusBtn = document.getElementById("base-plus-button");
        expect(plusBtn).toBeTruthy("plus button does not exist");


    });

    fit('should add to the current score when base point plus button clicked', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(unscoredBase);
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-plus-button");
        expect(unscoredBase[0].currentScore).toEqual(1);

        btnToClick.click();
        fixture.detectChanges();

        expect(unscoredBase[0].currentScore).toEqual(2);


    });

    fit('should subtract from the current score when base point minus button clicked', () => {

        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(unscoredBase);
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-minus-button");
        expect(unscoredBase[0].currentScore).toEqual(1);

        btnToClick.click();
        fixture.detectChanges();

        expect(unscoredBase[0].currentScore).toEqual(0);
    });

    fit('should  not add to the current score when base point plus button clicked if already at threshold', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(scoredBase);
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-plus-button");
        expect(scoredBase[0].currentScore).toEqual(scoredBase[0].scoreThreshold);

        btnToClick.click();
        fixture.detectChanges();

        expect(scoredBase[0].currentScore).toEqual(scoredBase[0].scoreThreshold);

    });

    fit('should not subtract the current score when base point minus button clicked if currently at zero score', () => {

        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        unscoredBase[0].currentScore = 0;
        comp.setBases(unscoredBase);
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-minus-button");
        expect(unscoredBase[0].currentScore).toEqual(0);

        btnToClick.click();
        fixture.detectChanges();

        expect(unscoredBase[0].currentScore).toEqual(0);

    });

    it('should display SCORED!! when current score equals threshold', () => {

    });

    it('should NOT display SCORED!! when current score less than threshold', () => {

    });


});