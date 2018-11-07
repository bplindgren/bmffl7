import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsTableComponent } from './seasons-table.component';

describe('SeasonsTableComponent', () => {
  let component: SeasonsTableComponent;
  let fixture: ComponentFixture<SeasonsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
