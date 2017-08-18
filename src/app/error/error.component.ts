import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
    selector: 'error',
    templateUrl: 'error.template.html'
})

export class ErrorComponent{

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}


    redirigir(){
        this._router.navigate(['/']);
    }
}
