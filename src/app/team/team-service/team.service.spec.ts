import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Team } from '../../team';
import { TeamService } from './team.service';

import { allTeamsTestObj } from '../../test-objects/teams/allTeams';
import { ownerTeamsTestObj } from '../../test-objects/teams/ownerTeams';

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

  it('expects service to getch an owner\'s teams', () => {
    service.getOwnerTeams(11).subscribe((teams: Team[]) => {
      console.log(teams);
      let ryanTeams = teams.map(team => { return team.owner })
      expect(ryanTeams.length).toBe(4);
    })

    const req = httpMock.expectOne("http://localhost:8080/teams/owner/4");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: ownerTeamsTestObj });
  });
});
