import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SeasonService } from './season.service';

describe('SeasonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SeasonService]
    });
  });

  it('should be created', inject([SeasonService], (service: SeasonService) => {
    expect(service).toBeTruthy();
  }));
});
