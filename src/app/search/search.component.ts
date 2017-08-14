import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'search',
    templateUrl: 'search.template.html'
})

export class SearchComponent implements OnInit {

    ngOnInit() {

    }

    public afiche = {
        small: 'assets/img/bahia/tp1.jpg',
        medium: 'assets/img/bahia/up1.jpg',
        big: 'assets/img/bahia/p1.jpg',
        description: 'Juicios de Bahia Blanca'
    };

    public arr1 = [
        {
            small: 'assets/img/bahia/tp1.jpg',
            medium: 'assets/img/bahia/up1.jpg',
            big: 'assets/img/bahia/p1.jpg',
            description: 'Juicios de Bahia Blanca'
        },
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

}
