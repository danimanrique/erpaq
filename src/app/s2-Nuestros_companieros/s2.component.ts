import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { Afiche } from '../afiche';
import { AppService } from '../app.service';

@Component({
   selector: 'seccion2',
   templateUrl: 's2.template.html',
   providers: [AppService]
})

export class Seccion2Component implements OnInit{
    public lista_compas: Array<Afiche>;
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];

    constructor(
            private _appService: AppService
    ){}

    ngOnInit(): void{

        this.galleryOptions = [
            {
                image: false,
                height: "300px",
                width: "80%",
                thumbnailsColumns: 6,
                thumbnailsRows: 2,
                thumbnailMargin: 2,
                previewCloseOnClick: true,
                previewKeyboardNavigation: true,
                imageAnimation: NgxGalleryAnimation.Slide,
                thumbnailSize:  NgxGalleryImageSize.Contain
            },
            //1349
            {
                breakpoint: 1349,
                height: '300px',
                thumbnailsColumns: 5
            },
            // 1072
            {
                breakpoint: 1072,
                height: '300px',
                thumbnailsColumns: 4
            },
            // 700
            {
                breakpoint: 700,
                height:'100px',
                thumbnailsColumns: 4,
                thumbnailsRows: 1
            }
        ];

        this._appService.getCompas().subscribe(
            result =>{
                this.galleryImages = result.afiches;

            },
            error =>{
                this.galleryImages = [];
                console.log(<any>error);
            }
        );
    }
}
