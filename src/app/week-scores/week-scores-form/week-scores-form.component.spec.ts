import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekScoresFormComponent } from './week-scores-form.component';

describe('WeekScoresFormComponent', () => {
  let component: WeekScoresFormComponent;
  let fixture: ComponentFixture<WeekScoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekScoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekScoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
