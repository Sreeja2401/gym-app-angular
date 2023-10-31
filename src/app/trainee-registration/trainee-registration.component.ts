import {Component} from '@angular/core';
import {Trainee} from "../model/trainee";
import {TraineeService} from "../service/trainee.service";
import {MatDialog} from "@angular/material/dialog";
import {DataDialogComponent} from "../data-dialog/data-dialog.component";


@Component({
  selector: 'app-trainee-registration',
  templateUrl: './trainee-registration.component.html',
  styleUrls: ['./trainee-registration.component.css']
})
export class TraineeRegistrationComponent {


  trainee: Trainee = new Trainee();

  constructor(private traineeService: TraineeService, private dialog: MatDialog) {
  }

  onSubmit() {
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
}
