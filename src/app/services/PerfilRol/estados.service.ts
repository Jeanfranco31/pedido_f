import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private myAppUrl:string = Enviroment.endpoint;
  private myApiUrl: string= 'api/Estados';

  constructor(private http:HttpClient) { }
  getEstado(): Observable<any> { 
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
