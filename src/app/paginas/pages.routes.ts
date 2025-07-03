import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatejemploComponent } from './matejemplo/matejemplo.component';
import { Not403Component } from './not403/not403.component';
import { FormsolicitarComponent } from './main-listasolicitudes/formsolicitar/formsolicitar.component';
import { SolicitudesComponent } from './main-listasolicitudes/solicitudes.component';
import { MainSolicitudesComponent } from './main-solicitudes/main-solicitudes.component';
import { DetalleSolicitudComponent } from './main-solicitudes/detalle-solicitud/detalle-solicitud.component';

export const pagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mattable', component: MatejemploComponent },
  { path: 'formsoli', component: FormsolicitarComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'peticiones', component: MainSolicitudesComponent },
  { path: 'detalle-solicitud/:id', component: DetalleSolicitudComponent },

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
