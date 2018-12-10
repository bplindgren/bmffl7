import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GameService } from './game.service';
import { Game } from '../../game';
import { TestGame } from '../../testGame';

import { recentGames } from '../../recentGames';

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

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  describe('running the tests', () => {
    it('getWeekGames should return an Observable<Game[]>', () => {
      // make call to the GameService
      const seasonId: number = 8;
      const week: number = 13;
      let returnedGames: Game[] = recentGames;
      // console.log("t", testGames);
      // console.log(recentGames);

      // let returnedGames: TestGame[] = [];
      console.log(returnedGames);

      console.log('testing');
      service.getWeekGames(seasonId, week).subscribe(games => {
        console.log("g", games);
        console.log("r1", returnedGames);
        returnedGames = games;
        console.log("r2", returnedGames);
        // console.log(testGames);
        expect(returnedGames.length).toBe(5);
        expect(returnedGames).toEqual(recentGames);
      });

      // check that correct call is made
      const req = httpMock.expectOne(`${service.baseURL}/games/season/${seasonId}/week/${week}`);
      expect(req.request.method).toEqual('GET');

      req.flush(returnedGames);
    });

    // it('getPlayoffGames should return 5 playoff games', inject([GameService], (service: GameService) => {
    //   // make call to the GameService
    //   const seasonId: number = 6;
    //   const gameTypes: String[] = ['Quarter Final', 'Semi Final', 'Quarter Final', 'Quarter Final', 'Super Bowl'];
    //
    //   service.getPlayoffGames(seasonId).subscribe(games => {
    //     console.log('games', games);
    //     expect(games.length).toBe(5);
    //     expect(games).toEqual(gameTypes);
    //   });
    //
    //   // check that correct call is made
    //   const req = httpMock.expectOne(`http://localhost:8080/games/season/playoffs/${seasonId}`);
    //   expect(req.request.method).toEqual('GET');
    //
    //   req.flush(gameTypes);
    // }));
  });
  //
  // afterEach(() => {
  //   httpMock.verify();
  // });

});
