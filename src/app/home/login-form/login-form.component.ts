import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginCredentials} from "../../model/login-credentials";
import {LoginService} from "../../service/login.service";
import {TraineeService} from "../../service/trainee.service";
import {TrainerService} from "../../service/trainer.service";
import {TraineeProfile} from "../../model/TraineeProfile";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TrainerProfile} from "../../model/TrainerProfile";
import {GuardService} from "../../service/GuardService";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  credentials = new LoginCredentials();
  selectedUserType: string = 'trainee';
  loginForm: any;
  isValid: any=false;
  errorMessage="Invalid user";


  constructor(private router: Router
    , private loginService: LoginService
    , private traineeService: TraineeService
    , private trainerService: TrainerService
    , private _snackBar: MatSnackBar
    ,private guardService :GuardService
  ) {
    this.loginForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      }
    );
  }

  onSubmit() {
    console.log(this.credentials)
    this.credentials.username = this.loginForm.value.username
    this.credentials.password = this.loginForm.value.password
    this.loginService.userAuthentication(this.credentials).subscribe(data => {
      console.log("received data :" + data);
      if (data == true) {
        console.log("user exist")
        if (this.selectedUserType === 'trainee') {
          this.traineeService.getTraineeProfile(this.credentials.username).subscribe(data => {
            if (data.error) {
              this.isValid=true
              console.log("trainee not found")
              // this._snackBar.open(data.error, "retry");
              this.errorMessage=data.error;

            } else {
              let traineeProfile: TraineeProfile = data
              this.guardService.setUserRole(2);
              this.router.navigate(['/myAccount-trainee'], {state: {traineeProfile}});
            }
          })
        } else if (this.selectedUserType === 'trainer') {

          this.trainerService.getTrainerProfile(this.credentials.username).subscribe(data => {
            if (data.error) {
              this.isValid=true
              console.log("trainer not found")
              this.errorMessage=data.error;

            } else {
              let trainerProfile: TrainerProfile = data
              this.guardService.setUserRole(1);
              this.router.navigate(['/myAccount-trainer'], {state: {trainerProfile}});
            }
          });
        }
      } else {
        this.isValid=true
        console.log("user not exist")
        this.errorMessage="user not exist"
      }
    });
  }

  openHome() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}






