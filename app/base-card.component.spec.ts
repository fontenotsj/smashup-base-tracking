import { baseCard } from './base-card.component';
import { baseInfo } from './base-info';
import { TestBed, async } from '@angular/core/testing';
import { Any } from '../testing/any';

describe('Base Component', function () {

    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [baseCard] });
        TestBed.compileComponents();

    }));


    it('should instantiate component', () => {
        let fixture = TestBed.createComponent(baseCard);
        expect(fixture.componentInstance instanceof baseCard).toBe(true, 'should create AppComponent');
    });

    it('should contain base container', () => {
        let fixture = TestBed.createComponent(baseCard);
        const expectedBase = Any.base();
        fixture.componentInstance.base = expectedBase;
        fixture.detectChanges();

        expect(document.getElementById(expectedBase.name)).toBeTruthy('should have a base');

    });

    it('should display a base complete percentage if base not scored', () => {
        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        const expectedBase = Any.unscoredBase();
        comp.base = expectedBase;
        fixture.detectChanges();

        let calcPercentage = comp.progressPercent();
        const baseToCheck = document.getElementById("complete-percent");
        let screenPercentage = baseToCheck.textContent;

        expect(screenPercentage).toEqual(" " + calcPercentage + "% ");
    });

    it('should not display base complete percentage if scored', () => {
        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        const expectedBase = Any.scoredBase();
        comp.base = expectedBase;
        fixture.detectChanges();

        const baseToCheck = document.getElementById("complete-percent");
        expect(baseToCheck).toBeFalsy("complete percent should not be shown for scored bases");

    });

    it('should display a base pont minus button', () => {
        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        comp.base = Any.base();
        fixture.detectChanges();

        const minusBtn = document.getElementById("base-minus-button");
        expect(minusBtn).toBeTruthy("minus button does not exist");


    });

    it('should display a base pont plus button', () => {
        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        comp.base = Any.base();
        fixture.detectChanges();

        const plusBtn = document.getElementById("base-plus-button");
        expect(plusBtn).toBeTruthy("plus button does not exist");


    });

    it('should add to the current score when base point plus button clicked', () => {
        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        const expectedBase = Any.unscoredBase();
        comp.base = expectedBase;
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-plus-button");
        const oriScore = expectedBase.currentScore;

        btnToClick.click();
        fixture.detectChanges();

        expect(expectedBase.currentScore).toEqual(oriScore + 1);


    });

    it('should subtract from the current score when base point minus button clicked', () => {

        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        const expectedBase = Any.scoredBase();
        comp.base = expectedBase;
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-minus-button");
        const oriScore = expectedBase.currentScore;

        btnToClick.click();
        fixture.detectChanges();

        expect(expectedBase.currentScore).toEqual(oriScore - 1);
    });

    it('should  not add to the current score when base point plus button clicked if already at threshold', () => {
        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        const expectedBase = Any.scoredBase();
        comp.base = expectedBase;
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-plus-button");
        expect(expectedBase.currentScore).toEqual(expectedBase.scoreThreshold);

        btnToClick.click();
        fixture.detectChanges();

        expect(expectedBase.currentScore).toEqual(expectedBase.scoreThreshold);

    });

    it('should not subtract the current score when base point minus button clicked if currently at zero score', () => {

        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance;
        const expectedBase = Any.unscoredBase();
        comp.base = expectedBase;
        fixture.detectChanges();

        const btnToClick = document.getElementById("base-minus-button");
        expectedBase.currentScore = 0;

        btnToClick.click();
        fixture.detectChanges();

        expect(expectedBase.currentScore).toEqual(0);

    });

    it('should display SCORED!! when current score equals threshold', () => {

        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        comp.base = Any.scoredBase();
        fixture.detectChanges();

        const scoredDiv = document.getElementById("base-scored");

        let scoredText = scoredDiv.textContent;

        expect(scoredText).toEqual("SCORED!!!");

    });

    it('should NOT display SCORED!!! when current score less than threshold', () => {

        let fixture = TestBed.createComponent(baseCard);

        const comp: any = fixture.componentInstance
        comp.base = Any.unscoredBase();
        fixture.detectChanges();

        const scoredDiv = document.getElementById("base-scored");
        expect(scoredDiv).toBeFalsy("Scored!!! should not be shown for unscored bases");

    });


});