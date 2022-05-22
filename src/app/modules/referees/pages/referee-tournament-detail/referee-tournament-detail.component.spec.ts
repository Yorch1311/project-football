import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeTournamentDetailComponent } from './referee-tournament-detail.component';

describe('ReferreTournamentDetailComponent', () => {
  let component: RefereeTournamentDetailComponent;
  let fixture: ComponentFixture<RefereeTournamentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeTournamentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeTournamentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
