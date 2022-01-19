import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import http 
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient ) { }

    fetchMeteoDate(): Observable<object>{
      return this.http.get('https://prevision-meteo.ch/services/json/lyon');
    }

}
