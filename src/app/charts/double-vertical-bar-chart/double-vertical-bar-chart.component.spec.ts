import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleVerticalBarChartComponent } from './double-vertical-bar-chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

describe('DoubleVerticalBarChartComponent', () => {
  let component: DoubleVerticalBarChartComponent;
  let fixture: ComponentFixture<DoubleVerticalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ChartsModule ],
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
