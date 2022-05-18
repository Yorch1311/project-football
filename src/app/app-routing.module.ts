import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', children: [
      { path: 'tournament', children: [
          { path: '' },
          { path: 'create' },
          { path: 'edit/:id' },
          { path: 'detail/:id' },
          { path: 'manage-teams/:id' },
        ],
      },
    ],
  },
  {path: 'trainer', children: [
      { path: 'tournament/', children:[
        { path: '' },
        { path: ':id/categories' },
        { path: ':id/categories/create-team' },
      ]},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
