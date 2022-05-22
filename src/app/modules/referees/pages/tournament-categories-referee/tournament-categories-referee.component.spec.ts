import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCategoriesRefereeComponent } from './tournament-categories-referee.component';

describe('TournamentCategoriesReffeeComponent', () => {
  let component: TournamentCategoriesRefereeComponent;
  let fixture: ComponentFixture<TournamentCategoriesRefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentCategoriesRefereeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCategoriesRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
