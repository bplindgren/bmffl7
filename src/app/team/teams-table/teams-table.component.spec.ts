import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsTableComponent } from './teams-table.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import { TeamService } from '../team-service/team.service';
import { SeasonStatsTestObj } from '../../test-objects/SeasonStatsTestObj';

describe('TeamsTableComponent', () => {
  let component: TeamsTableComponent;
  let fixture: ComponentFixture<TeamsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        TableModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatSelectModule
      ],
      providers: [ TeamService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsTableComponent);
    component = fixture.componentInstance;
    component.teams = SeasonStatsTestObj;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
