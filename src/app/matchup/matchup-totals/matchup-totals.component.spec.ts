import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupTotalsComponent } from './matchup-totals.component';

import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';

describe('MatchupTotalsComponent', () => {
  let component: MatchupTotalsComponent;
  let fixture: ComponentFixture<MatchupTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        TableModule,
        MatGridListModule
      ],
      declarations: [ MatchupTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
