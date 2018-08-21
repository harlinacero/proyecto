import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// Componentes
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DelitosComponent } from './delitos/delitos.component';
import { TiposDeDelitoComponent } from './tipos-de-delito/tipos-de-delito.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    HomeComponent,
    DelitosComponent,
    TiposDeDelitoComponent,
    MapsComponent    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb-qTCmtSTiffJFtCVCLU60UIz3eQ_E7E'
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
