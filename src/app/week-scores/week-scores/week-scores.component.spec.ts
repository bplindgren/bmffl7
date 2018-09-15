import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekScoresComponent } from './week-scores.component';

describe('WeekScoresComponent', () => {
  let component: WeekScoresComponent;
  let fixture: ComponentFixture<WeekScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
