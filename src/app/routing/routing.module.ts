import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes
import { HomeComponent } from '../home/home.component';
import { DelitosComponent } from '../delitos/delitos.component';
import { TiposDeDelitoComponent } from '../tipos-de-delito/tipos-de-delito.component';
import { MapsComponent } from '../maps/maps.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'delitos', component: DelitosComponent },  
  { path: 'tiposdedelitos', component: TiposDeDelitoComponent },
  { path: 'mapas', component: MapsComponent },  
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
