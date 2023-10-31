import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TraineeService} from "../../service/trainee.service";
import {TraineeTrainingsRequestList} from "../../model/TraineeTrainingsRequestList";
import {TraineeProfile} from "../../model/TraineeProfile";
import {TrainerDto} from "../../model/TrainerDto";
import {formatDate} from "@angular/common";
import {TrainingDetails} from "../../model/TrainingDetails";

interface Specialization {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-trainee-trainings-logs',
  templateUrl: './trainee-trainings-logs.component.html',
  styleUrls: ['./trainee-trainings-logs.component.css']
})
export class TraineeTrainingsLogsComponent {
  specializations: Specialization[] = [
    {value: 'fitness', viewValue: 'fitness'},
    {value: 'yoga', viewValue: 'yoga'},
    {value: 'zumba', viewValue: 'Zumba'},
    {value: 'stretching', viewValue: 'stretching'},
    {value: 'resistance', viewValue: 'resistance'},
  ];


  traineeProfile = new TraineeProfile();
  traineeTrainingsList = new TraineeTrainingsRequestList();
  trainerList: TrainerDto[] = [];
  traineeTrainingsForm: any;
  trainingData: TrainingDetails[] = [];
  displayedColumns: string[] = ['traineeUserName', 'trainerUsername', 'trainingDate', 'trainingDuration', 'trainingName', 'trainingType'];

  constructor(private router: Router, private traineeService: TraineeService, private fb: FormBuilder) {
    this.traineeTrainingsForm = new FormGroup(
      {
        trainerName: new FormControl(''),
        trainerToggle: new FormControl(false),

        trainingType: new FormControl({value: null, disabled: true}, Validators.required),
        trainingTypeToggle: new FormControl(false),

        range: new FormGroup({
          start: new FormControl<Date | null>({value: null, disabled: true}),
          end: new FormControl<Date | null>({value: null, disabled: true}),
        }), // Set the initial disabled state
        dateToggle: new FormControl(false)
      }
    );


    this.traineeTrainingsForm.get('trainerToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.traineeTrainingsForm.get('trainerName')?.enable();
        this.traineeTrainingsForm.get('trainingType')?.disable();
        this.traineeTrainingsForm.get('trainingTypeToggle')?.setValue(false)
      } else {
        this.traineeTrainingsForm.get('trainerName')?.disable();
      }
    });
    this.traineeTrainingsForm.get('dateToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.traineeTrainingsForm.get('range')?.enable();
      } else {
        this.traineeTrainingsForm.get('range')?.disable();
      }
    });
    this.traineeTrainingsForm.get('trainingTypeToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.traineeTrainingsForm.get('trainingType')?.enable();
        this.traineeTrainingsForm.get('trainerName')?.disable();
        this.traineeTrainingsForm.get('trainerToggle')?.setValue(false)
      } else {
        this.traineeTrainingsForm.get('trainingType')?.disable();
      }
    });


  }

  ngOnInit() {
    const state = window.history.state;
    if (state && state.traineeProfile) {
      this.traineeProfile = state.traineeProfile;
    }
    if (this.traineeProfile.trainersList) {
      this.trainerList = this.traineeProfile.trainersList
    }
  }

  onSubmit() {
    this.traineeTrainingsList = new TraineeTrainingsRequestList();
    this.traineeTrainingsList.username = this.traineeProfile.username;

    if (this.traineeTrainingsForm.value.trainerToggle) {

      this.traineeTrainingsList.trainerName = this.traineeTrainingsForm.value.trainerName
    }

    if (this.traineeTrainingsForm.value.dateToggle) {
      const startDate = this.traineeTrainingsForm.get('range.start')?.value;
      const endDate = this.traineeTrainingsForm.get('range.end')?.value;
      if (startDate && endDate) {
        const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en');
        const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en');
        this.traineeTrainingsList.periodFrom = formattedStartDate;
        this.traineeTrainingsList.periodTo = formattedEndDate;
      }

    }

    if (this.traineeTrainingsForm.value.trainingTypeToggle) {
      this.traineeTrainingsList.trainingType = this.traineeTrainingsForm.value.trainingType
    }

    this.traineeService.getTraineeTrainings(this.traineeTrainingsList).subscribe(data => {
      if (data.error) {
        console.log("error")
      } else {
        this.trainingData = data;
        console.log(data)
      }
    })
  }


  myAccount() {
    this.router.navigate(['/myAccount-trainee'], {state: {traineeProfile: this.traineeProfile}})
  }
}
