import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IRestaurante } from 'src/app/interfaces/IRestaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { Env_Mensajes } from 'src/enviroments/Env_Mensajes';

@Component({
  selector: 'app-restaurante_form',
  templateUrl: './restaurante_form.component.html',
  styleUrls: ['./restaurante_form.component.css']
})
export class Restaurante_formComponent implements OnInit {
  selectedFile!: File;
  form: FormGroup;
  load:boolean=false;
  b64String!: string;

  constructor(
    private fb:FormBuilder,
    private _restauranteService:RestauranteService,
    private router:Router,
  ) { 
    this.form = this.fb.group({
      ruc: new FormControl('',Validators.required),
      nombre : new FormControl('',Validators.required),
      correo : new FormControl('',Validators.required),
      telefono : new FormControl('',Validators.required),
      direccion : new FormControl('',Validators.required),
      logotipo : new FormControl('',Validators.required),
      contrasena : new FormControl ('',Validators.required)
    })
  }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.b64String = e.target.result.split(',')[1];
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(){   
    const restaurante : IRestaurante={
      ruc : this.form.value.ruc,
      nombre : this.form.value.nombre,
      correo : this.form.value.correo,
      telefono : this.form.value.telefono,
      direccion : this.form.value.direccion,
      logotipo : this.b64String,
      contrasena : this.form.value.contrasena
    };
    
    if(this.form.valid && this.b64String){
    this.load = true;

    console.log("RUC:",this.form.value.ruc);

    this._restauranteService.registrarDatos(restaurante).subscribe(response=>{
      this.load = false;     
      console.log(Env_Mensajes.datosRegistrados);
    },error=>{
      this.load = false;
      console.log(Env_Mensajes.datosNoRegistrados,error);
    });
    }
  }
}
