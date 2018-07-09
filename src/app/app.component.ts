import { Component } from '@angular/core';
import {LoggerService} from "./services/logger.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  

  constructor(private logger:LoggerService){
    this.logger.info('Dans le constructeur ...');
}





}
