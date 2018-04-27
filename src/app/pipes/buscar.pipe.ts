import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})

@Injectable()
export class BuscarPipe implements PipeTransform{
  transform(arreglo: any, term: any):any{
    if(term === undefined || term === ""){
      return arreglo
    }
    else{
      return arreglo.filter(function(item){
        return item.titulo.toLowerCase().includes(term.toLowerCase());
      })
    }
  }
};
