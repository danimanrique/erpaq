import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AppService } from './app.service';
declare var jQuery:any;
declare var $:any;

@Component({
   selector: 'erpaq',
   templateUrl: 'app.template.html',
   styleUrls: ['./app.styles.css'],
   providers: [AppService]
})

export class AppComponent  {
    public error = false;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _service: AppService
    ){
        console.log("verifica conexion")
        this._service.getHome().subscribe(
          response => {},
          err => {
            this.error = true;
            this._router.navigate(['/server-error'])
          }
        );
    }

    public desplegar(){
        $('.classse').slideToggle();
    }

}
