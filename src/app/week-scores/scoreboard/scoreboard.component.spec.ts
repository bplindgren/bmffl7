import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ScoreboardComponent } from './scoreboard.component';
import { ScorecardComponent } from '../scorecard/scorecard.component';
import { Game } from '../../game';

import { recentGames } from '../../test-objects/games/recentGames';
import { unsortedGames } from '../../test-objects/games/unsortedGames';

describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterModule, MatCardModule ],
      declarations: [ ScoreboardComponent, ScorecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    component.games = recentGames;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of games', () => {
    expect(component.games.length).toBeGreaterThan(0);
  });

  it('sortGames() should sort games', () => {
    const unsorted: Game[] = unsortedGames;
    const sortedGames: Game[] = component.sortGames(unsorted);
    expect(sortedGames).toEqual(recentGames);
  });

});
