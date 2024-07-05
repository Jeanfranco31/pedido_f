import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { UsuarioBlock } from 'src/app/interfaces/UsuarioBlock';
import { SuccessComponent } from 'src/app/services/Dialogs/success/success.component';
import { UsuarioService } from 'src/app/services/Usuario.service';
import { Env_Mensajes } from 'src/enviroments/Env_Mensajes';
import { Env_Rutas } from 'src/enviroments/Env_Rutas';

@Component({
  selector: 'app-desbloquearUsuario',
  templateUrl: './desbloquearUsuario.component.html',
  styleUrls: ['./desbloquearUsuario.component.css']
})
export class DesbloquearUsuarioComponent implements OnInit {

  selectedOption : string ="";
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  nombreUsuarioObtenido : string = "";
  nombreEstadoObtenido! : boolean;
  pInicial! : string;
  correoIngresado! : string;
  nombreUsuariosFiltrados : any = {};
  usuariosBloqueados : UsuarioBlock[] = [];

  userRowData : any = {};
  checked! : boolean;
  displayedColumns: string[] = ['check', 'name', 'userName', 'rol', 'state'];

  dataSource: any = new MatTableDataSource();
  datosTabla: any[] = [];

  length! : number;
  load:boolean=false;

  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(
    private _usuarioService:UsuarioService, 
    private _router:Router,
    private _snackBar: MatSnackBar,
    public dialog:Dialog,
    private fb:FormBuilder
  )
  {
  }

  ngOnInit(): void {
      this.obtenerDatos();
      this.length = this.datosTabla.length;
  }

  obtenerDatos(){
    this._usuarioService.obtenerTodos().subscribe((response: any)=>{
      this.datosTabla = response.response.data;
      this.dataSource = new MatTableDataSource(response.response.data);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
    },error=>{
      console.log(Env_Mensajes.errorObtenerDatos);
    })
  }

  buscarUsuario(correo:string, correoInput: HTMLInputElement){
    this.correoIngresado = correo;
    this.dataSource.filter = correo;
    correoInput.value = Env_Mensajes.stringVacio;
  }

  setSelection(evento: any)
  {
    this.selectedOption = evento;
  }

  limpiarDatos():void{
    this.selectedOption = this.pInicial;
    this.obtenerDatos();
  }

  desbloquearUsuario():void{
    if(this.nombreEstadoObtenido){
      console.log(this.nombreUsuarioObtenido)
      if(this.nombreUsuarioObtenido){
        this.load = false;
        this._usuarioService.desbloquearCuenta(this.nombreUsuarioObtenido).subscribe(response=>{
          this.dialog.open(SuccessComponent,
            {
              width:'400px',
              height:'250px'
            }
          );
          this.load = true;

          this._snackBar.open(Env_Mensajes.usuarioDesbloqueado, Env_Mensajes.exito, {            
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        });
      }
      }else{
        this._snackBar.open(Env_Mensajes.usuarioNoSeleccionado, Env_Mensajes.error, {         
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
      });
    }
  }

  rowSelect(element:any):string{
    this.userRowData = element;
    this.nombreEstadoObtenido = this.userRowData.checked;
    return this.nombreUsuarioObtenido = this.userRowData.correo;
  }

  refresh(): void {
		this._router.navigate([Env_Rutas.r_DesbloquearUsuario]);
	}

}
