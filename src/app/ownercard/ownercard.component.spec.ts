import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnercardComponent } from './ownercard.component';

describe('OwnercardComponent', () => {
  let component: OwnercardComponent;
  let fixture: ComponentFixture<OwnercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
