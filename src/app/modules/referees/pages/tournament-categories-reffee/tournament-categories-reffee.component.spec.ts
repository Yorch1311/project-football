import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCategoriesReffeeComponent } from './tournament-categories-reffee.component';

describe('TournamentCategoriesReffeeComponent', () => {
  let component: TournamentCategoriesReffeeComponent;
  let fixture: ComponentFixture<TournamentCategoriesReffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentCategoriesReffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCategoriesReffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
