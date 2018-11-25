import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleVerticalBarChartComponent } from './double-vertical-bar-chart.component';

describe('DoubleVerticalBarChartComponent', () => {
  let component: DoubleVerticalBarChartComponent;
  let fixture: ComponentFixture<DoubleVerticalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleVerticalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleVerticalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
