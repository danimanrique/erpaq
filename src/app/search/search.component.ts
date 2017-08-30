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

    ngOnInit() {
        this.s1Press = false;
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
            this.s1Press = !this.s1Press;
            this.s2Press = !this.s2Press;
            this.s3Press = !this.s3Press;
            this.s4Press = !this.s4Press;
            this.s5Press = !this.s5Press;
            break;
            default:
            console.log('Error interno en switch')
            break;
        }
    }

}
