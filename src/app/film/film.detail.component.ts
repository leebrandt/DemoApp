import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmService } from './film.service';

@Component({
  selector: 'film-detail',
  templateUrl: './film.detail.component.html'
})
export class FilmDetailComponent implements OnInit{
  film: any;
  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id = +this.route.snapshot.params['id'];
    this.filmService.getFilm(id)
      .subscribe(
        (res) => {
          this.film = res;
        }
      );
  }
}
