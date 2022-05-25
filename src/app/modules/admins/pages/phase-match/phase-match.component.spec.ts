import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseMatchComponent } from './phase-match.component';

describe('PhaseMatchComponent', () => {
  let component: PhaseMatchComponent;
  let fixture: ComponentFixture<PhaseMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
