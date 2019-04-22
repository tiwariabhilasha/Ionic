import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Targets } from './targets';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',

  })
};

@Injectable()
export class TargetsService {

  

  constructor(private http: HttpClient) { }

  private _url: string ;

  

  public getTargetList(): Observable<Targets[]>{
    this._url = '../assets/data/mock-targets.json';
    return this.http.get<Targets[]>(this._url);
  }
}
