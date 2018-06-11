import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
