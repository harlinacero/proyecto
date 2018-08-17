import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes
import { HomeComponent } from '../home/home.component';
import { UniversidadComponent } from '../universidad/universidad.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'universidades', component: UniversidadComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
