import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StatCardGridListComponent } from './stat-card-grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';

describe('StatCardGridListComponent', () => {
  let component: StatCardGridListComponent;
  let fixture: ComponentFixture<StatCardGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatGridListModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ StatCardGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCardGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
