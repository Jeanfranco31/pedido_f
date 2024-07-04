import { Component, OnInit, ViewChild } from '@angular/core';
import{saveAs} from 'file-saver';
import * as XLSX from "xlsx";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Pedidos } from 'src/app/interfaces/Pedidos';
import { PedidosService } from 'src/app/services/Pedidos/pedido.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css']
})
export class ConsultarPedidosComponent implements OnInit {
  displayedColumns: string[] = ['fechaPedido', 'nombreUsuario', 'nombrePedido', 'precioProducto', 'cantidad'];
  dataSource = new MatTableDataSource<Pedidos>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  startDate: string = '';
  endDate: string = '';

  constructor(private pedidosService: PedidosService ) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    this.pedidosService.getPedidos().subscribe(pedidos => {
      this.dataSource.data = pedidos;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    });
  }

  applyFilter(): void {
    if (this.startDate && this.endDate) {
      this.pedidosService.getPedidosByDateRange(this.startDate, this.endDate).subscribe(pedidos => {
        this.dataSource.data = pedidos;
      });
    }
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob(
      [buffer], 
      { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' }
    );
    saveAs(data, `${fileName}_${new Date().getTime()}.xlsx`);
  }

  exportToExcel(): void {
    const data = this.dataSource.data;
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Pedidos');
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'pedidos');
  }


}

