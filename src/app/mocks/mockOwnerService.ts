import { SpyObject } from './helper';
import { OwnerService } from '../owner/owner-service/owner.service';
import Spy = jasmine.Spy;

export class MockOwnerService extends SpyObject {
  getAllOwnersSpy: Spy;
  getOwnerSpy: Spy;
  getAllTimeStatsSpy: Spy;
  getOwnerAllTimeStatsSpy: Spy;
  fakeResponse: any;

  constructor() {
    super( OwnerService );

    this.fakeResponse = null;
    this.getAllOwnersSpy = this.spy('getAllOwners').andReturn(this)
    this.getOwnerSpy = this.spy('getOwner').andReturn(this)
    this.getAllTimeStatsSpy = this.spy('getAllTimeStats').andReturn(this)
    this.getOwnerAllTimeStatsSpy = this.spy('getOwnerAllTimeStats').andReturn(this)
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
