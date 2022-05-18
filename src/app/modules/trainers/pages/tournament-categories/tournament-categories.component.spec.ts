import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCategoriesComponent } from './tournament-categories.component';

describe('TournamentCategoriesComponent', () => {
  let component: TournamentCategoriesComponent;
  let fixture: ComponentFixture<TournamentCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
