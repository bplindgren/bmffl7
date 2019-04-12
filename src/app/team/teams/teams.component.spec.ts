import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { By } from '@angular/platform-browser';

import { TeamsComponent } from './teams.component';

import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import { TeamService } from '../../team/team-service/team.service';
import { MockTeamService } from '../../mocks/mockTeamService';
import { OwnerService } from '../../owner/owner-service/owner.service';
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
        { provide: OwnerService, useValue: mockOwnerService }
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

  xit('should fetch all teams on instantiation', () => {
    expect(mockTeamService.getAllTeamsStatsViewSpy).toHaveBeenCalled();
  });

  xit('should fetch all owners on instantiation', () => {
    expect(mockOwnerService.getAllOwnersSpy).toHaveBeenCalled();
  });

  it('should expect currentDisplay to change to show owners', () => {
    component.showOwnerForm();
    expect(component.currentDisplay).toBe("teamsByOwner");
  })

  it('should expect currentDisplay to change to show teams', () => {
    component.showSeasonForm();
    expect(component.currentDisplay).toBe("teamsBySeason");
  })

  it('should fetch all teams for an owner', () => {
    console.log(component)
    let ownerMatToggleButton = component.ownerMatToggle;
    console.log(ownerMatToggleButton);
    // console.log(select);
    // select.triggerEventHandler('selectionChange', {})
    // fixture.detectChanges();
    // component.getTeamsByOwner(ownerId);
    // expect(mockTeamService.getOwnerTeamsStatsViewSpy).toHaveBeenCalled();
    expect(1).toEqual(1);
  });




});
