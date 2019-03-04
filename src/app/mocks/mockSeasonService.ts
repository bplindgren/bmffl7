import { SpyObject } from './helper';
import { SeasonService } from '../season/season-service/season.service';
import Spy = jasmine.Spy;

export class MockSeasonService extends SpyObject {
  getSeasonsSpy: Spy;
  getSeasonAveragesSpy: Spy;
  fakeResponse: any;

  constructor() {
    super( SeasonService );

    this.fakeResponse = null;
    this.getSeasonsSpy = this.spy('getSeasons').andReturn(this)
    this.getSeasonAveragesSpy = this.spy('getSeasonAverages').andReturn(this)
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
