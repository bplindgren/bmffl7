import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { Week } from '../../week';

import { GameService } from '../../game/game-service/game.service';

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
      providers: [ GameService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the week', () => {
    expect(component.week).toBe(16);
  });

  it ('should get the season', () => {
    expect(component.season).toBe(2018);
  });

  // it ('should get games', async(inject( [GameService], (gameService: GameService) => {
  //   let week : Week = {
  //     season: 2018,
  //     week: 16
  //   }
  //   // console.log(gameService);
  //   return gameService.getWeekGames(week).subscribe(res => {
  //     // console.log(res);
  //     expect(res.length).toBeGreaterThan(0);
  //   })
  // })));
});
