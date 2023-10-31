import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../service/login.service";
import {UpdatePassword} from "../model/UpdatePassword";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: any;


  constructor(private router: Router, private loginService: LoginService, private snackBar: MatSnackBar) {
    this.changePasswordForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        oldPassword: new FormControl('', Validators.required),
        newPassword: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }
    );
  }

  onSubmit() {
    let credentials = new UpdatePassword();
    credentials.username = this.changePasswordForm.value.username;
    credentials.oldPassword = this.changePasswordForm.value.oldPassword
    credentials.newPassword = this.changePasswordForm.value.newPassword
    this.loginService.updateCredentials(credentials).subscribe({
      next: (data: any) => {

        if (data) {
          this.snackBar.open("error changing password", "try again!!")
        } else {
          this.snackBar.open("updated successfully", "Ok!!")
          this.router.navigate(['/signIn'])
        }
      },
      error: (data: any) => {
        this.snackBar.open("error changing password", "try again!!")
      }
    });
  }


}
