import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Team } from '../../team';
import { TeamService } from './team.service';
import { SeasonStats } from '../../seasonStats';

import { allTeamsTestObj } from '../../test-objects/teams/allTeams';
import { ownerTeamsTestObj } from '../../test-objects/teams/ownerTeams';
import { teamSeasonStatsTestObj } from '../../test-objects/teams/teamSeasonStats';
import { ownerTeamStatsTestObj } from '../../test-objects/teams/ownerTeamStats';
import { allTeamStatsTestObj } from '../../test-objects/teams/allTeamStats';
import { seasonTeamsTestObj } from '../../test-objects/teams/seasonTeams';

describe('TeamService', () => {
  let injector: TestBed;
  let service: TeamService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamService]
    });

    injector = getTestBed();
    service = injector.get(TeamService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects service to fetch all teams', () => {
    service.getAllTeams().subscribe((teams: Team[]) => {
      expect(teams['data'].length).toBe(80);
      expect((teams['data'].filter(team => { return team.name === "The Ricky Stanzis" })).length).toBe(8);
    });

    const req = httpMock.expectOne("http://localhost:8080/teams");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: allTeamsTestObj });
  });

  it('expects service to fetch a team\'s record at a certain week', () => {
    let recordArray: Number[] = [6, 2, 0];

    // Get the 2016 Ricky Stanzis record at week 8
    service.getTeamRecord(54, 8).subscribe((record: Number[]) => {
      expect(record['data'][0]).toBe(6);
      expect(record['data'][1]).toBe(2);
      expect(record['data'][2]).toBe(0);
    });

    const req = httpMock.expectOne("http://localhost:8080/teams/record/54/8");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: recordArray });
  });

  it('expects service to fetch an owner\'s teams', () => {
    service.getOwnerTeams(4).subscribe((teams: Team[]) => {
      expect(teams['data'].map(team => { return team.owner }).length).toBe(8);
    })

    const req = httpMock.expectOne("http://localhost:8080/teams/owner/4");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: ownerTeamsTestObj });
  });

  it('expects service to fetch a team\'s season stats', () => {
    service.getTeamSeasonStatsView(54).subscribe((stats: SeasonStats) => {
      expect(stats['data'].id).toBe(54);
      expect(stats['data'].gamesplayed).toBe(15);
      expect(stats['data'].pointdifferential).toBe(138);
    })

    const req = httpMock.expectOne("http://localhost:8080/teams/stats/54");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: teamSeasonStatsTestObj });
  })

  it('expects service to fetch an owner\'s team\'s stats', () => {
    service.getOwnerTeamsStatsView(4).subscribe((stats: SeasonStats[]) => {
      expect(stats['data'].length).toBe(9);
      expect(stats['data'].map(team => { return team.ownerId })).toEqual(jasmine.arrayContaining([4]));
    })

    const req = httpMock.expectOne("http://localhost:8080/teams/owner/stats/4");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: ownerTeamStatsTestObj });
  })

  it('expects service to fetch all team\'s stats', () => {
    service.getAllTeamsStatsView().subscribe((stats: SeasonStats[]) => {
      expect(stats['data'].length).toBe(90);
      expect((stats['data'].filter(team => { return team.champion === true })).length).toBe(8);
    })

    const req = httpMock.expectOne("http://localhost:8080/teams/seasonStats");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: allTeamStatsTestObj });
  })

  it('expects service to fetch a season\'s teams', () => {
    service.getSeasonTeams(6).subscribe((teams: SeasonStats[]) => {
      expect(teams['data'].length).toBe(10);
      expect(teams['data'].map(team => { return team.seasonId })).toEqual(jasmine.arrayContaining([6]));
      expect((teams['data'].filter(team => { return team.champion === true }))[0]['ownerId']).toBe(4);
    })

    const req = httpMock.expectOne("http://localhost:8080/teams/getSeasonTeams/6");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: seasonTeamsTestObj });
  })

  afterEach(() => {
    httpMock.verify();
  });

});
