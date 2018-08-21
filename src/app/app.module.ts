import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniversidadComponent } from './universidad/universidad.component';
import { MapsComponent } from './maps/maps.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    UniversidadComponent,
    HomeComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDh3fXOPj3gU9H0yJuWB7pbZYjF3wzw-v0'
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
