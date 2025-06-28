import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatejemploComponent} from './matejemplo/matejemplo.component';

import {MainListasolicitudesComponent} from './main-listasolicitudes/main-listasolicitudes.component';
import {Not403Component} from './not403/not403.component';
import {FormsolicitarComponent} from './main-listasolicitudes/formsolicitar/formsolicitar.component';



export const pagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, /*canActivate: [certGuard]*/ },
  { path: 'mattable', component: MatejemploComponent },
  { path: 'formsoli', component: FormsolicitarComponent },
  { path: 'missolicitudes', component: MainListasolicitudesComponent },




{path:'not-403', component: Not403Component}
/*{ path: 'categoria', component: MainCategoriaComponent , },
//{ path: 'categoria', component: MainCategoriaComponent },
{
  path: 'marca',
  component: MainMarcaComponent,
  children: [
    { path: 'new', component: FormMarcaComponent },
    { path: 'edit/:id', component: FormMarcaComponent },
  ],
},*/

];
