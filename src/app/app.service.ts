import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Afiche } from './afiche';
import { GLOBAL } from './global';

@Injectable()
export class AppService{
  public url: String;

  constructor(
    public _http: Http
  ){
    this.url = GLOBAL.url;
  }

  /* Seccion 1 - Estado Terrorista */
  getEstado(){
    return this._http.get(this.url+"/estado").map(res => res.json());
  }
  /* Sección 2 - Galería Desaparecidos */
  getCompas(){
    return this._http.get(this.url+"/compas").map(res => res.json());
  }
  /* Seccion 3 - Contra la Impunidad */
  getImpunidad(){
    return this._http.get(this.url+"/impunidad").map(res => res.json());
  }
  /* Sección 4 - Juicio Bahía Blanca */
  getBahia(){
    return this._http.get(this.url+"/bahia").map(res => res.json());
  }
  /* Sección 4 - Juicio Neuquén */
  getNeuquen(){
    return this._http.get(this.url+"/neuquen").map(res => res.json());
  }
  getAfiches(){
    return this._http.get(this.url+"/afiche").map(res => res.json());
  }
  getBusqueda(arreglo){
    return this._http.get(this.url+"/busqueda/"+arreglo).map(res => res.json());
  }
}
