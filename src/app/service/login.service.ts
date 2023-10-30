import { Injectable } from '@angular/core';
import {TrainerRegistration} from "../model/trainer-registration";
import {Observable} from "rxjs";
import {LoginCredentials} from "../model/login-credentials";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UpdatePassword} from "../model/UpdatePassword";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8120/login";
  constructor(private httpclient:HttpClient) {
  }
  userAuthentication(credentials: LoginCredentials): Observable<any> {
    const url = `${this.baseUrl}/authentication`;
    return this.httpclient.post<any>(url, credentials);
  }
  updateCredentials(credentials: UpdatePassword): Observable<void> {
    const url = `${this.baseUrl}/update`;
    return this.httpclient.post<void>(url, credentials);
  }

}

