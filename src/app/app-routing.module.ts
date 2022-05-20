import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TournamentCreateComponent } from './modules/admins/pages/tournament-create/tournament-create.component';
import { TournamentDetailPageComponent } from './modules/admins/pages/tournament-detail-page/tournament-detail-page.component';
import { TournamentEditComponent } from './modules/admins/pages/tournament-edit/tournament-edit.component';
import { TournamentShowComponent } from './modules/admins/pages/tournament-show/tournament-show.component';
import { TournamentCategoriesComponent } from './modules/trainers/pages/tournament-categories/tournament-categories.component';

const routes: Routes = [
  { path: 'admin', children: [
      { path: 'tournament', children: [
          { path: '', component: TournamentShowComponent },
          { path: 'create', component: TournamentCreateComponent },
          { path: 'edit/:id', component: TournamentEditComponent },
          { path: 'detail/:id/status/:status', component: TournamentDetailPageComponent },
          { path: 'manage-teams/:id', component: TournamentDetailPageComponent },
        ],
      },
    ],
  },
  {path: 'trainer', children: [
      { path: 'tournament', children:[
        { path: '', component: TournamentDetailPageComponent },
        { path: ':id/categories', component: TournamentCategoriesComponent },
        { path: ':id/categories/create-team', component: TournamentDetailPageComponent },
      ]},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
