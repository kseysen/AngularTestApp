import { Component, OnInit } from '@angular/core';
import {PiloteService} from '../services/pilote.service';
import {Pilote} from '../services/pilote'

@Component({
  selector: 'app-pilote',
  templateUrl: './pilote.component.html',
  styleUrls: ['./pilote.component.css']
})
export class PiloteComponent implements OnInit {

  pilotes: Pilote[];
  constructor(private piloteService : PiloteService) { }

  ngOnInit() {
    this
    .piloteService
    .getPilotesFromServer()
    .subscribe((data: Pilote[]) => {
      this.pilotes = data;
    });
  }

}
