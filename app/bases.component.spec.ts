import { bases } from './bases.component';
import { baseInfo } from './base-info';
import { TestBed, async } from '@angular/core/testing';
import { Any } from '../testing/any';

describe('Bases Component', function () {

    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [bases] });
        TestBed.compileComponents();

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
        const baseList = Any.bases(Any.int(2, 5));
        comp.setBases(baseList);
        fixture.detectChanges();

        var baseHeaders = document.getElementsByClassName("base-header");
        expect(baseHeaders.length).toEqual(baseList.length, 'should have two bases');
    });

    it('should highlight selected base', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        const baseList = Any.bases(Any.int(2, 5));
        comp.setBases(baseList);
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
        const baseList = Any.bases(Any.int(2, 5));
        //const baseIndex = Any.int(0,baseList.length);
        comp.setBases(baseList);
        fixture.detectChanges();

        let calcPercentage = comp.progressPercent(baseList[0].currentScore, baseList[0].scoreThreshold);
        const baseToCheck = document.getElementById("complete-percent");
        let screenPercentage = baseToCheck.textContent;
        // console.log("percentage: ", percentage);

        expect(screenPercentage).toEqual(" " + calcPercentage + "% ");
    });

    it('should not display base complete percentage if scored', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(Any.scoredBase());
        fixture.detectChanges();

        const baseToCheck = document.getElementById("complete-percent");
        expect(baseToCheck).toBeFalsy("complete percent should not be shown for scored bases");

    });

    it('should display a base pont minus button', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(Any.bases());
        fixture.detectChanges();

        const minusBtn = document.getElementById("base-minus-button");
        expect(minusBtn).toBeTruthy("minus button does not exist");


    });

    it('should display a base pont plus button', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(Any.bases());
        fixture.detectChanges();

        const plusBtn = document.getElementById("base-plus-button");
        expect(plusBtn).toBeTruthy("plus button does not exist");


    });

    it('should add to the current score when base point plus button clicked', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        const expectedBases = Any.unscoredBase();
        comp.setBases(expectedBases);
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-plus-button");
        const oriScore = expectedBases[0].currentScore;

        btnToClick.click();
        fixture.detectChanges();

        expect(expectedBases[0].currentScore).toEqual(oriScore + 1);


    });

    it('should subtract from the current score when base point minus button clicked', () => {

        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        const expectedBases = Any.unscoredBase();
        comp.setBases(expectedBases);
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-minus-button");
        const oriScore = expectedBases[0].currentScore;

        btnToClick.click();
        fixture.detectChanges();

        expect(expectedBases[0].currentScore).toEqual(oriScore - 1);
    });

    it('should  not add to the current score when base point plus button clicked if already at threshold', () => {
        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        const expectedBases = Any.scoredBase();
        comp.setBases(expectedBases);
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-plus-button");
        expect(expectedBases[0].currentScore).toEqual(expectedBases[0].scoreThreshold);

        btnToClick.click();
        fixture.detectChanges();

        expect(expectedBases[0].currentScore).toEqual(expectedBases[0].scoreThreshold);

    });

    it('should not subtract the current score when base point minus button clicked if currently at zero score', () => {

        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance;
        const expectedBases = Any.unscoredBase();
        comp.setBases(expectedBases);
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-minus-button");
        expectedBases[0].currentScore = 0;

        btnToClick.click();
        fixture.detectChanges();

        expect(expectedBases[0].currentScore).toEqual(0);

    });

    it('should display SCORED!! when current score equals threshold', () => {

        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(Any.scoredBase());
        fixture.detectChanges();

        const scoredDiv = document.getElementById("base-scored");

        let scoredText = scoredDiv.textContent;
        // console.log("percentage: ", percentage);

        expect(scoredText).toEqual("SCORED!!!");

    });

    it('should NOT display SCORED!!! when current score less than threshold', () => {

        let fixture = TestBed.createComponent(bases);
        fixture.detectChanges();

        const comp: any = fixture.componentInstance
        comp.setBases(Any.unscoredBase());
        fixture.detectChanges();

        const scoredDiv = document.getElementById("base-scored");
        expect(scoredDiv).toBeFalsy("Scored!!! should not be shown for unscored bases");

    });


});