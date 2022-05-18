import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'admin', children: [
      { path: 'tournament', children: [
          { path: '', component: AppComponent },
          { path: 'create', component: AppComponent },
          { path: 'edit/:id', component: AppComponent },
          { path: 'detail/:id/status/:status', component: AppComponent },
          { path: 'manage-teams/:id', component: AppComponent },
        ],
      },
    ],
  },
  {path: 'trainer', children: [
      { path: 'tournament/', children:[
        { path: '', component: AppComponent },
        { path: ':id/categories', component: AppComponent },
        { path: ':id/categories/create-team', component: AppComponent },
      ]},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
