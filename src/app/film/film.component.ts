import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { FilmService } from './film.service';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  selectedFilm: any;
  films: Observable<any[]>;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films = this.filmService.getFilms();
  }
}
