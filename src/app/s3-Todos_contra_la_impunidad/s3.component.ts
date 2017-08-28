import { Component } from '@angular/core';
import { Afiche } from '../afiche';
declare var $: any;

@Component({
    selector: 'seccion3',
    templateUrl: 's3.template.html',
})

export class Seccion3Component {
    public heightVisor: number;
    public alturaFlechas:number;
    public srcImg: String;
    public descripcion: String;
    public arrImg: Array<Afiche>;
    public i: number;

    ngOnInit(): void {
        this.heightVisor = 640;
        this.alturaFlechas = this.heightVisor/2;
        $('.zoom-image').zoomImage({
            touch: false
        });
        //Inicializar el arreglo de imagenes
        this.arrImg = [
            {
                small: '',
                medium: '',
                big: 'assets/img/s3/img1.jpg',
                name: 'Justicia y Memoria han sido pisoteadas'
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s3/img2.jpg',
                name: 'Semana Santa de 1987'
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s3/img3.jpg',
                name: 'Poder Militar - Poder Genocida'
            },
            {
                small: '',
                medium: '',
                big: 'assets/img/s3/img4.jpg',
                name: 'Tira y Afloja: 30 años de Impunidad'
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
