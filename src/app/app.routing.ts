import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes de la app
import { HomeComponent } from './home/home.component';
import { Seccion1Component } from './s1-El_estado_terrorista/s1.component';
import { Seccion2Component } from './s2-Nuestros_companieros/s2.component';
import { Seccion3Component } from './s3-Todos_contra_la_impunidad/s3.component';
import { Seccion4Component } from './s4-Juicios_Bahia/s4.component';
import { Seccion5Component } from './s5-Juicios_Nqn/s5.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ErrorComponent } from './error/error.component';

//Definimos el arreglo qye relaciona el path con el componente que llama

const appRoutes: Routes = [
   {path: '',component: HomeComponent},
   {path: 'home',component: HomeComponent},
   {path: 'estadoterrorista',component: Seccion1Component},
   {path: 'historias',component: Seccion2Component},
   {path: 'impunidad',component: Seccion3Component},
   {path: 'juiciobahia',component: Seccion4Component},
   {path: 'juicionqn',component: Seccion5Component},
   {path: 'search',component: SearchComponent},
   {path: 'result/:keyWords/:sections',component: ResultComponent},
   {path: '**',component: ErrorComponent}
   //En realidad la ultima regla (defalut) deberia llamar a una pagina de error404
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
