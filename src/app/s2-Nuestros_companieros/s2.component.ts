import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { Afiche } from '../afiche';
import { AppService } from '../app.service'

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
            private _compaService: AppService
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
                thumbnailsArrowsAutoHide: true,
                previewCloseOnClick: true,
                previewKeyboardNavigation: true,
                thumbnailSize:  NgxGalleryImageSize.Contain
            },
            //1349
            {
                breakpoint: 1349,
                height: '300px',
                width: "80%",
                thumbnailsColumns: 5
            },
            // 1072
            {
                breakpoint: 1072,
                height: '300px',
                width: "80%",
                thumbnailsColumns: 4
            },
            // 700
            {
                breakpoint: 700,
                image: false,
                height:'100px',
                width: "80%",
                thumbnailsColumns: 4,
                thumbnailsRows: 1
            }
        ];

        this._compaService.getCompas().subscribe(
            result =>{
                this.galleryImages = result.afiches;

                console.log(result.afiches);
            },
            error =>{
                console.log(<any>error);
            }
        );
    }
}
