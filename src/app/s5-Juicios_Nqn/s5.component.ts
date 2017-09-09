import { Component, OnChanges, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize} from 'ngx-gallery';
import { Afiche } from '../afiche';
import { AppService } from '../app.service';


@Component({
   selector: 'seccion5',
   templateUrl: 's5.template.html',
   providers: [AppService]

})

export class Seccion5Component implements OnInit{
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];

    constructor(
        private _appService:AppService
    ){}

    ngOnInit():void{
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
        this._appService.getNeuquen().subscribe(
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
