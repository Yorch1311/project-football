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
  ],
  imports: [
    HttpClientModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
