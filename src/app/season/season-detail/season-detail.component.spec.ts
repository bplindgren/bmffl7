import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SeasonDetailComponent } from './season-detail.component';

import { WeekScoresModule } from '../../week-scores/week-scores.module';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { TeamService } from '../../team/team-service/team.service';
import { MockTeamService } from '../../mocks/mockTeamService';
import { MockActivatedRoute, MockRouter } from '../../mocks/routes';

import { seasonTeamsTestObj } from '../../test-objects/teams/seasonTeams';

describe('SeasonDetailComponent', () => {
  let component: SeasonDetailComponent;
  let fixture: ComponentFixture<SeasonDetailComponent>;
  let mockTeamService: MockTeamService;
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  beforeEach(async(() => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    mockTeamService = new MockTeamService();
    mockActivatedRoute = new MockActivatedRoute({ "id": 6 });
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, HttpClientTestingModule, RouterTestingModule, WeekScoresModule, MatTableModule, TableModule, MatTabsModule, MatButtonToggleModule
      ],
      declarations: [ SeasonDetailComponent ],
      providers: [
        { provide: TeamService, useValue: mockTeamService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDetailComponent);
    mockTeamService.setResponse(seasonTeamsTestObj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect getSeasonTeams() to have been called with 2016', () => {
    expect(mockTeamService.getSeasonTeamsSpy).toHaveBeenCalledWith(6);
  });

  it('expect upstairsTeams and downstairsTeams to each have a lenth of 5', () => {
    expect(component.upstairsTeams.length).toBe(5);
    expect(component.downstairsTeams.length).toBe(5);
  })
});
