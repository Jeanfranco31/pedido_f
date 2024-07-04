import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoPipe'
})
export class EstadoPipe implements PipeTransform {
  transform(estado: number): string {
    return estado === 1? 'Activo' : 'Inactivo';
  }
}