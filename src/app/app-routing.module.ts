import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TournamentCreateComponent } from './modules/admins/pages/tournament-create/tournament-create.component';
import { TournamentDetailPageComponent } from './modules/admins/pages/tournament-detail-page/tournament-detail-page.component';
import { TournamentEditComponent } from './modules/admins/pages/tournament-edit/tournament-edit.component';
import { TournamentShowComponent } from './modules/admins/pages/tournament-show/tournament-show.component';
import { TournamentTreeComponent } from './modules/admins/pages/tournament-tree/tournament-tree.component';
import { MatchHistoryComponent } from './modules/referees/pages/match-history/match-history.component';
import { RefereeTournamentDetailComponent } from './modules/referees/pages/referee-tournament-detail/referee-tournament-detail.component';
import { TournamentCategoriesRefereeComponent } from './modules/referees/pages/tournament-categories-referee/tournament-categories-referee.component';
import { CreateTeamComponent } from './modules/trainers/pages/create-team/create-team.component';
import { TournamentCategoriesComponent } from './modules/trainers/pages/tournament-categories/tournament-categories.component';
import { TrainerTournamentDetailPageComponentComponent } from './modules/trainers/pages/trainer-tournament-detail-page-component/trainer-tournament-detail-page-component.component';

const routes: Routes = [    
  { path: 'admin', children: [
      { path: 'tournament', children: [
          { path: 'show', component: TournamentShowComponent },
          { path: 'create', component: TournamentCreateComponent },
          { path: 'edit/:id', component: TournamentEditComponent },
          { path: 'detail/:id/status/:status', component: TournamentDetailPageComponent },
          { path: 'manage-teams/:id', component: TournamentTreeComponent },
        ],
      },
    ],
  },
  { path: 'trainer', children: [
      { path: 'tournament', children:[
        { path: 'show', component: TrainerTournamentDetailPageComponentComponent },
        { path: ':id/categories', component: TournamentCategoriesComponent },
        { path: ':tournament/categories/:id/create-team', component: CreateTeamComponent },
      ]},
    ],
  },
  { path: 'referee', children: [
    { path: 'tournament', children:[
      { path: 'show', component: RefereeTournamentDetailComponent },
      { path: ':id/categories', component: TournamentCategoriesRefereeComponent },
      { path: ':id/rivals', component: MatchHistoryComponent },
    ]},
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
