import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteoComponent/meteo/meteo.component';

// import http 
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import service 

import { MeteoService } from './service/meteo.service';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [MeteoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
