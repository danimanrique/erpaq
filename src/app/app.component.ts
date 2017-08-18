import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

declare var jQuery:any;
declare var $:any;

@Component({
   selector: 'erpaq',
   templateUrl: 'app.template.html',
   styleUrls: ['./app.styles.css']
})

export class AppComponent  {

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    public desplegar(){
        $('.classse').slideToggle();
    }

}
