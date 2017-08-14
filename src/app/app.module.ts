import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';

//Componentes del proyecto
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { Seccion1Component } from './s1-El_estado_terrorista/s1.component';
import { Seccion2Component } from './s2-Nuestros_companieros/s2.component';
import { Seccion3Component } from './s3-Todos_contra_la_impunidad/s3.component';
import { Seccion4Component } from './s4-Juicios_Bahia_y_Nqn/s4.component';
import { SearchComponent } from './search/search.component';

//Componentes tercerizados
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      Seccion1Component,
      Seccion2Component,
      Seccion3Component,
      Seccion4Component,
      SearchComponent
   ],
   imports: [
      BrowserModule,
      routing,
      NgxGalleryModule,
      HttpModule
   ],
   providers: [appRoutingProviders],
   bootstrap:    [ AppComponent ]
})

export class AppModule { }
