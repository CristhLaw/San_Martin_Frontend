import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatejemploComponent} from './matejemplo/matejemplo.component';
import {MainSolicitarrepoComponent} from './main-solicitarrepo/main-solicitarrepo.component';
import {MainBusComponent} from './main-bus/main-bus.component';



export const pagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, /*canActivate: [certGuard]*/ },
  { path: 'mattable', component: MatejemploComponent },
  { path: 'soli', component: MainSolicitarrepoComponent },
  { path: 'bus', component: MainBusComponent },

];
