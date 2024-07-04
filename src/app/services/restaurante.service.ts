import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroments/enviroment';
import { IRestaurante } from '../interfaces/IRestaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  url = Enviroment.endpoint;
  constructor(private http:HttpClient) { }

  public registrarDatos(datos : IRestaurante):Observable<Object>{
    const urlAPI = `${this.url}/registrar`;
    return this.http.post(urlAPI,datos);
  }

  public obtenerDatos():Observable<any>{
    const urlAPI = `${this.url}/getRestaurantes`
    return this.http.get(urlAPI);
  }
}
