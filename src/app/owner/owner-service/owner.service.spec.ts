import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { OwnerService } from './owner.service';

describe('OwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OwnerService, HttpClientModule]
    });
  });

  it('should be created', inject([OwnerService], (service: OwnerService) => {
    expect(service).toBeTruthy();
  }));
});
