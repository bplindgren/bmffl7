import { SpyObject } from './helper';
import { GameService } from '../game/game-service/game.service';
import Spy = jasmine.Spy;

export class MockGameService extends SpyObject {
  getWeekGamesSpy: Spy;
  getPlayoffGamesSpy: Spy;
  getTeamGamesSpy: Spy;
  getMatchupStatsSpy: Spy;
  fakeResponse: any;

  constructor() {
    super( GameService );

    this.fakeResponse = null;
    this.getWeekGamesSpy = this.spy('getWeekGames').andReturn(this);
    this.getPlayoffGamesSpy = this.spy('getPlayoffGames').andReturn(this);
    this.getTeamGamesSpy = this.spy('getTeamGames').andReturn(this);
    this.getMatchupStatsSpy = this.spy('getMatchupStats').andReturn(this);
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
