import { Component, OnInit, Input } from '@angular/core';

import { FilmService } from './film.service';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  selectedFilm: any;
  films: any[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilms()
    .subscribe(
      (response) => {
        this.films = response;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  showDetails(film){
    this.selectedFilm = film;
  }

}
