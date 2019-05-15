import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeekScoresFormComponent } from './week-scores-form.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { Week } from '../../week';

describe('WeekScoresFormComponent', () => {
  let component: WeekScoresFormComponent;
  let fixture: ComponentFixture<WeekScoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule
      ],
      declarations: [ WeekScoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekScoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emitWeek() emits a week', () => {
    component.season = 2017;
    component.week = 6;

    // spy on the event emitter
    spyOn(component.evtEmitterWeek, 'emit');

    // trigger the click
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const w: Week = { season: 2017, week: 6 };
    expect(component.evtEmitterWeek.emit).toHaveBeenCalledWith(w);
  });

  it('backToCurrent() brings back to current week', () => {
    // For this test -> pretend it is the 2018 seaon, week 6
    // The user changes the scoreboard to 2017, week 3
    component.originalSeason = 2018;
    component.originalWeek = 6;
    component.season = 2017;
    component.week = 4;
    const w: Week = { season: component.originalSeason, week: component.originalWeek };

    // spy on the event emitter
    spyOn(component.evtEmitterWeek, 'emit');

    // expect the button to emit an event
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#this-week-btn');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.evtEmitterWeek.emit).toHaveBeenCalledWith(w);

    // expect the "this-week-btn" to be disabled
    fixture.detectChanges();
    expect(button['disabled']).toBeTruthy();
  });

  it('isCurrent() method returns correct true/false', () => {
    component.originalSeason = 2018;
    component.originalWeek = 6;
    component.season = 2017;
    component.week = 4;
    expect(component.isCurrent()).toEqual(false);

    component.season = 2018;
    component.week = 6;
    expect(component.isCurrent()).toEqual(true);
  })

});
