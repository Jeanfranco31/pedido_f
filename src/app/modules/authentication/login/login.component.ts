import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  hide = true;
  form : FormGroup;

  constructor(
    private fb:FormBuilder,
    private _loginService:LoginService,
    private router:Router,
    private cookieService:CookieService
  ) {
    this.form = this.fb.group({
      nombreUsuario : new FormControl ('',Validators.required),
      clave : new FormControl ('',Validators.required)
    })
   }


  onSubmit(){
    /*
    this._loginService.login(this.form.value).subscribe(response =>{
      console.log("Datos correctos");
      
      this.cookieService.set('token',response.data.token,{
        secure : true,
        expires: new Date(Date.now()+360000),
      });
*/
      this.router.navigate(['/home/seguridad/usuarios']);
      /*
    }, error =>{
      console.log("Datos incorrectos",error);
    });*/
    
  }

  vistaRecuperarClave(){
    this.router.navigate(['/recuperar_clave']);
  }
}
