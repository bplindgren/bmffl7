import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  let mockSeasonService: MockSeasonService;

  beforeEach(async(() => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    mockSeasonService = new MockSeasonService();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BrowserAnimationsModule, RouterTestingModule, MatTableModule, TableModule ],
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

  it('should expect seasons to set on instantiaion', () => {
    expect(mockSeasonService.getSeasonsSpy).toHaveBeenCalled();
    expect(component.seasons.length).toBe(9);
  });

  it('should expect ngOnInit to sort the seasons in the correct order', () => {
    let seasonsArray = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
    expect(component.seasons.map(s => s['year'])).toEqual(seasonsArray);
  })
});
