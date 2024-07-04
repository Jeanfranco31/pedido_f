import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/interfaces/role';
import { Enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private myAppUrl: string = Enviroment.endpoint;
  private myApiUrl: string = 'api/Role/';

  constructor(private http:HttpClient) { }

  getRoles(): Observable<any> { 
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
  }


  updateRol(role: Role): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}`, role);
  }

  addRol(role: Role): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, role);
  }

}
