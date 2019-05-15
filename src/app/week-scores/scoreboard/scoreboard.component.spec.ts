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

  it('should getGames()', () => {
    expect(mockGameService.getWeekGamesSpy).toHaveBeenCalledWith(2018, 13);
  })

  it('sortGames() should sort games', () => {
    component.getGames(2014, 5)
    fixture.detectChanges();

    component.sortGames();
    expect(component.games).toEqual(recentGames);
  });

  it('should get playoff games', () => {
    let newSeason: number = 2014;
    let newWeek: number = 0;

    component.ngOnChanges({
      season: new SimpleChange(null, newSeason, true),
      week: new SimpleChange(null, newWeek, true)
    })

    // component.ngOnChanges(changes);
    console.log("component", component)

    fixture.detectChanges();
    expect(mockGameService.getPlayoffGamesSpy).toHaveBeenCalledWith(2014);
  })

});
