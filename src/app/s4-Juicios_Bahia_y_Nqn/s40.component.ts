import { Component, DoCheck } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize} from 'ngx-gallery';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Afiche } from '../afiche';

@Component({
   selector: 'seccion4',
   templateUrl: 's4.template.html',
})

export class Seccion4Component implements DoCheck{
    public parametro: String;
    public titulo: String;
    public txtNqn: String;
    public txtBha:String;
    public srcImg: String;
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];
    public arr1: Array<Afiche> = [
        {
            small: 'assets/img/s4/tp2.jpg',
            medium: 'assets/img/s4/up2.jpg',
            big: 'assets/img/s4/p2.jpg',
            name: 'Dedicatoria Cañón'
        },
        {
            small: 'assets/img/s4/tp3.jpg',
            medium: 'assets/img/s4/up3.jpg',
            big: 'assets/img/s4/p3.jpg',
            name: 'No es lo Mismo ver que Mirar'
        },
        {
            small: 'assets/img/s4/tp4.jpg',
            medium: 'assets/img/s4/up4.jpg',
            big: 'assets/img/s4/p4.jpg',
            name: 'Nueva Provincia'
        },
        {
            small: 'assets/img/s4/tp5.jpg',
            medium: 'assets/img/s4/up5.jpg',
            big: 'assets/img/s4/p5.jpg',
            name: 'Nueva Provincia y Dictadura'
        },
        {
            small: 'assets/img/s4/tp6.jpg',
            medium: 'assets/img/s4/up6.jpg',
            big: 'assets/img/s4/p6.jpg',
            name: 'Nueva Provincia y Dictadura'
        },
        {
            small: 'assets/img/s4/tp7.jpg',
            medium: 'assets/img/s4/up7.jpg',
            big: 'assets/img/s4/p7.jpg',
            name: 'Los restos de Bombara'
        },
        {
            small: 'assets/img/s4/tp8.jpg',
            medium: 'assets/img/s4/up8.jpg',
            big: 'assets/img/s4/p8.jpg',
            name: 'Desapariciones como prueba Homicidios'
        },
        {
            small: 'assets/img/s4/tp9.jpg',
            medium: 'assets/img/s4/up9.jpg',
            big: 'assets/img/s4/p9jpg',
            name: 'Dicen los Fiscales'
        }
    ];
    public arr2: Array<Afiche> = [
        {
            small: 'assets/img/s5/tp2.jpg',
            medium: 'assets/img/s5/up2.jpg',
            big: 'assets/img/s5/p2.jpg',
            name: 'De victimas a testigos'
        },
        {
            small: 'assets/img/s5/tp3.jpg',
            medium: 'assets/img/s5/up3.jpg',
            big: 'assets/img/s5/p3.jpg',
            name: 'Carta de Labrune'
        },
        {
            small: 'assets/img/s5/tp4.jpg',
            medium: 'assets/img/s5/up4.jpg',
            big: 'assets/img/s5/p4.jpg',
            name: 'Balbo Secretario General de Aten'
        },
        {
            small: 'assets/img/s5/tp7.jpg',
            medium: 'assets/img/s5/up7.jpg',
            big: 'assets/img/s5/p7.jpg',
            name: 'Carta de Labrune'
        },
        {
            small: 'assets/img/s5/tp15.jpg',
            medium: 'assets/img/s5/up15.jpg',
            big: 'assets/img/s5/p15.jpg',
            name: 'Carta de Labrune'
        },
        {
            small: 'assets/img/s5/tp27.jpg',
            medium: 'assets/img/s5/up27.jpg',
            big: 'assets/img/s5/p27.jpg',
            name: 'Carta de Labrune'
        },
        {
            small: 'assets/img/s5/tp28.jpg',
            medium: 'assets/img/s5/up28.jpg',
            big: 'assets/img/s5/p28.jpg',
            name: 'Carta de Labrune'
        },
        {
            small: 'assets/img/s5/tp29.jpg',
            medium: 'assets/img/s5/up29.jpg',
            big: 'assets/img/s5/p29.jpg',
            name: 'Carta de Labrune'
        },
        {
            small: 'assets/img/s5/tp13.jpg',
            medium: 'assets/img/s5/up13.jpg',
            big: 'assets/img/s5/p13.jpg',
            name: 'Carta de Labrune'
        },
        {
            small: 'assets/img/s5/tp14.jpg',
            medium: 'assets/img/s5/up14.jpg',
            big: 'assets/img/s5/p14.jpg',
            name: 'Carta de Labrune'
        },
        {
            small: 'assets/img/s5/tp26.jpg',
            medium: 'assets/img/s5/up26.jpg',
            big: 'assets/img/s5/p26.jpg',
            name: 'Carta de Labrune'
        },
    ];

    ngDoCheck(): void {
        this._route.params.forEach((params:Params)=>{
            this.parametro = params['juicio'];
        });
        this.galleryOptions = [
            {
                width: '100%',
                height: '800px',
                imagePercent: 85,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailsColumns: 6,
                imageAnimation: NgxGalleryAnimation.Slide,
                thumbnailsPercent: 15,
                previewDescription: true,
                previewCloseOnClick: true,
                previewKeyboardNavigation: true
            },
            // max-width 1366
            {
                breakpoint: 1366,
                height: '600px',
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailsColumns: 6,
                imageAnimation: NgxGalleryAnimation.Slide,
                thumbnailsPercent: 10,
                previewDescription: true,
                thumbnailsMargin:2
            },
            // max-width 600
            {
                breakpoint:600,
                image: false,
                height:'150px',
                thumbnailsColumns: 4,
                thumbnailsPercent: 20,
                previewDescription: true,
            }
        ];
        if(this.parametro=='nqn'){
            this.galleryImages = this.arr2;
            this.titulo = 'LOS JUICIOS ANTE EL TRIBUNAL ORAL DE NEUQUEN';
            this.srcImg = 'assets/img/s5/bg1.png';
            this.txtNqn= 'block';
            this.txtBha= 'none';
        }
        else{
            this.galleryImages = this.arr1;
            this.titulo = 'LOS JUICIOS ANTE EL TRIBUNAL ORAL DE BAHIA BLANCA';
            this.srcImg = 'assets/img/s4/bg1.png';
            this.txtBha = 'block';
            this.txtNqn = 'none';
        }
    }

    constructor(
        private _route:ActivatedRoute,
        private _router:Router){
    }

    cambiar(valor:String){
        this.parametro = valor;
    }
}
