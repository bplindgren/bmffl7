import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { MatchupTotalsComponent } from './matchup-totals.component';

import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { OwnerService } from '../../owner/owner-service/owner.service';
import { MatchupStatsTestObj } from '../../test-objects/MatchupStatsTestObj';
import { Owner1TestObj } from '../../test-objects/Owner1TestObj';
import { Owner2TestObj } from '../../test-objects/Owner2TestObj';

describe('MatchupTotalsComponent', () => {
  let component: MatchupTotalsComponent;
  let fixture: ComponentFixture<MatchupTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        TableModule,
        MatGridListModule
      ],
      declarations: [ MatchupTotalsComponent ],
      providers: [ OwnerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupTotalsComponent);
    component = fixture.componentInstance;
    component.matchupStats = MatchupStatsTestObj;
    component.owner1 = Owner1TestObj;
    component.owner2 = Owner2TestObj;
    fixture.detectChanges();
  });

  it('should create', ()  => {
    expect(component).toBeTruthy();
  });
});
