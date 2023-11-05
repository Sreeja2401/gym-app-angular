import {Component} from '@angular/core';
import {Trainee} from "../../model/trainee";
import {TraineeService} from "../../service/trainee.service";
import {MatDialog} from "@angular/material/dialog";
import {DataDialogComponent} from "../../common/data-dialog/data-dialog.component";
import {Router} from "@angular/router";
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'app-trainee-registration',
  templateUrl: './trainee-registration.component.html',
  styleUrls: ['./trainee-registration.component.css']
})
export class TraineeRegistrationComponent {

  trainee: Trainee = new Trainee();
  registrationForm: any;

  constructor(private traineeService: TraineeService, private dialog: MatDialog, private router: Router) {
    this.registrationForm = new FormGroup(
      {
        firstNameFormControl: new FormControl('', [Validators.required]),
        emailFormControl: new FormControl('', [Validators.required, Validators.email]),
        lastNameFormControl: new FormControl('', [Validators.required]),
        addressFormControl: new FormControl('', [Validators.required]),
        dateOfBirthFormControl:new FormControl('')

      }
    );
  }


  onSubmit() {
    this.trainee=this.registrationForm.value
    this.traineeService.saveTrainee(this.trainee).subscribe(data => {
      console.log(data);
      this.openDataDialog(data);
    })

  }

  openDataDialog(data: any): void {
    const dialogRef = this.dialog.open(DataDialogComponent, {
      width: '400px',
      data: data,
    });
  }

  openHome() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
