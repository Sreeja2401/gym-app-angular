import { Component } from '@angular/core';
import {TrainerProfileUpdate} from "../model/TrainerProfileUpdate";
import {Router} from "@angular/router";

import {TrainerService} from "../service/trainer.service";
import {TrainerProfile} from "../model/TrainerProfile";

@Component({
  selector: 'app-update-trainer-profile',
  templateUrl: './update-trainer-profile.component.html',
  styleUrls: ['./update-trainer-profile.component.css']
})
export class UpdateTrainerProfileComponent {


  updateTrainerProfile=new TrainerProfileUpdate();
  trainerProfile =new TrainerProfile();

  ngOnInit() {
    const state = window.history.state;
    this.trainerProfile = state.trainerProfile;
  }
  constructor(private router: Router ,private trainerService:TrainerService) {

  }
  onSubmit() {
    this.updateTrainerProfile.username=this.trainerProfile.username
    this.updateTrainerProfile.firstName=this.trainerProfile.firstName
    this.updateTrainerProfile.lastName=this.trainerProfile.lastName
    this.updateTrainerProfile.active=this.trainerProfile.active
    console.log(this.updateTrainerProfile)
    this.trainerService.updateTrainerProfile(this.updateTrainerProfile).subscribe(data=>{
      console.log("trainer updated");
    })
  }

  myAccount() {
    this.router.navigate(['/myAccount-trainer'],{state:{trainerProfile:this.trainerProfile}})
  }
}
