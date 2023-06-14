import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MejoresValoradosComponent } from './pages/mejores-valorados/mejores-valorados.component';
import { PaginaConsultaComponent } from './pages/pagina-consulta/pagina-consulta.component';
import { DetalleJuegoComponent } from './pages/detalle-juego/detalle-juego.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mejores-valorados',
    component: MejoresValoradosComponent,
  },
  {
    path: 'pagina-consulta',
    component: PaginaConsultaComponent,
  },
  {
    path: 'detalle-juego',
    component: DetalleJuegoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
