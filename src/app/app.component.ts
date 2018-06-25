import { Component } from '@angular/core';
import { PiloteService } from './services/pilote.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  

  constructor(private piloteService: PiloteService) { 
  
  }




}
