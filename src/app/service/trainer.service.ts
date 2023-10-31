import {Injectable} from '@angular/core';
import {TrainerRegistration} from "../model/trainer-registration";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrainerTrainingsRequestList} from "../model/TrainerTrainingsRequestList";


@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl = "http://localhost:8120/trainer";

  constructor(private httpclient: HttpClient) {
  }

  saveTrainer(trainer: TrainerRegistration): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}`, trainer);
  }

  getTrainerProfile(username: string | undefined): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}?username=${username}`);
  }

  updateTrainerProfile(profileUpdate: any): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl}`, profileUpdate);
  }

  getTrainerTrainings(trainings: TrainerTrainingsRequestList): Observable<any> {
    return this.httpclient.post<any>(`${this.baseUrl}/trainings`, trainings);
  }
}
