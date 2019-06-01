import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { StatCardGridListComponent } from './stat-card-grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatCardComponent } from '../stat-card/stat-card.component';

import { AllTimeStatsTestObj } from '../../test-objects/AllTimeStatsTestObj';
import { ownerTeamStatsTestObj } from '../../test-objects/teams/ownerTeamStats'

describe('StatCardGridListComponent', () => {
  let component: StatCardGridListComponent;
  let fixture: ComponentFixture<StatCardGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatGridListModule ],
      declarations: [ StatCardGridListComponent, StatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCardGridListComponent);
    component = fixture.componentInstance;
    component.allTimeStats = AllTimeStatsTestObj;
    component.ownerTeams = ownerTeamStatsTestObj;
    fixture.detectChanges();
  });

  it('should create', async(() => {
      expect(component).toBeTruthy();
    })
  );
});
