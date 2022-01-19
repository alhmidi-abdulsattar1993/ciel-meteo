import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


// import service 
import { MeteoService } from 'src/app/service/meteo.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  constructor(private http : HttpClientModule, private MeteoService : MeteoService ) { }

  meteodat$:  any;
  
  fetchMeteoDate(){
    this.meteodat$ =  this.MeteoService.fetchMeteoDate();
  }

  ngOnInit(): void {
  }

}
