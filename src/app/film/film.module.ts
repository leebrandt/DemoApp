import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FilmComponent } from './film.component';
import { FilmService } from './film.service';

@NgModule({
  declarations:[
    FilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    FilmComponent
  ],
  providers:[
    FilmService
  ]
})
export class FilmModule{}
