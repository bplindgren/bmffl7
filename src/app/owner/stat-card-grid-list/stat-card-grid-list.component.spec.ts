import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { StatCardGridListComponent } from './stat-card-grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatCardComponent } from '../stat-card/stat-card.component';

import { AllTimeStatsTestObj } from '../../test-objects/AllTimeStatsTestObj';
import { ownerTeamStatsTestObj } from '../../test-objects/teams/ownerTeamStats';
import { SeasonStatsTestObj } from '../../test-objects/SeasonStatsTestObj';

import { OwnerService } from '../owner-service/owner.service';
import { MockOwnerService } from '../../mocks/mockOwnerService';
import { TeamService } from '../../team/team-service/team.service';
import { MockTeamService } from '../../mocks/mockTeamService';

describe('StatCardGridListComponent', () => {
  let component: StatCardGridListComponent;
  let fixture: ComponentFixture<StatCardGridListComponent>;
  let mockOwnerService: MockOwnerService;
  let mockTeamService: MockTeamService;
  let getDataSpy;

  beforeEach(async(() => {
    mockOwnerService = new MockOwnerService();
    mockTeamService = new MockTeamService();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatGridListModule ],
      declarations: [ StatCardGridListComponent, StatCardComponent ],
      providers: [
        { provide: OwnerService, useValue: mockOwnerService },
        { provide: TeamService, useValue: mockTeamService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCardGridListComponent);
    component = fixture.componentInstance;
    getDataSpy = spyOn(component, 'getData').and.callThrough();
    component.ownerId = 3;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  xit('should call the getData() method on changes', () => {
    component.ownerId = 4;
    fixture.detectChanges();
    component.ngOnChanges();
    expect(getDataSpy).toHaveBeenCalled();
  });

  xit('getData() should get allTimeStats and ownerTeams', () => {
    component.getData();
    fixture.detectChanges();
    expect(mockOwnerService.getOwnerAllTimeStatsSpy).toHaveBeenCalledWith(3);
    expect(mockTeamService.getOwnerTeamsStatsViewSpy).toHaveBeenCalledWith(3);
    expect(component.ownerTeams.length).toBeGreaterThan(0);
  });

  it('should return an object with current stats', () => {
    component.allTimeStats = AllTimeStatsTestObj;
    let cardStats = component.getCardStats();

    expect(cardStats["Wins"]).toBe(58);
    expect(cardStats["Winning_Percentage"]).toBe(47.2);
    expect(cardStats["Points_For_Per_Game"]).toBe(87.4);
  })

  it('should format keys properly', () => {
    let str1 = "Winning_Percentage";
    expect(component.formatKey(str1)).toBe("Winning%");

    let str2 = "Points_For";
    expect(component.formatKey(str2)).toBe("Points For");

    let str3 = "Points_For_Per_Game";
    expect(component.formatKey(str3)).toBe("Points For/Game");
  });

  it('should get data for the graph', () => {
    component.ownerTeams = SeasonStatsTestObj;
    let evtEmitterStatSpy = spyOn(component.evtEmitterStat, 'emit')
    component.getGraphData("Points_For_Per_Game");

    let emitArray: any[] = [
      [
        { name: "2011", value: 86 },
        { name: "2012", value: 90.1 },
        { name: "2013", value: 80.5 },
        { name: "2014", value: 92.8 },
        { name: "2015", value: 78.1 },
        { name: "2016", value: 103.3 },
        { name: "2017", value: 83.6 },
        { name: "2018", value: 83.7 }
      ],
      "Points For/Game"
    ];

    console.log(emitArray);

    expect(evtEmitterStatSpy).toHaveBeenCalledWith(emitArray);
  });

});
