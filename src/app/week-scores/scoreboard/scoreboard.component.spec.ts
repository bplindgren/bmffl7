import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ScoreboardComponent } from './scoreboard.component';
import { ScorecardComponent } from '../scorecard/scorecard.component';
import { Game } from '../../game';

import { GameService } from '../../game/game-service/game.service';
import { MockGameService } from '../../mocks/mockGameService.service';

import { recentGames } from '../../test-objects/games/recentGames';
import { unsortedGames } from '../../test-objects/games/unsortedGames';


describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;
  let mockGameService: MockGameService;

  beforeEach(async(() => {
    mockGameService = new MockGameService();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterModule, MatCardModule ],
      declarations: [ ScoreboardComponent, ScorecardComponent ],
      providers: [
        { provide: GameService, useValue: mockGameService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    component.season = 2018;
    component.week = 13
    component.games = unsortedGames;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of games', () => {
    expect(component.games.length).toBeGreaterThan(0);
  });

  it('should get games when week is changed', () => {
    component = fixture.debugElement.componentInstance;
    component.season = 2014;
    component.week = 5;
    component.ngOnChanges({
      season: new SimpleChange(2018, 2014, true),
      week: new SimpleChange(5, 13, true)
    });
    fixture.detectChanges();

    expect(mockGameService.getWeekGamesSpy).toHaveBeenCalled();
  });

  it('should get playoff games when week is changed to a playoff games week', () => {
    component = fixture.debugElement.componentInstance;
    component.season = 2014;
    component.week = 0;
    component.ngOnChanges({
      season: new SimpleChange(2018, 2014, true),
      week: new SimpleChange(5, 0, true)
    });
    fixture.detectChanges();

    expect(mockGameService.getPlayoffGamesSpy).toHaveBeenCalled();
  });

});
