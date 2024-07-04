import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from './add-edit-search-usuario/add-user/add-user.component';

@Component({
  selector: 'app-usuario_layout',
  templateUrl: './usuario_layout.component.html',
  styleUrls: ['./usuario_layout.component.css']
})
export class Usuario_layoutComponent implements OnInit {

  form:FormGroup;
  selectedOption!:string;
  datosTabla:any;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['action', 'identificacion', 'nombre', 'nombreUsuario', 'empresa' ,'estado'];
  load:boolean=false;

  constructor(
    private fb: FormBuilder,
    private dialog: Dialog
  ) { 
    this.form = this.fb.group({
      identificacion: [''],
      nombre: [''],
      opcion: ['']
    });
  }

  ngOnInit() {
    this.obtenerDatos();
  }

  setSelection(event : Event){}

  obtenerDatos(){
    this.load = false;
  }

  rowSelect(element:any){
    /*
    this.userRowData = element;
    this.nombreEstadoObtenido = this.userRowData.checked;
    return this.nombreUsuarioObtenido = this.userRowData.nombreUsuario;
    */
  }
  viewAddUser(){
    this.dialog.open(AddUserComponent,{
      width:'90%',
      height:'80%'
    })
  }
}
