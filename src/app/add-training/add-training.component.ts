import { Component } from '@angular/core';
import {TrainingDetails} from "../model/TrainingDetails";
import {TrainingService} from "../service/training.service";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TrainerProfile} from "../model/TrainerProfile";
import {TraineeDto} from "../model/TraineeDto";
import {formatDate} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent {
  trainingForm: any;
  trainingDetails=new TrainingDetails();
  trainerProfile=new TrainerProfile();
  traineeList: TraineeDto[] = [];
  constructor(private router: Router ,private trainingService:TrainingService ,private snackBar:MatSnackBar) {
    this.trainingForm=new FormGroup(
      {
        trainingName: new FormControl('',Validators.required),
        trainingDate: new FormControl('',Validators.required),
        trainingDuration: new FormControl('',Validators.required),
        traineeUsername: new FormControl('',Validators.required)
      }
    );
  }
  ngOnInit() {
    const state = window.history.state;
    this.trainerProfile=state.trainerProfile;
    console.log(state)

    console.log(this.trainerProfile.username)
    this.trainingDetails.trainingType = this.trainerProfile.specialization
    console.log(state.trainerProfile.traineeList)
    if (this.trainerProfile.traineeList) {
      this.traineeList = this.trainerProfile.traineeList;
    }
    console.log('Trainee List:', this.traineeList);
  }

  onSubmit() {
    this.trainingDetails.trainerUsername = this.trainerProfile.username
    this.trainingDetails.traineeUserName=this.trainingForm.value.traineeUsername
    this.trainingDetails.trainingDate=this.trainingForm.value.trainingDate
    this.trainingDetails.trainingDuration=this.trainingForm.value.trainingDuration
    this.trainingDetails.trainingName=this.trainingForm.value.trainingName

    console.log(this.trainingDetails)
    let val = this.trainingForm.value.trainingDate;
    val = formatDate(val,'yyyy-MM-dd','en');
    this.trainingDetails.trainingDate=val;

this.trainingService.addTraining(this.trainingDetails).subscribe(data=>{
   if(data)
   {
     this.snackBar.open("error adding training","retry!")
   }
   else{
     this.snackBar.open(" added training successfully","ok!!!")
     this.router.navigate(['/myAccount-trainer'],{state:{trainerProfile:this.trainerProfile}})
   }
})
  }

  myAccount() {
    this.router.navigate(['/myAccount-trainer'],{state:{trainerProfile:this.trainerProfile}})
  }
}
