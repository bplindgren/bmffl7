import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupFormComponent } from './matchup-form.component';

describe('MatchupFormComponent', () => {
  let component: MatchupFormComponent;
  let fixture: ComponentFixture<MatchupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
