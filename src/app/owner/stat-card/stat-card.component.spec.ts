import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardComponent } from './stat-card.component';

describe('StatCardComponent', () => {
  let component: StatCardComponent;
  let fixture: ComponentFixture<StatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCardComponent);
    component = fixture.componentInstance;
    component.stat = "Wins";
    component.value = 55;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a <p> tag for the stat', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').innerHTML).toBe("Wins");
  });

  it('should have a <p> tag for the value', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p:last-child').innerHTML).toBe("55");
  });
});
