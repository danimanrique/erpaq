import { Component } from '@angular/core';
import { Afiche } from '../afiche';
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'seccion3',
    templateUrl: 's3.template.html',
})

export class Seccion3Component {
    public heightVisor: number;
    public alturaFlechas:number;
    public srcImg: String;
    public srcSmall: String;
    public descripcion: String;
    public arrImg: Array<Afiche>;
    public saveChange: any;
    public i: number;

    ngOnInit(): void {
        this.heightVisor = 600;
        this.alturaFlechas = this.heightVisor/2;
        $('.zoom-image').zoomImage({
            touch: false
        });
        //Inicializar el arreglo de imagenes
        this.arrImg = [
            {
                small: 'assets/img/s3/img1.jpg',
                medium: '',
                description: '',
                big: 'assets/img/s3/img1.jpg',
                name: 'Dedicatoria Cañón'
            },
            {
                small: 'assets/img/s3/img2.jpg',
                big: 'assets/img/s3/img2.jpg',
                name: 'No es lo Mismo ver que Mirar',
                medium: '',
                description: '',
            },
            {
                small: '',
                big: 'assets/img/s3/foot.png',
                name: 'Nueva Provincia',
                medium: '',
                description: '',
            }
        ];
        this.i = 0;
        this.srcImg = this.arrImg[this.i].big;
        this.srcSmall = this.arrImg[this.i].small;
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
