import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {
  constructor(private http: Http) { }

  getFilms(): Observable<any>{
    return this.http.get('http://swapi.co/api/films')
      .map(res => res.json().results);
  }

}