import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';

import { OwnerCardComponent } from './owner-card.component';

import { AllTimeStatsTestObj } from '../../test-objects/AllTimeStatsTestObj';
import { OwnerTeamsTestObj } from '../../test-objects/OwnerTeamsTestObj';
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
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should set property values on instantiation', () => {
    expect(component.owner).toEqual({ division: 'upstairs', firstName: 'Brad', id: 4, lastInitial: 'L' });
    expect(component.allTimeStats).toBe(AllTimeStatsTestObj);
    expect(component.firstSeason).toBe("2011");
    expect(component.lastSeason).toBe("2018");
    expect(component.championships).toEqual(["2016"]);
  });

  it('should render \"Bowery Bowls: None\" when owner doesn\'t have any championships', () => {
    component.championships = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p:last-child').innerHTML).toBe("Bowery Bowls: None");
  });

  it('should render a championship', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p:last-child').innerHTML).toBe("Bowery Bowls:  2016");
  });

  it('should render multiple championships separated by commas', () => {
    component.championships = ["2012, 2014"];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p:last-child').innerHTML).toBe("Bowery Bowls:  2012, 2014");
  });
});
