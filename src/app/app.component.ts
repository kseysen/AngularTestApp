import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cypress POC';
  result = '';
  email = '';

  myClickFunction(event) { 
    //alert("Button is clicked");
    this.result = 'test click';
    console.log(event);
 }

   onKey(event: any) {
    this.email = event.target.value;
   }
}
