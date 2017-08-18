import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { Afiche } from '../afiche';
import { AppService } from '../app.service'

@Component({
   selector: 'seccion1',
   templateUrl: 's1.template.html',
   providers: [AppService]
})

export class Seccion1Component implements OnInit{
    public lista_estado: Array<Afiche>;
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];

    constructor(
            private _compaService: AppService
    ){}

    ngOnInit(): void{

        this.galleryOptions = [
            {
                height: "500px",
                width: "80%",
                thumbnailsColumns: 6,
                thumbnailMargin: 3,
                thumbnailsArrowsAutoHide: true,
                thumbnailsMargin: 10,
                previewCloseOnClick: true,
                previewKeyboardNavigation: true,
                previewDescription: true,
                imageAnimation: NgxGalleryAnimation.Slide,
                imageSize: NgxGalleryImageSize.Contain
            },
            // max-width 1366
            {
                breakpoint: 1366,
                height: '600px',
                thumbnailsColumns: 6,
                thumbnailsPercent: 20,
                thumbnailsMargin:2
            },
            // max-width 600
            {
                breakpoint:600,
                image: false,
                height:'150px',
                thumbnailsColumns: 4,
                thumbnailsPercent: 20,
            }
        ];

        this._compaService.getEstado().subscribe(
            result =>{
                this.galleryImages = result.afiches;

                console.log(result.afiches);
            },
            error =>{
                console.log(<any>error);
            }
        );


        this.galleryImages = [
            {
                small: 'assets/img/s1/01.jpg',
                medium: 'assets/img/s1/01.jpg',
                big: 'assets/img/s1/01.jpg'
            },
            {
                small: 'assets/img/s1/02.jpg',
                medium: 'assets/img/s1/02.jpg',
                big: 'assets/img/s1/02.jpg'
            },
            {
                small: 'assets/img/s1/03.jpg',
                medium: 'assets/img/s1/03.jpg',
                big: 'assets/img/s1/03.jpg'
            },
            {
                small: 'assets/img/s1/04a.jpg',
                medium: 'assets/img/s1/04a.jpg',
                big: 'assets/img/s1/04a.jpg'
            },
            {
                small: 'assets/img/s1/04b.jpg',
                medium: 'assets/img/s1/04b.jpg',
                big: 'assets/img/s1/04b.jpg'
            },
            {
                small: 'assets/img/s1/05.jpg',
                medium: 'assets/img/s1/05.jpg',
                big: 'assets/img/s1/05.jpg'
            },
            {
                small: 'assets/img/s1/06.jpg',
                medium: 'assets/img/s1/06.jpg',
                big: 'assets/img/s1/06.jpg'
            },
            {
                small: 'assets/img/s1/07.jpg',
                medium: 'assets/img/s1/07.jpg',
                big: 'assets/img/s1/07.jpg'
            },
            {
                small: 'assets/img/s1/08a.jpg',
                medium: 'assets/img/s1/08a.jpg',
                big: 'assets/img/s1/08a.jpg'
            },
            {
                small: 'assets/img/s1/08b.jpg',
                medium: 'assets/img/s1/08b.jpg',
                big: 'assets/img/s1/08b.jpg'
            },
            {
                small: 'assets/img/s1/09.jpg',
                medium: 'assets/img/s1/09.jpg',
                big: 'assets/img/s1/09.jpg'
            },
            {
                small: 'assets/img/s1/10.jpg',
                medium: 'assets/img/s1/10.jpg',
                big: 'assets/img/s1/10.jpg'
            },
            {
                small: 'assets/img/s1/11.jpg',
                medium: 'assets/img/s1/11.jpg',
                big: 'assets/img/s1/11.jpg'
            },
            {
                small: 'assets/img/s1/12.jpg',
                medium: 'assets/img/s1/12.jpg',
                big: 'assets/img/s1/12.jpg'
            },
            {
                small: 'assets/img/s1/13.jpg',
                medium: 'assets/img/s1/13.jpg',
                big: 'assets/img/s1/13.jpg'
            },
            {
                small: 'assets/img/s1/14.jpg',
                medium: 'assets/img/s1/14.jpg',
                big: 'assets/img/s1/14.jpg'
            },
            {
                small: 'assets/img/s1/15.jpg',
                medium: 'assets/img/s1/15.jpg',
                big: 'assets/img/s1/15.jpg'
            },
            {
                small: 'assets/img/s1/16.jpg',
                medium: 'assets/img/s1/16.jpg',
                big: 'assets/img/s1/16.jpg'
            },
            {
                small: 'assets/img/s1/17.jpg',
                medium: 'assets/img/s1/17.jpg',
                big: 'assets/img/s1/17.jpg'
            }
        ];
    }
}
