import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmackboardComponent } from './smackboard.component';

describe('SmackboardComponent', () => {
  let component: SmackboardComponent;
  let fixture: ComponentFixture<SmackboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmackboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmackboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
