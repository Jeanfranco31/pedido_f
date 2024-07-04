import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';


interface DecodedToken {
  Rol: string;
  Nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class TokenDecoderService {
  
  constructor(private cookieService:CookieService) { }

  obtainName(): string {
    const token = this.cookieService.get('token');
    if (!token) {
      return 'Unknown'; 
    }
    try {
      const decodedToken: DecodedToken = jwtDecode(token);
      return decodedToken.Nombre;
    } catch (error) {
      console.error( error);
      return 'Unknown'; 
    }
  }


  obtainRol(): string {
    const token = this.cookieService.get('token');
    if (!token) {
      return 'Unknown'; 
    }
    try {
      const decodedToken: DecodedToken = jwtDecode(token);
      return decodedToken.Rol;
    } catch (error) {
      console.error('Error decoding token:', error);
      return 'Unknown'; 
    }
  }

}
