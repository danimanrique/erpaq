import { Component, DoCheck } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize} from 'ngx-gallery';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Afiche } from '../afiche';
import { AppService } from '../app.service';


@Component({
   selector: 'seccion4',
   templateUrl: 's4.template.html',
   providers: [AppService]

})

export class Seccion4Component implements DoCheck{
    public parametro: String;
    public titulo: String;
    public txtNqn: String;
    public txtBha:String;
    public srcImg: String;
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];
    public arrB: Array<Afiche> = [];
    public arrN: Array<Afiche> = [];

    constructor(
        private _appService:AppService,
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this._appService.getNeuquen().subscribe(
            result =>{
                this.arrN = result.afiches;
            },
            error =>{
                this.arrN = [];
                console.log(<any>error);
            }
        );
        this._appService.getBahia().subscribe(
            result =>{
                this.arrB = result.afiches;
            },
            error =>{
                this.arrB = [];
                console.log(<any>error);
            }
        );
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
    }

    ngDoCheck(): void {
        this._route.params.forEach((params:Params)=>{
            this.parametro = params['juicio'];
        });
        this.cambiarParametros();
    }

    private cambiarParametros(){
        if(this.parametro=='nqn'){
            this.galleryImages = this.arrN;
            this.titulo = 'LOS JUICIOS ANTE EL TRIBUNAL ORAL DE NEUQUEN';
            this.srcImg = 'assets/img/s5/bg1.png';
            this.txtNqn= 'block';
            this.txtBha= 'none';
        }
        else{
            this.galleryImages = this.arrB;
            this.titulo = 'LOS JUICIOS ANTE EL TRIBUNAL ORAL DE BAHIA BLANCA';
            this.srcImg = 'assets/img/s4/bg1.png';
            this.txtBha = 'block';
            this.txtNqn = 'none';
        }
    }


    cambiar(valor:String){
        this.parametro = valor;
    }
}
