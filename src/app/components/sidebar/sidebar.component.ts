import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Env_Rutas } from 'src/enviroments/Env_Rutas';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router:Router, 
    private _loginService:LoginService,
    private dialog:Dialog
  ) { }

  ngOnInit() {
  }
  
  logout(){
    this._loginService.logout();
    this.ocultarSideBar();
  }

  ocultarSideBar(){
    this.dialog.closeAll();
  }

  navigateToUsers(){
    this.router.navigate([Env_Rutas.r_Usuarios]);
    this.ocultarSideBar();
  }

  navigateToCreateProfile(){
    this.router.navigate([Env_Rutas.r_RegistrarRoles]);
    this.ocultarSideBar();
  }

  navigateToUnblockUser(){
    this.router.navigate([Env_Rutas.r_DesbloquearUsuario]);
    this.ocultarSideBar();
  }
  navigateToPedido(){
    this.router.navigate([Env_Rutas.r_Pedidos]);
    this.ocultarSideBar();
  }
  

  isActive = false;

  toggleSidebar() {
    this.isActive = !this.isActive;
  }

}
