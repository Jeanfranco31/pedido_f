import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  myAppUrl = Enviroment.endpoint;
  myApiUrl = "api/Token/CompararTokens";

  constructor(private http: HttpClient) { }

  compararTokens(tokenFrontend: string): Observable<boolean> {
  
    return this.http.post<boolean>(`${this.myAppUrl}/${this.myApiUrl}`, tokenFrontend);
  }
}
