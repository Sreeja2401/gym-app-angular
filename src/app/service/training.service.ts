import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrainingDetails} from "../model/TrainingDetails";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private BaseUrl = "http://localhost:8120/training";

  constructor(private http: HttpClient) {}

  addTraining(trainingDetails: TrainingDetails): Observable<any> {
    console.log(trainingDetails)
    return this.http.post<any>(`${this.BaseUrl}`, trainingDetails);
  }
}
