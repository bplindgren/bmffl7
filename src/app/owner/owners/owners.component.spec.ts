import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { Owner } from '../../owner';
import { OwnersComponent } from './owners.component';
import { OwnerCardConfig } from '../../ownerCardConfig';

import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { OwnerCardComponent } from '../owner-card/owner-card.component';

import { OwnerService } from '../../owner/owner-service/owner.service';
import { MockOwnerService } from '../../mocks/mockOwnerService';
import { TeamService } from '../../team/team-service/team.service';
import { MockTeamService } from '../../mocks/mockTeamService';

import { ownersTestObj } from '../../test-objects/owners/ownersTestObj';
import { allTimeStatsTestObj } from '../../test-objects/owners/allTimeStatsObj';
import { allTeamsTestObj } from '../../test-objects/teams/allTeams';
import { ownerCardConfigObj } from '../../test-objects/owners/ownerCardConfigObj';

describe('OwnersComponent', () => {
  let component: OwnersComponent;
  let fixture: ComponentFixture<OwnersComponent>;
  let mockOwnerService: MockOwnerService;
  let mockTeamService: MockTeamService;

  beforeEach(async(() => {
    mockOwnerService = new MockOwnerService;
    mockTeamService = new MockTeamService;
    let spy: any;

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule,
        MatTableModule,
        TableModule
      ],
      declarations: [ OwnersComponent, OwnerCardComponent ],
      providers: [
        { provide: OwnerService, useValue: mockOwnerService },
        { provide: TeamService, useValue: mockTeamService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersComponent);
    component = fixture.componentInstance;
    component.allOwners = ownersTestObj;
    component.allTimeStats = allTimeStatsTestObj;
    component.allTeams = allTeamsTestObj;
    component.ownerCardConfigArray = ownerCardConfigObj;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getData() for all owners on instantiation', () => {
    expect(mockOwnerService.getAllOwnersSpy).toHaveBeenCalled();
    expect(mockOwnerService.getAllTimeStatsSpy).toHaveBeenCalled();
    expect(mockTeamService.getAllTeamsSpy).toHaveBeenCalled();

    expect(component.allOwners).toEqual(ownersTestObj);
    expect(component.allTimeStats).toEqual(allTimeStatsTestObj);
    expect(component.allTeams).toEqual(allTeamsTestObj);
  });

  it('should generate ownerCardConfig objects on instantiation', () => {
    expect(component.ownerCardConfigArray).toEqual(ownerCardConfigObj);
    let ownerCards: OwnerCardConfig[];
    ownerCards = component.generateOwnerCardConfigArray();
    expect(ownerCards.length).toBe(11);

    // Check that Brad's 2016 team is the champion
    expect(ownerCards.filter(oc => { return oc.owner.firstName === 'Brad'})[0].teams
      .filter(t => { return t.year === '2016' })[0].champion).toBe(true);
  });

});
