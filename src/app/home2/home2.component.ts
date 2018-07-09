import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})

export class Home2Component implements OnInit {

  isAuth = false;
  
  pilotes: any[];
  secondes: number;
  colors = ['rouge', 'bleu', 'vert'];
  //lastUpdate = new Date();

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000 
    );
  });

  constructor() { 
    
  }

  ngOnInit() {
  }

  
}
