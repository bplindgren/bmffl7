import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardGridListComponent } from './stat-card-grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatCardComponent } from '../stat-card/stat-card.component';

import { AllTimeStatsTestObj } from '../../test-objects/AllTimeStatsTestObj';
import { OwnerTeamsTestObj } from '../../test-objects/OwnerTeamsTestObj'

describe('StatCardGridListComponent', () => {
  let component: StatCardGridListComponent;
  let fixture: ComponentFixture<StatCardGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatGridListModule ],
      declarations: [ StatCardGridListComponent, StatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCardGridListComponent);
    component = fixture.componentInstance;
    component.allTimeStats = AllTimeStatsTestObj;
    component.ownerTeams = OwnerTeamsTestObj;
    component.ngOnInit();
  });

  it('should create', async(() => {
      expect(component).toBeTruthy();
    })
  );
});
