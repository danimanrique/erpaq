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
            private _compaService: AppService
    ){}

    ngOnInit(): void{
        this._compaService.getEstado().subscribe(
            result =>{
                this.arrImg = result.afiches;

                console.log(result.afiches);
            },
            error =>{
                console.log(<any>error);
            }
        );
        this.heightVisor = 640;
        this.alturaFlechas = this.heightVisor/2;
        $('.zoom-image').zoomImage({
            touch: false
        });
        this.arrImg = [
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/02.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/03.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/04a.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/04b.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/05.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/06.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/07.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/08a.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/08b.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/09.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/10.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/11.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/12.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/13.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/14.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/15.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/16.jpg',
                name:''
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s1/17.jpg',
                name:''
            }
        ];
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
