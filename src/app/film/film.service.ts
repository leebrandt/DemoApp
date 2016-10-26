import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {
  constructor(private http: Http) { }

  getFilms(): Observable<any>{
    return this.http.get('http://swapi.co/api/films')
      .map(res => res.json().results)
      .map(res => {
        return res.map((item) => {
          item.id = item.url.slice(26, 27);
          return item;
        })
      });
  }

  getFilm(id:number): Observable<any>{
    return this.http.get(`http://swapi.co/api/films/${id}`)
      .map(res => res.json());
  }

}
