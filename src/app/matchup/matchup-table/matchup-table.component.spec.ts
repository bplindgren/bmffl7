import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupTableComponent } from './matchup-table.component';

describe('MatchupTableComponent', () => {
  let component: MatchupTableComponent;
  let fixture: ComponentFixture<MatchupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
