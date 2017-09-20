import { Component, OnInit } from '@angular/core';
import { Afiche } from '../afiche';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'result',
    templateUrl: 'result.template.html',
    providers: [AppService]
})

export class ResultComponent implements OnInit {
    public lista_resultado: Array<Afiche>;
    public valor_big: String;
    public valor_name: String;
    public arreglo: Array<String>;
    public secciones: Array<boolean>;
    constructor(
        private _appService: AppService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(): void{
        this._route.params.subscribe(params => {
            if(params['arreglo']!=null && params['secciones']){
                this.arreglo = params['keyWords'];
                this.secciones = params['sections'];
                console.log("recibí", this.arreglo, this.secciones)
            }
         });
        // this._appService.getAfiches().subscribe(
        this._appService.getBusqueda(this.arreglo).subscribe(
            result =>{
                this.lista_resultado = result.afiches;
            },
            error =>{
                this.lista_resultado = [];
                console.log(<any>error);
            }
        );
    }

    redirigir(){
        this._router.navigate(['/search']);
    }

    abrir(afiche: Afiche){
        this.valor_big = afiche.big;
        this.valor_name = afiche.name;
        console.log(this.valor_name,this.valor_big);
    }
}
