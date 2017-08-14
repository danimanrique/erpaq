import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize} from 'ngx-gallery';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
   selector: 'seccion4',
   templateUrl: 's4.template.html',
})

export class Seccion4Component {
    public parametro: String;
    public titulo: String;
    public txtNqn: String;
    public txtBha:String;
    public srcImg: String;
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];
    public arr1 = [
        {
            small: 'assets/img/bahia/tp2.jpg',
            medium: 'assets/img/bahia/up2.jpg',
            big: 'assets/img/bahia/p2.jpg',
            description: 'Dedicatoria Cañón'
        },
        {
            small: 'assets/img/bahia/tp3.jpg',
            medium: 'assets/img/bahia/up3.jpg',
            big: 'assets/img/bahia/p3.jpg',
            description: 'No es lo Mismo ver que Mirar'
        },
        {
            small: 'assets/img/bahia/tp4.jpg',
            medium: 'assets/img/bahia/up4.jpg',
            big: 'assets/img/bahia/p4.jpg',
            description: 'Nueva Provincia'
        },
        {
            small: 'assets/img/bahia/tp5.jpg',
            medium: 'assets/img/bahia/up5.jpg',
            big: 'assets/img/bahia/p5.jpg',
            description: 'Nueva Provincia y Dictadura'
        },
        {
            small: 'assets/img/bahia/tp6.jpg',
            medium: 'assets/img/bahia/up6.jpg',
            big: 'assets/img/bahia/p6.jpg',
            description: 'Nueva Provincia y Dictadura'
        },
        {
            small: 'assets/img/bahia/tp7.jpg',
            medium: 'assets/img/bahia/up7.jpg',
            big: 'assets/img/bahia/p7.jpg',
            description: 'Los restos de Bombara'
        },
        {
            small: 'assets/img/bahia/tp8.jpg',
            medium: 'assets/img/bahia/up8.jpg',
            big: 'assets/img/bahia/p8.jpg',
            description: 'Desapariciones como prueba Homicidios'
        },
        {
            small: 'assets/img/bahia/tp9.jpg',
            medium: 'assets/img/bahia/up9.jpg',
            big: 'assets/img/bahia/p9jpg',
            description: 'Dicen los Fiscales'
        }
    ];
    public arr2 = [
        {
            small: 'assets/img/nqn/tp2.jpg',
            medium: 'assets/img/nqn/up2.jpg',
            big: 'assets/img/nqn/p2.jpg',
            description: 'De victimas a testigos'
        },
        {
            small: 'assets/img/nqn/tp3.jpg',
            medium: 'assets/img/nqn/up3.jpg',
            big: 'assets/img/nqn/p3.jpg',
            description: 'Carta de Labrune'
        },
        {
            small: 'assets/img/nqn/tp4.jpg',
            medium: 'assets/img/nqn/up4.jpg',
            big: 'assets/img/nqn/p4.jpg',
            description: 'Balbo Secretario General de Aten'
        },
        {
            small: 'assets/img/nqn/tp7.jpg',
            medium: 'assets/img/nqn/up7.jpg',
            big: 'assets/img/nqn/p7.jpg',
            description: 'Carta de Labrune'
        },
        {
            small: 'assets/img/nqn/tp15.jpg',
            medium: 'assets/img/nqn/up15.jpg',
            big: 'assets/img/nqn/p15.jpg',
            description: 'Carta de Labrune'
        },
        {
            small: 'assets/img/nqn/tp27.jpg',
            medium: 'assets/img/nqn/up27.jpg',
            big: 'assets/img/nqn/p27.jpg',
            description: 'Carta de Labrune'
        },
        {
            small: 'assets/img/nqn/tp28.jpg',
            medium: 'assets/img/nqn/up28.jpg',
            big: 'assets/img/nqn/p28.jpg',
            description: 'Carta de Labrune'
        },
        {
            small: 'assets/img/nqn/tp29.jpg',
            medium: 'assets/img/nqn/up29.jpg',
            big: 'assets/img/nqn/p29.jpg',
            description: 'Carta de Labrune'
        },
        {
            small: 'assets/img/nqn/tp13.jpg',
            medium: 'assets/img/nqn/up13.jpg',
            big: 'assets/img/nqn/p13.jpg',
            description: 'Carta de Labrune'
        },
        {
            small: 'assets/img/nqn/tp14.jpg',
            medium: 'assets/img/nqn/up14.jpg',
            big: 'assets/img/nqn/p14.jpg',
            description: 'Carta de Labrune'
        },
        {
            small: 'assets/img/nqn/tp26.jpg',
            medium: 'assets/img/nqn/up26.jpg',
            big: 'assets/img/nqn/p26.jpg',
            description: 'Carta de Labrune'
        },
    ];

    ngOnInit(): void {
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
                previewDescription: true
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
            this.srcImg = 'assets/img/nqn/bg1.png';
            this.txtNqn= 'block';
            this.txtBha= 'none';
        }
        else{
            this.galleryImages = this.arr1;
            this.titulo = 'LOS JUICIOS ANTE EL TRIBUNAL ORAL DE BAHIA BLANCA';
            this.srcImg = 'assets/img/bahia/bg1.png';
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
