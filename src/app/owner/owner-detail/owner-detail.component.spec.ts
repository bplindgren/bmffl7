import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';

import { OwnerDetailComponent } from './owner-detail.component';
import { StatCardGridListComponent } from '../stat-card-grid-list/stat-card-grid-list.component';
import { StatCardComponent } from '../stat-card/stat-card.component';

import { MockActivatedRoute, MockRouter } from '../../mocks/routes';
import { OwnerService } from '../../owner/owner-service/owner.service';
import { MockOwnerService } from '../../mocks/mockOwnerService';

import { SeasonStats } from '../../seasonStats';
import { newStatTestObj } from '../../test-objects/newStatTestObj';
import { SeasonStatsTestObj } from '../../test-objects/SeasonStatsTestObj';

describe('OwnerDetailComponent', () => {
  let component: OwnerDetailComponent;
  let fixture: ComponentFixture<OwnerDetailComponent>;
  let mockOwnerService: MockOwnerService;
  let mockActivatedRoute: MockActivatedRoute;

  beforeEach(async(() => {
    mockOwnerService = new MockOwnerService();
    mockActivatedRoute = new MockActivatedRoute({ "id": 1 });



    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule,
        MatTableModule,
        TableModule
      ],
      declarations: [ OwnerDetailComponent, StatCardGridListComponent, StatCardComponent ],
      providers: [
        { provide: OwnerService, useValue: mockOwnerService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on instantiation should get an owner', () => {
    expect(mockOwnerService.getOwnerSpy).toHaveBeenCalledWith(1);
  });

  it('updateGrid() should change the stat, yAxis, and show properties', () => {
    let arr: Array<any> = newStatTestObj;
    component.updateGrid(arr);

    expect(component.stat).toBe(arr[0]);
    expect(component.yAxis).toBe("Point Differential");
    expect(component.show).toEqual(true);
  });

  it('updateTeams() should update the ownerTeams property', () => {
    let newTeams: SeasonStats[] = SeasonStatsTestObj;
    component.updateTeams(newTeams);

    expect(component.ownerTeams).toBe(SeasonStatsTestObj);
  })
});
