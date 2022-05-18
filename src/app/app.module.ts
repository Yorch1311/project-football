import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './shared/components/button/button.component';
import { TournamentDetailComponent } from './modules/admins/components/tournament-detail/tournament-detail.component';
import { ChipComponent } from './modules/admins/components/chip/chip.component';
import { TournamentDetailPageComponent } from './modules/admins/pages/tournament-detail-page/tournament-detail-page.component';


import { MatChipsModule} from '@angular/material/chips';
import { MatCardModule} from '@angular/material/card';
import { TournamentCategoriesComponent } from './modules/trainers/pages/tournament-categories/tournament-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TournamentDetailComponent,
    ChipComponent,
    TournamentDetailPageComponent,
    TournamentCategoriesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
