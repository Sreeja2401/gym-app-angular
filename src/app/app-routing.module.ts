import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from "./home/login-form/login-form.component";
import {JoinUsComponent} from "./home/join-us/join-us.component";
import {TrainerRegistrationComponent} from "./home/trainer-registration/trainer-registration.component";
import {TraineeRegistrationComponent} from "./home/trainee-registration/trainee-registration.component";
import {MyaccountStudentprofileComponent} from "./trainee/myaccount-studentprofile/myaccount-studentprofile.component";
import {UpdateTraineeProfileComponent} from "./trainee/update-trainee-profile/update-trainee-profile.component";
import {ChangePasswordComponent} from "./shared/change-password/change-password.component";
import {MyaccountTrainerprofileComponent} from "./trainer/myaccount-trainerprofile/myaccount-trainerprofile.component";
import {HomePageComponent} from "./home/home-page/home-page.component";
import {EditTrainersListComponent} from "./trainee/edit-trainers-list/edit-trainers-list.component";
import {TraineeTrainingsLogsComponent} from "./trainee/trainee-trainings-logs/trainee-trainings-logs.component";
import {UpdateTrainerProfileComponent} from "./trainer/update-trainer-profile/update-trainer-profile.component";
import {AddTrainingComponent} from "./trainer/add-training/add-training.component";
import {TrainerTrainingsLogsComponent} from "./trainer/trainer-trainings-logs/trainer-trainings-logs.component";
import {traineeGuard} from "./guard/trainee.guard";
import {trainerGuard} from "./guard/trainer.guard";

const routes: Routes = [
  {
    path: "signIn",
    component: LoginFormComponent
  },
  {
    path: "joinUs",
    component: JoinUsComponent
  },
  {
    path: "trainerRegistration",
    component: TrainerRegistrationComponent
  },
  {
    path: "traineeRegistration",
    component: TraineeRegistrationComponent
  },
  {
    path: "myAccount-trainee",
    canActivate:[traineeGuard],
    component: MyaccountStudentprofileComponent
  },
  {
    path: "myAccount-trainer",
    canActivate:[trainerGuard],
    component: MyaccountTrainerprofileComponent
  },

  {
    path: "editTraineeProfile",
    canActivate:[traineeGuard],
    component: UpdateTraineeProfileComponent
  },
  {
    path: "changePassword",
    component: ChangePasswordComponent
  },
  {
    path: "homePage",
    component: HomePageComponent
  },
  {
    path: '', // Empty path (default route)
    redirectTo: 'homePage',
    pathMatch: 'full' // Use 'full' to ensure a complete match
  },
  {
    path: "edit-trainers-list",
    canActivate:[traineeGuard],
    component: EditTrainersListComponent

  },
  {
    path: "trainee-trainings",
    canActivate:[traineeGuard],
    component: TraineeTrainingsLogsComponent

  },
  {
    path: "trainer-trainings",
    canActivate:[trainerGuard],
    component: TrainerTrainingsLogsComponent

  },


  {
    path: "editTrainerProfile",
    canActivate:[trainerGuard],
    component: UpdateTrainerProfileComponent
  },
  {
    path: "addTrainings",
    canActivate:[trainerGuard],
    component: AddTrainingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

