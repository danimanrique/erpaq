import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { Afiche } from '../afiche';
import { AppService } from '../app.service'
declare var $: any;

@Component({
   selector: 'seccion1',
   templateUrl: 's1.template.html',
   providers: [AppService]
})

export class Seccion1Component implements OnInit{
    public lista_estado: Array<Afiche>;
    public heightVisor: number;
    public alturaFlechas:number;
    public srcImg: String;
    public descripcion: String;
    public arrImg: Array<Afiche>;
    public i: number;

    constructor(
            private _appService: AppService
    ){}

    ngOnInit(): void{
        this._appService.getEstado().subscribe(
            result =>{
                this.arrImg = result.afiches;
                this.heightVisor = 600;
                this.alturaFlechas = this.heightVisor/2;
                $('.zoom-image').zoomImage({
                    touch: false
                });
                this.i = 0;
                this.srcImg = this.arrImg[this.i].big;
                this.descripcion = this.arrImg[this.i].name;
            },
            error =>{
                this.arrImg = [];
                console.log(<any>error);
            }
        );

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
