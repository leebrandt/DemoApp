import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FilmComponent } from './film.component';
import { FilmDetailComponent } from './film.detail.component';
import { FilmService } from './film.service';
import { FilmRoutes } from './film.routes';

@NgModule({
  declarations:[
    FilmComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FilmRoutes
  ],
  providers:[
    FilmService
  ]
})
export class FilmModule{}
