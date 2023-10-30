import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TrainerRegistration} from "../model/trainer-registration";
import {Observable} from "rxjs";
import {Trainee} from "../model/trainee";
import {TraineeProfile} from "../model/TraineeProfile";
import {TrainerDto} from "../model/TrainerDto";
import {TraineeProfileUpdate} from "../model/TraineeProfileUpdate";
import {TraineeTrainersList} from "../model/TraineeTrainersList";
import {TraineeTrainingsRequestList} from "../model/TraineeTrainingsRequestList";



@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  private baseUrl = "http://localhost:8120/trainee";
  constructor(private httpclient:HttpClient) {
  }

  saveTrainee(trainee:Trainee):Observable<any>{
    return this.httpclient.post(`${this.baseUrl}`,trainee);
  }

  getTraineeProfile(username: string|undefined): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}?username=${username}`);
  }

  updateTraineeProfile(profileUpdate: TraineeProfileUpdate): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl}`, profileUpdate);
  }

  deleteTrainee(userName: string|undefined): Observable<void> {
    return this. httpclient.delete<void>(`${this.baseUrl}/?username=${userName}`);
  }

  getTraineesTrainers(traineeTrainersList:TraineeTrainersList ): Observable<any> {
    return this.httpclient.post<TrainerDto[]>(`${this.baseUrl}/trainers`, traineeTrainersList);
  }

  getTraineeTrainings(trainings: TraineeTrainingsRequestList): Observable<any> {
    return this.httpclient.post<any>(`${this.baseUrl}/trainings`, trainings);
  }

  getNotAssaignedTrainers(username: string | undefined): Observable<any> {
    return this.httpclient.get<TrainerDto[]>(`${this.baseUrl}/notassaignedtrainers?username=${username}`);
  }

}
