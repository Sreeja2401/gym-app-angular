import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {TrainerRegistrationComponent} from './trainer-registration/trainer-registration.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {MyaccountStudentprofileComponent} from './myaccount-studentprofile/myaccount-studentprofile.component';
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {JoinUsComponent} from './join-us/join-us.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {TraineeRegistrationComponent} from './trainee-registration/trainee-registration.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomePageComponent} from './home-page/home-page.component';
import {FooterComponent} from './footer/footer.component';
import {MatNativeDateModule} from "@angular/material/core";
import {ChangePasswordComponent} from './change-password/change-password.component';
import {MyaccountTrainerprofileComponent} from './myaccount-trainerprofile/myaccount-trainerprofile.component';
import {UpdateTraineeProfileComponent} from './update-trainee-profile/update-trainee-profile.component';
import {MatRadioModule} from "@angular/material/radio";
import {HttpClientModule} from "@angular/common/http";
import {DataDialogComponent} from './data-dialog/data-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {EditTrainersListComponent} from './edit-trainers-list/edit-trainers-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TraineeTrainingsLogsComponent} from './trainee-trainings-logs/trainee-trainings-logs.component';
import {AddTrainingComponent} from './add-training/add-training.component';
import {UpdateTrainerProfileComponent} from './update-trainer-profile/update-trainer-profile.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {TrainerTrainingsLogsComponent} from './trainer-trainings-logs/trainer-trainings-logs.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TrainerRegistrationComponent,
    NavbarComponent,
    MyaccountStudentprofileComponent,
    JoinUsComponent,
    TraineeRegistrationComponent,
    HomePageComponent,
    FooterComponent,
    ChangePasswordComponent,
    MyaccountTrainerprofileComponent,
    UpdateTraineeProfileComponent,
    DataDialogComponent,
    EditTrainersListComponent,
    TraineeTrainingsLogsComponent,
    AddTrainingComponent,
    UpdateTrainerProfileComponent,
    TrainerTrainingsLogsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    NgOptimizedImage,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSlideToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
