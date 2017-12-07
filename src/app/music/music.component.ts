import { Component } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
    selector: 'music',
    templateUrl: 'music.template.html'
})
@Injectable()
export class MusicComponent{

    public tema: String;
    public temas: any[];
    public indice: number;
    public rep;

    constructor(private eventManager: EventManager){
        this.temas = [
            {
                cancion:"../../assets/music/La Memoria.mp3",
                nombre:"La Memoria - León Gieco"
            },
            {
                cancion:"../../assets/music/Los Dinosaurios.mp3",
                nombre:"Los Dinosarios - Charly García"
            },
            {
                cancion:"../../assets/music/Marcha de la Bronca.mp3",
                nombre:"Marcha de la Bronca - Varios Artistas"
            },
            {
                cancion:"../../assets/music/30 Mil Luces.mp3",
                nombre:"30.000 Luces - De la Gran Piñata"
            },
            {
                cancion:"../../assets/music/Desapariciones.mp3",
                nombre:"Desapariciones - Maná"
            },
            {
                cancion:"../../assets/music/Solo le pido a Dios.mp3",
                nombre:"Solo le Pido a Dios - León Gieco"
            },
            {
                cancion:"../../assets/music/Cancion de Alicia en el Pais.mp3",
                nombre:"Cancion de Alicia en el País - Seru Giran"
            },
            {
                cancion:"../../assets/music/Canción inútil.mp3",
                nombre:"Canción Inútil - Ataque 77"
            },
            {
                cancion:"../../assets/music/Nunca Más.mp3",
                nombre:"Nunca Más - Teresa Parodi y León Gieco"
            }
        ];
        this.indice = 0;

    }

    next(){
        if(this.indice == this.temas.length-1)
            this.indice = 0;
        else{
            this.indice++;
        }
    }
    prev(){
        if(this.indice == 0)
            this.indice = 0;
        else
            this.indice--;
    }
}
