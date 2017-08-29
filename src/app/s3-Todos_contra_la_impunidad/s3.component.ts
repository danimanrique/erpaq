import { Component, OnInit } from '@angular/core';
import { Afiche } from '../afiche';
declare var $: any;
import { AppService } from '../app.service';

@Component({
    selector: 'seccion3',
    templateUrl: 's3.template.html',
    providers: [AppService]
})

export class Seccion3Component implements OnInit{
    public heightVisor: number;
    public alturaFlechas:number;
    public srcImg: String;
    public descripcion: String;
    public arrImg: Array<Afiche>;
    public i: number;

    constructor(
        private _appService: AppService
    ){}

    ngOnInit(): void {
        this.heightVisor = 640;
        this.alturaFlechas = this.heightVisor/2;
        $('.zoom-image').zoomImage({
            touch: false
        });
        this._appService.getImpunidad().subscribe(
            result =>{
                this.arrImg = result.afiches;
            },
            error =>{
                this.arrImg = [];
                console.log(<any>error);
            }
        );
        this.i = 0;
        this.srcImg = this.arrImg[this.i].big;
        this.descripcion = this.arrImg[this.i].name;
    }

    public backImg() {
        if (this.i > 0) {
            this.i--;
            this.srcImg = this.arrImg[this.i].big;
            this.descripcion = this.arrImg[this.i].name;
        }
    }
    public nextImg() {
        if (this.i < this.arrImg.length - 1) {
            this.i++;
            this.srcImg = this.arrImg[this.i].big;
            this.descripcion = this.arrImg[this.i].name;
        }
    }
}
