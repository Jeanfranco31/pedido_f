import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroments/enviroment';
import { Login_Usuario } from '../interfaces/Login_Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

url = Enviroment.endpoint;

constructor(private http:HttpClient, private router:Router ) { }


  login(usuario:Login_Usuario):Observable<any>{
    const url = `${this.url}${Enviroment.endpointAPILogin}`; 
    return this.http.post(url,usuario);
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
