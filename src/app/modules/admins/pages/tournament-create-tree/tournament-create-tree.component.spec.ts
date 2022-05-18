import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCreateTreeComponent } from './tournament-create-tree.component';

describe('TournamentCreateTreeComponent', () => {
  let component: TournamentCreateTreeComponent;
  let fixture: ComponentFixture<TournamentCreateTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentCreateTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCreateTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
