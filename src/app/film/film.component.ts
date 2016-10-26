import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  selectedFilm: any;
  films = [{
    title: 'A New Hope',
    release_year: 1977,
    winner: 'Alliance'
  },{
    title: 'The Empire Strikes Back',
    release_year: 1980,
    winner: 'Empire'
  },{
    title: 'Return of the Jedi',
    release_year: 1983,
    winner: 'Alliance'
  }];

  constructor() { }

  ngOnInit() {
  }

  showDetails(film){
    this.selectedFilm = film;
  }

}
