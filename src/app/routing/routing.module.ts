import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes
import { HomeComponent } from '../home/home.component';
import { UniversidadComponent } from '../universidad/universidad.component';
import { MapsComponent } from '../maps/maps.component';
import { DelitosComponent } from '../delitos/delitos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'universidades', component: UniversidadComponent },
  { path: 'mapas', component: MapsComponent },
  { path: 'delitos', component: DelitosComponent },  
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
