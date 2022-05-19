import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerTeamListComponent } from './trainer-team-list.component';

describe('TrainerTeamListComponent', () => {
  let component: TrainerTeamListComponent;
  let fixture: ComponentFixture<TrainerTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerTeamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
