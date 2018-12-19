import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';

import { OwnerCardComponent } from './owner-card.component';
import { OwnerCardConfigTestObj } from '../../test-objects/OwnerCardConfigTestObj';

describe('OwnerCardComponent', () => {
  let component: OwnerCardComponent;
  let fixture: ComponentFixture<OwnerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatButtonModule
      ],
      declarations: [ OwnerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCardComponent);
    component = fixture.componentInstance;
    component.config = OwnerCardConfigTestObj;
    component.ngOnInit();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  // it('displayChampionships should return a string', () => {
  //   expect(component.displayChampionships())
  //     .toEqual(jasmine.any(String));
  // });
});
