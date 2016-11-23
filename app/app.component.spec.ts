/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { playArea } from './play-area.component';
import { bases } from './bases.component'
import { TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
    it('should run a passing test', () => {
        expect(true).toEqual(true, 'should pass');
    });
});

describe('AppComponent with TCB', function() {
    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent, playArea, bases] });
        TestBed.compileComponents();
    }));

    it('should instantiate component', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

    it('should have an active bases component', () => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        // let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

        // h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

        expect(document.getElementById("play-area")).toBeTruthy('should have active bases component');

        // expect(h1.innerText).toMatch(/angular app/i, '<h1> should say something about "Angular App"');
    });
});
