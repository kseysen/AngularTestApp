import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    interface UserResponse {
      login: string;
      bio: string;
      company: string;
    }

  

    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    },
      err => {
        console.log("Error occured.")
      }
    );
  }

  title = 'Cypress POC';
  result = '';
  email = '';
  connected = false;

  myClickFunction(event) { 
    //alert("Button is clicked");
    this.result = 'test click';
    console.log(event);
 }
 myClickConnexionFunction(event) { 
  //alert("Button is clicked");
  this.connected = true;
  console.log(event);
}

   onKey(event: any) {
    this.email = event.target.value;
   }

}
