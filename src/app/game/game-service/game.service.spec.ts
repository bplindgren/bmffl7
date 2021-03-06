import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GameService } from './game.service';
import { Game } from '../../game';
import { TeamGame } from '../../teamGame';
import { MatchupGame } from '../../matchupGame';

import { recentGames } from '../../test-objects/games/recentGames';
import { playoffGames } from '../../test-objects/games/playoffGames';
import { teamGames } from '../../test-objects/games/teamGames';
import { matchupGamesTestObj } from '../../test-objects/matchup/matchupGames';

describe('GameService', () => {
  let injector: TestBed;
  let service: GameService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService]
    });

    injector = getTestBed();
    service = injector.get(GameService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects service to fetch a week\'s games', () => {
    // Call the getWeekGames(season, week) method
    service.getWeekGames(2018, 13).subscribe((games: Game[]) => {
      expect(games['data'].length).toBe(5);
      expect(games['data'].map(game => { return game.id })).toEqual([614, 615, 616, 617, 618]);
    });

    // Expect request to be a 'GET' request
    const req = httpMock.expectOne("http://localhost:8080/games/season/2018/week/13");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: recentGames });
  });

  it('expects service to fetch a seasons\'s playoff games', () => {
    // Call the getPlayoffGames(season) method
    service.getPlayoffGames(8).subscribe((games: Game[]) => {
      expect(games['data'].length).toBe(5);

      // Expect gamesTypes to be playoff types
      expect(games['data'].map(game => { return game.gameType }))
        .toEqual(jasmine.arrayContaining(["Quarter Final", "Quarter Final", "Semi Final", "Semi Final", "Super Bowl"]));

      // Expect games to be from 2018 season
      expect(games['data'].map(game => { return game.id }))
        .toEqual(jasmine.arrayContaining([619, 620, 623, 624, 628]));
    });

    // Expect request to be a 'GET' request
    const req = httpMock.expectOne("http://localhost:8080/games/season/playoffs/8");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: playoffGames });
  });

  it('expects service to fetch a team\'s games', () => {
    // Call the getTeamGames(teamId) method
    service.getTeamGames(54).subscribe((games: TeamGame[]) => {
      // Check correct number of games
      expect(games['data'].length).toBe(15);

      // Ensure that the team played in each game returned
      const awayTeams: number[] = games['data'].map(g => g.awayTeam.id);
      const homeTeams: number[] = games['data'].map(g => g.homeTeam.id);
      let teams: number[] = awayTeams.concat(homeTeams).filter(t => t == 54);
      expect(teams).toEqual(jasmine.arrayContaining([54]));
    });

    // Expect request to be a 'GET' request
    const req = httpMock.expectOne("http://localhost:8080/games/team/54");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: teamGames });
  });

  it('expects service to fetch matchupStats', () => {
    // Call the getTeamGames(teamId) method
    service.getMatchupGames(4, 6).subscribe((games: MatchupGame[]) => {

      // Check stats
      expect(games['data'].length).toBe(16);

      // Check for correct games
      const o1teams: string[] = games['data'].map(g => g['o1team'] );
      const o2teams: string[] = games['data'].map(g => g['o2team']);
      let teams: string[] = o1teams.concat(o2teams)
      expect(teams).toEqual(jasmine.arrayContaining(["The Ricky Stanzis", "Orange Crush"]));
    });

    // Expect request to be a 'GET' request
    const req = httpMock.expectOne("http://localhost:8080/games/matchup/4/6");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: matchupGamesTestObj });
  });

  afterEach(() => {
    httpMock.verify();
  });


// I had the initial test below, but they turned out to be overkill.
// Didn't need to inject the testing classes in tests.
// Inject them in the beforeEach() method
// Hang on to for now. Might want to reference later.
  //
  // it('should be created (2)',
  //   inject([GameService], (service: GameService) => {
  //     expect(service).toBeTruthy();
  // }));
  //
  // it('expects service to fetch a week\'s games (2)',
  //   inject([HttpTestingController, GameService],
  //     (httpMock: HttpTestingController, service: GameService) => {
  //
  //       // Call the service
  //       service.getWeekGames(2018, 13).subscribe(games => {
  //         expect(games['data'].length).toBe(5);
  //         expect(games['data'].map(game => { return game.id }))
  //           .toEqual(jasmine.arrayContaining([614, 615, 616, 617, 619]));
  //       })
  //
  //       // Expect request to be a 'GET' request
  //       const req = httpMock.expectOne("http://localhost:8080/games/season/2018/week/13");
  //       expect(req.request.method).toEqual('GET');
  //
  //       req.flush({ data: recentGames });
  //     })
  // );
  //
  // it('expects service to fetch a seasons\'s playoff games (2)',
  //     inject([HttpTestingController, GameService],
  //       (httpMock: HttpTestingController, service: GameService) => {
  //       const num: number = 1;
  //
  //       service.getPlayoffGames(8).subscribe((games: any) => {
  //         expect(games['data'].length).toBe(5);
  //
  //         // Expect gamesTypes to be playoff types
  //         expect(games['data'].map(game => { return game.gameType }))
  //           .toEqual(jasmine.arrayContaining(["Quarter Final", "Quarter Final", "Semi Final", "Semi Final", "Super Bowl"]));
  //
  //         // Expect games to be from 2018 season
  //         expect(games['data'].map(game => { return game.id }))
  //           .toEqual(jasmine.arrayContaining([619, 620, 623, 624, 628]));
  //
  //       // Expect request to be a 'GET' request
  //       const req = httpMock.expectOne("http://localhost:8080/games/season/playoffs/8");
  //       expect(req.request.method).toEqual('GET');
  //
  //       req.flush({ data: num });
  //     })
  // );
  //
  // afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
  //   httpMock.verify();
  // }));

});
