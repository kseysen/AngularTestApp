import { Component, OnInit } from '@angular/core';
import { PILOTS } from './mock-pilotes';

@Component({
  selector: 'app-pilote',
  templateUrl: './pilote.component.html',
  styleUrls: ['./pilote.component.css']
})
export class PiloteComponent implements OnInit {

  pilotes = PILOTS;
  //pilotName: string = 'Seysen';
  //pilotPrenom : string = 'Kevin';
  constructor() { }

  ngOnInit() {
  }

}
