import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TournamentCreateTreeComponent } from './modules/admins/pages/tournament-create-tree/tournament-create-tree.component';
import { TournamentCreateComponent } from './modules/admins/pages/tournament-create/tournament-create.component';
import { TournamentDetailPageComponent } from './modules/admins/pages/tournament-detail-page/tournament-detail-page.component';
import { TournamentEditComponent } from './modules/admins/pages/tournament-edit/tournament-edit.component';
import { CreateTeamComponent } from './modules/trainers/pages/create-team/create-team.component';
import { TournamentCategoriesComponent } from './modules/trainers/pages/tournament-categories/tournament-categories.component';

const routes: Routes = [
  { path: 'admin', children: [
      { path: 'tournament', children: [
          { path: '', component: TournamentDetailPageComponent },
          { path: 'create', component: TournamentCreateComponent },
          { path: 'edit/:id', component: TournamentEditComponent },
          { path: 'detail/:id/status/:status', component: TournamentDetailPageComponent },
          { path: 'manage-teams/:id', component: TournamentCreateTreeComponent },
        ],
      },
    ],
  },
  {path: 'trainer', children: [
      { path: 'tournament', children:[
        { path: '', component: TournamentDetailPageComponent },
        { path: ':id/categories', component: TournamentCategoriesComponent },
        { path: ':id/categories/create-team', component: CreateTeamComponent },
      ]},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
