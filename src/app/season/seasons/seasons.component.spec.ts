import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { SeasonsComponent } from './seasons.component';
import { SeasonsTableComponent } from '../seasons-table/seasons-table.component';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';

import { SeasonService } from '../season-service/season.service';

describe('SeasonsComponent', () => {
  let component: SeasonsComponent;
  let fixture: ComponentFixture<SeasonsComponent>;
  let testBedService: SeasonService;

  beforeEach(async(() => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterModule, MatTableModule, TableModule ],
      declarations: [ SeasonsComponent ],
      providers: [ SeasonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsComponent);
    component = fixture.componentInstance;
    testBedService = TestBed.get(SeasonService);
    fixture.detectChanges();
  });

  it('should be created', inject([SeasonService], (service: SeasonService) => {
    expect(service).toBeTruthy();
  }));
});
