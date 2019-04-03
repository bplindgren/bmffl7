import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { TeamsComponent } from './teams.component';

import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import { TeamService } from '../../team/team-service/team.service';
import { MockTeamService } from '../../mocks/mockTeamService';
import { GameService } from '../../game/game-service/game.service';
import { MockOwnerService } from '../../mocks/mockOwnerService';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;
  let mockTeamService: MockTeamService;
  let mockOwnerService: MockOwnerService;

  beforeEach(async(() => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    mockTeamService = new MockTeamService();
    mockOwnerService = new MockOwnerService();

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        TableModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatSelectModule
      ],
      declarations: [ TeamsComponent ],
      providers: [
        { provide: TeamService, useValue: mockTeamService },
        { provide: GameService, useValue: mockOwnerService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all teams on instantiation', () => {
    expect(mockTeamService.getAllTeamsStatsViewSpy).toHaveBeenCalled();
  });

  xit('should fetch all owners on instantiation', () => {
    expect(mockOwnerService.getAllOwnersSpy).toHaveBeenCalled();
  });

});
