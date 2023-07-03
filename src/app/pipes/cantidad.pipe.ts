import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidad'
})
export class CantidadPipe implements PipeTransform {

  transform(value: any[], codigo: number): number {
    
    return value.filter(item => item.codigo === codigo).length;
  }

}
