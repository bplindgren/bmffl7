import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerspageComponent } from './ownerspage.component';

describe('OwnerspageComponent', () => {
  let component: OwnerspageComponent;
  let fixture: ComponentFixture<OwnerspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
