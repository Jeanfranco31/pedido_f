import { Component, OnInit } from '@angular/core';
import { IRestaurante } from 'src/app/interfaces/IRestaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  data!:IRestaurante[];
  imgB64! : string;
  images: HTMLImageElement[] = [];
  load:boolean=false;

  constructor(
    private _restauranteService:RestauranteService
  ) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  public obtenerDatos(){
    this.load = true;
    this._restauranteService.obtenerDatos().subscribe(response=>{
      this.data = response.data;
      for(let i = 0; i< this.data.length; i++){
        this.imgB64 = response.data[i].logotipo;
      }  
      this.load = false;  
      console.log(response);      
    })
  }

  verMenu(){
    /*AÑADIR VISTA PEDIDOS DE ACUERDO AL RESTAURANTE ELEGIDO */
  }
}
