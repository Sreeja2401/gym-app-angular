import {Component} from '@angular/core';
import {TraineeProfile} from "../../model/TraineeProfile";
import {TraineeService} from "../../service/trainee.service";
import {Router} from "@angular/router";

export interface TrainerInfo {
  name: string;
  specialization: string;


}


@Component({
  selector: 'app-myaccount-studentprofile',
  templateUrl: './myaccount-studentprofile.component.html',
  styleUrls: ['./myaccount-studentprofile.component.css']
})
export class MyaccountStudentprofileComponent {
  displayedColumns: string[] = ['name', 'specialization'];
  dataSource: TrainerInfo[] = [];

  traineeProfile: TraineeProfile = new TraineeProfile();

  constructor(private traineeService: TraineeService, private router: Router) {
  }

  ngOnInit() {
    const state = window.history.state;
    this.traineeProfile = state.traineeProfile;
    console.log(state);
    if (this.traineeProfile.trainersList) {
      for (const trainer of this.traineeProfile.trainersList) {
        if (trainer.firstName && trainer.specialization) {
          this.dataSource.push({
            name: trainer.firstName, // Replace with the actual property name in TraineeProfile
            specialization: trainer.specialization, // Replace with the actual property name in TraineeProfile
          });
        }
      }
    }
  }

  deleteTraineeProfile(userName: string | undefined) {
    // Assuming that your TraineeService has a method called deleteTrainee()
    this.traineeService.deleteTrainee(userName).subscribe(data => {
      console.log("trainee deleted successfully")
    })
  }


  editTrainers() {
    this.router.navigate(['/edit-trainers-list'], {state: {traineeProfile: this.traineeProfile}})
  }

  viewTrainings() {
    this.router.navigate(['/trainee-trainings'], {state: {traineeProfile: this.traineeProfile}});
  }

  updateProfile() {
    this.router.navigate(['/editTraineeProfile'], {state: {traineeProfile: this.traineeProfile}});
  }
}
