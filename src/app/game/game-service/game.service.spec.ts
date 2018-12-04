import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GameService } from './game.service';
import { Game } from '../../game';
import { season6week16games} from '../../test-objects/week-games';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  // it('getWeekGames should return 5 games',
  //   inject([HttpTestingController, GameService],
  //     (httpMock: HttpTestingController, service: GameService) => {
  //       const weekGames = season6week16games;
  //
  //        // make call to the GameService
  //        let seasonId: number = 6;
  //        let week: number = 16;
  //        service.getWeekGames(seasonId, week).subscribe(games => {
  //          expect(games).toEqual(weekGames);
  //        });
  //
  //        // check that correct call is made
  //        const req = httpMock.expectOne(`http://localhost:8080/games/season/${seasonId}/week/${week}`);
  //        expect(req.request.method).toEqual('GET');
  //        req.flush(weekGames);
  //     })
  // );

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

});
