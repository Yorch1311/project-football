import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './shared/components/button/button.component';
import { TournamentDetailComponent } from './modules/admins/components/tournament-detail/tournament-detail.component';
import { ChipComponent } from './shared/components/chip/chip.component';
import { TournamentDetailPageComponent } from './modules/admins/pages/tournament-detail-page/tournament-detail-page.component';


import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { SelectSimpleComponent } from './modules/admins/components/select-simple/select-simple.component';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DragDropModule} from '@angular/cdk/drag-drop';



import { SelectMultipleComponent } from './modules/admins/components/select-multiple/select-multiple.component';
import { InputSimpleComponent } from './modules/admins/components/input-simple/input-simple.component';
import { DateRangeComponent } from './modules/admins/components/date-range/date-range.component';
import { SelectButtonComponent } from './shared/components/select-button/select-button.component';
import { GroupShowComponent } from './shared/components/group-show/group-show.component';
import { DialogCancelComponent } from './shared/components/dialog-cancel/dialog-cancel.component';
import { TournamentCreateComponent } from './modules/admins/pages/tournament-create/tournament-create.component';
import { TournamentEditComponent } from './modules/admins/pages/tournament-edit/tournament-edit.component';
import { TournamentCategoriesComponent } from './modules/trainers/pages/tournament-categories/tournament-categories.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TournamentTableRowComponent } from './shared/components/tournament-table-row/tournament-table-row.component';
import { TournamentShowComponent } from './modules/admins/pages/tournament-show/tournament-show.component';
import { CardComponent } from './shared/components/card/card.component';
import { TeamListComponent } from './shared/components/team-list/team-list.component';
import { CreateTeamComponent } from './modules/trainers/pages/create-team/create-team.component';
import { TrainerTeamListComponent } from './shared/components/trainer-team-list/trainer-team-list.component';
import { DialogSaveComponent } from './shared/components/dialog-save/dialog-save.component';
import { TrainerTournamentDetailPageComponentComponent } from './modules/trainers/pages/trainer-tournament-detail-page-component/trainer-tournament-detail-page-component.component';
import { TournamentTreeComponent } from './modules/admins/pages/tournament-tree/tournament-tree.component';
import { InputNumberComponent } from './modules/admins/components/input-number/input-number.component';
import { TournamentCategoriesRefereeComponent } from './modules/referees/pages/tournament-categories-referee/tournament-categories-referee.component';
import { MatchHistoryComponent } from './modules/referees/pages/match-history/match-history.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RefereeTournamentDetailComponent } from './modules/referees/pages/referee-tournament-detail/referee-tournament-detail.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MatRippleModule } from '@angular/material/core';
import { TeamImageComponent } from './modules/admins/components/team-image/team-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TournamentDetailComponent,
    ChipComponent,
    TournamentDetailPageComponent,
    SelectSimpleComponent,
    SelectMultipleComponent,
    InputSimpleComponent,
    DateRangeComponent,
    SelectButtonComponent,
    GroupShowComponent,
    DialogCancelComponent,
    TournamentCreateComponent,
    TournamentEditComponent,
    TournamentCategoriesComponent,
    TournamentTableRowComponent,
    TournamentShowComponent,
    TeamListComponent,
    CardComponent,
    CreateTeamComponent,
    TrainerTeamListComponent,
    DialogSaveComponent,
    TrainerTournamentDetailPageComponentComponent,
    TournamentTreeComponent,
    InputNumberComponent,
    TournamentCategoriesRefereeComponent,
    MatchHistoryComponent,
    RefereeTournamentDetailComponent,
    SidebarComponent,
    MainLayoutComponent,
    HeaderComponent,
    TeamImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    MatNativeDateModule,
    DragDropModule,
    HttpClientModule,
    MatTooltipModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
