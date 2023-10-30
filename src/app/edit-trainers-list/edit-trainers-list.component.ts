import {Component, inject} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {TraineeService} from "../service/trainee.service";

import {MatSnackBar, MatSnackBarModule, MatSnackBarRef} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {TrainerProfile} from "../model/TrainerProfile";
import {TraineeProfile} from "../model/TraineeProfile";
import {TraineeDto} from "../model/TraineeDto";
import {TraineeTrainersList} from "../model/TraineeTrainersList";



@Component({
  selector: 'app-edit-trainers-list',
  templateUrl: './edit-trainers-list.component.html',
  styleUrls: ['./edit-trainers-list.component.css']
})

export class EditTrainersListComponent {


  displayedColumns: string[] = ['select', 'username', 'firstName', 'specialization'];


  trainerProfiles: TrainerProfile[] = [];
  traineeProfile: TraineeProfile = new TraineeProfile();
  existingTrainerProfiles: TrainerProfile[] = [];


  dataSource = new MatTableDataSource<TrainerProfile>();
  selection = new SelectionModel<TrainerProfile>(true, []);

  loading = true;
  traineeFirstName: any;

  constructor(private route: ActivatedRoute, private router: Router, private traineeService:TraineeService, private _snackBar: MatSnackBar) {
  }


  ngOnInit() {
    const state = window.history.state;
    if (state && state.traineeProfile) {
      this.traineeProfile = state.traineeProfile;
      this.traineeFirstName = this.traineeProfile.firstName;
      if (this.traineeProfile.trainersList) {
        for (const trainer of this.traineeProfile.trainersList) {
          this.existingTrainerProfiles.push({
            username: trainer.username ,
            firstName: trainer.firstName,
            lastName:  trainer.lastName ,
            specialization: trainer.specialization,
            active: true,
            email:"",
            traineeList: []
          } );
        }
      }


      this.fetchFreeTrainers(this.traineeProfile.username);
      //this.trainerProfiles = this.traineeProfile.trainersList;
      console.log('Received traineeProfile data:', this.traineeProfile);
      // You can now use this.traineeProfile in your component
    } else {
      console.log('No traineeProfile data received.');
    }
  }


  fetchFreeTrainers(username: string | undefined){
    this.traineeService.getNotAssaignedTrainers(username).subscribe(value => {
      console.log(value);
      for (const trainer of this.existingTrainerProfiles) {
        this.dataSource.data.push(trainer);
        this.selection.select(trainer);
      }

      // Loop through received trainers and add them to dataSource
      for (const trainer of value) {
        this.dataSource.data.push(trainer);
      }
      this.loading = false;
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }


  checkboxLabel(row?: TrainerProfile): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.username}`;
  }


  saveSelectedItems() {
    const selectedElements = this.selection.selected;


    console.log('Selected Elements:');
    let trainers: string[] = [];
    if (selectedElements.length > 0) {
      for (const element of selectedElements) {
        console.log(`Position: ${element.username}, Name: ${element.firstName}, Weight: ${element.specialization}`);
        if (element.username != null) {
          trainers.push(element.username);
        }
      }
      console.log(trainers)
     let traineeTrainerList = new TraineeTrainersList(this.traineeProfile.username, trainers);

      this.traineeService.getTraineesTrainers(traineeTrainerList).subscribe(value => {
        console.log("Updated trainers List "+value);

        this.openSnackBar();


        this.router.navigate(['signIn']);
      })

    } else {
      console.log("Please select at least one element");
    }
  }


  openSnackBar() {
    this._snackBar.open("Successfully Updated Trainers, Please Login Again", "OK");
  }
}
