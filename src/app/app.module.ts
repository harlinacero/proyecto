import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniversidadComponent } from './universidad/universidad.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversidadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
