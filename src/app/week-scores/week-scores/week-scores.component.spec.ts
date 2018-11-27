import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { WeekScoresComponent } from './week-scores.component';
import { WeekScoresFormComponent } from '../week-scores-form/week-scores-form.component';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { ScorecardComponent } from '../scorecard/scorecard.component';

import { TeamService } from '../../team/team-service/team.service';

describe('WeekScoresComponent', () => {
  let component: WeekScoresComponent;
  let fixture: ComponentFixture<WeekScoresComponent>;

  beforeEach(async(() => {
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
      providers: [ TeamService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
