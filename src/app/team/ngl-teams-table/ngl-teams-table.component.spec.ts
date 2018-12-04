import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NglTeamsTableComponent } from './ngl-teams-table.component';

describe('NglTeamsTableComponent', () => {
  let component: NglTeamsTableComponent;
  let fixture: ComponentFixture<NglTeamsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NglTeamsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NglTeamsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
