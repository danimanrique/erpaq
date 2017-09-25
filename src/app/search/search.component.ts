import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'search',
    templateUrl: 'search.template.html'
})

export class SearchComponent implements OnInit {
    public all:boolean;
    public keyWords:Array<String>;
    public sections:Array<boolean>;
    public claveAGuardar:String;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit() {
        this.all = false;
        this.keyWords = [];
        this.sections = [false,false,false,false,false];
    }

    public activarBoton(valor:number): void {
        switch(valor){
            case(1):
            this.sections[0] = !this.sections[0];
            break;
            case(2):
            this.sections[1] = !this.sections[1];
            break;
            case(3):
            this.sections[2] = !this.sections[2];
            break;
            case(4):
            this.sections[3] = !this.sections[3];
            break;
            case(5):
            this.sections[4] = !this.sections[4];
            break;
            case(0):
            this.sections[0] = true;
            this.sections[1] = true;
            this.sections[2] = true;
            this.sections[3] = true;
            this.sections[4] = true;
            break;
            default:
            console.log('Error interno en switch')
            break;
        }


    }

    removeKeyWord(index:number){
        this.keyWords.splice(index, 1);
    }
    addKeyWord(){
        if(this.claveAGuardar != null && this.claveAGuardar != ""){
            this.keyWords.push((this.claveAGuardar).toLowerCase());
            this.claveAGuardar = null;
        }
    }

    redirigir(){
        let keys = this.keyWords.toString();
        let secciones = this.sections.toString();
        console.log("probando",keys,secciones);
        this._router.navigate(['/result', keys, secciones],{ skipLocationChange: true});
    }

    busquedaInvalida(){
        var re: boolean = true;
        if(this.sections[0] || this.sections[1] || this.sections[2] || this.sections[3] || this.sections[4]){
            if(this.keyWords.length > 0){
                re = false;
            }
        }
        return re;
    }
}
