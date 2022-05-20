import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerTournamentDetailPageComponentComponent } from './trainer-tournament-detail-page-component.component';

describe('TrainerTournamentDetailPageComponentComponent', () => {
  let component: TrainerTournamentDetailPageComponentComponent;
  let fixture: ComponentFixture<TrainerTournamentDetailPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerTournamentDetailPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerTournamentDetailPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
