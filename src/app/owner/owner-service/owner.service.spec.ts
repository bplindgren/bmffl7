import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OwnerService } from './owner.service';
import { Owner } from '../../owner';
import { AllTimeStats } from '../../allTimeStats';
import { ownersTestObj } from '../../test-objects/owners/ownersTestObj';
import { allTimeStatsTestObj } from '../../test-objects/owners/allTimeStatsObj';

describe('OwnerService', () => {
  let injector: TestBed;
  let service: OwnerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OwnerService]
    });

    injector = getTestBed();
    service = injector.get(OwnerService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects service to get all owners', () => {
    service.getAllOwners().subscribe((owners: Owner[]) => {
      expect(owners['data'].length).toBe(11);
      // check that only the following first names are in the owners array
      expect(owners['data'].map(o => o.firstName))
        .toEqual(jasmine.arrayContaining(["Brian", "Nick", "Brad", "Matt", "Drew", "Dan", "Kyle", "Sean", "Isaac", "Ryan"]))
      // check that "Brian" appears twice
      expect((owners['data'].filter(o => o.firstName == 'Brian').map(o => o.firstName)).length).toBe(2);
    });

    const req = httpMock.expectOne("http://localhost:8080/owners")
    expect(req.request.method).toEqual('GET');

    req.flush({ data: ownersTestObj });
  });

  it('expects to get one owner', () => {
    let ownerObj: Owner = {
      id: 4,
      firstName: "Brad",
      lastInitial: "L",
      division: "upstairs"
    }

    service.getOwner(4).subscribe((owner: Owner) => {
      expect(owner['data']).toBe(ownerObj);
      expect(owner['data'].firstName).toBe("Brad");
    })

    const req = httpMock.expectOne("http://localhost:8080/owners/4")
    expect(req.request.method).toEqual('GET');

    req.flush({ data: ownerObj });
  })

  it('expects to get AllTimeStats for all owners', () => {
    service.getAllTimeStats().subscribe((stats: AllTimeStats[]) => {
      expect(stats['data'].length).toBe(11);
      // check that only the following first names are in the stats array
      expect(stats['data'].map(s => s.firstname))
        .toEqual(jasmine.arrayContaining(["Brian", "Nick", "Brad", "Matt", "Drew", "Dan", "Kyle", "Sean", "Isaac", "Ryan"]))
      // check that "Brian" appears twice
      expect((stats['data'].filter(s => s.firstname == 'Brian').map(o => o.firstName)).length).toBe(2);
    })

    const req = httpMock.expectOne("http://localhost:8080/owners/getAllTimeStats")
    expect(req.request.method).toEqual('GET');

    req.flush({ data: allTimeStatsTestObj });
  })

  it('expects to get AllTimeStats for one owner', () => {
    let ownerAllTimeStats: AllTimeStats = {
      ownerId: 4,
      firstname: "Brad",
      lastinitial: "L",
      seasons: 8,
      wins: 59,
      losses: 67,
      ties: 0,
      winningpct: 46.8,
      pointsfor: 10975.7,
      pointsagainst: 11338,
      pointdifferential: -362.2998,
      pfpg: 87.1,
      papg: 90,
      ppgdiff: -2.9
    }

    service.getOwnerAllTimeStats(4).subscribe((stats: AllTimeStats) => {
      let res: AllTimeStats = stats['data'];
      expect(res.ownerId).toBe(4);
      expect(res.firstname).toBe("Brad");
      expect(res.pfpg + res.papg === res.ppgdiff);
    })

    const req = httpMock.expectOne("http://localhost:8080/owners/getOwnerAllTimeStats/4")
    expect(req.request.method).toEqual('GET');

    req.flush({ data: ownerAllTimeStats });
  })

  afterEach(() => {
    httpMock.verify();
  });

});
