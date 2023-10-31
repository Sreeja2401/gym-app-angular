import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {JoinUsComponent} from "./join-us/join-us.component";
import {TrainerRegistrationComponent} from "./trainer-registration/trainer-registration.component";
import {TraineeRegistrationComponent} from "./trainee-registration/trainee-registration.component";
import {MyaccountStudentprofileComponent} from "./myaccount-studentprofile/myaccount-studentprofile.component";
import {UpdateTraineeProfileComponent} from "./update-trainee-profile/update-trainee-profile.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {MyaccountTrainerprofileComponent} from "./myaccount-trainerprofile/myaccount-trainerprofile.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {EditTrainersListComponent} from "./edit-trainers-list/edit-trainers-list.component";
import {TraineeTrainingsLogsComponent} from "./trainee-trainings-logs/trainee-trainings-logs.component";
import {UpdateTrainerProfileComponent} from "./update-trainer-profile/update-trainer-profile.component";
import {AddTrainingComponent} from "./add-training/add-training.component";
import {TrainerTrainingsLogsComponent} from "./trainer-trainings-logs/trainer-trainings-logs.component";

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
    component: MyaccountStudentprofileComponent
  },
  {
    path: "myAccount-trainer",
    component: MyaccountTrainerprofileComponent
  },

  {
    path: "editTraineeProfile",
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
    component: EditTrainersListComponent

  },
  {
    path: "trainee-trainings",
    component: TraineeTrainingsLogsComponent

  },
  {
    path: "trainer-trainings",
    component: TrainerTrainingsLogsComponent

  },


  {
    path: "editTrainerProfile",
    component: UpdateTrainerProfileComponent
  },
  {
    path: "addTrainings",
    component: AddTrainingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

