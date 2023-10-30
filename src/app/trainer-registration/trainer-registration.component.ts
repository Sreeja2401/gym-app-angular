import { Component } from '@angular/core';
import {TrainerRegistration} from "../model/trainer-registration";
import {TrainerService} from "../service/trainer.service";
import {MatDialog} from "@angular/material/dialog";
import {DataDialogComponent} from "../data-dialog/data-dialog.component";


interface Specialization {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrls: ['./trainer-registration.component.css']
})

export class TrainerRegistrationComponent {
  specializations: Specialization[] = [
    {value: 'fitness', viewValue: 'fitness'},
    {value: 'yoga', viewValue: 'yoga'},
    {value: 'Zumba', viewValue: 'Zumba'},
    {value: 'stretching', viewValue: 'stretching'},
    {value: 'resistance', viewValue: 'resistance'},
  ];
  constructor(private trainerService:TrainerService,private dialog: MatDialog) {
  }
  trainer: TrainerRegistration=new TrainerRegistration();

  onSubmit() {
  this.trainerService.saveTrainer(this.trainer).subscribe(data=>{
    console.log(data);
    this.openDataDialog(data);
  })
  }
  openDataDialog(data: any): void {
    const dialogRef = this.dialog.open(DataDialogComponent, {
      width: '400px', // Adjust the width as needed
      data: data,
    });
  }
}
