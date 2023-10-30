import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TraineeProfileUpdate} from "../model/TraineeProfileUpdate";
import {TraineeService} from "../service/trainee.service";
import {TraineeProfile} from "../model/TraineeProfile";
import {formatDate} from "@angular/common";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
export interface TrainerInfo {
  username: string;
  firstname: string;
  lastname:string;



}

const ELEMENT_DATA: TrainerInfo[] = [
  {username: 'sreeja2401', firstname: 'sreeja',lastname: 'mangarapu'},
  {username: 'siddu2401', firstname: 'siddu',lastname: 'mangarapu'},
  {username: 'lavs2401', firstname: 'lavanya',lastname: 'mangarapu'},
];
@Component({
  selector: 'app-update-trainee-profile',
  templateUrl: './update-trainee-profile.component.html',
  styleUrls: ['./update-trainee-profile.component.css']
})
export class UpdateTraineeProfileComponent {




  traineeProfile=new TraineeProfile();
  constructor(private formBuilder: FormBuilder, private traineeService:TraineeService ,private router:Router   , private _snackBar: MatSnackBar) {}

  ngOnInit() {
    const state = window.history.state;
    this.traineeProfile = state.traineeProfile;
    console.log(this.traineeProfile)
    const dateOfBirth = new Date(parseInt(this.traineeProfile.dateOfBirth[0]),parseInt(this.traineeProfile.dateOfBirth[1])-1,parseInt(this.traineeProfile.dateOfBirth[2]));
    this.traineeProfile.dateOfBirth = formatDate(dateOfBirth,'yyyy-MM-dd','en');
  }
  onSubmit() {
    let traineeProfileUpdate=new TraineeProfileUpdate();
    traineeProfileUpdate=this.traineeProfile
    traineeProfileUpdate.username=this.traineeProfile.username
    console.log(this.traineeProfile)

    this.traineeService.updateTraineeProfile(traineeProfileUpdate).subscribe(data=>{
      console.log(data.value);
      if(data.value)
      {
        this._snackBar.open("details updated successfully","OK!");
      }
      else{

        this._snackBar.open(data.error, "retry");
      }
    });
  }

  myAccount() {
    this.router.navigate(['/myAccount-trainee'],{state:{traineeProfile:this.traineeProfile}})
  }
}
