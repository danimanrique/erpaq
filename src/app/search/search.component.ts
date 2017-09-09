import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'search',
    templateUrl: 'search.template.html'
})

export class SearchComponent implements OnInit {
    public s1Press:boolean;
    public s2Press:boolean;
    public s3Press:boolean;
    public s4Press:boolean;
    public s5Press:boolean;
    public all:boolean;
    public keyWords:Array<String>;
    public claveAGuardar:String;

    ngOnInit() {
        this.s1Press = false;
        this.s2Press = false;
        this.s3Press = false;
        this.s4Press = false;
        this.s5Press = false;
        this.all = false;
        this.keyWords = [];
    }

    public activarBoton(valor:number): void {
        switch(valor){
            case(1):
            this.s1Press = !this.s1Press;
            break;
            case(2):
            this.s2Press = !this.s2Press;
            break;
            case(3):
            this.s3Press = !this.s3Press;
            break;
            case(4):
            this.s4Press = !this.s4Press;
            break;
            case(5):
            this.s5Press = !this.s5Press;
            break;
            case(0):
            this.s1Press = true;
            this.s2Press = true;
            this.s3Press = true;
            this.s4Press = true;
            this.s5Press = true;
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
            this.keyWords.push(this.claveAGuardar);
            this.claveAGuardar = null;
        }
    }
}
