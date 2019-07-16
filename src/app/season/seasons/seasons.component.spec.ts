import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SeasonsComponent } from './seasons.component';
import { SeasonsTableComponent } from '../seasons-table/seasons-table.component';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';

import { SeasonService } from '../season-service/season.service';
import { MockSeasonService } from '../../mocks/MockSeasonService';

import { seasonsTestObj } from '../../test-objects/seasons/seasonsTestObj';

describe('SeasonsComponent', () => {
  let component: SeasonsComponent;
  let fixture: ComponentFixture<SeasonsComponent>;
  let testBedService: SeasonService;
  let mockSeasonService: MockSeasonService;

  beforeEach(async(() => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    mockSeasonService = new MockSeasonService();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, MatTableModule, TableModule ],
      declarations: [ SeasonsComponent ],
      providers: [{ provide: SeasonService, useValue: mockSeasonService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsComponent);

    // Set the value here, so it gets added upon component creation
    mockSeasonService.setResponse(seasonsTestObj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should expect getSeasons() to be called', () => {
    expect(mockSeasonService.getSeasonsSpy).toHaveBeenCalled();
  });
});
