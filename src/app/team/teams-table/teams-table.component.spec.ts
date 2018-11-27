import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsTableComponent } from './teams-table.component';

import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import { TeamService } from '../team-service/team.service';

describe('TeamsTableComponent', () => {
  let component: TeamsTableComponent;
  let fixture: ComponentFixture<TeamsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
