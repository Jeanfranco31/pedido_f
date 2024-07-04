import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pedidos } from 'src/app/interfaces/Pedidos';
import { Enviroment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private myAppUrl = Enviroment.endpoint;
  private myApiUrl = 'api/Pedidos';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedidos[]> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`).pipe(
      map(response => response.data)
    );
  }

  getPedidosByDateRange(startDate: string, endDate: string): Observable<Pedidos[]> {
    return this.getPedidos().pipe(
      map(pedidos => pedidos.filter(pedido => {
        const fecha = new Date(pedido.fechaPedido.split('/').reverse().join('-')).getTime();
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        return fecha >= start && fecha <= end;
      }))
    );
  }
}