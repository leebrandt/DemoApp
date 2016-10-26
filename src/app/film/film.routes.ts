import { Routes, RouterModule } from '@angular/router';

import { FilmComponent } from './film.component';
import { FilmDetailComponent } from './film.detail.component';

const filmRoutes: Routes = [
  {path: 'films', component: FilmComponent},
  {path: 'films/:id', component: FilmDetailComponent }
]

export const FilmRoutes = RouterModule.forChild(filmRoutes);
