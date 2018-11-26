import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupTotalsComponent } from './matchup-totals.component';

describe('MatchupTotalsComponent', () => {
  let component: MatchupTotalsComponent;
  let fixture: ComponentFixture<MatchupTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
