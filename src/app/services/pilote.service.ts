import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PiloteService {
  baseUrl: string = "http://localhost:3000"

  pilotes =
  [
    {
      id: 1,
      name: 'Test',
      age: '28',
      categories: 'Test',
    },
    {
      id: 2,
      name: 'Test',
      age: '29',
      categories: 'Test',
    },
    { 
      id: 3,
      name: 'Test',
      age: '43',
      categories: 'Test',
    },
  ]

  constructor(private httpClient: HttpClient) { }

  public getPilotesFromServer() {
    return this.httpClient
      .get<any[]>('http://localhost:3000/pilotes');
  }
}