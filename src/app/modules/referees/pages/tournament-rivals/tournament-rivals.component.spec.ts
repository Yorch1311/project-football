import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentRivalsComponent } from './tournament-rivals.component';

describe('TournamentRivalsComponent', () => {
  let component: TournamentRivalsComponent;
  let fixture: ComponentFixture<TournamentRivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentRivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentRivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
