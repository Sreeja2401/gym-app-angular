import { Component } from '@angular/core';
import {TrainerProfile} from "../model/TrainerProfile";
import {TraineeDto} from "../model/TraineeDto";
import {Router} from "@angular/router";
export interface TraineeInfo {
  username: string|undefined;
  firstname: string|undefined;
  lastname:string|undefined;
}


@Component({
  selector: 'app-myaccount-trainerprofile',
  templateUrl: './myaccount-trainerprofile.component.html',
  styleUrls: ['./myaccount-trainerprofile.component.css']
})
export class MyaccountTrainerprofileComponent {
  displayedColumns: string[] = ['username', 'firstname', 'lastname'];
  dataSource: TraineeInfo[] = []
  trainerProfile=new TrainerProfile();
  constructor(private router:Router) {
  }
  ngOnInit() {
    const state = window.history.state;
    this.trainerProfile = state.trainerProfile;
    console.log(this.trainerProfile)
    console.log(this.trainerProfile.active)
    console.log(this.trainerProfile.email)
    if (this.trainerProfile.traineeList) {
      for (const trainee of this.trainerProfile.traineeList) {
          this.dataSource.push({
            username:trainee.userName,
            firstname: trainee.firstName,
            lastname:trainee.lastName
          });
        }

    }

  }

  editTrainers() {
    this.router.navigate(['/editTrainerProfile'],{state:{trainerProfile:this.trainerProfile}})
  }

  addTrainings() {
    this.router.navigate(['/addTrainings'],{state:{trainerProfile:this.trainerProfile}})
  }

    viewTrainings() {
      this.router.navigate(['/trainer-trainings'],{state:{trainerProfile:this.trainerProfile}});
    }
}
