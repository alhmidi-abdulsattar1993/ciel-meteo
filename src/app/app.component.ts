import { Component } from '@angular/core';


// import service 
import { MeteoService } from './service/meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meteo';
}
