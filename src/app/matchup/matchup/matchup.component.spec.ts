import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatchupComponent } from './matchup.component';
import { MatchupFormComponent } from '../matchup-form/matchup-form.component';
import { MatchupTotalsComponent } from '../matchup-totals/matchup-totals.component';

describe('MatchupComponent', () => {
  let component: MatchupComponent;
  let fixture: ComponentFixture<MatchupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        TableModule,
        MatGridListModule,
      ],
      declarations: [ MatchupComponent, MatchupFormComponent, MatchupTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
