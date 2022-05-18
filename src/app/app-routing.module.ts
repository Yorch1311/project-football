import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TournamentDetailPageComponent } from './modules/admins/pages/tournament-detail-page/tournament-detail-page.component';
import { TournamentCategoriesComponent } from './modules/trainers/pages/tournament-categories/tournament-categories.component';

const routes: Routes = [
  { path: 'admin', children: [
      { path: 'tournament', children: [
          { path: '', component: TournamentDetailPageComponent },
          { path: 'create', component: TournamentDetailPageComponent },
          { path: 'edit/:id', component: TournamentDetailPageComponent },
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
