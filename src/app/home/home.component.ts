import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  maTaille: number= 15;
  binding: string='bindingTest';
  person:string= 'John Doe';

  age:number= 30;

  address:any= {street:'rue du Paradis', city:'75010 Paris'};

  alignement:string = 'right';

  modifierPersonne() {

    this.person = 'Another man';
  }

  constructor() { }

  ngOnInit() {
  }

}
