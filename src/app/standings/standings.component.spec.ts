import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../shared-modules/table/table.module';
import { CdkTableModule } from '@angular/cdk/table';

import { OwnerService } from '../owner/owner-service/owner.service';
import { MockOwnerService } from '../mocks/mockOwnerService';
import { standingsTestObj } from '../test-objects/standings/standingsTestObj';

import { StandingsComponent } from './standings.component';

describe('StandingsComponent', () => {
  let component: StandingsComponent;
  let fixture: ComponentFixture<StandingsComponent>;
  let mockOwnerService: MockOwnerService;

  beforeEach(async(() => {
    mockOwnerService = new MockOwnerService();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatTableModule, TableModule, CdkTableModule ],
      declarations: [ StandingsComponent ],
      providers: [
        { provide: OwnerService, useValue: mockOwnerService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsComponent);
    mockOwnerService.setResponse(standingsTestObj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on instantiation should get the all time stats', () => {
    expect(mockOwnerService.getAllTimeStatsSpy).toHaveBeenCalled();
    expect(component.dataSource['data']).toEqual(standingsTestObj);
  })
});
