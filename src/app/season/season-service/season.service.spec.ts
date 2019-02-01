import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Season } from '../../season';
import { SeasonService } from './season.service';

import { seasonsTestObj } from '../../test-objects/seasons/seasonsTestObj';

describe('SeasonService', () => {
  let injector: TestBed;
  let service: SeasonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SeasonService]
    });

    injector = getTestBed();
    service = injector.get(SeasonService);
    httpMock = injector.get(HttpTestingController);
  });

  // it('should be created', inject([SeasonService], (service: SeasonService) => {
  //   expect(service).toBeTruthy();
  // }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all seasons', () => {
    service.getSeasons().subscribe((seasons: Season[]) => {
      expect(seasons['data'].length).toBe(9);
      expect(seasons['data']
        .filter(s => s['champion'] !== null )
        .map(s => s['champion']['owner']['firstName'] ))
        .toEqual(jasmine.arrayContaining(["Kyle", "Sean", "Dan", "Drew", "Ryan", "Brad"]));
    });

    const req = httpMock.expectOne("http://localhost:8080/seasons");
    expect(req.request.method).toEqual('GET');

    req.flush({ data: seasonsTestObj });
  });

  xit('should fetch season averages', () => {
    // method not used
  })

  afterEach(() => {
    httpMock.verify();
  });

});
