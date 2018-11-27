import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SeasonDetailComponent } from './season-detail.component';

import { WeekScoresModule } from '../../week-scores/week-scores.module';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { SeasonService } from '../season-service/season.service';
import { GameService } from '../../game/game-service/game.service';
import { TeamService } from '../../team/team-service/team.service';

describe('SeasonDetailComponent', () => {
  let component: SeasonDetailComponent;
  let fixture: ComponentFixture<SeasonDetailComponent>;
  let seasonService: SeasonService;
  let gameService: GameService;
  let teamService: TeamService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        WeekScoresModule,
        MatTableModule,
        TableModule,
        MatTabsModule,
        MatButtonToggleModule
      ],
      declarations: [ SeasonDetailComponent ],
      providers: [SeasonService, GameService, TeamService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDetailComponent);
    seasonService = TestBed.get(SeasonService);
    gameService = TestBed.get(GameService);
    teamService = TestBed.get(TeamService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
