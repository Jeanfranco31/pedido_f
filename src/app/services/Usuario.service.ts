import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = Enviroment.endpoint;

  constructor(private http:HttpClient) { }

  public obtenerTodos():Observable<any[]>{
    const urlApi = `${this.url}${Enviroment.endpointAPIObtenerTodos}`
    return this.http.get<any[]>(urlApi);
  }

  public obtenerPorNombreUsuario(correo:string):Observable<any>{
    const urlApi = `${this.url}${Enviroment.endpointAPIBuscarUsuarioBloqueado}${correo}`;
    const body = correo;
    return this.http.post(urlApi,body);
  }

  public desbloquearCuenta(correo:string):Observable<any>{
    const urlApi = `${this.url}${Enviroment.endpointAPIDesbloquearCuenta}${correo}`;
    const body = correo;
    return this.http.put(urlApi,body);
  }

}
