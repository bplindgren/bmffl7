import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { Week } from '../../week';
import { Game } from '../../game';

import { WeekScoresComponent } from './week-scores.component';
import { WeekScoresFormComponent } from '../week-scores-form/week-scores-form.component';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { ScorecardComponent } from '../scorecard/scorecard.component';

import { GameService } from '../../game/game-service/game.service';
import { MockGameService } from '../../mocks/mockGameService.service';

describe('WeekScoresComponent', () => {
  let component: WeekScoresComponent;
  let fixture: ComponentFixture<WeekScoresComponent>;
  let mockGameService: MockGameService;

  beforeEach(async(() => {
    mockGameService = new MockGameService();

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule
      ],
      declarations: [
        WeekScoresComponent,
        WeekScoresFormComponent,
        ScoreboardComponent,
        ScorecardComponent
      ],
      providers: [
        { provide: GameService, useValue: mockGameService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getWeek() should return last week of previous season if the next season is >4 weeks away', () => {
    let dayOfYear = 1;
    let dayOfYear2 = 209;
    expect(component.getWeek(dayOfYear)).toBe(16);
    expect(component.getWeek(dayOfYear2)).toBe(16);
  });

  it('getWeek() should return week 1 if within 4 weeks of next season', () => {
    let dayOfYear3 = 210;
    let dayOfYear4 = 238;
    expect(component.getWeek(dayOfYear3)).toBe(1);
    expect(component.getWeek(dayOfYear4)).toBe(1);
  });

  it('getWeek() should return the correct week within the season', () => {
    let dayOfYear5 = 239;
    let dayOfYear6 = 252;
    let dayOfYear7 = 309;
    let dayOfYear8 = 363;
    expect(component.getWeek(dayOfYear5)).toBe(1);
    expect(component.getWeek(dayOfYear6)).toBe(2);
    expect(component.getWeek(dayOfYear7)).toBe(10);
    expect(component.getWeek(dayOfYear8)).toBe(16);
  });

  it('should get games upon instantiation', () => {
    expect(mockGameService.getWeekGamesSpy).toHaveBeenCalled();
  });
});
