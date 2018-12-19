import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarChartComponent } from './vertical-bar-chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

describe('VerticalBarChartComponent', () => {
  let component: VerticalBarChartComponent;
  let fixture: ComponentFixture<VerticalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ChartsModule ],
      declarations: [ VerticalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalBarChartComponent);
    component = fixture.componentInstance;
    component.data = [
      { name: "2011", value: 8 },
      { name: "2012", value: 9 },
      { name: "2013", value: 4 },
      { name: "2014", value: 9 },
      { name: "2015", value: 5 },
      { name: "2016", value: 11 },
      { name: "2017", value: 7 },
      { name: "2018", value: 5 }
    ]
    component.yAxis = 'Wins';
    component.ngOnInit();
  });

  it('should create', async(() => {
      expect(component).toBeTruthy();
    })
  );
});
