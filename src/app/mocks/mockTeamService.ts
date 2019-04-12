  import { SpyObject } from './helper';
import { TeamService } from '../team/team-service/team.service';
import Spy = jasmine.Spy;

export class MockTeamService extends SpyObject {
  getAllTeamsSpy: Spy;
  getTeamRecordSpy: Spy;
  getOwnerTeamsSpy: Spy;
  getTeamSeasonStatsViewSpy: Spy;
  getOwnerTeamsStatsViewSpy: Spy;
  getAllTeamsStatsViewSpy: Spy;
  getSeasonTeamsSpy: Spy;
  fakeResponse: any;

  constructor() {
    super( TeamService );

    this.fakeResponse = null;
    this.getAllTeamsSpy = this.spy('getAllTeams').andReturn(this);
    this.getTeamRecordSpy = this.spy('getTeamRecord').andReturn(this);
    this.getOwnerTeamsSpy = this.spy('getOwnerTeams').andReturn(this);
    this.getTeamSeasonStatsViewSpy = this.spy('getTeamSeasonStatsView').andReturn(this);
    this.getOwnerTeamsStatsViewSpy = this.spy('getOwnerTeamsStatsView').andReturn(this);
    this.getAllTeamsStatsViewSpy = this.spy('getAllTeamsStatsView').andReturn(this);
    this.getSeasonTeamsSpy = this.spy('getSeasonTeams').andReturn(this);
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
