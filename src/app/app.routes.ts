import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'films', component: FilmComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
