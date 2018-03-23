import { Component, OnInit } from '@angular/core';
import { Afiche } from '../afiche';
declare var $: any;
import { AppService } from '../app.service';


@Component({
   selector: 'seccion4',
   templateUrl: 's4.template.html',
   providers: [AppService]

})

export class Seccion4Component implements OnInit{
  public heightVisor: number;
  public alturaFlechas:number;
  public srcImg: String;
  public descripcion: String;
  public arrImg: Array<Afiche>;
  public i: number;
  constructor(
      private _appService:AppService,
  ){}

  ngOnInit():void{
    this.heightVisor = 640;
    this.alturaFlechas = this.heightVisor/2;
    $('.zoom-image').zoomImage({
        touch: false
    });
    this._appService.getBahia().subscribe(
      result =>{
          this.arrImg = result.afiches;
          this.i = 0;
          this.srcImg = this.arrImg[this.i].big;
          this.descripcion = this.arrImg[this.i].name;
      },
      error =>{
        this.arrImg = [];
        console.log(<any>error);
      }
    );
  }

  public backImg() {
    if (this.i > 0) {
      this.i--;
      this.srcImg = this.arrImg[this.i].big;
      this.descripcion = this.arrImg[this.i].name;
    }
  }
  public nextImg() {
    if (this.i < this.arrImg.length - 1) {
      this.i++;
      this.srcImg = this.arrImg[this.i].big;
      this.descripcion = this.arrImg[this.i].name;
    }
  }
}
