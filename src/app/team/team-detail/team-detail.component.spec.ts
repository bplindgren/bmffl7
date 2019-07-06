import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import { MockActivatedRoute, MockRouter } from '../../mocks/routes';
import { GameService } from '../../game/game-service/game.service';
import { MockGameService } from '../../mocks/mockGameService.service';
import { TeamService } from '../../team/team-service/team.service';
import { MockTeamService } from '../../mocks/mockTeamService';

import { TeamDetailComponent } from './team-detail.component';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;
  let mockGameService: MockGameService;
  let mockTeamService: MockTeamService;
  let mockActivatedRoute: MockActivatedRoute;

  beforeEach(async(() => {
    mockGameService = new MockGameService();
    mockTeamService = new MockTeamService();
    mockActivatedRoute = new MockActivatedRoute({ 'id': 64 });

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatTableModule,
        TableModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatSelectModule
      ],
      declarations: [ TeamDetailComponent ],
      providers: [
        { provide: GameService, useValue: mockGameService },
        { provide: TeamService, useValue: mockTeamService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the team\'s games and stats on instantiation', () => {
    expect(mockGameService.getTeamGamesSpy).toHaveBeenCalledWith(64);
    expect(mockTeamService.getTeamSeasonStatsViewSpy).toHaveBeenCalledWith(64);
  });
});
